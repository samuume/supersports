/**
 * Created by zongy on 12-02-2017.
 */
import { Component } from '@angular/core';
import { Contactinfo } from './contact';

@Component ({
  selector: 'contact',
  templateUrl: './app/contact/contact.html'
})

export class ContactComponent {
  model = new Contactinfo('', '', '');
  submitted = false;

  onSubmit() {
    this.submitted = true;
  }
  active = true;
}
