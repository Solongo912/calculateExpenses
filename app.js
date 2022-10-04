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

    function Expense(id, desc, value) {
        this.id = id;
        this.desc = desc;
        this.value = value;
    }

    function Income(id, desc, value) {
        this.id = id;
        this.desc = desc;
        this.value = value;
    }

    var datas = {
        items : {
            inc: [],
            exp: []
        },

        totals : {
            inc: 0,
            exp: 0
        }
    }

    // var i1 = new Income(1, 'Salary', 2500000);
    // var i2 = new Income(2, 'Bonus', 300000);
    
    // datas.items.inc.push(i1);
    // datas.items.inc.push(i2);

    return {
        addItem: function(type, desc, val) {
            var item, id;

            if(datas.items[type].length === 0) id = 1;
            else {
                id = datas.items[type][datas.items[type].length -1].id +1;
            }

            if(type ==='inc') {
                item = new Income(id, desc, val);
            }
            else {
                item = new Expense(id, desc, val);
            }

            datas.items[type].push(item);
        },

        getData: function() {
            return datas;
        }
    }
   

})();

var appController = (function(ui,fin) {
    
    var ctrlAddItem = function() {
        var input = ui.getInput();
        console.log(input);
        fin.addItem(input.type, input.description, input.value);


    }

    var setupEventListeners = function() {
        var DOM = ui.getDOMStrings();

        document.querySelector(DOM.addBtn).addEventListener('click', function() {
            ctrlAddItem();
        })
    
        document.addEventListener('keypress', function(event){
            if(event.keyCode ==13 || event.which ==3) {
                ctrlAddItem();
            } 
        })
    }

    
    return {
        init: function(){
            console.log("App started...");
            setupEventListeners();
        }
    }

   

})(uiController, financeController);

appController.init();