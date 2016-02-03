
describe( 'Crypto', function() {
   it("Create crypto from two words", function() {
      var testCrypto = "Apple tree".crypto( );
      expect(testCrypto.join()).to.equal([ 'Ae', 'ep', 'tp', 'rl', 'e' ].join()); 
   });
   it("Create crypto from sentence", function() {
      var testCrypto = "don't compare yourself to others, compare yourself to the person you were yesterday".crypto( );
      expect(testCrypto.join()).to.equal("dalsy oneor fotys netcu,hotyo oreue tooms pwrcu,tpeee dorha lrram serfs,eyper etoy"); 
   });
});