import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LinksListComponent } from './links-list.component';

describe('LinksListComponent', () => {
  let component: LinksListComponent;
  let fixture: ComponentFixture<LinksListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LinksListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
