import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStoriesComponent } from './list-stories.component';

describe('ListStoriesComponent', () => {
  let component: ListStoriesComponent;
  let fixture: ComponentFixture<ListStoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListStoriesComponent]
    });
    fixture = TestBed.createComponent(ListStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
