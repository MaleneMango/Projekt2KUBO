// localStorage Commentsection

var form = document.querySelector('form');
var ul = document.querySelector('ul');
var button = document.querySelector('button');
var input = document.getElementById('item');
let commentsArray = localStorage.getItem('comments') ? JSON.parse(localStorage.getItem('comments')) : [];

localStorage.setItem('comments', JSON.stringify(commentsArray));
var data = JSON.parse(localStorage.getItem('comments'));

var liMaker = (text) => {
  var li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  commentsArray.push(input.value);
  localStorage.setItem('comments', JSON.stringify(commentsArray));
  liMaker(input.value);
  input.value = "";
});

data.forEach(item => {
  liMaker(item);
});

button.addEventListener('click', function () {
  localStorage.clear();
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
});


// Star-button points

function givePoints() {
  document.getElementById("points").innerHTML = "<b>Points:</b> 35";
  document.getElementById("favorite").src="img/starfill.png";
  }
