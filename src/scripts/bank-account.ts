import { AccountType } from "./enums";
import { Account, AccountSettings } from "./interfaces";



export abstract class BankAccount implements Account {
    private _balance = 0;//field
    id: number;
    title: string;
    abstract accountType: AccountType;
  
    constructor(accountSettings: AccountSettings) {
        this.id= accountSettings.id;
        this.title= accountSettings.title;
        this.balance= accountSettings.balance;
     }
  
    get balance(): number {
      return this._balance;
    }
  
    set balance(v: number) {
      if (v >= 0) {
        this._balance = v;
      } else {
        throw Error('Balance cannot be a nagative!');
      }
    }
    abstract getAccountInfo():any;

    deposit(amount: number) {
      this.balance += amount;
    }
  
    withdrawal(amount: number) {
      this.balance -= amount;
    }
  }