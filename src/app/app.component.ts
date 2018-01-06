import { Component } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  public rForm: FormGroup;
  post:any;
  description: string = '';
  name: string = '';

  array: any[] = [{ name: 'John' }, { name: 'Mary' }, { name: 'Adam' }];
  order: string = 'name';

  constructor ( private fb: FormBuilder) {
    this.rForm = fb.group({
      'name': [null, Validators.required],
      'description': [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
      'validate': ''
    })
  }

}
