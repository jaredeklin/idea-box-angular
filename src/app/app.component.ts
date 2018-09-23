import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ideaBox';
  ideas = [{id: 1, title: 'idea1', body: 'some text'}]

  onAddIdea(idea: {id: number, title: string, body: string}) {
    this.ideas.push(idea)
  }

  onDeleteIdea(id: number) {
    this.ideas = this.ideas.filter(idea => idea.id !== id)
  }
}
