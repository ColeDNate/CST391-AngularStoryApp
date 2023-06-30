import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListStoriesComponent } from './list-stories/list-stories.component';
import { CreateStoryComponent } from './create-story/create-story.component';
import { DisplayStoryComponent } from './display-story/display-story.component';
import { EditStoryComponent } from './edit-story/edit-story.component';
import { DeleteStoryComponent } from './delete-story/delete-story.component';
import { ListAuthorsComponent } from './list-authors/list-authors.component';

@NgModule({
  declarations: [
    AppComponent,
    ListStoriesComponent,
    CreateStoryComponent,
    DisplayStoryComponent,
    EditStoryComponent,
    DeleteStoryComponent,
    ListAuthorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
