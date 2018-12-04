/* Design a cash register drawer function checkCashRegister() that accepts 
purchase price as the first argument (price), payment as the second argument 
(cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

Return the string "Insufficient Funds" if cash-in-drawer is less than the change
due. Return the string "Closed" if cash-in-drawer is equal to the change due.

Otherwise, return change in coin and bills, sorted in highest to lowest order.
*/

var values = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.10,
    "QUARTER": 0.25,
    "ONE": 1.00,
    "FIVE": 5.00,
    "TEN": 10.00,
    "TWENTY": 20.00,
    "ONE HUNDRED": 100.00
};

function checkCashRegister(price, cash, cid) {
    // Avoid floating point representation mistake
    var change = Math.round((cash - price)*100)/100, changeDisbursement = [];

    var drawerTotal = cid.reduce(function(a,b) {
      // Avoid floating point representation mistake
      return Math.round((a + b[1])*100)/100;
    }, 0);
 
    if (change === drawerTotal) {
        return 'Closed';
    } else if (change > drawerTotal) {
        return 'Insufficient Funds';
    }

    var changeLeft = change;
  
    // Go through cash drawer from highest denomination to lowest.
    for (i = cid.length - 1; i >= 0; i--) {
      var numOfDenom;
      
      if (cid[i][0] !== "PENNY") {
        // Avoid floating point representation mistake
        numOfDenom = Math.floor(changeLeft/values[cid[i][0]]);
      } else {
        // Avoid floating point representation mistake
        numOfDenom = Math.ceil(changeLeft/values[cid[i][0]]);
      }

      var cashInDenom = numOfDenom*values[cid[i][0]];

      if (numOfDenom >= 1) {
        // In case there is less of the denomination in the drawer than desired.
        var handToCust = (cashInDenom <= cid[i][1]) ? cashInDenom: cid[i][1];

        changeDisbursement.push([cid[i][0], handToCust]);
        changeLeft -= handToCust;
      }
    }

    // If changeLeft >= .01, the bills in the cash drawer were not
    // sufficient, even if the total ammount was.
    // Avoid floating point representation mistake
    if (Math.round(changeLeft*100)/100 !== 0) {
        return 'Insufficient Funds';
    }

    return changeDisbursement;
}