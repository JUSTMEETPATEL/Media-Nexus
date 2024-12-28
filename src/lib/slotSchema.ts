import { z } from "zod";

const slotSchema = z.object({
  // Name field
  name: z.string().min(3, "Your name must be at least 3 characters"),

  // WhatsApp Number field
  whatsappNumber: z
    .string()
    .length(10, "WhatsApp number must be exactly 10 digits"),

  // Email field
  email: z
    .string()
    .email("Invalid email format")
    .min(5, "Email is required"),

  // Course ID field
  courseId: z
    .string()
    .transform((val) => parseInt(val)) // Convert courseId to number
    .refine((val) => !isNaN(val), {
      message: "Invalid courseId, must be a valid number",
    }),

  // Slot ID field
  slotId: z
    .string()
    .transform((val) => parseInt(val)) // Convert slotId to number
    .refine((val) => !isNaN(val), {
      message: "Invalid slotId, must be a valid number",
    }),
});

export default slotSchema;
