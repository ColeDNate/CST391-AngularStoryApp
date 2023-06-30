import { Component, Input } from '@angular/core';
import { Story } from '../models/stories.model';

@Component({
  selector: 'app-display-story',
  templateUrl: './display-story.component.html',
  styleUrls: ['./display-story.component.css']
})
export class DisplayStoryComponent {
  @Input() story!: Story;
}
