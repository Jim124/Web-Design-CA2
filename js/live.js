$(document).ready(function () {
  $('#hotel').on('click', function () {
    $('#stay-img').attr('src', 'src/images/hotel.jpg');
    $('#hotel-description').css('display', 'block');
  });
  $('#cabin').on('click', function () {
    $('#stay-img').attr('src', 'src/images/cabin-5.jpg');
    $('#hotel-description').css('display', 'block');
  });

  $('#warehouse').on('click', function () {
    $('#stay-img').attr('src', 'src/images/caravan-1.jpg');
    $('#hotel-description').css('display', 'block');
  });
  $('#cottage').on('click', function () {
    $('#stay-img').attr('src', 'src/images/caravan-2.jpg');
    $('#hotel-description').css('display', 'block');
  });
});
