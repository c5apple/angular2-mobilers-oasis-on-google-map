import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResponseSpotComponent } from './search-response-spot.component';

describe('SearchResponseSpotComponent', () => {
  let component: SearchResponseSpotComponent;
  let fixture: ComponentFixture<SearchResponseSpotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResponseSpotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResponseSpotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
