


/*document.getElementById("ubudget").addEventListener("submit", function (event) {
    let amountSpent = document.getElementById("spent").value;
    document.getElementById("samount").textContent = amountSpent;
})*/

let amountSpent = [];


var updatesubmit = document.getElementById("ubudget");

updatesubmit.addEventListener("click", function(event){
    event.preventDefault();
    var totalamount = 0;
    var dailySpent = Number($('#spent').val()); 
    var monthBudget = Number($('#mbudget').val());
    var dailyBudget = Number($('#dbudget').val());
    amountSpent.push(dailySpent);
    for (let i = 0 ; i<amountSpent.length; i++)
    {
        totalamount += parseFloat(amountSpent[i]);
    }

    if(dailyBudget - totalamount <= 0){
        document.getElementById("damount").style.backgroundColor = "red";
        $('.body').css('background-color','#FF6C5C');
        $('.nav-bar').css('background-color','#D83C2D');
        $('.page-container').css('background-color','#FFCCBB');

    }
    if(monthBudget - totalamount <= 0){
        document.getElementById("bamount").style.backgroundColor = "red";
        $('.body').css('background-color','#FF6C5C');
        $('.nav-bar').css('background-color','#D83C2D');
        $('.page-container').css('background-color','#FFCCBB');
    }

    document.getElementById("bamount").innerHTML = "$" + (monthBudget - totalamount);
    document.getElementById("damount").innerHTML = "$" + (dailyBudget - totalamount);
    document.getElementById("samount").innerHTML = "$" + totalamount;
    
}); 

var setsubmit = document.getElementById("sbudget");

setsubmit.addEventListener("click", function(event){
    event.preventDefault();
    var monthBudget = $('#mbudget').val();
    var dailyBudget = $('#dbudget').val();
    document.getElementById("bamount").innerHTML = "$" + monthBudget;
    document.getElementById("damount").innerHTML = "$" + dailyBudget;
});
