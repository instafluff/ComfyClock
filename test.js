const ComfyClock = require( "./index" );

ComfyClock.Every[ "5 seconds" ] = ( date ) => console.log( "5th second!", date );
ComfyClock.Every[ "15s" ] = ( date ) => console.log( "15th second!", date );
ComfyClock.Every[ "1 minute" ] = ( date ) => console.log( "New minute!", date );
