let express = require(`express`);
const router = express.Router();

router.post(`/accountTypeChecker`, (req, res) => {
  
    let accountType = accountTypeChecker(req.body.accountBalanceHistory);
    let message = accountType === 'A' ? 
    "The account in which the balance amount decreases by varying amounts each month." 
    : "The account in which the balance amount changes by the same amount each month."
    res.send({"AccountType": accountType, "message": message});
});

const accountTypeChecker = (accountBalanceHistory) => {
    
    let newRecord = [];
    accountBalanceHistory.forEach(element => {

        newRecord[element.monthNumber] = element.account.balance.amount;
    });
    let diff = newRecord[1] - newRecord[0];
    let varyingAmountType = false;
    for(let i=newRecord.length-1; i>0; i--) {
        let newdiff = newRecord[i] - newRecord[i-1];
        if(newdiff !== diff) {
            varyingAmountType = true;
            break;
        }
    }
    return varyingAmountType ? "A" : "B";
  };

  module.exports = { 
    router:router,
    accountTypeChecker:accountTypeChecker
  }

