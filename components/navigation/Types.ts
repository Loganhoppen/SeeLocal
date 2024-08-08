// src/types.ts
export type RootStackParamList = {
    Home: undefined;
    Bookingpage: { item: Item };
    EventDetails: { event: Item };
    BookingRequest: { event: Item };
  };
  
  export type Item = {
    id: string;
    title: string;
    date: string;
    image: string[]; 
    friends: string[];
    description: string;
    price: string;
    rating: number;
    difficulty: string;
    distance: string;
  };
  
  