const account = {
    code: "",
    icon: "",

    openingBalance: 0,
    balance: 0,
};

const NewAccount = function (code, icon, openingBalance) {
    const a = { ...account }
    a.code = code
    a.icon = icon
    a.openingBalance = openingBalance
    return a
};

export default NewAccount
