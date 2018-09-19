import { Component, OnInit } from '@angular/core';
import { IDEAS } from "../ideas-list";

@Component({
  selector: 'app-idea-container',
  templateUrl: './idea-container.component.html',
  styleUrls: ['./idea-container.component.css']
})
export class IdeaContainerComponent implements OnInit {
  ideas = IDEAS;
  
  constructor() { }

  ngOnInit() {
  }

}
