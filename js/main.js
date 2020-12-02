
var $avatar = document.querySelector('#avatar-url');

var $img = document.querySelector('.img');

$avatar.addEventListener('input', function (event) {
  $img.setAttribute('src', event.target.value);
});

var $form = document.querySelector('form');

$form.addEventListener('submit', function formEvent(event) {
  data.profile.avatarUrl = event.target[0].value;
  data.profile.username = event.target[1].value;
  data.profile.fullName = event.target[2].value;
  data.profile.location = event.target[3].value;
  data.profile.bio = event.target[4].value;
});

var userData = localStorage.getItem('code-journal');
if (userData !== null) {
  data = JSON.parse(userData);
}

window.addEventListener('beforeunload', function (event) {
  var dataJ = JSON.stringify(data);
  localStorage.setItem('code-journal', dataJ);
});
