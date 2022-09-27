var uiController = (function() {
    var DOMStrings = {
        inputType: '.add__type',
        inputDesc: '.add__description',
        inputValue:'.add__value',
        addBtn: '.add__btn'
    }
    
    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMStrings.inputType).value,
                description: document.querySelector(DOMStrings.inputDesc).value,
                value: document.querySelector(DOMStrings.inputValue).value
            };
        },
        getDOMStrings: function() {
            return DOMStrings;
        }
    };
})();

var financeController = (function() {

})();

var appController = (function(ui,fin) {
    var DOM = ui.getDOMStrings();

    var addExpense = function() {
        console.log(ui.getInput());

    }

    document.querySelector(DOM.addBtn).addEventListener('click', function() {
        addExpense();
    })

    document.addEventListener('keypress', function(event){
        if(event.keyCode ==13 || event.which ==3) {
            addExpense();
        } 
    })

})(uiController, financeController);