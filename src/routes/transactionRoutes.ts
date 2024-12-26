import express from "express";
import {
  createTransaction,
  getTransactions,
  updateTransaction,
  deleteTransaction
} from "../controllers/transactionController";
import { authenticate } from "../middleware/auth";

const router = express.Router();

router.post("/transactions", authenticate, createTransaction);
router.get("/transactions", authenticate, getTransactions);
router.put("/transactions/:id", authenticate, updateTransaction);
router.delete("/transactions/:id", authenticate, deleteTransaction);

export default router;
