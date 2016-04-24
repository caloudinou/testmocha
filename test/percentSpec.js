var Percentage = require('../lib/Percentage');
var assert = require('assert');

describe('Percentage first version', function(){

	describe('#evolution', function(){

		before(function(){
		
		});

		
		beforeEach(function(){
		
		});
		it('should give an evolution', function(){
			assert.equal(Percentage.evolution(100, 200), 100);
			assert.equal(Percentage.evolution(100, 150), 50);
			assert.equal(Percentage.evolution(100,50), -50);
			
		});
		it('should handle 0 evolution', function(){
			assert.equal(Percentage.evolution(0, 100), Infinity); 
		});
		it('should round values',function(){
			assert.equal(Percentage.evolution(30, 100), 233.33);
		});
	});
	describe('#wait', function(){
		//pour les callback il faut le mettre en paramettre pour etre sur que le test functionne
		
		it('should exist', function(){
			assert.notEqual(Percentage.wait, undefined);
		});
		it('should wait', function(done){
			Percentage.wait(1000, function(test){
				assert.equal(test, 18);
				done();
			});
		});
		// skip permet de mettre ne pending le code à executé.
		it.skip('should wait old version to test ', function(done){
                        Percentage.wait(1000, function(test){
                                assert.equal(test, 19);
                                done();
                        });
                });
		// Quand un test n'est pas encore écrire
		it('should test it s no write'); 
	});

});
