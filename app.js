var dob=document.querySelector("#input-date");
var num=document.querySelector('#input-number');
var button=document.querySelector('#check');
var msg=document.querySelector('#message');

const calculateSum = (date) => {
    let sum = 0;
    date = date.replaceAll("-", "");
    console.log(date);
   for(let i=date.length-1;i>=0;i--)
   {
       sum=sum+Number(date.charAt(i));
   }
   return sum;
    // for (let digit of date) {
    //   sum = sum + Number(digit);
    // }
    // return sum;
  };
  function checkNumberIsLucky(sum,number)
  {
      if(sum%number==0)
      {
         showMessage(`your birthday is lucky 🥳  
         Don't Get OverWhelmed Work Hard then only Luck will Matter`);   
      }
      else
      {
          showMessage((`your birthday is not lucky 😕
          This is just a check everyone is lucky`));
      }
  }

  const showMessage = (message) => {
    msg.innerText = message;
  };
button.addEventListener('click',function check(){
    const date=dob.value;
    var numberToCheck=Number(num.value);
    if(date && numberToCheck)
    {
        var sum=calculateSum(date);
        checkNumberIsLucky(sum,numberToCheck);
    }
    else{
        showMessage("Please Enter Both the fields");
    }
    

})

