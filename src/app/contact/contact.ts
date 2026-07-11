import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-contact',
  standalone:true,
  imports: [FormsModule,Footer],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  formData = {
    name: '',
    email: '',
    message: '',
  };

  sendMessage() {
    const subject = `Portfolio message from ${this.formData.name}`;

    const body = `Name: ${this.formData.name}
Email: ${this.formData.email}

Message:
${this.formData.message}`;

    window.location.href =
      `mailto:gunapriya138@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
}