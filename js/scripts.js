$(document).ready(function () {
    $("#mycarousel").carousel( { interval: 1000, pause: "false"  } );
    $('#mycarousel').carousel('cycle');
    $('#carouselButton').click(function () {
        if ($('#carouselButton').children('span').hasClass('fa-pause')) {
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause')
            $('#carouselButton').children('span').addClass('fa-play')
        } else if ($('#carouselButton').children('span').hasClass('fa-play')) {
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play')
            $('#carouselButton').children('span').addClass('fa-pause')
        }
    });
    $("#myLogin").click(function () {
        $('#loginModal').modal('toggle')
    });
    $("#myReserve").click(function () {
        $('#reserveModal').modal('toggle')
    });
    $("#loginModal").on('shown.bs.modal', function () {
        $('#exampleInputEmail3').focus()

    });
    $("#reserveModal").on('shown.bs.modal', function () {
        $('#nguests3').focus()

    });
    $('#peterhead1').click(function () {
        $('#peter').collapse('toggle')
    })
    

});