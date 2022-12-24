import { BankAccount } from "./bank-account";
import { Constants } from "./constants";
import { AccountType } from "./enums";
import { AccountInfo, AccountSettings } from "./interfaces";

export class SavingsAccount extends BankAccount {
   
    private _interestRate: number;
    accountType= AccountType.Savings;

    constructor(accountSettings: AccountSettings){
        super(accountSettings);
        this._interestRate=accountSettings.interestRate;
        setInterval(()=>{
            this.addInterest();
        }, 10000);
    }
    private addInterest() {
        this.balance = this.balance + (this.balance * (this._interestRate / 100));
    }

    deposit(amount: number){
        let newAmount = amount + (amount * (this._interestRate /100));
        this.balance += newAmount; 
    }

    getAccountInfo(): AccountInfo<string, number>  {
        return {
            routingNumber: Constants.ROUTING_NUMBER,
            bankNumber:Constants.BANK_NUMBER
        }
    }
}