import { z } from "zod";

export type Parameters = {
  q: string
  testament?: "old" | "new" | "both"
  take?: number
  page?: number
}

export const VerseFoundSchema = z.object({
  id: z.number(),
  book: z.string(),
  verse: z.string(),
  number: z.number(),
  chapter: z.number(),
  study: z.string().nullable(),
})

export const MetaPaginationSchema = z.object({
  page: z.number(),
  pageSize: z.number(),
  total: z.number(),
  pageCount: z.number(),
})

export const SearchResponseSchema = z.object({
  data: z.array(VerseFoundSchema),
  meta: MetaPaginationSchema,
})

export type SearchResponse = z.infer<typeof SearchResponseSchema>
