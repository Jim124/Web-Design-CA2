$(document).ready(function () {
  $('#music').on('click', function () {
    $('.card-title').text('Live music & gigs');
    $('#img1').attr('src', 'src/images/music-1.png');
    $('#img2').attr('src', 'src/images/music-2.jpg');
    $('#img3').attr('src', 'src/images/music-3.jpg');
    $('#img4').attr('src', 'src/images/music-4.jpg');
  });
  $('#comedy').on('click', function () {
    $('.card-title').text('Comedy & gigs');
    $('#img1').attr('src', 'src/images/comedy-1.jpg');
    $('#img2').attr('src', 'src/images/comedy-2.jpg');
    $('#img3').attr('src', 'src/images/comedy-3.jpg');
    $('#img4').attr('src', 'src/images/comedy-4.jpg');
  });

  $('#theatre').on('click', function () {
    $('.card-title').text('Theater & film');
    $('#img1').attr('src', 'src/images/theater-1.jpg');
    $('#img2').attr('src', 'src/images/theater-2.jpg');
    $('#img3').attr('src', 'src/images/theater-3.jpg');
    $('#img4').attr('src', 'src/images/theater-4.jpg');
  });
  $('#arts').on('click', function () {
    $('.card-title').text('Arts & culture ');
    $('#img1').attr('src', 'src/images/art-1.jpg');
    $('#img2').attr('src', 'src/images/art-2.jpg');
    $('#img3').attr('src', 'src/images/art-3.jpg');
    $('#img4').attr('src', 'src/images/art-4.jpg');
  });
});
