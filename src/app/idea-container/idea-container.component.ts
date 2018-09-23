import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-idea-container',
  templateUrl: './idea-container.component.html',
  styleUrls: ['./idea-container.component.css']
})
export class IdeaContainerComponent implements OnInit {

  @Input() idea: {id: number, title: string, body: string}
  @Output() deleteIdea = new EventEmitter<{number}>()

  constructor() { }

  ngOnInit() {
  }

  removeIdea(id) {
    this.deleteIdea.emit(id)
  }
}
