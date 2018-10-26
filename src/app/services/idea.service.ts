import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Idea } from '../models/idea';

@Injectable({
  providedIn: 'root'
})
export class IdeaService {
  ideas$: Observable<Idea[]>;
  ideaCollectionRef: AngularFirestoreCollection<Idea>;

  constructor(private afs: AngularFirestore) {
    this.ideaCollectionRef = this.afs.collection<Idea>('ideas');
  }

  getIdeas() {
    return this.ideaCollectionRef
      .snapshotChanges()
      .pipe(
        map(docs => {
          return docs.map(doc => {
            const data = { id: doc.payload.doc.id, ...doc.payload.doc.data() };
            console.log(data);
            return data;
          });
        })
      );
  }
}
