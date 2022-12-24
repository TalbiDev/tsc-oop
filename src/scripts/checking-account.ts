﻿import { BankAccount } from "./bank-account";
import { AccountType } from "./enums";

export class CheckingAccount extends BankAccount {
  accountType = AccountType.Checking;

  getAccountInfo() {
    throw new Error("Method not implemented.");
  }
  
}