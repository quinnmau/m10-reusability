window.Calc = (function() {
    // Write a constructor function which takes a number, stores it, and
    // defines all Calc API functions
    var c = function(num) {
        // Find a way to store all instance viariables and functions
        // for this calculator
        var calc = {};
        
        calc.number = num;
        // Implement getVal, plus, minus, times, divide, and clear
        calc.getVal = function() {
            return calc.number;
        };
        
        calc.plus = function(value) {
            this.number += value;
            return this;
        };
        
        calc.minus = function(value) {
            this.number -= value;
            return this;
        };
        
        calc.times = function(value) {
            this.number *= value;
            return this;
        };
        
        calc.divide = function(value) {
            this.number /= value;
            return this;
        };
        
        calc.clear = function() {
            this.number = 0;
            return this;
        };
        
        return calc;
    };

    // Return your constructed object
    return c;
})();
