var Percentage = require('../lib/Percentage');
//var assert = require('assert');
var assert = require('chai').assert;
var should = require('chai').should();//non conseiller car ne peut pas injecter la méthode should sur un undified car undifined n'est pas un object javascript 
var expect = require('chai').expect;//methode recommander

describe('Percentage version with chai', function(){

	describe('#evolution', function(){

		before(function(){
		
		});

		
		beforeEach(function(){
		
		});
		it('should give an evolution', function(){
			Percentage.evolution(100, 200).should.be.equal(100);
			expect(Percentage.evolution(100, 150)).be.equal(50);
			//mettre un commentaire si une erreur
			expect(Percentage.evolution(100, 150)).be.equal(50, 'error sur le calcule de l evolution de entre 100 et 15O. la valeur de sortie attentue était 50');
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
		
		it('should exist with chai assert', function(){
			//verifier qu'une fonction exist
			//assert.notEqual(Percentage.wait, undefined);
			assert.isFunction(Percentage.wait);
		});

              	it('should exist with chai expect', function(){
                        //verifier qu'une fonction exist
                        expect(Percentage.wait).a('function');
			// on peut aussi l'écrire comme ça
                        expect(Percentage.wait).to.be.a('function');
                });

 

		it('should wait', function(done){
			Percentage.wait(52, function(test){
				assert.equal(test, 18);
				done();
			});
		});
		// skip permet de mettre ne pending le code à executé.
		it.skip('should wait old version to test ', function(done){
                        Percentage.wait(52, function(test){
                                assert.equal(test, 19);
                                done();
                        });
                });
		// Quand un test n'est pas encore écrire
		it('should test it s no write'); 
	});

});
