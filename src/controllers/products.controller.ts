import { Request, Response } from "express";
import {
  CreateProductType,
  UpdateProductBodyType,
  UpdateProductParamsType,
  UpdateProductQueryType,
} from "../schemas/product.schema";

export const createProduct = (
  req: Request<unknown, unknown, CreateProductType>,
  res: Response
) => {
    // Extrae el nombre y el precio del cuerpo de la solicitud.
  const { name, price } = req.body;
  // Envía una respuesta indicando que se está creando el producto.
  res.send("creating product");
};

export const updateProduct = (
  req: Request<
    UpdateProductParamsType,
    unknown,
    UpdateProductBodyType,
    UpdateProductQueryType
  >,
  res: Response
) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const { title } = req.query;

  console.log(id, name, price, title);
  res.send("updating product");
};