export class CheckingAccount {
  private _balance = 0;//field

  constructor(public title: string) { }

  get balance(): number {
    return this._balance;
  }

  set balance(v: number) {
    if (v > 0) {
      this._balance = v;
    }
  }

  deposit(amount: number) {
    this.balance += amount;
  }

  withdrawal(amount: number) {
    this.balance -= amount;
  }
}