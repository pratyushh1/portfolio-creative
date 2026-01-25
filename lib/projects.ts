export interface Project {
  id: string;
  title: string;
  client: 'Tech Burner' | 'Overlays Clothing' | 'Open Letter' | 'Other';
  category: 'Reels' | 'Shorts' | 'Social Cut';
  thumbnail: string;
  videoUrl?: string;
  description: string;
  driveUrl: string;
  metrics?: {
    views?: string;
    retention?: string;
  };
}

export const projects: Project[] = [
  // Tech Burner Projects
  {
    id: 'tb-1',
    title: 'Tech Short #1',
    client: 'Tech Burner',
    category: 'Shorts',
    thumbnail: '/thumbnails/tb-1.jpg',
    videoUrl: 'https://www.youtube.com/shorts/S4xCSEHNE2s',
    description: 'Fast-paced tech content with hook-driven editing',
    driveUrl: 'https://drive.google.com/drive/u/1/folders/1HEmZ1FrxnDuIuOOYP0z5YrcMYa-tboyc',
    metrics: {
      views: '2.5M',
      retention: '89%',
    },
  },
  {
    id: 'tb-2',
    title: 'Tech Short #2',
    client: 'Tech Burner',
    category: 'Shorts',
    thumbnail: '/thumbnails/tb-2.jpg',
    videoUrl: 'https://www.youtube.com/shorts/13WoNcstv8E',
    description: 'High-energy comparison with attention-grabbing hooks',
    driveUrl: 'https://drive.google.com/drive/u/1/folders/1HEmZ1FrxnDuIuOOYP0z5YrcMYa-tboyc',
    metrics: {
      views: '1.8M',
      retention: '92%',
    },
  },
  {
    id: 'tb-3',
    title: 'Tech Short #3',
    client: 'Tech Burner',
    category: 'Shorts',
    thumbnail: '/thumbnails/tb-3.jpg',
    videoUrl: 'https://www.youtube.com/shorts/KsNGBIfo8_E',
    description: 'Cinematic showcase with smooth transitions',
    driveUrl: 'https://drive.google.com/drive/u/1/folders/1HEmZ1FrxnDuIuOOYP0z5YrcMYa-tboyc',
  },
  {
    id: 'tb-4',
    title: 'Tech Short #4',
    client: 'Tech Burner',
    category: 'Shorts',
    thumbnail: '/thumbnails/tb-4.jpg',
    videoUrl: 'https://www.youtube.com/shorts/9uO3Vhn4biU',
    description: 'Quick cuts with compelling narrative flow',
    driveUrl: 'https://drive.google.com/drive/u/1/folders/1HEmZ1FrxnDuIuOOYP0z5YrcMYa-tboyc',
  },
  {
    id: 'tb-5',
    title: 'Tech Short #5',
    client: 'Tech Burner',
    category: 'Shorts',
    thumbnail: '/thumbnails/tb-5.jpg',
    videoUrl: 'https://www.youtube.com/shorts/Ih0m7fWZHFQ',
    description: 'Viral tech content optimized for retention',
    driveUrl: 'https://drive.google.com/drive/u/1/folders/1HEmZ1FrxnDuIuOOYP0z5YrcMYa-tboyc',
  },
  {
    id: 'tb-6',
    title: 'Tech Short #6',
    client: 'Tech Burner',
    category: 'Shorts',
    thumbnail: '/thumbnails/tb-6.jpg',
    videoUrl: 'https://www.youtube.com/shorts/XML5Plb2Upw',
    description: 'Scroll-stopping edit with maximum impact',
    driveUrl: 'https://drive.google.com/drive/u/1/folders/1HEmZ1FrxnDuIuOOYP0z5YrcMYa-tboyc',
  },

  // Overlays Clothing Projects
  {
    id: 'oc-1',
    title: 'YouTube Long-Form Content',
    client: 'Overlays Clothing',
    category: 'Social Cut',
    thumbnail: '/thumbnails/oc-1.jpg',
    videoUrl: 'https://www.youtube.com/@OverlaysNow',
    description: 'Managed their YouTube presence, turning fabric and fashion into content people actually want to watch',
    driveUrl: 'https://drive.google.com/drive/folders/your-folder-id',
    metrics: {
      views: '500K+',
      retention: '88%',
    },
  },
  {
    id: 'oc-2',
    title: 'Instagram Content Strategy',
    client: 'Overlays Clothing',
    category: 'Reels',
    thumbnail: '/thumbnails/oc-2.jpg',
    description: 'Built their entire Instagram presence—showcasing clothing drops, brand stories, and everything in between',
    driveUrl: 'https://drive.google.com/drive/folders/your-folder-id',
    metrics: {
      views: '1.2M',
      retention: '92%',
    },
  },
  {
    id: 'oc-3',
    title: 'Product Showcase Series',
    client: 'Overlays Clothing',
    category: 'Shorts',
    thumbnail: '/thumbnails/oc-3.jpg',
    videoUrl: 'https://www.youtube.com/@OverlaysNow',
    description: 'Managed their social cuts to display new drops and collections with that scroll-stopping energy',
    driveUrl: 'https://drive.google.com/drive/folders/your-folder-id',
  },
  {
    id: 'oc-4',
    title: 'Brand Content Management',
    client: 'Overlays Clothing',
    category: 'Social Cut',
    thumbnail: '/thumbnails/oc-4.jpg',
    description: 'Complete social media management—from concept to upload, keeping their feed fresh and their audience engaged',
    driveUrl: 'https://drive.google.com/drive/folders/your-folder-id',
  },
  {
    id: 'oc-5',
    title: 'Collection Launch Series',
    client: 'Overlays Clothing',
    category: 'Shorts',
    thumbnail: '/thumbnails/oc-5.jpg',
    description: "Produced launch content that made people care about clothing they hadn't even seen yet",
    driveUrl: 'https://drive.google.com/drive/folders/your-folder-id',
  },
  {
    id: 'oc-6',
    title: 'Social Media Highlights',
    client: 'Overlays Clothing',
    category: 'Reels',
    thumbnail: '/thumbnails/oc-6.jpg',
    description: 'Curated their best moments into reels that actually represented the brand',
    driveUrl: 'https://drive.google.com/drive/folders/your-folder-id',
  },

  // Open Letter Projects
  {
    id: 'ol-1',
    title: 'Brand Story - Episode 1',
    client: 'Open Letter',
    category: 'Social Cut',
    thumbnail: '/thumbnails/ol-1.jpg',
    videoUrl: 'https://example.com/video3.mp4',
    description: 'Emotional storytelling with premium pacing',
    driveUrl: 'https://drive.google.com/drive/u/1/folders/1xy8Z05nJ0rXmHoBb6y_pnpY4yE_ZW2VE',
    metrics: {
      views: '850K',
      retention: '94%',
    },
  },
  {
    id: 'ol-2',
    title: 'Creator Insights',
    client: 'Open Letter',
    category: 'Reels',
    thumbnail: '/thumbnails/ol-2.jpg',
    description: 'Interview-style edit with dynamic B-roll',
    driveUrl: 'https://drive.google.com/drive/u/1/folders/1xy8Z05nJ0rXmHoBb6y_pnpY4yE_ZW2VE',
  },
  {
    id: 'ol-3',
    title: 'Behind the Scenes',
    client: 'Open Letter',
    category: 'Shorts',
    thumbnail: '/thumbnails/ol-3.jpg',
    description: 'Raw, authentic moments with subtle enhancements',
    driveUrl: 'https://drive.google.com/drive/u/1/folders/1xy8Z05nJ0rXmHoBb6y_pnpY4yE_ZW2VE',
  },
  {
    id: 'ol-4',
    title: 'Product Launch Teaser',
    client: 'Open Letter',
    category: 'Social Cut',
    thumbnail: '/thumbnails/ol-4.jpg',
    videoUrl: 'https://example.com/video4.mp4',
    description: 'Hype-building edit with strategic reveals',
    driveUrl: 'https://drive.google.com/drive/u/1/folders/1xy8Z05nJ0rXmHoBb6y_pnpY4yE_ZW2VE',
  },
];

export const getProjectsByClient = (client: string) => {
  if (client === 'All') return projects;
  return projects.filter((project) => project.client === client);
};

export const getProjectsByCategory = (category: string) => {
  if (category === 'All') return projects;
  return projects.filter((project) => project.category === category);
};
