var expect = require('chai').expect;
var codec = require('../index.js');


describe('encode', function(){
	it('function should exist', function(){
		expect(codec.encode).to.exist;
	}),
	it('should return character D for input character A', function(){
		expect(codec.encode('A')).to.equal('D');
	})
	it('should return string KHOOR for input string HELLO', function(){
		expect(codec.encode('HELLO')).to.equal('KHOOR');
	})
});