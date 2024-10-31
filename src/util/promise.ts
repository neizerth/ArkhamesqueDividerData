export const retry = async <T>(callback: () => Promise<T>, tries = 3) => {
  for (let i = 0; i < tries; i++) {
    try {
      return await callback();
    }
    catch (error) {
      console.error(`Failed to execute callback, retrying... (${i+1}/${tries})`, error);
      await delay(i * 2 + 100);

      if (i === tries - 1) {
        throw error;
      }
    }
  }
}

export const delay = (ms: number) => 
  new Promise(resolve => setTimeout(resolve, ms));