/**
 * Created by zongy on 12-02-2017.
 */
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

class Newsletter {
  email: string;
}
@Component ({
  selector: 'site-footer',
  templateUrl: './app/shared/site-footer/footer.html'
})
export class FooterComponent implements OnInit {
  msgText: string = "";
  model:Newsletter = new Newsletter();
  hasBeenSubmitted: boolean;
  msgShow = false;

  ngOnInit() {
    this.hasBeenSubmitted = false;
  }
  register(form:NgForm, event:Event) {
    event.preventDefault();
    this.hasBeenSubmitted = true;
    this.msgText = `You have been submitted our newsletter with ${form.value.email}`;
  }
}
