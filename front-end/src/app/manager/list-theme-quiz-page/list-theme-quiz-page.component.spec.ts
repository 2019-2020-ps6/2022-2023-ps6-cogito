import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListThemeQuizPageComponent } from './list-theme-quiz-page.component';

describe('ListThemeQuizPageComponent', () => {
  let component: ListThemeQuizPageComponent;
  let fixture: ComponentFixture<ListThemeQuizPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListThemeQuizPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListThemeQuizPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
