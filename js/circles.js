$(function() {
  $("#black-hole").droppable({accept: ".circle", drop: function(event, ui) {
    ui.draggable.remove();
  }});
  $("#creation").click(function() {
    addRandomCircle();
  });
});

function addRandomCircle() {
  var styles = getRandomStyles();
  $("#circles").append("<div class='circle' style='"+styles+"'></div>");
  $(".circle").draggable();
}

function getRandomStyles() {
  var width = $(window).width() - 200;
  var slots = Math.floor(width/50);
  var horizontalOffset = Math.floor((Math.random() * slots) + 1) * 50;
  var color = getRandomColor();
  var sizes = [50, 100, 150, 200];
  var size = sizes[Math.floor(Math.random()*sizes.length)];
  var verticalOffset = (200 - size)/2;
  var styles = "left:"+horizontalOffset+"px;background-color:"+color+";top:"+verticalOffset+"px;width:"+size+"px;height:"+size+"px;";
  console.log(styles);
  return styles;
}

function getRandomColor() {
  var colors = ['#d10000', '#ff6622', '#ffda21', '#33dd00', '#1133cc', '#220066', '#330044'];
  return colors[Math.floor(Math.random()*colors.length)];
}

