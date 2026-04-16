import cover1 from "@/app/assets/books/Book-1.png";
import cover2 from "@/app/assets/books/Book-2.png";
import cover3 from "@/app/assets/books/Book-3.png";
import cover4 from "@/app/assets/books/Book-4.png";
import cover5 from "@/app/assets/books/Book-5.png";
import cover6 from "@/app/assets/books/Book-6.png";

export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  service: "Writing" | "Publishing" | "Design" | "Editing";
  category: string;
  rating: number;
  image: any;
  link: string;
}

export const books: Book[] = [
  {
    id: "1",
    title: "The Superior Mind",
    author: "Dr. Michael",
    description: "A profound journey into mental liberation and cognitive potential.",
    service: "Writing",
    category: "Mental Health",
    rating: 5,
    image: cover1,
    link: "/portfolio/superior-mind",
  },
  {
    id: "2",
    title: "Exposing The Matrix",
    author: "Neptune S.",
    description: "Uncovering the digital shadows of our modern surveillance state.",
    service: "Publishing",
    category: "Cybersecurity",
    rating: 4.8,
    image: cover2,
    link: "/portfolio/exposing-matrix",
  },
  {
    id: "3",
    title: "The Vanishing",
    author: "S.H. Harris",
    description: "A whimsical tale of a world that begins to disappear into white.",
    service: "Design",
    category: "Fantasy",
    rating: 4.9,
    image: cover3,
    link: "/portfolio/vanishing",
  },
  {
    id: "4",
    title: "Courageous Women",
    author: "Dr. Melanie C.",
    description: "Powerful stories of leadership and resilience from global female leaders.",
    service: "Writing",
    category: "Biography",
    rating: 5,
    image: cover4,
    link: "/portfolio/courageous-women",
  },
  {
    id: "5",
    title: "Stem Education",
    description: "Cultivating the next generation of scientific minds in African communities.",
    author: "Dr. Michael",
    service: "Editing",
    category: "Education",
    rating: 4.7,
    image: cover5,
    link: "/portfolio/stem-education",
  },
  {
    id: "6",
    title: "Legacy of Shadows",
    author: "Tony Grijalva",
    description: "A gritty noir mystery that dives deep into the heart of a rainy metropolis.",
    service: "Design",
    category: "Mystery",
    rating: 4.6,
    image: cover6,
    link: "/portfolio/legacy-shadows",
  },
];
