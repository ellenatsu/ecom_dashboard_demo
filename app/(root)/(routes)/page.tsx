"use client";
import { UserButton } from "@clerk/nextjs";

import { useStoreModal } from "@/hooks/use-store-modal";
import { useEffect } from "react";

const SetupPage = () => {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return null;

//   return (
//     <div className="p-4">
//       This is the root page
//       <UserButton afterSignOutUrl="/" />
//       <button onClick={onOpen}>Open Modal</button>
//     </div>
//   );
};

export default SetupPage;