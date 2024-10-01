export interface Size {
    id: number;
    uk: string;
    eu: string;
    us: string;
    saleCollections: {
      price: {
        formatted: string;
      };
    }[];
  }
  
  export interface Product {
    id: number;
    title: string;
    imageUrls: string[];
    sizes: Size[];
    styleCode: string;
    description: string;
    colour: string;
    releaseYear: number;
    fittingNotes: string;
    category: string;
    brand: {
      id: number;
      name: string;
      slug: string;
    };
  }
  
