import { z } from "zod";

export const UserSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  avatar: z.string().url("Invalid avatar URL").optional(),
});