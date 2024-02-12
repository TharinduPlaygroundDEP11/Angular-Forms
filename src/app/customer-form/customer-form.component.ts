import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-customer-form',
  template: `
    <h1>Customer Form</h1>
    <form #customerForm="ngForm">
      <div>
        <label>ID</label>
        <input type="text" name="txtId"
               pattern="^C\\d{3}$"
               ngModel
               [(ngModel)]="txtId"
               required>
      </div>
      <div>
        <label>NAME</label>
        <input type="text" name="txtName"
               pattern="^[A-Za-z ]{3,}$"
               ngModel
               [(ngModel)]="txtName"
               required>
      </div>
      <div>
        <label>CONTACT</label>
        <input type="text" name="txtContact"
               pattern="^\\d{3}-\\d{7}$"
               ngModel
               [(ngModel)]="txtContact"
               required>
      </div>
      <div>
        <label>
          <input type="radio" name="rdo"
                 ngModel
                 required
                 [(ngModel)] = "gender"
                 value="male">MALE

        </label>
        <label>
          <input type="radio" name="rdo"
                 ngModel
                 required
                 [(ngModel)] = "gender"
                 value="female">FEMALE
        </label>
      </div>
      <button [disabled]="customerForm.invalid"
              (click)="handleClick()">
        SAVE
      </button>
    </form>
  `,
  styleUrl: './customer-form.component.scss'
})
export class CustomerFormComponent {
  txtId = "";
  txtName = "";
  txtContact = "";
  gender = "";

  handleClick() {
    alert("ID is - " + this.txtId);
    alert("Name is - " + this.txtName);
    alert("Contact is - " + this.txtContact);
    alert("Gender is - " + this.gender);
  }
}
