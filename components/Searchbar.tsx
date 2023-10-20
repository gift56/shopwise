"use client";

import { useState, FormEvent } from "react";

const Searchbar = () => {
  const [searchPrompt, setSearchPrompt] = useState("");

  const isValidAmazonProductUrl = (url: string) => {
    try {
      const parsedUrl = new URL(url);
      const hostname = parsedUrl.hostname;

      // Checking if hostname contains amazon.com
      if (
        hostname.includes("amazon.com") ||
        hostname.includes("amazon.") ||
        hostname.endsWith("amazon")
      ) {
        return true;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValidLink = isValidAmazonProductUrl(searchPrompt);
    
  };

  return (
    <form className="flex flex-wrap gap-4 mt-12" onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchPrompt}
        onChange={(e) => setSearchPrompt(e.target.value)}
        placeholder="Search Product link"
        className="searchbar-input"
      />
      <button type="submit" className="searchbar-btn">
        Search
      </button>
    </form>
  );
};

export default Searchbar;
