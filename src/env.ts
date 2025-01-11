import { z } from "zod"

const envSchemavalidator = z.object({
  NEXT_PUBLIC_API_URL: z.string().url(),
})

const parsedEnv = envSchemavalidator.safeParse(process.env)

if (!parsedEnv.success) {
  console.error(
    'Invalid environment variables:',
    parsedEnv.error.flatten().fieldErrors,
  )

  throw new Error('Invalid environment variables')
}

export const env = parsedEnv.data