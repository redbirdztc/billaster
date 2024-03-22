const expenseRecord = {
    id: 0,
    date: "",
    amount: "",
    expenseType: "",
    account: "",
}

var id_num = 0

const NewExpenseRecord = function (date, amount, expenseType, account) {
    const r = { ...expenseRecord };
    r.id = id_num;
    r.date = date;
    r.amount = amount;
    r.expenseType = expenseType;
    r.account = account;
    return r;
};

export default NewExpenseRecord