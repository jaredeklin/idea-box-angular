import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { IdeaFormComponent } from './idea-form/idea-form.component';
import { IdeaContainerComponent } from './idea-container/idea-container.component';

@NgModule({
  declarations: [
    AppComponent,
    IdeaFormComponent,
    IdeaContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
