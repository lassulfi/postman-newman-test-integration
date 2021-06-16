import { Investment, InvestmentInterface } from "../models/investment.interface";
import { CompoundInterest } from "../models/compoundInterest.interface";

export const calculateAmount = async (investmentDto: InvestmentInterface): Promise<CompoundInterest> => {

    const compoundInterest: CompoundInterest = {
        amount: 0
    }
    const investment: Investment = new Investment(investmentDto);

    const p = investment.principal;
    const r = investment.interestRate / 100;
    const n = investment.numberOfInstallments;
    const t = investment.time;

    compoundInterest.amount = Math.round((amount(p, r, n, t) + Number.EPSILON) * 100) / 100;

    return compoundInterest;
}

const amount = (p: number, r: number, n: number, t: number)  => {
    const x = 1 + r/n;
    const y = n * t;
    return p * Math.pow(x, y);
};