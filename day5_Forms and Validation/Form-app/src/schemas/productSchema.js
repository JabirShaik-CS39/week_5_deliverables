import { z } from "zod";

export const productSchema = z.object({
  title: z
    .string()
    .min(3, "Product title must be at least 3 characters"),

  description: z
    .string()
    .min(10, "Description must be at least 10 characters"),

  price: z.coerce
    .number()
    .positive("Price must be greater than 0"),

  stock: z.coerce
    .number()
    .min(0, "Stock cannot be negative"),

  category: z
    .string()
    .min(1, "Category is required"),
});