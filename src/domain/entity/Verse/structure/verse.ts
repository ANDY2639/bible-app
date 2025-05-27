import { z } from "zod";

export const VerseSchema = z.object({
  id: z.number(),
  verse: z.string(),
  number: z.number(),
  study: z.string().optional(),
})

export const VersesSchema = z.array(VerseSchema);

export type VerseResponse = z.infer<typeof VerseSchema>

export type Verse = {
  id: number,
  verse: string,
  number: number,
  study?: string,
}
