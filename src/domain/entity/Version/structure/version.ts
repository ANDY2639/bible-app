import { z } from "zod";

export const VersionSchema = z.object({
  name: z.string(),
  version: z.string(),
  uri: z.string(),
})

export const VersionsSchema = z.array(VersionSchema);

export type VersionResponse = z.infer<typeof VersionSchema>

export type Version = {
  name: string;
  version: string;
  uri: string;
}
