// login button event handler starts here
let log_btn = document.getElementById("log_btn");

log_btn.addEventListener("click", EventClick);
function EventClick() {
  let loginForm = document.getElementById("loginForm");
  loginForm.style = "display:none";
  document.querySelector("#Transaction-Area").style = "display:block;";
  document.getElementById("card").style="display:block";
}
// login button event handler End

//Deposit button click handeler

const Deposit_btn = document.getElementById("Deposit_btn");
Deposit_btn.addEventListener("click", function () {
  const DepositNumber = getinput("Deposit_Amaomd");

  updatespanText("corentDeposit", DepositNumber);
  document.getElementById("Deposit_Amaomd").value = "";
  updatespanText("BalanceMonitor", DepositNumber);
  
});

//Withdraw_btn addeven haneler

const Withdraw_btn = document.getElementById("Withdraw_btn");
Withdraw_btn.addEventListener("click", function () {
  const WithdrawNumber = getinput("Withdraw_Amaomd");
  updatespanText("Withdraw",WithdrawNumber);
 updatespanText("BalanceMonitor",-1*WithdrawNumber);
 document.getElementById("Withdraw_Amaomd").value = "";


});
function getinput(id) {
  const Amaomd = document.getElementById(id).value;
  const amaomdNumber = parseFloat(Amaomd);
  return amaomdNumber;
}

function updatespanText(id, DepositNumber) {
  const Balance = document.getElementById(id).innerText;
  const BalanceNumber = parseFloat(Balance);
  const total = DepositNumber + BalanceNumber;
  document.getElementById(id).innerText = total;
  document.getElementById("Deposit_Amaomd").value = "";
}



