import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Idea } from "../idea.model";
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-idea-form',
  templateUrl: './idea-form.component.html',
  styleUrls: ['./idea-form.component.css']
})
export class IdeaFormComponent implements OnInit {
  @Output() addIdea = new EventEmitter<{id: number, title: string, body: string}>()
  title = '';
  body = '';

  constructor() { }

  ngOnInit() {
  }


  add(event) {
    event.preventDefault();
    const idea = new Idea(Date.now(), this.title, this.body)

    this.addIdea.emit(idea)
    this.title = ''
    this.body = ''
  }

}
