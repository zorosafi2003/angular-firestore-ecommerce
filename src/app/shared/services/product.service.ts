import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { ProductDto } from '../dtos/product.dto';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  take = 10;
  collection = 'products'
  constructor(private firestore: AngularFirestore) { }

  get(id): Observable<ProductDto> {
    return this.firestore.doc(`${this.collection}/` + id).valueChanges()
    .pipe(take(1)).pipe(map((result: any) => {
        if (id == null) {
          return new ProductDto();
        }
        const dto = result as ProductDto;
        dto.Id = id;
        return dto;
      }));
  }

  getArr(search, skip, arrTake = this.take): Observable<Array<ProductDto>> {
    return this.firestore.collection(this.collection,
      ref => ref.where('Name', '>=', search).orderBy('Name').startAt(skip).limit(arrTake))
      .snapshotChanges().pipe(take(1)).pipe(map(arr => arr.map(a => {
        const dto = a.payload.doc.data() as ProductDto;
        dto.Id = a.payload.doc.id;
        this.get(dto.ParentId).subscribe(obj=>{
          dto.ParentName = obj.Name
        });
        return dto;
      })));
  }

  getAll(): Observable<Array<ProductDto>> {
    return this.firestore.collection(this.collection, ref => ref.where('ParentId', '==', null))
      .snapshotChanges().pipe(take(1))
      .pipe(map(arr => arr.map(a => {
        const dto = a.payload.doc.data() as ProductDto;
        dto.Id = a.payload.doc.id;
        return dto;
      })));
  }

  create(model :ProductModel) {
    model.CreatedDate = new Date();
    model.IsActive = true;
    return this.firestore.collection(this.collection).add(model);
  }

  update(id, model :ProductModel) {
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