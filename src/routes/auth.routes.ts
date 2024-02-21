import { Router } from "express";
import { login } from "../controllers/auth.controller";
import { schemaValition } from "../middlewares/schemaValidator.middleware";
import {loginSchema} from '../schemas/auth.schema'

const router = Router();

/**
 * Ruta para el inicio de sesión de usuario.
 * Se valida el cuerpo de la solicitud utilizando el esquema loginSchema.
 * Se llama a la función login del controlador de autenticación para manejar la solicitud.
 */

router.post("/login", schemaValition(loginSchema), login);

export default router;