import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepSituationComponent } from './entrep-situation.component';

describe('EntrepSituationComponent', () => {
  let component: EntrepSituationComponent;
  let fixture: ComponentFixture<EntrepSituationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntrepSituationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntrepSituationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
