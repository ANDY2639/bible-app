import { z } from 'zod'

export const envVars = z.object({
  VITE_BIBLE_API: z.string().url(),
})

declare global {
  interface ImportMetaEnv extends z.infer<typeof envVars> {}
}

envVars.parse(import.meta.env)
