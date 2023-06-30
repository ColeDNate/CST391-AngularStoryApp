import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListAuthorsComponent } from './list-authors/list-authors.component';
import { ListStoriesComponent } from './list-stories/list-stories.component';
import { CreateStoryComponent } from './create-story/create-story.component';
import { DisplayStoryComponent } from './display-story/display-story.component';
import { EditStoryComponent } from './edit-story/edit-story.component';
import { DeleteStoryComponent } from './delete-story/delete-story.component';

const routes: Routes = [
  { path: 'create', component: CreateStoryComponent },
  { path: 'list-authors', component: ListAuthorsComponent },
  { path: 'list-stories', component: ListStoriesComponent },
  { path: 'display/:id', component: DisplayStoryComponent },
  { path: 'edit/:author/:id', component: EditStoryComponent },
  { path: 'delete/:author/:id', component: DeleteStoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
