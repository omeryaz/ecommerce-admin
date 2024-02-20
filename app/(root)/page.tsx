"use client";

import { Button } from "@/components/ui/button";
import { useStoreModal } from "@/hooks/use-store-modal";
import { UserButton } from "@clerk/nextjs";
import { useEffect } from "react";

export default function Home() {
  const { isOpen, onOpen } = useStoreModal();

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);
  return (
    <div>
      <p>Hello Admin Dashboard</p>
      <Button variant="secondary">Click me</Button>
      {/* <UserButton afterSignOutUrl="/" /> */}
    </div>
  );
}
