import * as Yup from "yup";

export const ProductSchema = Yup.object({
  id: Yup.string(),
  title: Yup.string().required().default(""),
  description: Yup.string().default(""),
  price: Yup.number().positive().required().defined().default(0),
  count: Yup.number(),
});

export const AvailableProductSchema = ProductSchema.shape({
  products: ProductSchema,
});

export const AvailableProductsSchema = Yup.object({
  Count: Yup.number(),
  Items: Yup.array().of(ProductSchema),
});

export type Product = Yup.InferType<typeof ProductSchema>;
export type AvailableProduct = Yup.InferType<typeof AvailableProductSchema>;
export type AvailableProducts = Yup.InferType<typeof AvailableProductsSchema>;
