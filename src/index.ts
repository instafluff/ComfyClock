import moment from 'moment';

interface ComfyClock {
  version: () => string,
  Every: Record<string, (date: Date) => void>
}

const comfyClock: ComfyClock = {
  version: function() {
    return "@VERSION";
  },
  Every: {}
};

function comfyTimeCheck(): void {
  let date = new Date();
  let totalSeconds = Math.floor( date.getTime() / 1000 );
  Object.keys(comfyClock.Every).forEach((t) => {
    let time = Math.floor(parseDuration(t) / 1000);
    if(totalSeconds % time === 0) {
      comfyClock.Every[t](date);
    }
  });
}

function parseDuration(text: string): number {
  let result = 0;
  const duration = /(-?\d*\.?\d+(?:e[-+]?\d+)?)\s*([a-zμ]*)/ig;
  // ignore commas
  text = text.replace( /(\d),(\d)/g, '$1$2' );
  text.replace( duration, function(_, n, units) {
    result += moment.duration( parseFloat(n, 10), units.toLowerCase() ).asMilliseconds();
  });
  return result;
}

setInterval(comfyTimeCheck, 1000);

// Expose everything, for browser and Node..
if (typeof module !== "undefined" && module.exports) {
  module.exports = comfyClock;
}
if (typeof window !== "undefined") {
  (window as any).ComfyClock = comfyClock;
}
