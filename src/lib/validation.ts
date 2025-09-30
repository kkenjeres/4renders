import { z, ZodIssue } from "zod";

export const feedbackSchema = z.object({
  message: z.string().min(2, "At least 2 characters").max(500, "Max 500 characters"),
  file: z
    .instanceof(File, { message: "File is required" })
    .refine((f) => f && f.size > 0, "File is required")
    .refine((f) => f.size <= 5 * 1024 * 1024, "Max file size is 5MB"),
});

export type FeedbackValues = z.infer<typeof feedbackSchema>;

export function zodIssuesToRecord(issues: ZodIssue[]) {
  const out: Record<string, string> = {};
  for (const i of issues) {
    const key = String(i.path[0] ?? "");
    if (key && !out[key]) out[key] = i.message;
  }
  return out;
}
