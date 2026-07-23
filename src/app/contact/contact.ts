
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-contact',
   standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class Contact {


  contact = {

    email: 'hr@charivonsoft.com',  

    phone: '+91 XXXXX XXXXX'

  };

  form = {

    name: '',

    email: '',

    phone: '',

    company: '',

    subject: '',

    message: ''

  };

  sendMessage() {

    console.log(this.form);

    alert("Thank you! We'll contact you soon.");

  }
}
