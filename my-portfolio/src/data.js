// Public assets that exist in `public/` (safe fallbacks)
const PLACEHOLDER_IMAGE = '/image.jpg';
const VITE_SVG = '/vite.svg';

// CDN-hosted logos (fallback to placeholder if CDN blocked)
const LOGO_VSCODE = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg';
const LOGO_REACT = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg';
const LOGO_NEXT = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg';
const LOGO_TAILWIND = 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/tailwindcss.svg';
const LOGO_BOOTSTRAP = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain.svg';
const LOGO_JS = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg';
const LOGO_NODE = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg';
const LOGO_GITHUB = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg';
const LOGO_ILLUSTRATOR = 'https://cdn.worldvectorlogo.com/logos/adobe-illustrator.svg';
const LOGO_CANVA = 'https://seeklogo.com/images/C/canva-logo-1F6F9FC7BD-seeklogo.com.png';
const LOGO_FIGMA = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg';
const LOGO_VERCEL = 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/vercel.svg'

const Image = {
  PLACEHOLDER_IMAGE,
  VITE_SVG,
};

export default Image;

// Normalized, English-keyed lists for easier use in code
export const listTools = [
  { id: 1, image: LOGO_VSCODE || PLACEHOLDER_IMAGE, name: 'Visual Studio Code', type: 'Editor', notes: 'Primary editor' },
  { id: 2, image: LOGO_REACT || PLACEHOLDER_IMAGE, name: 'React', type: 'Library', notes: 'UI library used' },
  { id: 3, image: LOGO_NEXT || PLACEHOLDER_IMAGE, name: 'Next.js', type: 'Framework', notes: 'SSR / static site framework' },
  { id: 4, image: LOGO_TAILWIND || PLACEHOLDER_IMAGE, name: 'Tailwind CSS', type: 'CSS Framework', notes: 'Utility-first CSS' },
  { id: 5, image: LOGO_BOOTSTRAP || PLACEHOLDER_IMAGE, name: 'Bootstrap', type: 'CSS Framework', notes: 'Optional UI toolkit' },
  { id: 6, image: LOGO_JS || PLACEHOLDER_IMAGE, name: 'JavaScript', type: 'Language', notes: 'Primary programming language' },
  { id: 7, image: LOGO_NODE || PLACEHOLDER_IMAGE, name: 'Node.js', type: 'Runtime', notes: 'Build tools / dev server' },
  { id: 8, image: LOGO_GITHUB || PLACEHOLDER_IMAGE, name: 'GitHub', type: 'VCS', notes: 'Source hosting' },
  { id: 9, image: LOGO_ILLUSTRATOR || PLACEHOLDER_IMAGE, name: 'Adobe Illustrator', type: 'Design App', notes: 'Vector design' },
  { id: 10, image: LOGO_npmnpmCANVA || PLACEHOLDER_IMAGE, name: 'Canva', type: 'Design App', notes: 'Quick graphics' },
  { id: 11, image: LOGO_FIGMA || PLACEHOLDER_IMAGE, name: 'Figma', type: 'Design App', notes: 'UI/UX design' },
];

export const listProyek = [
  {
    id: 1,
    image: PLACEHOLDER_IMAGE,
    name: 'Website Sekolah',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!',
    tools: ['HTML', 'CSS', 'JavaScript', 'AOS'],
    metric: '200',
  },
  {
    id: 2,
    image: PLACEHOLDER_IMAGE,
    name: 'Company Profile',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!',
    tools: ['HTML', 'CSS', 'JavaScript', 'AOS', 'Swiper', 'Lightbox Gallery'],
    metric: '300',
  },
  {
    id: 3,
    image: PLACEHOLDER_IMAGE,
    name: 'Web Pernikahan 2.0',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!',
    tools: ['Vite', 'React', 'Tailwind CSS', 'AOS'],
    metric: '400',
  },
  {
    id: 4,
    image: PLACEHOLDER_IMAGE,
    name: 'Website Course',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!',
    tools: ['Vite', 'React', 'Bootstrap', 'AOS'],
    metric: '500',
  },
  {
    id: 5,
    image: PLACEHOLDER_IMAGE,
    name: 'Web Portfolio',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!',
    tools: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    metric: '600',
  },
  {
    id: 6,
    image: PLACEHOLDER_IMAGE,
    name: 'Company Profile 2.0',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!',
    tools: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    metric: '700',
  },
];

// New: explicit tools/technologies used to build this project
export const listTech = [
  { id: 't0', name: 'Visual Studio Code', category: 'Editor', website: 'https://code.visualstudio.com', version: null, logo: LOGO_VSCODE },
  { id: 't1', name: 'React', category: 'Library', website: 'https://react.dev', version: '^19.1.1', logo: LOGO_REACT },
  { id: 't2', name: 'Vite', category: 'Build Tool', website: 'https://vitejs.dev', version: '^7.1.7', logo: VITE_SVG },
  { id: 't3', name: 'Tailwind CSS', category: 'CSS Framework', website: 'https://tailwindcss.com', version: null, logo: LOGO_TAILWIND },
  { id: 't4', name: 'Node.js', category: 'Runtime', website: 'https://nodejs.org', version: null, logo: LOGO_NODE },
  { id: 't5', name: 'Vercel', category: 'Hosting', website: 'https://vercel.com', version: null, logo: LOGO_VERCEL },
  { id: 't6', name: 'GitHub', category: 'VCS', website: 'https://github.com', version: null, logo: LOGO_GITHUB },
  { id: 't7', name: 'Figma', category: 'Design', website: 'https://figma.com', version: null, logo: LOGO_FIGMA },

];