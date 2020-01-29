import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemprodutoComponent } from './listagemproduto.component';

describe('ListagemprodutoComponent', () => {
  let component: ListagemprodutoComponent;
  let fixture: ComponentFixture<ListagemprodutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListagemprodutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemprodutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
