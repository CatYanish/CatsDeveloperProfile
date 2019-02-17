

function draw() {
  var canvas = document.getElementById('learn-canvas');
  var ctx = canvas.getContext('2d');
  for (var i = 0; i < 50; i++ ) {
    for (var j = 0; j < 50; j++) {
      //gradient between teal and gray
      ctx.strokeStyle = 'rgb(0, ' + Math.floor(255 - 42.5 * i) + ', ' + 
        Math.floor(255 - 42.5 * j) + ')';
      ctx.lineWidth = 1 - i;
      // this has to go after, or the styles aren't applied correctly
      ctx.strokeRect(i * 40, j * 50, 50, 50);
      ctx.translate(1, 1);
    }
  }
}