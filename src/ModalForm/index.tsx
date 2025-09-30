"use client";

import { useState } from "react";
import { feedbackSchema, zodIssuesToRecord } from "../lib/validation";
import { cn } from "../lib/utils";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../ui-kit/shadcn/dialog";
import { Label } from "../ui-kit/shadcn/label";
import { Input } from "../ui-kit/shadcn/input";
import { Button } from "../ui-kit/shadcn/button";

interface Props {
  className?: string;
}

export const ModalForm = ({ className }: Props) => {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus(null);
    setErrors({});

    const form = e.currentTarget as HTMLFormElement & {
      message: HTMLInputElement;
      file: HTMLInputElement;
    };

    const values = {
      message: form.message.value,
      file: form.file.files?.[0] ?? new File([], ""),
    };

    const parsed = feedbackSchema.safeParse(values);
    if (!parsed.success) {
      setErrors(zodIssuesToRecord(parsed.error.issues));
      return;
    }

    try {
      const data = new FormData(form);
      setStatus("Sending…");
      const res = await fetch("/api/feedback", { method: "POST", body: data });
      const json = await res.json();
      setStatus(`Done: ${json.message}`);
      form.reset();
      setOpen(false);
    } catch {
      setStatus("Failed to send.");
    }
  }

  return (
    <div className={cn(className)}>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button aria-haspopup="dialog">Open modal</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md" role="dialog" aria-modal="true">
          <DialogHeader>
            <DialogTitle>Send feedback</DialogTitle>
            <DialogDescription>Enter a message and attach a file.</DialogDescription>
          </DialogHeader>

          <form onSubmit={onSubmit} className="space-y-4" noValidate>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Input
                id="message"
                name="message"
                type="text"
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <p id="message-error" className="text-sm text-red-600">
                  {errors.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="file">File</Label>
              <Input
                id="file"
                name="file"
                type="file"
                aria-invalid={!!errors.file}
                aria-describedby={errors.file ? "file-error" : undefined}
              />
              {errors.file && (
                <p id="file-error" className="text-sm text-red-600">
                  {errors.file}
                </p>
              )}
              <p className="text-xs text-zinc-500">Max 5MB</p>
            </div>

            <div className="flex items-center gap-2">
              <Button type="submit">Send</Button>
              <Button type="button" variant="secondary" onClick={() => setOpen(false)}>
                Cancel
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
      {status && <p className="mt-2 text-sm text-zinc-600">{status}</p>}
    </div>
  );
};
