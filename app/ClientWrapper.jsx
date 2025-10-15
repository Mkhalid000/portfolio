"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import ClientTopProgressBar from "@/components/ClientTopProgressBar";

export default function ClientWrapper({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <ClientTopProgressBar />
      <Navbar />
      {children}
    </>
  );
}
