String.prototype.noPunc = function( ) { 
    return this.replace(/[.,\/#!'$%\^&\*;:{}=\-_`~()]/g,"");
}

String.prototype.crypto = function( ) {
    var noPunc = this.split("");
    var row = Math.round( Math.sqrt(noPunc.length) ) + 1;
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
    var groups = []
    for( var i = 0; i < sentences.length; i++ )
    {
        groups.push( sentences[ i ] );   
    }
    
    var trueCrypto = [];
    var crypt = "";
    var wordCount = groups[ 0 ].length;
    var currentCount = 0;
    
    while( currentCount < wordCount )
    {
        for( var i = 0; i < groups.length; i++ )
        {
            var groupLetter = groups[ i ][ currentCount ];
            if( groupLetter )
            {
                crypt += groups[ i ][ currentCount ];
            }
        }
        crypt += " ";
        trueCrypto.push( crypt );
        crypt = "";
        currentCount += 1;
    }
    
       var boxLayout = Math.round( Math.sqrt( noPunc.length ) / 2 );
       var cryptoInput = trueCrypto.join( ).noPunc( );
       
       var line = "";
       var wordCount = 0;
       var lineCount = 0;
       var result = []
       for( var i = 0; i < cryptoInput.length; i++ )
       {
           if ( cryptoInput[ i ] !== ' ' && cryptoInput[ i ] !== '' )
           {
                line += cryptoInput[ i ];
                wordCount += 1;
                if( wordCount >= boxLayout )
                {
                    wordCount = 0;
                    lineCount += 1;
                    if( lineCount === ( boxLayout - 1 ) )
                    {
                        result.push( line );
                        line = "";
                        lineCount = 0;
                    }
                    else
                    {
                        line += " ";
                    }
                }
           }
       }
       result.push( line );
       return result;
}

$(document).ready(function( ) {
    
    function reset( )
    {
        $('#phrases > li').remove( ); 
    }
    
    $("form#crypto").submit( function(event) {
       event.preventDefault( );
       
       reset( );
       
       var userInput = $("#new-crypto").val( ).noPunc( );
       var cryptoInput = userInput.crypto( );
       
       for( var i = 0; i < cryptoInput.length; i++ )
       {    
            $("ul#phrases").append("<li><span class='crypto' style='font-family:monospace,monospace;'>" + cryptoInput[ i ] + "</span></li>" );             
       }
    });
});




//$("ul#phrases").append("<li><span class='crypto' style='font-family:monospace,monospace;'>" + userInput[ i ] + "</span></li>" ); 