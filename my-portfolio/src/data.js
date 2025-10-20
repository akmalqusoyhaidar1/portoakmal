
// Public assets that exist in `public/` (safe fallbacks)
const PLACEHOLDER_IMAGE = '/image.jpg';
const VITE_SVG = '/vite.svg';

const Image = {
  PLACEHOLDER_IMAGE,
  VITE_SVG,
};

export default Image;

// Normalized, English-keyed lists for easier use in code
export const listTools = [
  { id: 1, image: PLACEHOLDER_IMAGE, name: 'Visual Studio Code', type: 'Editor', notes: 'Primary editor' },
  { id: 2, image: PLACEHOLDER_IMAGE, name: 'React', type: 'Library', notes: 'UI library used' },
  { id: 3, image: PLACEHOLDER_IMAGE, name: 'Next.js', type: 'Framework', notes: 'SSR / static site framework' },
  { id: 4, image: PLACEHOLDER_IMAGE, name: 'Tailwind CSS', type: 'CSS Framework', notes: 'Utility-first CSS' },
  { id: 5, image: PLACEHOLDER_IMAGE, name: 'Bootstrap', type: 'CSS Framework', notes: 'Optional UI toolkit' },
  { id: 6, image: PLACEHOLDER_IMAGE, name: 'JavaScript', type: 'Language', notes: 'Primary programming language' },
  { id: 7, image: PLACEHOLDER_IMAGE, name: 'Node.js', type: 'Runtime', notes: 'Build tools / dev server' },
  { id: 8, image: PLACEHOLDER_IMAGE, name: 'GitHub', type: 'VCS', notes: 'Source hosting' },
  { id: 9, image: PLACEHOLDER_IMAGE, name: 'Adobe Illustrator', type: 'Design App', notes: 'Vector design' },
  { id: 10, image: PLACEHOLDER_IMAGE, name: 'Canva', type: 'Design App', notes: 'Quick graphics' },
  { id: 11, image: PLACEHOLDER_IMAGE, name: 'Figma', type: 'Design App', notes: 'UI/UX design' },
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
  { id: 't1', name: 'React', category: 'Library', website: 'https://react.dev' },
  { id: 't2', name: 'Vite', category: 'Build Tool', website: 'https://vitejs.dev' },
  { id: 't3', name: 'Tailwind CSS', category: 'CSS Framework', website: 'https://tailwindcss.com' },
  { id: 't4', name: 'Node.js', category: 'Runtime', website: 'https://nodejs.org' },
  { id: 't5', name: 'NPM', category: 'Package Manager', website: 'https://www.npmjs.com' },
  { id: 't6', name: 'ESLint', category: 'Linting', website: 'https://eslint.org' },
  { id: 't7', name: 'Prettier', category: 'Formatting', website: 'https://prettier.io' },
  { id: 't8', name: 'Vercel', category: 'Hosting', website: 'https://vercel.com' },
  { id: 't9', name: 'GitHub', category: 'VCS', website: 'https://github.com' },
  { id: 't10', name: 'Figma', category: 'Design', website: 'https://figma.com' },
];