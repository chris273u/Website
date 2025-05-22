
export interface CategoryItem {
  id: string;
  name: string;
  imageUrl: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  client?: string;
  imageUrl: string;
  category: string; // e.g., "Natur", "Interview", "BTS"
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  company?: string;
  imageUrl: string;
}

export interface CompanyLogo {
  id: string;
  name: string;
  logoUrl: string;
}
