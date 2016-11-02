var Account = function(name, amount){
  this.depositName = name;
  this.depositAmount = amount;
}
//
// Account.prototype.makeAccount = function() {
//
// }

Account.prototype.changeBalance = function(depositAmount, addToAccount, subFromAccount){
  if(addToAccount) {
    return depositAmount = initialDeposit + addToAccount;
  } else if(subFromAccount) {
    return depositAmount = initialDeposit - subFromAccount;
  } else {
    alert("Please enter an amount");
  }
  console.log(addToAccount);
}


// User Interface
$(document).ready(function(){
  var newAccount;
  var initialDeposit;

  $("form.bank").submit(function(event){
    event.preventDefault();
    var name = $("#enterName").val();
    initialDeposit = parseInt($("input#initialDeposit").val());
    newAccount = new Account(name, initialDeposit);

    $("p#currentBalance").text(initialDeposit);
  });

  $("form.deposit").submit(function(event){
    event.preventDefault();
    var addToAccount = parseInt($("input#depositAmount").val());
    var subFromAccount = parseInt($("input#withdrawalAmount").val());

    newAccount.changeBalance(depositAmount, addToAccount, subFromAccount);
    console.log(addToAccount);

    $("p#currentBalance").text(newAccount.changeBalance());

  });
});
