const profile = document.querySelector('.profile');
const shareDiv = document.querySelector('.share-div');
const clingShareSpan = document.querySelector('.cling-share-span');
const michelle = document.querySelector('.michelle');
const nameDate = document.querySelector('.name-date');
const shareBtn = document.querySelector('.share-btn');

shareBtn.addEventListener('click', function () {
  profile.classList.toggle('profile-share');
  shareDiv.classList.toggle('share');
  clingShareSpan.classList.toggle('share-span');
  michelle.classList.toggle('michelle-none');
  nameDate.classList.toggle('name-date-none');
  shareBtn.classList.toggle('activate-btn');
});
