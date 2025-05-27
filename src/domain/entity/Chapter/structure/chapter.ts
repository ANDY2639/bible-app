import { z } from "zod";
import { Verse, VersesSchema } from "@/domain/entity/Verse/structure/verse";

export const ChapterSchema = z.object({
  testament: z.string(),
  name: z.string(),
  num_chapters: z.number(),
  chapter: z.number(),
  vers: VersesSchema,
})

export const ChaptersSchema = z.array(ChapterSchema);

export type ChapterResponse = z.infer<typeof ChapterSchema>

export type Chapter = {
  testament: string;
  name: string;
  num_chapters: number;
  chapter: number;
  vers: Verse[];
}
