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
      title: 'Portfolio Website',
      type: 'Personal Portfolio',
      year: '2026',
      description:
        'A modern portfolio website designed to showcase my skills, projects, and frontend development journey with elegant animations.',
      tech: ['Angular', 'TypeScript', 'CSS'],
      liveLink: 'https://your-live-demo-link.com',
      githubLink: 'https://github.com/your-username/portfolio',
      theme: 'portfolio-theme',
    },
    {
      title: 'Task Management App',
      type: 'Web Application',
      year: '2026',
      description:
        'A responsive task management interface where users can organize tasks, track progress, and manage their daily workflow easily.',
      tech: ['Angular', 'JavaScript', 'Bootstrap'],
      liveLink: 'https://your-live-demo-link.com',
      githubLink: 'https://github.com/your-username/task-management-app',
      theme: 'task-theme',
    },
  ];
}