import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-idea-container',
  templateUrl: './idea-container.component.html',
  styleUrls: ['./idea-container.component.css']
})
export class IdeaContainerComponent implements OnInit {

  @Input() idea: {id: number, title: string, body: string}

  constructor() { }

  ngOnInit() {
  }

}
