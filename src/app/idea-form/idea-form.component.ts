import { Component, OnInit } from '@angular/core';
import { Idea } from "../idea.model";
// import { IDEAS } from "../ideas-list";

@Component({
  selector: 'app-idea-form',
  templateUrl: './idea-form.component.html',
  styleUrls: ['./idea-form.component.css']
})
export class IdeaFormComponent implements OnInit {
  // ideas = IDEAS;

  constructor() { }

  ngOnInit() {
  }


  add(title: string, body: string, $event: any): void {
    // $event.preventDefault();
    // const idea = new Idea(Date.now(), title, body)
    // console.log(idea, this.ideas)
    // this.ideas.push(idea)
    // console.log(this.ideas)
  }

}
