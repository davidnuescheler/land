declare global {
  interface Window { 
    pages: PagesNamespace; 

  }
}

interface PagesNamespace {
  product: string;
  locale: string; 
  project: string;
}

export {};