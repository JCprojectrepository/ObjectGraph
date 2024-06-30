interface Navigation {
    label: string
    path: string
  }

export const navigations: Navigation[] = [
  {
    label: 'Home',
    path: '#', // '/',
  },
  {
    label: 'Courses',
    path: 'popular-course', // '/popular-course',
  },
  {
    label: 'Testimonial',
    path: 'testimonial', // '/testimonial',
  },
  {
    label: 'Mentor',
    path: 'mentors', // '/mentors',
  },
]