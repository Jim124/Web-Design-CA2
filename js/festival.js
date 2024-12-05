$(document).ready(function () {
  $('#music').on('click', function () {
    $('.card-title').text('Live music & gigs');
    $('#img1').attr('src', 'src/images/music-1.png');
    $('#img1').attr('alt', 'music 1');
    $('#img2').attr('src', 'src/images/music-2.jpg');
    $('#img2').attr('alt', 'music 2');
    $('#img3').attr('src', 'src/images/music-3.jpg');
    $('#img3').attr('alt', 'music 3');
    $('#img4').attr('src', 'src/images/music-4.jpg');
    $('#img4').attr('alt', 'music 4');
  });
  $('#comedy').on('click', function () {
    $('.card-title').text('Comedy & gigs');
    $('#img1').attr('src', 'src/images/comedy-1.jpg');
    $('#img1').attr('alt', 'comedy 1');
    $('#img2').attr('src', 'src/images/comedy-2.jpg');
    $('#img2').attr('alt', 'comedy 2');
    $('#img3').attr('src', 'src/images/comedy-3.jpg');
    $('#img3').attr('alt', 'comedy 3');
    $('#img4').attr('src', 'src/images/comedy-4.jpg');
    $('#img4').attr('alt', 'comedy 4');
  });

  $('#theatre').on('click', function () {
    $('.card-title').text('Theater & film');
    $('#img1').attr('src', 'src/images/theater-1.jpg');
    $('#img1').attr('alt', 'theater 1');
    $('#img2').attr('src', 'src/images/theater-2.jpg');
    $('#img2').attr('alt', 'theater 2');
    $('#img3').attr('src', 'src/images/theater-3.jpg');
    $('#img3').attr('alt', 'theater 3');
    $('#img4').attr('src', 'src/images/theater-4.jpg');
    $('#img4').attr('alt', 'theater 4');
  });
  $('#arts').on('click', function () {
    $('.card-title').text('Arts & culture ');
    $('#img1').attr('src', 'src/images/art-1.jpg');
    $('#img1').attr('alt', 'art 1');
    $('#img2').attr('src', 'src/images/art-2.jpg');
    $('#img2').attr('alt', 'art 2');
    $('#img3').attr('src', 'src/images/art-3.jpg');
    $('#img3').attr('alt', 'art 3');
    $('#img4').attr('src', 'src/images/art-4.jpg');
    $('#img4').attr('alt', 'art 4');
  });
});
