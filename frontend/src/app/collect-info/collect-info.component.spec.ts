import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectInfoComponent } from './collect-info.component';

describe('CollectInfoComponent', () => {
  let component: CollectInfoComponent;
  let fixture: ComponentFixture<CollectInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
