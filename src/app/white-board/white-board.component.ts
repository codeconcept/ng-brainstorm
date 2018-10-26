import { Component, OnInit, OnDestroy } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

import { IdeaService } from './../services/idea.service';
import { Observable } from 'rxjs/Observable';
import { Idea } from '../models/idea';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-white-board',
  templateUrl: './white-board.component.html',
  styleUrls: ['./white-board.component.scss']
})
export class WhiteBoardComponent implements OnInit, OnDestroy {

  // ideas:Observable<Idea[]>;
  ideas$:Observable<any[]>;
  ideaSubscription: Subscription;
  ideas = [];
  todayIdeas = [];

  constructor(private ideaService: IdeaService) { }

  ngOnInit() {
    this.ideaSubscription = this.ideaService.getIdeas().subscribe(ideas => {
      this.ideas = ideas;
    });
  }

  ngOnDestroy() {
    this.ideaSubscription.unsubscribe();
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

}
