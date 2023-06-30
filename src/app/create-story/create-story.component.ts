import { Component, OnInit } from '@angular/core';
import { Story } from '../models/stories.model';
import { StoryServiceService } from '../service/story-service.service';

@Component({
  selector: 'app-create-story',
  templateUrl: './create-story.component.html',
  styleUrls: ['./create-story.component.css']
})

export class CreateStoryComponent implements OnInit {

  story: Story = {
    //id automatically incremented
    storyId: 0,
    author: "",
    title: "",
    chapter: 0,
    content: new Text(),
    publishDate: new Date(),
  };

  /*
storyId: number,
    author: string,
    title: string,
    chapter: number,
    content: Text,
    publishDate: Date
  */

  wasSubmitted: boolean = false;

  constructor(private service: StoryServiceService) { }

  ngOnInit() {
  }

  public onSubmit() {
    
    console.log(this.story);
   
    this.service.createStory( this.story, () => { 
        console.log("Story created successfully!"); 
        this.wasSubmitted = true; 
      }); 
  
    
     
  }
}
