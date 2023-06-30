import { Component, Input, OnInit } from '@angular/core'; 
import { StoryServiceService } from '../service/story-service.service';
import { Author } from '../models/authors.model'; 
import { Story } from '../models/stories.model'; 

@Component({ 
  selector: 'app-list-stories', 
  templateUrl: './list-stories.component.html', 
  styleUrls: ['./list-stories.component.css'] 
}) 

export class ListStoriesComponent implements OnInit { 

  @Input() author!: Author; 
  stories: Story[] = []; 
  selectedStory: Story | null = null; 

  constructor(private service: StoryServiceService) {

  } 

  ngOnInit() {
    if (this.author) {
      this.service.getStoriesOfAuthor(this.author.author, (stories: Story[]) => {
        this.stories = stories;
      });
    }
  }
  

  public onSelectStory(album: Story) { 
    this.selectedStory = album; 
  } 

} 

 