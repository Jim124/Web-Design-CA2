$(document).ready(function () {
  $('#hotel').on('click', function () {
    const value = $('#hotel-description').css('display');
    $('#stay-img').attr('src', 'src/images/hotel.jpg');
    $('#hotel-description').css('display', 'block');
    // if (value === 'none') {

    // } else {
    //   $('#hotel-description').css('display', 'none');
    // }
  });
  $('#cabin').on('click', function () {
    const value = $('#hotel-description').css('display');
    $('#stay-img').attr('src', 'src/images/cabin-5.jpg');
    $('#hotel-description').css('display', 'block');
    // if (value === 'none') {

    // } else {
    //   $('#hotel-description').css('display', 'none');
    // }
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
