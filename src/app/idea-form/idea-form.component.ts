import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Idea } from './../models/idea';
import { IdeaService } from './../services/idea.service';

@Component({
  selector: 'app-idea-form',
  templateUrl: './idea-form.component.html',
  styleUrls: ['./idea-form.component.scss']
})
export class IdeaFormComponent implements OnInit {
  idea: Idea;
  ideaForm: FormGroup;
  errorMessage = '';

  constructor(private fb: FormBuilder, private ideaService: IdeaService) { }

  ngOnInit() {
    this.ideaForm = this.fb.group({
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
    this.ideaService
      .create(this.ideaForm.value)
      .then(value => console.log('value', value))
      .catch(err => console.error('error', err));
    this.ideaForm.reset();
    this.errorMessage = '';
  }

}
