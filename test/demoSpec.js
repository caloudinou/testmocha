var assert = require('assert');

describe("Test de test", function(){
	it('should do something', function(){
		var a = 3;
		var result=9
		var msg_error='la multiplication n a pas fonctionné';
		//le premiere element est entrer à tester
		//le deuxieme element est la valeur de sortie
		//le troisième élément est le commentaire de sortie en cas d'échec
                assert.equal(a * a, result,  'la multiplication n a pas functionné');
	})
})
