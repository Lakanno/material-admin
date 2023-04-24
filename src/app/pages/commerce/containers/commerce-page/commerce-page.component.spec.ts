import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercePageComponent } from './commerce-page.component';

describe('CommercePageComponent', () => {
  let component: CommercePageComponent;
  let fixture: ComponentFixture<CommercePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommercePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommercePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
