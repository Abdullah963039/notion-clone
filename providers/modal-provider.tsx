"use client";

import * as React from "react";

import { SettingsModal } from "@/components/modals/settings-modal";

export function ModalProvider() {
  const [monted, setMonted] = React.useState(false);

  React.useEffect(() => {
    setMonted(true);
  }, []);

  if (!monted) return null;

  return (
    <>
      <SettingsModal />
    </>
  );
}
