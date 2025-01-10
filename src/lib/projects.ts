import type { Project } from './types';

export const projects: Project[] = [
  {
    id: 'project-one',
    title: 'Ghost Notes',
    description: 'A simple and fast notes app powered by AI.',
    services: ['Design', 'Development'],
    duration: '12 weeks',
    screenshots: ['/project1.jpg', '/project1-work1.jpg', '/project1-work2.jpg'],
    url: 'https://ghostnotes.app'
  },
  {
    id: 'project-two',
    title: 'HSW',
    description: 'Share a beautiful list of your favorite songs with anyone. Music Service-agnostic.',
    services: ['Design', 'Development'],
    duration: '12 weeks',
    screenshots: ['/project2.jpg', '/project2-work1.jpg', '/project2-work2.jpg'],
    url: 'https://dataviz.com'
  }
];