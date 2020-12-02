var $avatar = document.querySelector('#avatar-url');

var $img = document.querySelector('.img');

$avatar.addEventListener('input', function (event) {
  $img.setAttribute('src', event.target.value);
});

var $form = document.querySelector('form');

$form.addEventListener('submit', function (event) {

});
