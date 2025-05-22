import { CategoryItem, PortfolioItem, TestimonialItem, CompanyLogo } from '../types';

export const categoriesData: CategoryItem[] = [
  { id: '1', name: 'BRYLLUP', imageUrl: 'https://picsum.photos/400/300?random=10' },
  { id: '2', name: 'MUSIKVIDEO', imageUrl: 'https://picsum.photos/400/300?random=11' },
  { id: '3', name: 'DOKUMENTAR', imageUrl: 'https://picsum.photos/400/300?random=12' },
  { id: '4', name: 'REKLAME', imageUrl: 'https://picsum.photos/400/300?random=13' },
];

export const portfolioData: PortfolioItem[] = [
  { id: 'p1', title: 'Evig Kærlighed: Bryllupsfilm', client: 'Familien Hansen', imageUrl: 'https://picsum.photos/600/400?random=20', category: 'BRYLLUP' },
  { id: 'p2', title: 'Artist X: Urban Echoes', client: 'Musiklabel Pladecompagniet', imageUrl: 'https://picsum.photos/600/400?random=24', category: 'MUSIKVIDEO' },
  { id: 'p3', title: 'Håndværkets Sjæl: Et Portræt', client: 'Kulturarv Styrelsen', imageUrl: 'https://picsum.photos/600/400?random=25', category: 'DOKUMENTAR' },
  { id: 'p4', title: 'Innovatech Produktlancering', client: 'Tech Corp', imageUrl: 'https://picsum.photos/600/400?random=23', category: 'REKLAME' },
  { id: 'p5', title: 'Sommerbryllup i det fri', client: 'Parret Jensen & Olsen', imageUrl: 'https://picsum.photos/600/400?random=26', category: 'BRYLLUP' },
  { id: 'p6', title: 'Ny Single: Stjernestøv', client: 'Sangerinde Aurora', imageUrl: 'https://picsum.photos/600/400?random=27', category: 'MUSIKVIDEO' },
  { id: 'p7', title: 'Byens Glemte Historier', client: 'Lokalhistorisk Forening', imageUrl: 'https://picsum.photos/600/400?random=28', category: 'DOKUMENTAR' },
  { id: 'p8', title: 'Nationalparkens Vildtliv', client: 'Naturstyrelsen', imageUrl: 'https://picsum.photos/600/400?random=29', category: 'DOKUMENTAR' },
];

export const testimonialsData: TestimonialItem[] = [
  { 
    id: 't1', 
    quote: "Fantastisk arbejde! Videoen fangede præcis den stemning vi ønskede. Professionelt og kreativt fra start til slut.", 
    author: 'Mette Jensen', 
    company: 'Blomster Haven ApS',
    imageUrl: 'https://picsum.photos/100/100?random=30&face' 
  },
  { 
    id: 't2', 
    quote: "Samarbejdet var en fornøjelse. Stor forståelse for vores brand og en imponerende evne til at omsætte ideer til virkelighed.", 
    author: 'Lars Nielsen', 
    company: 'Innovate Solutions',
    imageUrl: 'https://picsum.photos/100/100?random=31&face' 
  },
  { 
    id: 't3', 
    quote: "Resultatet overgik vores forventninger. Videoen har allerede skabt stor værdi for os. Kan varmt anbefales!", 
    author: 'Sofie Petersen', 
    company: 'Kreativt Kollektiv',
    imageUrl: 'https://picsum.photos/100/100?random=32&face' 
  },
];

export const companyLogosData: CompanyLogo[] = [
  { id: 'c1', name: 'Innovatech', logoUrl: 'https://picsum.photos/150/80?random=40&grayscale=1' },
  { id: 'c2', name: 'GreenScape', logoUrl: 'https://picsum.photos/150/80?random=41&grayscale=1' },
  { id: 'c3', name: 'Artisan Co.', logoUrl: 'https://picsum.photos/150/80?random=42&grayscale=1' },
  { id: 'c4', name: 'Future Foods', logoUrl: 'https://picsum.photos/150/80?random=43&grayscale=1' },
  { id: 'c5', name: 'Urban Living', logoUrl: 'https://picsum.photos/150/80?random=44&grayscale=1' },
];
