import { Component, OnInit } from '@angular/core';
import { Idea } from "../idea";

@Component({
  selector: 'app-idea-form',
  templateUrl: './idea-form.component.html',
  styleUrls: ['./idea-form.component.css']
})
export class IdeaFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  add(title: string, body: string, $event: any): void {
    $event.preventDefault();
    console.log(title, body, $event)
  }

}
