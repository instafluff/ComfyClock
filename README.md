# ComfyClock
The Comfiest Clock Events Set To World-Time! Works in both Node and Browser!

**ComfyClock** gives you an event set to the world clock for when you need code run at specific seconds, minutes, hours, or even days.

```javascript
ComfyTimer.Every[ "5 minutes" ] = ( date ) => console.log( date );
```

## Instafluff ##
> *Come and hang out with us at the Comfiest Corner on Twitch! I build stuff like this live on stream!*

> https://twitch.tv/instafluff

> https://twitter.com/instafluffTV

## Instructions ##

#### Node
1. Install `comfyclock`
```
npm install comfyclock --save
```

2. Add clock events using ComfyClock
```javascript
var ComfyClock = require("comfyclock");
ComfyClock.Every[ "5s" ] = ( date ) => console.log( "Tick", date );
ComfyClock.Every[ "10s" ] = ( date ) => console.log( "Tock!", date );
// This will output: "Tick" at every 5th second (0, 5, 10, 15, ..., 55) and "Tock" at every 10th (0, 10, 20, ..., 50)
```

#### Browser
1. Add `comfyclock.js`
```
<script src="comfyclock.min.js"></script>
```

2. Add clock events using ComfyClock
```html
<html>
  <head>
    <script src="comfyclock.min.js"></script>
  </head>
  <body>
    <script type="text/javascript">
        ComfyClock.Every[ "5s" ] = ( date ) => console.log( "Tick", date );
        ComfyClock.Every[ "10s" ] = ( date ) => console.log( "Tock!", date );
        // This will output: "Tick" at every 5th second (0, 5, 10, 15, ..., 55) and "Tock" at every 10th (0, 10, 20, ..., 50)
    </script>
  </body>
</html>
```

## Example ##

```javascript
ComfyClock.Every[ "5 seconds" ] = ( date ) => console.log( "5th second!", date );
ComfyClock.Every[ "15s" ] = ( date ) => console.log( "15th second!", date );
ComfyClock.Every[ "1 minute" ] = ( date ) => console.log( "New minute!", date );
```
