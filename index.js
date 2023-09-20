class BankAccount {
  constructor(accountHolder, accountType) {
    this.accountHolder = accountHolder;
    this.accountType = accountType;
    this.balance = 0;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount > this.balance) {
      throw new Error('Insufficient funds.');
    } else {
      this.balance -= amount;
    }
  }

  getBalance() {
    return this.balance;
  }
}

let account = new BankAccount('John Doe', 'Savings');

function deposit() {
  const amount = parseFloat(document.getElementById('amount').value);
  account.deposit(amount);
}

function withdraw() {
  const amount = parseFloat(document.getElementById('amount').value);
  try {
    account.withdraw(amount);
  } catch (error) {
    alert(error.message);
  }
}

function checkBalance() {
  const balanceElement = document.getElementById('balance');
  balanceElement.innerText = `Balance: $${account.getBalance().toFixed(2)}`;
}
