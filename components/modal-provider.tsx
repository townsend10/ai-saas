"use client";

import { useEffect, useState } from "react";
import ProModal from "@/components/pro-modal";

const ModalProvider = () => {
  const [mounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <>
      <ProModal />
    </>
  );
};

export default ModalProvider;
