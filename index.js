var moment = require( "moment" );

var comfyClock = {
	version: function() {
		return "@VERSION";
	},
	Every: {}
};

function comfyTimeCheck() {
	var date = new Date();
	var totalSeconds = Math.floor( date.getTime() / 1000 );
	Object.keys( comfyClock.Every ).forEach( function( t ) {
		var time = Math.floor( parseDuration( t ) / 1000 );
		if( totalSeconds % time === 0 ) {
			comfyClock.Every[ t ]( date );
		}
	});
}

function parseDuration( text ) {
	var result = 0;
	var duration = /(-?\d*\.?\d+(?:e[-+]?\d+)?)\s*([a-zμ]*)/ig;
	// ignore commas
	text = text.replace( /(\d),(\d)/g, '$1$2' );
	text.replace( duration, function( _, n, units ){
		result += moment.duration( parseFloat( n, 10 ), units.toLowerCase() );
	});
	return result;
}

setInterval( comfyTimeCheck, 1000 );

// Expose everything, for browser and Node..
if (typeof module !== "undefined" && module.exports) {
    module.exports = comfyClock;
}
if (typeof window !== "undefined") {
    window.ComfyClock = comfyClock;
}
