import express, { Request, Response } from "express";
import { InvalidInvestmentError } from "../models/exceptions/invalidInvestiment";
import { InvestmentInterface } from "../models/investment.interface";
import * as CompoundInterestService from '../services/compoundInterest.service';

export const compoundInterestRouter = express.Router();

compoundInterestRouter.post("/", async (req: Request, res: Response) => {
    try {
        const investmentDto: InvestmentInterface = req.body;
        const compoundInterest = await CompoundInterestService.calculateAmount(investmentDto);

        res.status(200).send(compoundInterest);
    } catch (error) {
        if (error instanceof InvalidInvestmentError) {
            res.status(422);
        } else {
            res.status(500);
        }
        res.send({message: error.message});
    }
})