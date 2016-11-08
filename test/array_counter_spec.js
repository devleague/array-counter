const arrayCounter = require( '../array_counter' );
const chai = require( 'chai' );
const should = chai.should();

describe( 'Array Counter', function() {

  it('should increment [8,0,0,1] and return [8,0,0,2]', function() {
    let input = [8,0,0,1];
    let expected = [8,0,0,2];
    let actual = arrayCounter(input);
    actual.should.deep.equal( expected );
  });

});
