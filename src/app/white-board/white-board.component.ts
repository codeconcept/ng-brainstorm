import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-white-board',
  templateUrl: './white-board.component.html',
  styleUrls: ['./white-board.component.scss']
})
export class WhiteBoardComponent implements OnInit {

  ideas = [
    {
      id: 1, 
      title: 'Veille techno Angular',
      details: 'Faire un POC avec les nouveautés de la V7'
    },
    {
      id: 2, 
      title: 'Vue et Vuex',
      details: 'Trouver une idée d\'appli pour illuser Vue et Vuex'
    },
    {
      id: 3, 
      title: 'Impôts locaux',
      details: 'Quel montant réel'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<any[]>) {
    console.log(event);
    moveItemInArray(this.ideas, event.previousIndex, event.currentIndex);
  }

}
