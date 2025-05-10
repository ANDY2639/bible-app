import { z } from "zod";

export const BookSchema = z.object({
  abrev: z.string(),
  names: z.array(z.string()),
  chapters: z.number(),
  testament: z.string(),
})

export const BooksSchema = z.array(BookSchema);

export type Book = z.infer<typeof BookSchema>
