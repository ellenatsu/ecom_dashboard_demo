"use client";

import { useEffect, useState } from "react";

export const ModalProvider = () => {
    //to avoid hydration error for server and client rendering difference
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if(!isMounted) return null;
}