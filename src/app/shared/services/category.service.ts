import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  take = 25;
  collection = 'categories'
  //constructor(private firestore: AngularFirestore) { }

  // get(id) {
  //   return this.firestore.doc(`${this.collection}/` + id).snapshotChanges().pipe(map(result => {
  //     const data = result.payload.data() as any;
  //     const id = result.payload.id;
  //     return { id, ...data };
  //   }));
  // }

  // getArr(search, skip, take = this.take) {
  //   return this.firestore.collection(this.collection, ref => ref.where("name", "==", search).orderBy('name').startAt(skip).endAt(take)).snapshotChanges()
  // }

  // getAll() {
  //   return this.firestore.collection(this.collection).snapshotChanges()
  // }

  // create(model) {
  //   return this.firestore.collection(this.collection).add(model);
  // }

  // update(id, model) {
  //   return this.firestore.collection(this.collection).doc(id).update(model);
  // }

  // delete(id) {
  //   return this.firestore.collection(this.collection).doc(id).delete();
  // }
}
