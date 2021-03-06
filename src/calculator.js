module.exports = function() {
  "use strict";

  var tab = require('./core');

  var Calculator = function() {
    this.inputs = [];
  };

  Calculator.prototype.start = function() {
    process.stdin.setEncoding('utf8');

    var that = this;

    process.stdin.on('readable', function() {
      var input = process.stdin.read();

      if (input === null) return;

      input = input.trim();

      that.inputs.push(input);

      if (tab.isResult(input)) {
        that.output();
        that.inputs = [];
      }
    });
  };

  Calculator.prototype.output = function() {
    process.stdout.write("---------------------------------------------------------------------------------------"+ "\n");
    process.stdout.write("The Result is :" + "\n");
    return Array.prototype.map.call(tab.process(this.inputs), function(processed) {
      process.stdout.write(processed + "\n");
    });
  };

  return Calculator;
}();
