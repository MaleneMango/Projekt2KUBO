window.onload = function() {
    document.getElementById("showlessonplans").checked = true;
    document.getElementById("showposts").checked = true;
    document.getElementById("trending").checked = true;
}


// show/hide lessonplans

function showLessonplans() {
    var x = document.getElementById("content");
    var y = x.getElementsByClassName("lessonplan");
    var i;
    for (i = 0; i < y.length; i++) {
      if (y[i].style.display === 'none')
      {y[i].style.display = 'block';}
      else {
        y[i].style.display = 'none';
    }
  }
}

// show/hide Posts

function showPosts() {
    var x2 = document.getElementById("content");
    var y2 = x2.getElementsByClassName("post");
    var i2;
    for (i2 = 0; i2 < y2.length; i2++) {
      if (y2[i2].style.display === 'none')
      {y2[i2].style.display = 'block';}
      else {
        y2[i2].style.display = 'none';
    }
  }
}
