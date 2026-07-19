import { Component } from '@angular/core';

@Component({
  selector: 'app-certificates',
  standalone:true,
  templateUrl: './certificates.html',
  styleUrl: './certificates.css',
})
export class Certificates {
  certificates = [
  {
    year: '2026',
    title: 'Angular Development Internship',
    organization: 'Startup Company',
    description:
      'Successfully completed a one-month Angular Development Internship, gaining hands-on experience in building responsive web applications, developing REST APIs, integrating MongoDB, and working on a real-world Smart Mess Management System using a complete full-stack development workflow.',
    skills: [
      'Angular',
      'TypeScript',
      'Node.js',
      'Express.js',
      'MongoDB',
    ],
    link: '',
  },
  {
    year: '2025 - 2026',
    title: 'Cloud Computing Internship',
    organization: 'Top Tech Developers',
    description:
      'Completed a 10-day Cloud Computing Internship and developed a Student Registration System using HTML, CSS, JavaScript, SQL, and NetBeans while gaining practical exposure to cloud technologies, database integration, and web application development.',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'SQL',
      'NetBeans',
    ],
    link: 'certificates/cloud-internship.pdf',
  },
  {
    year: '2024',
    title: 'Core Java Workshop',
    organization: 'AVC College of Engineering',
    description:
      'Participated in a Core Java Workshop to strengthen programming fundamentals, object-oriented programming concepts, problem-solving skills, and technical interview preparation.',
    skills: [
      'Core Java',
      'OOP',
      'Problem Solving',
    ],
    link: 'certificates/java-workshop.pdf',
  },
];
}