import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  messageSent = false;
  messageConfirmation='';
formData={
  firstName:'',
  lastName:'',
  email:'',
  message:''
};
onSubmit(){
console.log('Message envoyé :', this.formData)

this.messageSent=true;
  this.formData={
    firstName:'',
  lastName:'',
  email:'',
  message:''
  };

  this.messageConfirmation = 'Message bien recu !';

  setTimeout(()=>{
    this.messageConfirmation='';
  },5000);

};

}
