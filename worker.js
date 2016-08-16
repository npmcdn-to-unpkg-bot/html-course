// Example using 'packages' and 'classes'

var realdolmen = (function() {  // Immediately invoking function

    // Empty object for adding things to, and returning in the end
    var exports = {};

    // Defines a constructor (sort of like a class)
    exports.Worker = function(name, capacity) {
        this.name = name;
        this.capacity = capacity;
    };

    // Using prototype chain to inherit functions for each object instantiated with 'new Worker()'
    exports.Worker.prototype.fly = function () {
        document.writeln("Worker is flying " + this.name);
    };

    return exports;

})();


// Import statement
var Worker = realdolmen.Worker;

document.writeln('<h1>Objects using new and packages</h1>');
var w = new Worker('Maya', 100);
w.fly();
document.writeln('<hr/>');