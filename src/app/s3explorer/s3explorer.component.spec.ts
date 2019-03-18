import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S3explorerComponent } from './s3explorer.component';

describe('S3explorerComponent', () => {
  let component: S3explorerComponent;
  let fixture: ComponentFixture<S3explorerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S3explorerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S3explorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
