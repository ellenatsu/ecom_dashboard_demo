import { useEffect, useState } from "react";

/*
The initial render on the server will not execute the code inside useEffect, so mounted will be false. 
This ensures that the server-rendered content doesn't include any client-specific data and matches the initial client render.

Once the component mounts on the client, useEffect runs, setting mounted to true. 
This triggers a re-render with access to the window object, and the origin is then correctly set and returned.
*/
export const useOrigin = () => {
  const [mounted, setMounted] = useState(false);
  //check window
  const origin = typeof window !== "undefined" ? window.location.origin : "";

  //using useEffect ensures that any code that relies on the browser environment runs only on the client side
  useEffect(() => {
    //after the component mounts, which means after the client-side hydration is complete
    setMounted(true);
  }, []);

  //during the server render, avoid returning any value that relies on the window object.
  if (!mounted) return "";

  return origin;
};
