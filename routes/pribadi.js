// import express
import express from "express";
import { readPribadi } from "../controllers/Pribadi.js";
// init express router
const router = express.Router();

router.get('/', readPribadi);

// export default router
export default router;