import { Injectable } from '@angular/core'; 
import { Story } from '../models/stories.model'; 
import { Author } from './../models/authors.model'; 
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' }) 

export class StoryServiceService { 

  private host = "http://localhost:5000";

  //constructor for the http client
  constructor(private http: HttpClient) {}

  // Retrieves the list of authors from the stories data 
  public getAuthors(callback: (authors: Author[]) => void): void { 
    
    this.http.get<Author[]>(this.host + "/stories/") 
      .subscribe((authors: Author[]) => { 
        callback(authors); 
      }); 
  } 


  // Returns the list of stories 
  public getStories(callback: (stories: Story[]) => void): void { 

    this.http.get<Story[]>(this.host + "/stories").
      subscribe((stories: Story[]) =>{
        callback(stories);
      });
  } 

  //todo
  public getStory(callback:(author:string, id:number) => void): void{

  }

  // Retrieves stories of a specific author 
  public getStoriesOfAuthor(authorName: string, callback: (stories: Story[]) => void): void {
    let request = `${this.host}/stories/${authorName}`;
    console.log('request', request);
    this.http.get<Story[]>(request).subscribe((stories: Story[]) => {
      console.log('have stories', stories);
      callback(stories);
    });
  }


  // Adds a new story to the list of stories 
  public createStory(story: Story, callback: () => void): void { 
    this.http.post<Story>(this.host + "/stories/create", story) 
      .subscribe((data) => { 
        callback(); 
      }); 
  } 

  // Updates an existing story in the list of stories 
  public updateStory(story: Story, callback: () => void): void { 
    this.http.put<Story>(this.host + "/stories/update", story)
      .subscribe((data) => {
        callback();
      });
  } 

  // Deletes an story from the list of stories 
  public deleteStory(id: number, callback: () => void): void {

    this.http.delete(this.host + "/stories/delete/" + id) 
      .subscribe((data) => { 
        callback(); 
      }); 
  } 

 
} 

 