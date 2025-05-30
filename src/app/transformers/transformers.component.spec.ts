import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformersComponent } from './transformers.component';

describe('TransformersComponent', () => {
  let component: TransformersComponent;
  let fixture: ComponentFixture<TransformersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransformersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransformersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
