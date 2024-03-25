import * as z from 'zod'

export const LoginSchema = z.object({
  email: z.string().min(1,"Email is Required").email(),
  password: z.string().min(6, "Password should have atleast 6 characters").max(50),
})

export const RegisterSchema = z.object({
  name: z.string().min(1,"Name is Required"),
  email: z.string().min(1,"Email is Required").email(),
  password: z.string().min(6, "Password should have atleast 6 characters").max(50),
})