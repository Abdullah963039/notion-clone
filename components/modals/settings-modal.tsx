"use client";

import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { ToggleMode } from "@/components/ui/toggle-mode";
import { useSettings } from "@/hooks/use-settings";

export function SettingsModal() {
  const isOpen = useSettings((store) => store.isOpen);
  const onClose = useSettings((store) => store.onClose);

  return (
    <Dialog onOpenChange={onClose} open={isOpen}>
      <DialogContent>
        <DialogHeader className="border-b pb-3">
          <h2 className="text-lg font-medium">My Settings</h2>
        </DialogHeader>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-1">
            <Label>Appearance</Label>
            <span className="text-[0.8rem] text-muted-foreground">
              Customize how Jotion looks on your device
            </span>
          </div>

          <ToggleMode />
        </div>
      </DialogContent>
    </Dialog>
  );
}
