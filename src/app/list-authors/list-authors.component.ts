import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { StoryServiceService } from '../service/story-service.service';
import { Author } from '../models/authors.model';

@Component({
  selector: 'app-list-authors',
  templateUrl: './list-authors.component.html',
  styleUrls: ['./list-authors.component.css']
})
export class ListAuthorsComponent {
  selectedAuthor: Author | null = null;
  authors: Author[] = [];

  constructor(private route: ActivatedRoute, private service: StoryServiceService) {

  }

 ngOnInit(){
  console.log("Getting data....");
  this.service.getAuthors((authors: Author[]) => {
    this.authors = authors;
    console.log('this.authors', this.authors);
  });
 }

 onSelectAuthor(author: Author) {
  this.selectedAuthor = author;
  }
}
