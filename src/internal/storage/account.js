const accounts = {

};

var AccountStorage = {
    save: function (account) {
        accounts[account.code] = account
    },
    get: function (code) {
        return accounts[code]
    },
};

export default AccountStorage;