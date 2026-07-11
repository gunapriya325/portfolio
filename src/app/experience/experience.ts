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
      year: '2025 - Present',
      type: 'Frontend Development',
      title: 'Frontend Developer',
      company: 'Self Learning & Personal Projects',
      description:
        'Building responsive web interfaces and portfolio projects while improving my knowledge in Angular, UI design, animations, and modern frontend development.',
      skills: ['Angular', 'TypeScript', 'CSS'],
    },
    {
      year: '2025',
      type: 'Web Development',
      title: 'Web Development Learning',
      company: 'Personal Learning Journey',
      description:
        'Learned the foundations of responsive website development, including HTML, CSS, JavaScript, and reusable component-based UI development.',
      skills: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      year: '2024 - 2025',
      type: 'Projects',
      title: 'UI Design & Practice Projects',
      company: 'Independent Projects',
      description:
        'Created user-focused practice projects to improve layouts, responsive design, clean code structure, and smooth interactive experiences.',
      skills: ['Bootstrap', 'Responsive UI', 'GitHub'],
    },
  ];
}
