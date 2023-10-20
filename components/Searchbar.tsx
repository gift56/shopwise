"use client";

import { useState, FormEvent } from "react";
import toast from "react-hot-toast";

const Searchbar = () => {
  const [searchPrompt, setSearchPrompt] = useState("");
  const [loading, setLoading] = useState(false);

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
    if (!isValidLink) {
      return toast.error("Please provide a valid Amazon link");
    }

    try {
      setLoading(true);

      
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
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
      <button
        disabled={loading || searchPrompt === ""}
        type="submit"
        className="searchbar-btn"
      >
        {loading ? "Searching..." : "Search"}
      </button>
    </form>
  );
};

export default Searchbar;
