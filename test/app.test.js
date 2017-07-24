const assert = require('assert');
const app = require('../app.js');

describe('App', function() {

	describe('addTwoNumbers()', function() {
		it('should return sum of two arguments', function() {
			var x = Math.floor(Math.random() * 22);
			var y = Math.floor(Math.random() * 2334);
			assert.equal(app.addTwoNumbers(x,y), x + y );
		});
	});

	describe('isOdd()', function(){
		it('should return true if argument is odd else return false', function() {
			assert.equal(app.isOdd(3), true);
		});
	});

	describe('sayHello()', function() {
		it('should return string \'hello\'', function() {
			assert.equal(app.sayHello(), 'hello');
		});
	});

});
