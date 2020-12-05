var $avatar = document.querySelector('#avatar-url');

var localStorageItems = localStorage.getItem('code-journal');
if (localStorageItems === undefined || localStorageItems === null) {
  localStorage.setItem('code-journal', JSON.stringify(data));
}

var $img = document.querySelector('.img');

$avatar.addEventListener('input', function (event) {

  $img.setAttribute('src', event.target.value);

});

var $form = document.querySelector('form');

$form.addEventListener('submit', function formEvent(event) {
  event.preventDefault();
  localStorageItems = JSON.parse(localStorage.getItem('code-journal'));

  localStorageItems.profile.avatarUrl = event.target[0].value;

  localStorageItems.profile.username = event.target[1].value;

  localStorageItems.profile.fullName = event.target[2].value;

  localStorageItems.profile.location = event.target[3].value;

  localStorageItems.profile.bio = event.target[4].value;

  localStorage.setItem('code-journal', JSON.stringify(localStorageItems));

  viewSwap('profile');

});

function domTree(profile) {

  localStorageItems = JSON.parse(localStorage.getItem('code-journal'));

  var div1 = document.createElement('div');
  div1.setAttribute('data-view', 'profile');

  var div2 = document.createElement('div');
  div2.setAttribute('class', 'edit-h1');
  div1.appendChild(div2);

  var h1 = document.createElement('h1');
  h1.setAttribute('class', 'fname-text');
  h1.textContent = localStorageItems.profile.fullName;
  div2.appendChild(h1);

  var div3 = document.createElement('div');
  div3.setAttribute('class', 'row');
  div1.appendChild(div3);

  var div4 = document.createElement('div');
  div4.setAttribute('class', 'column-half');
  div3.appendChild(div4);

  var userPhoto = document.createElement('img');
  userPhoto.setAttribute('class', 'img img2');
  userPhoto.setAttribute('src', localStorageItems.profile.avatarUrl);
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
  div7.textContent = localStorageItems.profile.username;
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
  div9.textContent = localStorageItems.profile.location;
  div8.appendChild(div9);

  var div10 = document.createElement('div');
  div10.setAttribute('class', 'container');
  div5.appendChild(div10);

  var p1 = document.createElement('div');
  p1.setAttribute('class', 'bio-text bio-text1');
  p1.textContent = localStorageItems.profile.bio;
  div10.appendChild(p1);

  var linkButton = document.createElement('a');
  linkButton.setAttribute('href', '#');
  linkButton.setAttribute('data-view', 'edit-profile');
  linkButton.setAttribute('class', 'button-link');
  linkButton.textContent = 'Edit Profile';
  div10.appendChild(linkButton);
  return div1;
}

// var domResult = domTree(data.profile);

var $editProfile = document.querySelectorAll('.profile-form')[0];

var $showProfile = document.querySelectorAll('.show-profile')[0];

var $formAvatar = document.querySelector('#avatar-url');

var $formUsername = document.querySelector('#username');

var $formFname = document.querySelector('#fname');

var $formLocation = document.querySelector('#location');

var $formBio = document.querySelector('#bio');

var $entries = document.querySelectorAll('.entries-view')[0];

var $createEntry = document.querySelectorAll('.create-entry-view')[0];

function viewSwap(dataView) {

  localStorageItems = JSON.parse(localStorage.getItem('code-journal'));
  var domResult = domTree(localStorageItems.profile);

  if (dataView !== $editProfile.dataset.view) {

    $editProfile.className = 'hidden profile-form';

  } else {

    $editProfile.className = 'profile-form';

    $img.setAttribute('src', localStorageItems.profile.avatarUrl);

    $formAvatar.value = localStorageItems.profile.avatarUrl;

    $formUsername.value = localStorageItems.profile.username;

    $formFname.value = localStorageItems.profile.fullName;

    $formLocation.value = localStorageItems.profile.location;

    $formBio.value = localStorageItems.profile.bio;

  }

  if (dataView !== $showProfile.dataset.view) {

    $showProfile.className = 'hidden show-profile';

  } else {

    $showProfile.className = 'show-profile';

    $showProfile.innerHTML = '';

    $showProfile.appendChild(domResult);

  }

  if (dataView !== $entries.dataset.view) {

    $entries.className = 'hidden entries-view';

  } else {

    $entries.className = 'entries-view';

    localStorageItems = JSON.parse(localStorage.getItem('code-journal'));

    entryTree(localStorageItems.entries);

  }

  if (dataView !== $createEntry.dataset.view) {

    $createEntry.className = 'hidden create-entry-view';

  } else {

    $createEntry.className = 'create-entry-view';

  }

  localStorageItems.view = dataView;
}

document.addEventListener('DOMContentLoaded', function (event) {
  localStorageItems = JSON.parse(localStorage.getItem('code-journal'));

  if (localStorageItems.profile.username === '') {
    viewSwap('edit-profile');
    $img.setAttribute('src', 'images/placeholder-image-square.jpg');
  } else {
    viewSwap(localStorageItems.view);
    entryTree(localStorageItems.entries);
  }
});

document.addEventListener('click', function (event) {
  localStorageItems = JSON.parse(localStorage.getItem('code-journal'));

  if (event.target.tagName === 'A' && localStorageItems.profile.username !== '') {
    viewSwap(event.target.dataset.view);
  }

});

var $imageUrl = document.querySelector('#image-url');

var $photoJournal = document.querySelector('.photo-journal');

$imageUrl.addEventListener('input', function (event) {

  $photoJournal.setAttribute('src', event.target.value);

});

var $form2 = document.querySelector('#form2');

var newObj = {};

$form2.addEventListener('submit', function (event) {

  localStorageItems = JSON.parse(localStorage.getItem('code-journal'));

  event.preventDefault();

  newObj.imageUrl = event.target[0].value;

  newObj.title = event.target[1].value;

  newObj.notes = event.target[2].value;

  localStorageItems.entries.push(newObj);

  $photoJournal.setAttribute('src', 'images/placeholder-image-square.jpg');

  localStorage.setItem('code-journal', JSON.stringify(localStorageItems));

  $form2.reset();

  viewSwap('entries');

});

function entryTree(entries) {
  var $entryView = document.querySelector('.entries-view');
  var $entryOl = document.querySelectorAll('.entry-ol');

  for (var k = 0; k < $entryOl.length; k++) {
    $entryOl[k].remove();
  }

  for (var i = 0; i < entries.length; i++) {
    var $ol = document.createElement('ol');
    $ol.setAttribute('class', 'entry-ol');

    var $li1 = document.createElement('li');
    $ol.appendChild($li1);

    var $div = document.createElement('div');
    $div.setAttribute('class', 'entry-photo');
    $li1.appendChild($div);

    var $img2 = document.createElement('img');
    $img2.setAttribute('src', entries[i].imageUrl);
    $img2.setAttribute('class', 'entry-photo-img');
    $div.appendChild($img2);

    var $div2 = document.createElement('div');
    $div2.setAttribute('class', 'entry-text');
    $li1.appendChild($div2);

    var $h3 = document.createElement('h3');
    $h3.textContent = entries[i].title;
    $div2.appendChild($h3);

    var $p = document.createElement('p');
    $p.textContent = entries[i].notes;
    $div2.appendChild($p);

    $entryView.appendChild($ol);
  }
}
