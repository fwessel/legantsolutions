import { Component } from '@angular/core';
import { PageContainerComponent } from "../page-container/page-container.component";
import {FormGroup, FormControl, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [PageContainerComponent, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  submitted = false;

  // This FormGroup isn't actually used inside the html
  // Because binding the form to the group causes formspree to not work (for whatever reason)
  contactForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    company: new FormControl(''),
    phone: new FormControl(''),
    reason: new FormControl(''),
    message: new FormControl(''),
  });

  onSubmit() {
    this.submitted = true;
    this.contactForm.reset();
  }
}
