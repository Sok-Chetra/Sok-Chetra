import { z } from "zod"

const messageScheme = z.object({
  email: z.string().email(),
  message: z.string().max(225),
})

export {
  messageScheme
}