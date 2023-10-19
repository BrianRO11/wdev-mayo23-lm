import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CursoComponent } from './curso.component';

describe('CursoComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [CursoComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CursoComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'primerAngular'`, () => {
    const fixture = TestBed.createComponent(CursoComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('primerAngular');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(CursoComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('primerAngular app is running!');
  });
});
