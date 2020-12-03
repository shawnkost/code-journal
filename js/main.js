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

  viewSwap('profile', domResult);

});

var userData = localStorage.getItem('code-journal');

if (userData !== null) {

  data = JSON.parse(userData);

}

window.addEventListener('beforeunload', function (event) {

  var dataJ = JSON.stringify(data);

  localStorage.setItem('code-journal', dataJ);

});

function domTree(profile) {

  var div1 = document.createElement('div');
  div1.setAttribute('data-view', 'profile');

  var div2 = document.createElement('div');
  div2.setAttribute('class', 'edit-h1');
  div1.appendChild(div2);

  var h1 = document.createElement('h1');
  h1.setAttribute('class', 'fname-text');
  h1.textContent = data.profile.fullName;
  div2.appendChild(h1);

  var div3 = document.createElement('div');
  div3.setAttribute('class', 'row');
  div1.appendChild(div3);

  var div4 = document.createElement('div');
  div4.setAttribute('class', 'column-half');
  div3.appendChild(div4);

  var userPhoto = document.createElement('img');
  userPhoto.setAttribute('class', 'img img2');
  userPhoto.setAttribute('src', data.profile.avatarUrl);
  div4.appendChild(userPhoto);

  var div5 = document.createElement('div');
  div5.setAttribute('class', 'column-half profile-details');
  div3.appendChild(div5);

  var div6 = document.createElement('div');
  div6.setAttribute('class', 'container');
  div5.appendChild(div6);

  var icon1 = document.createElement('img');
  icon1.setAttribute('src', 'images/icons8-name-50.png');
  icon1.setAttribute('alt', 'user-photo');
  icon1.setAttribute('class', 'icon1');
  div6.appendChild(icon1);

  var div7 = document.createElement('div');
  div7.setAttribute('class', 'detail-text username-text');
  div7.textContent = data.profile.username;
  div6.appendChild(div7);

  var div8 = document.createElement('div');
  div8.setAttribute('class', 'container');
  div5.appendChild(div8);

  var icon2 = document.createElement('img');
  icon2.setAttribute('src', 'images/icons8-location-50.png');
  icon2.setAttribute('alt', 'location-icon8');
  icon2.setAttribute('class', 'icon2');
  div8.appendChild(icon2);

  var div9 = document.createElement('div');
  div9.setAttribute('class', 'detail-text location-text');
  div9.textContent = data.profile.location;
  div8.appendChild(div9);

  var div10 = document.createElement('div');
  div10.setAttribute('class', 'container');
  div5.appendChild(div10);

  var p1 = document.createElement('div');
  p1.setAttribute('class', 'bio-text bio-text1');
  p1.textContent = data.profile.bio;
  div10.appendChild(p1);
  return div1;
}

var domResult = domTree(data.profile);

var $editProfile = document.querySelectorAll('.profile-form')[0];

var $showProfile = document.querySelectorAll('.show-profile')[0];

var $formAvatar = document.querySelector('#avatar-url');

var $formUsername = document.querySelector('#username');

var $formFname = document.querySelector('#fname');

var $formLocation = document.querySelector('#location');

var $formBio = document.querySelector('#bio');

function viewSwap(dataView, domResult) {

  if (dataView !== $editProfile.dataset.view) {

    $editProfile.className = 'hidden profile-form';

  } else {

    $editProfile.className = 'profile-form';

    $img.setAttribute('src', data.profile.avatarUrl);

    $formAvatar.value = data.profile.avatarUrl;

    $formUsername.value = data.profile.username;

    $formFname.value = data.profile.fullName;

    $formLocation.value = data.profile.location;

    $formBio.value = data.profile.bio;
  }

  if (dataView !== $showProfile.dataset.view) {

    $showProfile.className = 'hidden show-profile';

  } else {

    $showProfile.className = 'show-profile';

    $showProfile.innerHTML = '';

    $showProfile.appendChild(domResult);

  }
  data.view = dataView;
}

document.addEventListener('DOMContentLoaded', function (event) {

  if (data.profile.username === '') {

    viewSwap('edit-profile');

  } else {

    viewSwap(data.view, domResult);

  }
});
