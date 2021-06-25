import { InvalidInvestmentError } from "./exceptions/invalidInvestiment";

export interface InvestmentInterface {
    principal: number,
    interestRate: number,
    numberOfInstallments: number,
    time: number
}

export class Investment {
    private state: InvestmentInterface = {
        principal: 0,
        interestRate: 0,
        numberOfInstallments: 0,
        time: 0
    };

    get principal() {
        return this.state.principal;
    }

    get interestRate() {
        return this.state.interestRate;
    }

    get numberOfInstallments() {
        return this.state.numberOfInstallments;
    }

    get time() {
        return this.state.time;
    }

    constructor(investmentDto: InvestmentInterface) {
        this.setPrincipal(investmentDto.principal);
        this.setInterestRate(investmentDto.interestRate);
        this.setNumberOfInstallments(investmentDto.numberOfInstallments);
        this.setTime(investmentDto.time);
    }

    setPrincipal(principal: number) {
        if (this.isValidPositiveParameter(principal, 'principal'))
            this.state.principal = principal;
    }

    setInterestRate(interestRate: number) {
        if (this.isValidPositiveParameter(interestRate, 'interestRate')) 
            this.state.interestRate = interestRate;
    }

    setNumberOfInstallments(numberOfInstallments: number) {
        if (this.isValidPositiveParameter(numberOfInstallments, 'numberOfInstallments'))
            this.state.numberOfInstallments = numberOfInstallments;
    }

    setTime(time: number) {
        if (this.isValidPositiveParameter(time, 'time')) 
            this.state.time = time;
    }
    
    private isValidPositiveParameter(parameter: any, name: string): boolean {

        if (parameter <= 0) {
            throw new InvalidInvestmentError(`The parameter ${name} must be greater than 0`);
        }

        return true;
    }
}