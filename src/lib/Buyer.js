export default class Buyer {
    constructor () {
        this.debt = 0.0;
        this.income = 0.0;
        this.mortgage = 0.0;
        this.down_payment = 0.0;
        this.loan_amount = 0.0;
        this.credit = 0;
        this.savings = 0.0;
    }
    

    check () {
        if (this.income <= 0.0) {
            return ['income']
        }

        if (this.down_payment < 0) {
            return ['error']
        }

        if (this.mortgage < 0) {
            return ['error']
        }

        if (this.loan_amount < 0) {
            return ['error']
        }

        if (this.debt < 0) {
            return ['error']
        }

        let reasons = [];

        // credit check
        if (this.credit < 640) {
            reasons.push('credit');
        }

        // LTV check
        if (((this.loan_amount - this.down_payment) / (this.loan_amount)) > 0.80) {
            reasons.push('ltv')
        }

        // DTI check
        if ((this.mortgage + this.debt) / (this.income) > 0.36) {
            reasons.push('dti');
        }

        // FEDTI check
        if ((this.mortgage / (this.income)) > 0.28) {
            reasons.push('fedti');
        }

        return reasons;
    }

}