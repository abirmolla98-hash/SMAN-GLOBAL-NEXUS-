/**
 * Facts are limited to public sources: this repository, the KrishiPOS
 * codebase, GitHub (abirmolla98-hash), the public LinkedIn profile, and
 * the dealership's own stock notes. Status labels keep concepts separate
 * from working software.
 */

export const profile = {
  name: 'Md. Mobaeid Mollah Abir',
  shortName: 'Abir',
  role: 'AI engineer and dealership proprietor',
  email: 'abir.molla98@gmail.com',
  dealershipEmail: 'mssamadmollah@gmail.com',
  location: 'Bangladesh',
  studio: 'SMAN Global Nexus',
  dealership: 'M/S Abdus Samad Mollah',
  links: [
    { label: 'GitHub', href: 'https://github.com/abirmolla98-hash' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mobaeid-abir-151876395' },
    { label: 'X', href: 'https://x.com/abir_molla' },
    { label: 'Link page', href: 'https://mdmobaeidmollahabir.link/' },
  ],
} as const;

export const sections = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
] as const;

export const sectionIds = sections.map((section) => section.id);

export const filters = ['All', 'Agentic AI', 'Automation', 'Data Analytics', 'AgriTech'] as const;
export type Filter = (typeof filters)[number];
export type Category = Exclude<Filter, 'All'>;

export type ProjectStatus = 'Working build' | 'Partial' | 'Pre-launch' | 'Concept';
export type ProjectLayout = 'wide' | 'narrow' | 'band';
export type VisualId = 'mira' | 'smartchar' | 'giii' | 'pos' | 'analytics';

export interface Project {
  id: string;
  index: string;
  title: string;
  categories: Category[];
  status: ProjectStatus;
  summary: string;
  stack: string[];
  layout: ProjectLayout;
  visual: VisualId;
  href?: { label: string; url: string };
}

export const projects: Project[] = [
  {
    id: 'mira',
    index: '01',
    title: 'MIRA V4.1 — Autonomous AI Orchestrator',
    categories: ['Agentic AI'],
    status: 'Concept',
    summary:
      'MIRA is the name I use for an orchestrator that would coordinate multi-step AI work. I have described it through SMAN Global Nexus. The public repository under this name is empty, so this card is a direction, with a releasable build still ahead.',
    stack: ['Multi-step agents, intended', 'Tool use, intended'],
    layout: 'wide',
    visual: 'mira',
    href: { label: 'Repository, currently empty', url: 'https://github.com/abirmolla98-hash/Mira' },
  },
  {
    id: 'smartchar',
    index: '02',
    title: 'SmartChar — AI-Powered Agri-Finance',
    categories: ['AgriTech'],
    status: 'Pre-launch',
    summary:
      'SmartChar is a pre-launch framework for smallholder finance in the Jamuna floodplain. It combines field notes from 2023–2025 with ideas for farmer context, input traceability, and insurance-backed credit design. Lower non-performing loans are the aim. Measured portfolio results are still ahead of this work.',
    stack: ['Field research', 'Farmer context', 'Credit-risk design'],
    layout: 'narrow',
    visual: 'smartchar',
  },
  {
    id: 'giii',
    index: '03',
    title: 'GIII AI Sales Assistant',
    categories: ['Agentic AI', 'Automation'],
    status: 'Concept',
    summary:
      'GIII is a sales assistant I intend to place beside the dealership counter: explain a memo, recall a farmer’s recent purchases, and suggest a reorder. I have not published a repository or a working build for it yet.',
    stack: ['Counter assistant, intended', 'Dealership workflows'],
    layout: 'narrow',
    visual: 'giii',
  },
  {
    id: 'pos',
    index: '04',
    title: 'Fertilizer Sales & Inventory System',
    categories: ['Automation', 'AgriTech'],
    status: 'Working build',
    summary:
      'KrishiPOS is the offline-first sales and inventory system for M/S Abdus Samad Mollah in Gobindopur Bazar, Bhuapur. The public build covers the counter, bag and kilogram stock, government fertilizer rates, farmer ledgers, challans, and report exports. An optional Gemini route can read a cash memo or farmer slip. Without an API key, that route returns sample data.',
    stack: ['TypeScript', 'React', 'IndexedDB', 'Express', 'Gemini vision'],
    layout: 'wide',
    visual: 'pos',
    href: {
      label: 'View the repository',
      url: 'https://github.com/abirmolla98-hash/M-S-ABUDS-SAMAD-MOLLAH-',
    },
  },
  {
    id: 'analytics',
    index: '05',
    title: 'Business Analytics & Marketing Automation',
    categories: ['Data Analytics', 'Automation'],
    status: 'Partial',
    summary:
      'KrishiPOS already charts daily and weekly sales, category margin, and BCIC quota. Beside that software, I review the dealership’s urea stock registers and practice digital advertising. A public ad-pipeline repository exists and does not contain code yet.',
    stack: ['Sales dashboards', 'Stock registers', 'Ads practice'],
    layout: 'band',
    visual: 'analytics',
    href: {
      label: 'Ad-pipeline repository, no code yet',
      url: 'https://github.com/abirmolla98-hash/Ai-AD-pipline-',
    },
  },
];

export const statusLegend: { status: ProjectStatus; text: string }[] = [
  { status: 'Working build', text: 'Code in a public repository.' },
  { status: 'Partial', text: 'Part of it is built. The rest is practice.' },
  { status: 'Pre-launch', text: 'A framework being prepared.' },
  { status: 'Concept', text: 'A named direction, without a public build.' },
];

export const timeline = [
  {
    when: '1995',
    title: 'The dealership opens',
    text: 'M/S Abdus Samad Mollah is established in Gobindopur Bazar, Bhuapur, Tangail. I operate that BCIC and BADC fertilizer and pesticide counter today.',
  },
  {
    when: 'Studies',
    title: 'Electrical and electronic engineering',
    text: 'Sonargaon University. Dates are unpublished. The course is the systems base under the software.',
  },
  {
    when: '2023–2025',
    title: 'Jamuna floodplain field research',
    text: 'Land profiles, crop yields, and the places smallholder credit fails. This is the research behind SmartChar.',
  },
  {
    when: '2025',
    title: 'Seasonal stock records',
    text: 'Urea stock registers for the shop, June through December, read as a picture of the season.',
  },
  {
    when: '2026',
    title: 'Public software',
    text: 'SMAN Global Nexus, this portfolio, and the KrishiPOS build. SmartChar stays pre-launch. MIRA and GIII stay named as next systems.',
  },
];

export interface SkillGroup {
  index: string;
  title: string;
  text: string;
  tools: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    index: '01',
    title: 'AI & Machine Learning',
    text: 'Applied use of language and vision models on documents the counter already produces. I design prompts for cash memos, NID slips, and farmer notes through the Gemini API in KrishiPOS. MIRA and GIII are agentic directions, and they are labeled as concepts until a build exists. I do not present custom model training as part of this practice.',
    tools: ['Prompt design', 'Gemini vision', 'Agentic workflows', 'Document reading'],
  },
  {
    index: '02',
    title: 'Backend Development',
    text: 'The inventory system is a TypeScript application with an Express route for image analysis and a React interface in front of it. The API is small on purpose: accept an image, ask the model for structured farmer and item fields, and fall back to sample data when no key is configured.',
    tools: ['TypeScript', 'Node.js', 'Express', 'Vite'],
  },
  {
    index: '03',
    title: 'Data Analytics',
    text: 'Sales analytics live inside KrishiPOS: daily and weekly graphs, category margin, and quota tracking. The 2025 urea registers are a separate operating record of the shop. Python-based agricultural analysis is part of my public profile; a notebook is not published here.',
    tools: ['Sales dashboards', 'Margin review', 'Stock registers', 'Python, stated practice'],
  },
  {
    index: '04',
    title: 'Automation & Integrations',
    text: 'The working automation is operational: offline sales, cash and thermal memos, challan receiving, low-stock lists, and an SMS share flow in the inventory interface. Digital advertising on Meta and Google is practice I describe publicly, without campaign results on this site.',
    tools: ['Offline POS', 'Cash memos', 'SMS share', 'Digital ads practice'],
  },
  {
    index: '05',
    title: 'Databases & Infrastructure',
    text: 'KrishiPOS keeps products, movements, ledgers, and a sync queue in IndexedDB so the counter can sell when the connection drops. Settings include an offline backup file. I am not claiming a production cloud database for this system.',
    tools: ['IndexedDB', 'Local-first backup', 'Sync-status records'],
  },
];
