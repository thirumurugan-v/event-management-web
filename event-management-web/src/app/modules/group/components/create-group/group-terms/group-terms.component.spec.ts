import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupTermsComponent } from './group-terms.component';

describe('GroupTermsComponent', () => {
  let component: GroupTermsComponent;
  let fixture: ComponentFixture<GroupTermsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupTermsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
