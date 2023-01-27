const urls = [
  {
    text: 'Context',
    url: '/context',
    next: '/pathways'
  },
  {
    text: 'Pathways',
    url: '/pathways',
    next: '/abuse'
  },
  {
    text: 'Abuse',
    url: '/abuse',
    next: 'Accountability'
  },
  {
    text: 'Accountability',
    url: '/accountability',
    next: '/the-un'
  },
  {
    text: 'The UN',
    url: '/the-un',
    next: '/about'
  },
  {
    text: 'About',
    url: '/about',
    next: '/context'
  },
  {
    text: 'Home?',
    url: '/',
    next: '/'
  },
]
export default urls