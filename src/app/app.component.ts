import {Component, ElementRef, ViewChild} from '@angular/core';
import {NgModel} from "@angular/forms";


@Component({
  selector: 'app-root',
  styleUrl: './app.component.scss',
  template: `
    <h1>Angular Forms</h1>
    <form #ngFrm="ngForm">
      <label>
        <input type="checkbox" name="chk"
               ngModel
               [required]="true"
               [checked]="checked"
               (change)="handleCheckChange($event)">
        Enabled</label>
      <br>
      <input #txt
             #txtNgModel="ngModel"
             name="txt"
             type="text"
             minlength="4"
             required
             [(ngModel)]="value"
             [disabled]="!checked">
      <!--
      [value]="value"
      (input)="handleInputChange($event)"
      -->
      <button (click)="handleClick()"
              [disabled]="ngFrm.invalid">
        Do Something
      </button>
    </form>
    <h3>Output</h3>
    <h2>{{ value }}</h2>
    <hr>
    <app-customer-form />
  `
})
export class AppComponent {
  checked = true;
  value = "";

  @ViewChild('txt')
  txtElm!: ElementRef<HTMLInputElement>;

  txtNgModel!: NgModel;

  handleCheckChange(e: Event) {
    this.checked = (<HTMLInputElement>e.target).checked;
  }

  /*handleInputChange(e: Event) {
    this.value = (<HTMLInputElement>e.target).value;
  }*/
  handleClick() {
    this.txtElm.nativeElement.focus();
  }
}
