import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RockScissorsPaperComponent } from './rock-scissors-paper.component';

describe('RockScissorsPaperComponent', () => {
  let component: RockScissorsPaperComponent;
  let fixture: ComponentFixture<RockScissorsPaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RockScissorsPaperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RockScissorsPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
