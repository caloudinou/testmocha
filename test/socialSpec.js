var Social 		= require('../lib/Social');
var chai		= require('chai');
var expect 		= chai.expect;
var sinon 		= require('sinon');
var Promise		= require('promise');
var chaiAsPromise	= require('chai-as-promise');


describe('Social', function(){
	
	//context du test
	var url = "http://grafikart.fr";

	it('should have twitter_url', function(){
		expect(Social).to.have.property('twitter_url');
	});
	it('should have facebook_url', function(){
                expect(Social).to.have.property('facebook_url');
        });
	describe('#getTwitterContent', function(){
		
		it('should be a function', function(){
	  	 	expect(Social.getTwitterCount).to.be.a('function');	
		});
		it('should call callApi', function(){
			
			//on greffe un espion sur la méthode Social
			sinon.spy(Social, 'callAPI');
			
			Social.getTwitterCount(url);
			
			//grace à l'espion on vérifie qu'elle est appelé une fois 
			//c'est un true or false 
			//donc avec expert on verif que 'oui' elle est appelé une fois
			//expect(Social.callAPI.calledOnce).to.be.true;
			
			//on peut tester aussi si  les paramettres url sont bien passer passer

			expect(Social.callAPI.withArgs(Social.twitter_url + url).calledOnce).be.equal(true, 'L api n est pas appeler qu une seule fois avec les les args Social.twitter_url et url');
			//ne pas oublier de retirer l'espion greffer sur la methode pour permettre de geffer un autre type d'espion puisse etre mis sur un autre test
			Social.callAPI.restore();
		});
		it('should api return count', function(done){
			var stub = sinon.stub(Social, 'callAPI');
			// ne plus dépendre de l'api en  injectant des une simulation du retour de l'api 
			stub.returns(new Promise(function(resolve, reject){
				resolve({count:3});
			}));
			Social.getTwitterCount(url).then(function(count){
				expect(count).to.be.equal(3);
			})
		});
	});
});
