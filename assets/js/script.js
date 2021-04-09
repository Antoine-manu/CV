$(document).ready(function () {
    $('.sidenav').sidenav();

    function timefunction() {
        setTimeout(function competences() {
            $('.uneetoile').addClass('onestar');
            $('.deuxetoile').addClass('twostar');
            $('.troisetoile').addClass('threestar');
            $('.quatreetoile').addClass('fourstar');
            $('.cinqetoile').addClass('fifthstar');
        }, 500);
    }

    function timefunctionremover() {
        setTimeout(function competences() {
            $('.uneetoile').removeClass('onestar');
            $('.deuxetoile').removeClass('twostar');
            $('.troisetoile').removeClass('threestar');
            $('.quatreetoile').removeClass('fourstar');
            $('.cinqetoile').removeClass('fifthstar');
        }, 500);
    }

    $(window).scroll(function () {
        let ypos = window.scrollY;
        // console.log(ypos)
        if (ypos > 1300) {
            timefunction()
        } else if (ypos < 1300) {
            timefunctionremover()
        }


        if (ypos > 125) {
            $('#parcourssco').children().addClass('animate__backInRight');
            $('#parcourssco').children().addClass('colortext');
            $('#parcourssco').children().removeClass('animate__backOutLeft');
        } else if (ypos < 250) {
            $('#parcourssco').children().removeClass('animate__backInRight');
            $('#parcourssco').children().addClass('animate__backOutLeft');
        } else if (ypos < 350) {
            $('#parcourssco').children().removeClass('colortext');
        }

        if (ypos > 650) {
            $('#experiencedetails').children().addClass('animate__backInRight');
            $('#experiencedetails').children().removeClass('animate__backOutLeft');
            $('#experiencedetails').children().addClass('colortext');
        } else if (ypos < 800) {
            $('#experiencedetails').children().removeClass('animate__backInRight');
            $('#experiencedetails').children().addClass('animate__backOutLeft');
        } else if (ypos < 950) {
            $('#experiencedetails').children().removeClass('colortext');
        }
    })
});