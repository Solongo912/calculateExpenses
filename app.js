var uiController = (function() {
    // var x=100;

    // function add(y) {
    //     return x+y;
    // }

    // return {
    //     publicAdd: function(a) {
    //         a = add(a);
    //         console.log('performed values is: '+ a);
    //     }
    // };




})();

var financeController = (function() {

})();

var appController = (function(ui,fin) {
    // ui.publicAdd(10);

    var addExpense = function() {
        var expense = document.querySelector('.add__description').value;
        var valueExpense = document.querySelector('.add__value').value;
       
        if(expense == "" || valueExpense =="") {
            alert("Please enter values");
            
        }
        else {
            if(valueExpense <=0) alert("Please enter correct input");
            else document.querySelector('.income__list').innerHTML += '<li>'+ expense +' - '+valueExpense +'</li>';
        }

    }

    document.querySelector('.add__btn').addEventListener('click', function() {
        addExpense();
    })

    document.addEventListener('keypress', function(event){
        if(event.keyCode ==13 || event.which ==3) {
            addExpense();
        } 
    })

})(uiController, financeController);