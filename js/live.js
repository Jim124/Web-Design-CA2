$(document).ready(function () {
  $('#hotel').on('click', function () {
    $('#stay-img').attr('src', 'src/images/hotel.jpg');
    $('#stay-img').attr('alt', 'hotel');
    $('#hotel-description').css('display', 'block');
  });
  $('#cabin').on('click', function () {
    $('#stay-img').attr('src', 'src/images/cabin-5.jpg');
    $('#stay-img').attr('alt', 'cabin');
    $('#hotel-description').css('display', 'block');
  });

  $('#warehouse').on('click', function () {
    $('#stay-img').attr('src', 'src/images/caravan-1.jpg');
    $('#stay-img').attr('alt', 'house');
    $('#hotel-description').css('display', 'block');
  });
  $('#cottage').on('click', function () {
    $('#stay-img').attr('src', 'src/images/caravan-2.jpg');
    $('#stay-img').attr('alt', 'cottage');
    $('#hotel-description').css('display', 'block');
  });
});
