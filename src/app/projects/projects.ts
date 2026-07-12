import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
projects = [
  {
    title: 'Real-Time Chat Application',
    type: 'Full Stack Web Application',
    year: '2025',
    description:
      'A real-time web application developed as part of the Naan Mudhalvan program that enables multiple users to communicate instantly through live messaging using Socket.IO. The project focuses on responsive design, seamless communication, and real-time user interaction.',
    tech: [
      'React',
      'Node.js',
      'Express.js',
      'Socket.IO',
      'HTML',
      'CSS',
      'JavaScript'
    ],
    liveLink: 'https://gunapriya325.github.io/NAANMUDHALVAN/',
    githubLink: 'https://github.com/gunapriya325/NAANMUDHALVAN.git',
    theme: 'chat-theme',
  },

  {
    title: 'Student Registration System',
    type: 'Cloud Computing Internship Project',
    year: '2026',
    description:
      'A web-based student registration system developed during my Cloud Computing internship. The application allows users to register and manage student information with database integration through a simple and responsive interface.',
    tech: [
      'HTML',
      'CSS',
      'JavaScript',
      'SQL',
      'NetBeans'
    ],
    liveLink: 'YOUR_LIVE_DEMO_LINK',
    githubLink: 'YOUR_GITHUB_LINK',
    theme: 'registration-theme',
  },

  {
    title: 'Smart Mess Management System',
    type: 'Internship Project',
    year: '2026',
    description:
      'Currently developing a full-stack web application during my internship to simplify mess management through digital solutions. The project includes responsive Angular interfaces, REST API development, MongoDB integration, and complete frontend-backend workflow implementation.',
    tech: [
      'Angular',
      'TypeScript',
      'Node.js',
      'Express.js',
      'MongoDB'
    ],
    liveLink: '',
    githubLink: '',
    theme: 'mess-theme',
    status: 'In Development'
  }
];
}