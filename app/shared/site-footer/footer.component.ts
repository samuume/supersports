/**
 * Created by zongy on 12-02-2017.
 */
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

class Newsletter {
  email: string;
}
@Component ({
  selector: 'site-footer',
  templateUrl: './app/shared/site-footer/footer.html'
})
export class FooterComponent implements OnInit {
  model:Newsletter = new Newsletter();
  hasBeenSubmitted: boolean;
  @ViewChild('myModal')
  modal: ModalComponent;
  ngOnInit() {
    this.hasBeenSubmitted = false;
  }
  register(form:NgForm, event:Event) {
    event.preventDefault();
    this.hasBeenSubmitted = true;
    this.modal.open();
  }
}
