import express, { Request, Response } from "express";
import { InvestmentInterface } from "../models/investment.interface";
import * as CompoundInterestService from '../services/compoundInterest.service';

export const compoundInterestRouter = express.Router();

compoundInterestRouter.post("/", async (req: Request, res: Response) => {
    try {
        const investmentDto: InvestmentInterface = req.body;
        const compoundInterest = await CompoundInterestService.calculateAmount(investmentDto);

        res.status(200).send(compoundInterest);
    } catch (error) {
        res.status(500).send(error.message);
    }
})