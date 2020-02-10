import { Injectable } from '@angular/core';
import { map ,take} from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { CategoryDto } from '../dtos/category.dto';
import { Observable } from 'rxjs';
import { CategoryModel } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  take = 10;
  collection = 'categories'
  constructor(private firestore: AngularFirestore) { }

  get(id): Observable<CategoryDto> {
    return this.firestore.doc(`${this.collection}/` + id).valueChanges()
    .pipe(take(1)).pipe(map((result: any) => {
        if (id == null) {
          return new CategoryDto();
        }
        const dto = result as CategoryDto;
        dto.Id = id;
        return dto;
      }));
  }

  getArr(search, skip, arrTake = this.take): Observable<Array<CategoryDto>> {
    return this.firestore.collection(this.collection,
      ref => ref.where('Name', '>=', search).orderBy('Name').startAt(skip).limit(arrTake))
      .snapshotChanges().pipe(take(1)).pipe(map(arr => arr.map(a => {
        const dto = a.payload.doc.data() as CategoryDto;
        dto.Id = a.payload.doc.id;
        this.get(dto.ParentId).subscribe(obj=>{
          dto.ParentName = obj.Name
        });
        return dto;
      })));
  }

  getAll(): Observable<Array<CategoryDto>> {
    return this.firestore.collection(this.collection, ref => ref.where('ParentId', '==', null))
      .snapshotChanges().pipe(take(1))
      .pipe(map(arr => arr.map(a => {
        const dto = a.payload.doc.data() as CategoryDto;
        dto.Id = a.payload.doc.id;
        return dto;
      })));
  }

  create(model :CategoryModel) {
    model.CreatedDate = new Date();
    model.IsActive = true;
    return this.firestore.collection(this.collection).add(model);
  }

  update(id, model :CategoryModel) {
    model.UpdatedDate = new Date();
    delete model.CreatedDate;
    delete model.IsActive;
    return this.firestore.collection(this.collection).doc(id).update(model);
  }

  toggleActive(id,isActive){
    var model = {IsActive :!isActive ,UpdatedDate: new Date()}
    return this.firestore.collection(this.collection).doc(id).update(model);
  }

  delete(id) {
    return this.firestore.collection(this.collection).doc(id).delete();
  }
}
