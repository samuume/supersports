/**
 * Created by zongy on 12-02-2017.
 */
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

class Contactform {
  contactname: string;
  contactemail: string;
  msg: string;
}

@Component ({
  selector: 'contact',
  templateUrl: './app/contact/contact.html'
})

export class ContactComponent implements OnInit {
  model:Contactform = new Contactform();
  hasBeenSubmitted: boolean;

  ngOnInit() {
    this.hasBeenSubmitted = false;
  }

  register(form:NgForm, event:Event) {
    event.preventDefault();
    this.hasBeenSubmitted = true;
    alert(`You have submitted your message! Thanks, ${form.value.contactname}`);
  }
}
