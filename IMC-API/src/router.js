import { Router } from "express";
import controllerUsuario from "./controllers/controller.usuario.js";

const router = Router();


router.post("/users/register", controllerUsuario.PrimeiroAcesso);
router.post("/users/login", controllerUsuario.Login);



export default router;
