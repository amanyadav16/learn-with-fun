import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MockService } from './mock.service';

describe('AppComponent', () => {
  let fixture;
  let app:AppComponent;
  let mockService:MockService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers:[MockService]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    mockService=TestBed.inject(MockService);

  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'learn-with-fun'`, () => {
    expect(app.title).toEqual('learn-with-fun');
  });

  it(`doNothingFun()`, () => {
    app.doNothingFun()
    expect().nothing()
  });

  it(`instance checking`, () => {
    expect(app.title).toBeInstanceOf(String);
  });

  it(`array`, () => {
    expect(app.arr).toContain('aman');
    expect(app.arr).toHaveSize(3);
  });

  

  it(`throw error`, () => {
    expect(app.returnSomething).toThrow(new Error("my custom error"))
  });

  it(`throw error2`, () => {
    expect(app.returnSomething).toThrowError("my custom error")
  });

  it(`throw error3`, () => {
    expect(app.returnSomething).toThrowMatching(function(thrown) { return thrown.message === 'my custom error'; });
  });

  it(`service case 1`, () => {
    spyOn(mockService,'getBoolValue').and.returnValue(true);
    expect(app.getBoolValue()).toBeTruthy();
    expect(mockService.getBoolValue).toHaveBeenCalled();
  });

  it(`service case 2`, () => {
    spyOn(mockService,'getBoolValue').and.returnValue(false);
    expect(app.getBoolValue()).toBeFalsy();
    expect(mockService.getBoolValue).toHaveBeenCalled();
  });

    // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('learn-with-fun app is running!');
  // });
});
