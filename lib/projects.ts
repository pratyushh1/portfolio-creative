export interface Project {
  id: string;
  title: string;
  client: 'Tech Burner' | 'Open Letter' | 'Other';
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
