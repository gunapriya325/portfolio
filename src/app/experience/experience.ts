import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone:true,
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  experiences = [
  {
    year: '2026 - Present',
    type: 'Angular Internship',
    title: 'Full Stack Web Developer Intern',
    company: 'Startup Company',
    description:
      'Completed a one-month internship in a startup company, where I learned Angular development and worked on a real-world Smart Mess Management System. Gained hands-on experience in frontend development, backend API development, MongoDB integration, and complete project workflow using Angular, Node.js, and Express.js.',
    skills: [
      'Angular',
      'TypeScript',
      'Node.js',
      'Express.js',
      'MongoDB',
    ],
  },
  {
    year: 'Dec 2025 - Jan 2026',
    type: 'Cloud Computing Internship',
    title: 'Cloud Computing Intern',
    company: 'Top Tech Developers',
    description:
      'Completed a 10-day Cloud Computing internship and developed a Student Registration System using HTML, CSS, JavaScript, SQL, and NetBeans. Gained practical experience in cloud concepts, database integration, and web application development.',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'SQL',
      'NetBeans',
    ],
  },
  {
    year: '2025',
    type: 'Academic Project',
    title: 'Real-Time Chat Application',
    company: 'Naan Mudhalvan',
    description:
      'Developed a Real-Time Chat Application using React, Node.js, Express.js, and Socket.IO. The application enables multiple users to communicate instantly through live messaging while strengthening my knowledge of frontend, backend, and real-time communication.',
    skills: [
      'React',
      'Node.js',
      'Express.js',
      'Socket.IO',
    ],
  },
  {
    year: '2024',
    type: 'Java Workshop',
    title: 'Core Java Workshop',
    company: 'AVC College of Engineering',
    description:
      'Participated in a Core Java workshop to strengthen programming fundamentals, object-oriented programming concepts, and problem-solving skills while gaining exposure to Java interview preparation.',
    skills: [
      'Core Java',
      'OOP',
      'Problem Solving',
    ],
  },
];
}
