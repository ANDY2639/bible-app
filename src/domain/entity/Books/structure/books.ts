import { z } from "zod";

const BookSchema = z.object({
  abrev: z.string(),
  names: z.array(z.string()),
  chapters: z.number(),
  testament: z.string(),
})

export const BooksResponseSchema = z.array(BookSchema);

export type Book = z.infer<typeof BookSchema>