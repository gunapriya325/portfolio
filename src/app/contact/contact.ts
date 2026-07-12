import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, Footer],
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

    const gmailUrl =
      `https://mail.google.com/mail/u/0/?view=cm&fs=1` +
      `&to=gunapriya138@gmail.com` +
      `&su=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = gmailUrl;
  }
}
