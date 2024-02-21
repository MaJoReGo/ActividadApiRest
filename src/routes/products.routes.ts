import { Router } from "express";
import {
  createProduct,
  updateProduct,
} from "../controllers/products.controller";
import { schemaValition } from "../middlewares/schemaValidator.middleware";
import {
  CreateProductSchema,
  UpdateProductSchema,
} from "../schemas/product.schema";

const router = Router();

/**
 * Ruta para crear un nuevo producto.
 * Se valida el cuerpo de la solicitud utilizando el esquema CreateProductSchema.
 * Se llama a la función createProduct del controlador de productos para manejar la solicitud.
 */

router.post("/products", schemaValition(CreateProductSchema), createProduct);
router.put("/products/:id", schemaValition(UpdateProductSchema), updateProduct);

/**
 * Ruta para actualizar un producto existente.
 * Se valida el cuerpo, los parámetros y la consulta de la solicitud utilizando el esquema UpdateProductSchema.
 * Se llama a la función updateProduct del controlador de productos para manejar la solicitud.
 */

export default router;