"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Star, Search } from "lucide-react";
import { books } from "@/data/books";
import { cn } from "@/lib/utils";
import { BookCover } from 'book-cover-3d'
import { Input } from "@/components/ui/input";

export default function PortfolioGrid() {
   const [selectedCategory, setSelectedCategory] = useState("All");
   const [searchQuery, setSearchQuery] = useState("");

   // Get unique categories (genres) from the data
   const categories = ["All", ...Array.from(new Set(books.map(b => b.category)))];

   const filteredBooks = useMemo(() => {
      return books.filter(book => {
         const matchesCategory = selectedCategory === "All" || book.category === selectedCategory;
         const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase());
         return matchesCategory && matchesSearch;
      });
   }, [selectedCategory, searchQuery]);

   const sidebarBooks = books.slice(0, 4);

   return (
      <section className="bg-background pb-24 lg:pb-32">
         <div className="container mx-auto px-6 lg:px-12">

            {/* Main Content: Sidebar + Grid */}
            <div className="flex flex-col gap-12 lg:flex-row">

               {/* Sidebar: New Release */}
               <aside className="w-full shrink-0 lg:w-80">
                  <div className="rounded-t-sm bg-accent px-6 py-4">
                     <h4 className="font-heading text-xl font-bold text-primary-foreground">New Release</h4>
                  </div>
                  <div className="border border-t-0 border-border bg-white divide-y divide-border shadow-sm">
                     {sidebarBooks.map((book) => (
                        <div key={book.id} className="flex gap-4 p-5 transition-colors hover:bg-muted/30">
                           <div className="relative h-24 w-16 shrink-0 shadow-md">
                              <Image src={book.image} alt={book.title} fill className="object-contain" />
                           </div>
                           <div className="flex flex-col justify-between py-1">
                              <div>
                                 <h5 className="text-[15px] font-bold leading-tight line-clamp-2">{book.title}</h5>
                                 <p className="text-[11px] text-muted-foreground mt-1">by {book.author}</p>
                              </div>
                              <button className="text-[10px] font-bold underline decoration-accent text-accent">Read more</button>
                           </div>
                        </div>
                     ))}
                  </div>
               </aside>

               {/* Main Grid: Our Published Work */}
               <div className="flex-1 space-y-10">
                  <div className="flex items-center justify-between">
                     <h4 className="font-heading text-3xl font-bold text-foreground">
                        Our Published Work
                     </h4>
                     <span className="text-sm font-medium text-muted-foreground">
                        Showing {filteredBooks.length} titles
                     </span>
                  </div>x
                  {/* Filter Section */}
                  <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between border-b border-border pb-8">
                     <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => (
                           <button
                              key={cat}
                              onClick={() => setSelectedCategory(cat)}
                              className={cn(
                                 "px-5 py-2 text-sm font-bold transition-all rounded-full border",
                                 selectedCategory === cat
                                    ? "bg-accent border-accent text-primary-foreground shadow-lg"
                                    : "bg-white border-border text-muted-foreground hover:border-accent hover:text-accent"
                              )}
                           >
                              {cat}
                           </button>
                        ))}
                     </div>

                     <div className="relative w-full max-w-sm">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                        <Input
                           placeholder="Search by book title..."
                           className="pl-10 h-11 border-border focus-visible:ring-accent"
                           value={searchQuery}
                           onChange={(e) => setSearchQuery(e.target.value)}
                        />
                     </div>
                  </div>

                  {filteredBooks.length > 0 ? (
                     <div className="grid grid-cols-2 gap-x-12 gap-y-16 md:grid-cols-4">
                        {filteredBooks.map((book) => (
                           <div key={book.id} className="group space-y-4">
                              <div className="relative transition-transform duration-500 group-hover:-translate-y-2">
                                 <BookCover>
                                    <img src={book.image.src} alt={book.title} />
                                 </BookCover>
                              </div>
                              <div className="space-y-1 px-1 text-center sm:text-left">
                                 <div className="flex items-center justify-center sm:justify-start gap-0.5 text-accent">
                                    {[...Array(5)].map((_, i) => (
                                       <Star key={i} className={cn("size-3 fill-current", i >= Math.floor(book.rating) && "opacity-20")} />
                                    ))}
                                    <span className="ml-1 text-[10px] font-bold text-muted-foreground">{book.rating.toFixed(1)}</span>
                                 </div>
                                 <h5 className="text-[14px] font-bold leading-tight line-clamp-1">{book.title}</h5>
                                 <p className="text-[11px] text-muted-foreground italic">by {book.author}</p>
                                 <button className="text-[10px] font-bold underline decoration-border pt-1 transition-colors hover:text-accent hover:decoration-accent">Read more</button>
                              </div>
                           </div>
                        ))}
                     </div>
                  ) : (
                     <div className="py-20 text-center">
                        <p className="text-lg text-muted-foreground">No books found matching your criteria.</p>
                     </div>
                  )}
               </div>

            </div>
         </div>
      </section>
   );
}
