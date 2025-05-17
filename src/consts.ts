import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Merbin J Anselm',
  description:
    'Merbin J Anselm is an experienced SAP Techno-Functional Consultant with a passion for technology and a knack for problem-solving. He specializes in SAP BTP, SAP Business AI, SAP HANA, SAP Fiori Elements + SAP UI5, and is dedicated to helping businesses optimize their SAP systems.',
  href: 'https://site-merbinjanselm.anselm94.workers.dev',
  author: 'anselm94',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/authors',
    label: 'authors',
  },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/anselm94',
    label: 'GitHub',
  },
  {
    href: 'https://twitter.com/MerbinJAnselm',
    label: 'Twitter',
  },
  {
    href: 'mailto:merbinjanselm@gmail.com',
    label: 'Email',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
