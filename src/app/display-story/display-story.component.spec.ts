import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayStoryComponent } from './display-story.component';

describe('DisplayStoryComponent', () => {
  let component: DisplayStoryComponent;
  let fixture: ComponentFixture<DisplayStoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayStoryComponent]
    });
    fixture = TestBed.createComponent(DisplayStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
