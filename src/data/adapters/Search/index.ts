import { SearchResponse, SearchResponseSchema } from "@/domain/entity/Search/structure/search"

export const searchAdapter = (response: unknown): SearchResponse => {
  const result = SearchResponseSchema.safeParse(response)

  if (!result.success) {
    return {
      data: [],
      meta: {
        page: 0,
        pageSize: 0,
        total: 0,
        pageCount: 0,
      }
    }
  }

  return result.data
}