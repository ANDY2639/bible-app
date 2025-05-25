import { Version, VersionsSchema } from "@/domain/entity/Version/structure/version"

export const versionsAdapter = (data: unknown): Version[] => {
  const result = VersionsSchema.safeParse(data)

  if (!result.success) {
    return []
  }

  return result.data
}
