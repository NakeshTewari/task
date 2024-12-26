//importing dependencies
import {Request, Response} from "express";
import Transaction from "../models/Transaction";


//creating transaction function
export const createTransaction = async (req: Request, res: Response) =>{
    try{
        const transaction = new Transaction(req.body);
        await transaction.save();
        res.status(201).json(transaction);

    }
    catch(error){
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        } else {
            res.status(400).json({ error: "An unknown error occurred" });
         }
    }
};

// fetching transaction
export const getTransactions = async (req: Request, res: Response) =>{
    try{
        const transaction = await Transaction.find();
        res.status(200).json(transaction);

    }
    catch(error){
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: "An unknown error occurred" });
         }
    }
};

// updating transaction

export const updateTransaction = async (req: Request, res: Response) => {
    try {
      const transaction = await Transaction.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!transaction) return res.status(404).json({ error: "Not Found" });
      res.status(200).json(transaction);
    }
    catch(error){
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        } else {
            res.status(400).json({ error: "An unknown error occurred" });
         }
    }
  };

// deleting transactions
  export const deleteTransaction = async (req: Request, res: Response) => {
    try {
      const transaction = await Transaction.findByIdAndDelete(req.params.id);
      if (!transaction) return res.status(404).json({ error: "Not Found" });
      res.status(200).json({ message: "Deleted Successfully" });
    }

    catch(error){
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: "An unknown error occurred" });
         }
    }
  };