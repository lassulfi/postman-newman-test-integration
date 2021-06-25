export class InvalidInvestmentError extends Error {
    constructor(message: string) {
        super(message);
        Object.setPrototypeOf(this, InvalidInvestmentError.prototype);
    }
}