
String.prototype.crypto = function( ) {
    var noPunc = this.replace(/[.,\/#!'$%\^&\*;:{}=\-_`~()]/g,"").split("");
    var row = Math.round( Math.sqrt(noPunc.length) );
    var column = Math.round( noPunc.length / row );

    var sentences = [];
    var currentCount = 0;
    var sentence = "";
    for( var i = 0; i < noPunc.length; i++ )
    {
        if( noPunc[ i ] != ' ' )
        {
            sentence += noPunc[ i ];
            currentCount += 1;
        }
        if( currentCount > column || i === noPunc.length - 1)
        {
            sentences.push( sentence );
            currentCount = 0;
            sentence = "";
         }
    }
    return sentences;
}