const BankAccount = (function() {
    let balance = 0;

    return {
        deposit: function(amount) {
            if (amount > 0) {
                balance += amount;
                console.log(`Депозит: ${amount}. Новий баланс: ${balance}`);
            } else {
                console.log("Сума депозиту повинна бути позитивною.");
            }
        },
        withdraw: function(amount) {
            if (amount > 0 && amount <= balance) {
                balance -= amount;
                console.log(`Виведення: ${amount}. Новий баланс: ${balance}`);
            } else {
                console.log("Недостатньо коштів або неправильна сума для виведення.");
            }
        },
        getBalance: function() {
            return balance;
        }
    };
})();

const myAccount = BankAccount;
myAccount.deposit(100);
myAccount.withdraw(30);
console.log(myAccount.getBalance());
