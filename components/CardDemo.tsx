"use client";
import { cn } from "@/lib/utils";

export function CardDemo() {
  return (
    <div className="flex flex-row gap-6">
      <a
        className="max-w-xs w-full group/card"
        target="_blank"
        href="https://github.com/yeella905/ForkNGo"
      >
        <div
          className={cn(
            " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
            "bg-[url(https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80)] bg-cover"
          )}
        >
          <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
          <div className="flex flex-row items-center space-x-4 z-10"></div>
          <div className="text content">
            <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
              Local Treasure
            </h1>
            <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
              A marketplace to help locals find what's beign sold and what
              events are happening nearby
            </p>
          </div>
        </div>
      </a>

      <a
        className="max-w-xs w-full group/card"
        href="https://github.com/sosehov/localtreasure"
        target="_blank"
      >
        <div
          className={cn(
            " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
            "bg-[url(https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80)] bg-cover"
          )}
        >
          <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
          <div className="flex flex-row items-center space-x-4 z-10"></div>
          <div className="text content">
            <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
              Fork n Go
            </h1>
            <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
              A website for a restaurant to allow online ordering
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}
