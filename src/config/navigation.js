const urls = [
  {
    text: 'Introduction',
    url: '/introduction',
    next: '/context',
    isMobile: true
  },
  {
    text: 'Context',
    url: '/context',
    next: '/pathways',
    isMobile: false
  },
  {
    text: 'Pathways',
    url: '/pathways',
    next: '/malcolm',
    isMobile: false
  },

  {
    text: 'Malcolm',
    url: '/malcolm',
    next: '/justice',
    isMobile: false
  },

  {
    text: 'Justice',
    url: '/justice',
    next: '/about',
    isMobile: false
  },
  {
    text: 'About',
    url: '/about',
    next: '/introduction',
    isMobile: true
  }
]
export default urls
