$(document).ready(checkSize);
$(window).on('resize', checkSize);

function checkSize() {
    var isMobile = window.matchMedia("only screen and (max-width: 767px)");
    if (isMobile.matches) { if (document.getElementById("multiscroll")) {} menuWidth = '100%'; } else {
        menuWidth = '50%';
        if (document.getElementById("multiscroll")) {
            $('#multiscroll').multiscroll({
                anchors: ['home', 'about_us', 'our_work', 'why_us', 'crossing_cultures', 'connect_with_us'],
                menu: '#myMenu',
                afterLoad: function(anchorLink, index) {
                    $('.home-arrow').addClass('animated bounceInUp visible').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                        $(this).removeClass('animated bounceInUp');
                    });
                },
                onLeave: function(index, direction) { $('.home-arrow').removeClass('visible'); },
            });
        }
    }
};
if (document.getElementById("multiscroll")) { document.getElementById("multiscroll").onmouseover = function() { closeNav() }; }
if (document.getElementsByClassName("page_id")) {
    document.getElementsByClassName("page_id").onmouseover = function() { closeNav() };
}
$(".header-lang a").on("click", function() {
    $(".nav").find(".active").removeClass("active");
    // old $(".nav a").on("click",function(){$(".nav").find(".active").removeClass("active");
    $(this).addClass("active");
});
$(".submenu a").on("click", function() {
    $(".submenu").find(".active").removeClass("active");
    $(this).addClass("active");
});

function openNav() {
    document.getElementById("mySidenav").style.visibility = "visible";
    document.getElementById("mySidenav").style.width = menuWidth;
    setTimeout(change_width, 200);
    setTimeout(change_opacity, 200);
    document.querySelector("#nav-toggle").setAttribute('onclick', 'closeNav()');
};

function closeNav() {
    $(".main-submenu").find(".active").hide().removeClass("active");
    document.getElementById("mySidenav").style.width = "0";
    document.querySelector("#nav-toggle").setAttribute('onclick', 'openNav()');
    setTimeout(change_width_0, 400);
    setTimeout(change_opacity_0, 100);
    document.getElementById("nav-toggle").className = "";
    document.getElementById("mySidenav").style.visibility = "hidden";
};

function change_width_0() { var links = document.getElementsByClassName('sidenav_link'),
        i = links.length; while (i--) { links[i].style.width = "0"; } }

function change_opacity_0() {
    var links = document.getElementsByClassName('sidenav_link'),
        i = links.length;
    var sub_links = document.getElementsByClassName('border_link'),
        u = sub_links.length;
    while (i--) { links[i].style.opacity = "0"; }
    while (u--) { sub_links[u].style.opacity = "0"; }
    document.getElementById('menu-footer').style.opacity = "0";
}

function change_width() { var links = document.getElementsByClassName('sidenav_link'),
        i = links.length; while (i--) { links[i].removeAttribute("style"); } }

function change_opacity() {
    var links = document.getElementsByClassName('sidenav_link'),
        i = links.length;
    var sub_links = document.getElementsByClassName('border_link'),
        u = sub_links.length;
    while (i--) { links[i].style.opacity = "1"; }
    while (u--) { sub_links[u].style.opacity = "1"; }
    document.getElementById('menu-footer').style.opacity = "1";
}
// $(".border-intro a").on("click",function(){$(".border-intro").find(".active").removeClass("active");$(this).addClass("active");});
// $(".border-vertical a").on("click",function(){$(".border-vertical").find(".active").removeClass("active");$(this).addClass("active");});
document.querySelector("#nav-toggle").addEventListener("click", function() { this.classList.toggle("active"); });
document.querySelector("#nav-toggle").addEventListener("mouseover", function() { this.classList.add("closer"); });
document.querySelector("#nav-toggle").addEventListener("mouseout", function() { this.classList.remove("closer"); });

$(".about-menu").on("mouseover", function() {
    $('#myMenu').find('.select-submenu').removeClass('select-submenu');
    $(this).addClass('select-submenu');
    $(".main-submenu").find(".active").hide().removeClass("active");
    $("#about_us-id").addClass("active").show();
});

$(".work-menu").on("mouseover", function() {
    $('#myMenu').find('.select-submenu').removeClass('select-submenu');
    $(this).addClass('select-submenu');
    $(".main-submenu").find(".active").hide().removeClass("active");
    $("#our_work-id").addClass("active").show();
});

$(".why-menu").on("mouseover", function() {
    $('#myMenu').find('.select-submenu').removeClass('select-submenu');
    $(this).addClass('select-submenu');
    $(".main-submenu").find(".active").hide().removeClass("active");
    $("#why_us-id").addClass("active").show();
});

$(".china-menu").on("mouseover", function() {
    $('#myMenu').find('.select-submenu').removeClass('select-submenu');
    $(this).addClass('select-submenu');
    $(".main-submenu").find(".active").hide().removeClass("active");
    $("#crossing_cultures-id").addClass("active").show();
});

$(".contact-menu").on("mouseover", function() {
    $('#myMenu').find('.select-submenu').removeClass('select-submenu');
    $(this).addClass('select-submenu');
    $(".main-submenu").find(".active").hide().removeClass("active");
});

$(".home-menu").on("mouseover", function() {
    $('#myMenu').find('.select-submenu').removeClass('select-submenu');
    $(this).addClass('select-submenu');
    $(".main-submenu").find(".active").hide().removeClass("active");
});

(function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o), m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-97367021-1', 'auto');
ga('send', 'pageview');

//<!-- Hotjar Tracking Code for www.litao.lt -->

(function(h, o, t, j, a, r) {
    h.hj = h.hj || function() {
        (h.hj.q = h.hj.q || []).push(arguments) };
    h._hjSettings = { hjid: 661648, hjsv: 6 };
    a = o.getElementsByTagName('head')[0];
    r = o.createElement('script');
    r.async = 1;
    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
    a.appendChild(r);
})(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');