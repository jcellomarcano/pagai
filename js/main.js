(function($) {
    'use strict';

    // scrollspy
    $('body').scrollspy({ target: '#navigation' });

    // smooth scrolling
    $(function() {
        $(".navbar-nav a, .scroll-icon a, .appai-preview .button-group a").bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1000, 'easeInOutExpo');
            event.preventDefault();
        });
    });

    // Navigation hide on scroll on mobile screen
    $(window).on('scroll', function() {
        $('.navbar-collapse').collapse('hide')
    });

    // preloader
    $(window).on('load', function() {
        $('.preloader-wave-effect').fadeOut();
        $('#preloader-wrapper').delay(150).fadeOut('fast');
    });

    // YOUTUBE VIDEO BACKGROUND
    $('#video-background').YTPlayer({
        videoId: 'zuSp8Snk_u4',
        fitToBackground: false,
        mute: true,
        pauseOnScroll: false,
        playerVars: {
            modestbranding: 0,
            autoplay: 1,
            controls: 1,
            showinfo: 0,
            wmode: 'transparent',
            branding: 0,
            rel: 0,
            autohide: 0,
            origin: window.location.origin
        }
    });

})(jQuery);

function toggleHIW() {

    var users = document.getElementById("users-features");
    var corporate = document.getElementById("corporate-features");
    var rph1 = document.getElementById("rph1");
    var rph2 = document.getElementById("rph2");
    var rph3 = document.getElementById("rph3");
    var rlp1 = document.getElementById("rlp1");
    var rlp2 = document.getElementById("rlp2");
    var rlp3 = document.getElementById("rlp3");
    var lpcol1 = document.getElementById("lpcol1");
    var lpcol2 = document.getElementById("lpcol2");
    var lpcol3 = document.getElementById("lpcol3");
    var lpcol4 = document.getElementById("lpcol4");
    var lpcol5 = document.getElementById("lpcol5");
    var lpcol6 = document.getElementById("lpcol6");

    if (users.style.display === "none") {
        corporate.style.display = "none";
        rlp1.style.display = "none";
        rlp2.style.display = "none";
        rlp3.style.display = "none";
        lpcol1.style.visibility = "hidden";
        lpcol2.style.visibility = "hidden";
        lpcol3.style.visibility = "hidden";
        lpcol4.style.visibility = "hidden";
        lpcol5.style.visibility = "hidden";
        lpcol6.style.visibility = "hidden";
        users.style.display = "block";
        rph1.style.display = "block";
        rph2.style.display = "block";
        rph3.style.display = "block";

    } else {
        corporate.style.display = "block";
        rlp1.style.display = "block";
        rlp2.style.display = "block";
        rlp3.style.display = "block";
        lpcol1.style.visibility = "visible";
        lpcol2.style.visibility = "visible";
        lpcol3.style.visibility = "visible";
        lpcol4.style.visibility = "visible";
        lpcol5.style.visibility = "visible";
        lpcol6.style.visibility = "visible";
        users.style.display = "none";
        rph1.style.display = "none";
        rph2.style.display = "none";
        rph3.style.display = "none";
    }
}

function toggleFAQ() {    
    var faqUsers = document.getElementById("faqUsers");
    var faqCorporate = document.getElementById("faqCorporate");
    var phoneFaqImg = document.getElementById("phoneFaqImg");
    var laptopFaqImg = document.getElementById("laptopFaqImg");   

    if (faqUsers.style.display === "none") {
        laptopFaqImg.style.display = "none";
        faqCorporate.style.display = "none";        
        faqUsers.style.display = "block";
        phoneFaqImg.style.display = "block";

    } else {
        faqCorporate.style.display = "block";
        laptopFaqImg.style.display = "block";
        faqUsers.style.display = "none";
        phoneFaqImg.style.display = "none";
    }
}

function toggleHELP() {    
    var faqUsers = document.getElementById("faqs-personas");
    var faqCorporate = document.getElementById("faqs-empresas");    

    if (faqUsers.style.display === "none") {      
        faqCorporate.style.display = "none";
        faqUsers.style.display = "block";     
    
    } else {
        faqCorporate.style.display = "block";   
        faqUsers.style.display = "none";     
    }
}


function recaptcha_callback() {
    $('#formSubmit').removeAttr('disabled');
}; 

function scrollToContact() {
    $("#btnAqui").click(function(){            
        $(document).animate({
                scrollTop: $("#contact-area")
            }, 500);
    });
}
