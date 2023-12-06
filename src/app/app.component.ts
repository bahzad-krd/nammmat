// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bardoxetalaba = ['Beginner', 'Intermediate', 'Advanced'];

  textarea = '';
  submit = false;

  submitForm() {
    this.submit = true;
  }
  javaChecked = false;
  pythonChecked = false;
  cChecked = false;
  javacriptChecked = false;

  formSubmitted = false;

  onCheckboxChange(event: any) {
    const checkboxName = event.target.name;

    if (checkboxName === 'java') {
      this.javaChecked = event.target.checked;
    } else if (checkboxName === 'python') {
      this.pythonChecked = event.target.checked;
    }
    else if (checkboxName === 'javascript') {
      this.pythonChecked = event.target.checked;
    }
    else if (checkboxName === 'c++') {
      this.pythonChecked = event.target.checked;
    }
  }
  checkLength() {
    return this.textarea.length < 10;
  }
}