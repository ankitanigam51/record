  
import express from "express";

import salesController from "../controller/saleRecordController";

const router = express.Router();

router.post("/createRecord", salesController.createRecord);
router.get("/getRecord", salesController.getRecord);

export default router;