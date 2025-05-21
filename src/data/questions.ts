import { Question } from '../types';

export const questions: Question[] = [
  {
    id: 'q1',
    text: 'How likely are you to recommend Tichi to a friend or colleague?',
    type: 'scale',
    category: 'tichi'
  },
  {
    id: 'q2',
    text: 'What aspects of personal development are most important to you?',
    type: 'multiChoice',
    options: ['Skill acquisition', 'Network building', 'Career advancement', 'Work-life balance'],
    category: 'people'
  },
  {
    id: 'q3',
    text: 'Which opportunities are you most interested in pursuing?',
    type: 'multiChoice',
    options: ['Leadership roles', 'Professional certifications', 'Entrepreneurship', 'Remote work'],
    category: 'opportunity'
  },
  {
    id: 'q4',
    text: 'How would you describe your ideal workplace culture?',
    type: 'text',
    category: 'people'
  },
  {
    id: 'q5',
    text: 'What challenges are you currently facing in your professional journey?',
    type: 'text',
    category: 'opportunity'
  },
  {
    id: 'q6',
    text: 'How do you prefer to learn new skills?',
    type: 'multiChoice',
    options: ['Video tutorials', 'Hands-on practice', 'Reading materials', 'Mentorship'],
    category: 'tichi'
  },
  {
    id: 'q7',
    text: 'What are your long-term career goals?',
    type: 'text',
    category: 'opportunity'
  },
  {
    id: 'q8',
    text: 'How important is community to your professional growth?',
    type: 'scale',
    category: 'people'
  }
];