"use server";

export async function scrapeAndStoreProduct(productUrl: string) {
  if (!productUrl) return;

  try {
    
  } catch (error) {
   throw new Error(`Failed to create/update product: ${error.message}`) 
  }
}
