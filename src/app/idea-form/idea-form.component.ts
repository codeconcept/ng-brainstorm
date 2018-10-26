import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Idea } from './../models/idea';
import { ReturnStatement } from '@angular/compiler';

@Component({
  selector: 'app-idea-form',
  templateUrl: './idea-form.component.html',
  styleUrls: ['./idea-form.component.scss']
})
export class IdeaFormComponent implements OnInit {
  idea: Idea;
  ideaForm: FormGroup;
  errorMessage = '';

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.ideaForm = this.fb.group({
      id: Date.now(),
      title: ['', Validators.required],
      details: ['', Validators.required]
    });
  }

  createIdea() {
    if(!this.ideaForm.valid) {
      this.errorMessage = 'Veuillez saisir tous les champs';
      return;
    }
    console.log(this.ideaForm.value);
    this.ideaForm.reset();
    this.errorMessage = '';
  }

}
