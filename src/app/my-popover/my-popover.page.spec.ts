import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyPopoverPage } from './my-popover.page';

describe('MyPopoverPage', () => {
  let component: MyPopoverPage;
  let fixture: ComponentFixture<MyPopoverPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MyPopoverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
