   // login button event handler starts here
   let log_btn = document.getElementById("log_btn");

   log_btn.addEventListener("click", EventClick);
   function EventClick() {
     let loginForm = document.getElementById("loginForm");
     loginForm.style = "display:none";
     document.querySelector("#Transaction-Area").style = "display:block;";
   }
   // login button event handler End

//Deposit button click handeler

const Deposit_btn=document.getElementById("Deposit_btn");
Deposit_btn.addEventListener("click",function(){
 const DepositNumber=getinput("Deposit_Amaomd")

 updatespanText("corentDeposit",DepositNumber)
document.getElementById("Deposit_Amaomd").value= '';
updatespanText("BalanceMonitor",DepositNumber);
//  const Deposit_Amaomd=document.getElementById("Deposit_Amaomd").value;
// const DepositNumber=parseFloat(Deposit_Amaomd);

//    const corentDeposit=document.getElementById("corentDeposit").innerText;
// const corentDepositNumber=parseFloat(corentDeposit);
// const totalDeposit=DepositNumber+corentDepositNumber;
// document.getElementById("corentDeposit").innerText=totalDeposit;
// //BalanceMonitor
// const BalanceMonitor=document.getElementById("BalanceMonitor").innerText;
// const BalanceMonitorNumber=parseFloat(BalanceMonitor);
// const totalBalance=DepositNumber+BalanceMonitorNumber;
// document.getElementById("BalanceMonitor").innerText=totalBalance;


});


//Withdraw_btn addeven haneler

const Withdraw_btn=document.getElementById("Withdraw_btn");
Withdraw_btn.addEventListener("click", function(){
  const Withdraw_Number=getinput("Withdraw_Amaomd");
  updatespanText=("Withdraw",Withdraw_Number);
  document.getElementById("Withdraw_Amaomd").value= "";
// const corentDeposit=document.getElementById("corentDeposit").innerText;
// const corentDepositNumber=parseFloat(corentDeposit);
// const totalDeposit=DepositNumber+corentDepositNumber;
// document.getElementById("corentDeposit").innerText=totalDeposit;


});
function getinput(id){
 const Amaomd=document.getElementById(id).value;
const amaomdNumber=parseFloat(Amaomd);
return amaomdNumber;

}

function updatespanText(id,DepositNumber){
 const Balance=document.getElementById(id).innerText;
const BalanceNumber=parseFloat(Balance);
const total=DepositNumber+BalanceNumber;
document.getElementById(id).innerText=total;
document.getElementById("Deposit_Amaomd").value= '';




}
