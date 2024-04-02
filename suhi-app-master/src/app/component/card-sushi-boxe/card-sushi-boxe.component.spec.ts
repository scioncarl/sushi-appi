import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSushiBoxeComponent } from './card-sushi-boxe.component';

describe('CardSushiBoxeComponent', () => {
  let component: CardSushiBoxeComponent;
  let fixture: ComponentFixture<CardSushiBoxeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardSushiBoxeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardSushiBoxeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
