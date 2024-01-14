import { z } from 'zod';

export const registerUserValidator = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
  email: z.string().email("Please provide valid email address")
});
