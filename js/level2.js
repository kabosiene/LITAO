
  $(".nav a").on("click", function(){
    $(".nav").find(".active").removeClass("active");
    $(this).addClass("active");
  });
  $(".submenu a").on("click", function(){
    $(".submenu").find(".active").removeClass("active");
    $(this).addClass("active");
  });

  document.getElementsByClassName("page_id").onmouseover = function() {closeNav()};

  function openNav() {
    document.getElementById("mySidenav").style.visibility = "visible";
    document.getElementById("mySidenav").style.width = "50%";
    setTimeout(change_width, 200);
    setTimeout(change_opacity, 200);
    document.querySelector("#nav-toggle").setAttribute('onclick','closeNav()');
  };

  function closeNav() {
    document.getElementById("mySidenavMenu").style.width = "0";
    document.getElementById("mySidenavMenu").style.visibility = "hidden";
    document.getElementById("mySidenav").style.width = "0";
    document.querySelector("#nav-toggle").setAttribute('onclick','openNav()');
    setTimeout(change_width_0, 400);
    setTimeout(change_opacity_0, 100);
    document.getElementById("nav-toggle").className = "";
    setTimeout(change_border,550);
    document.getElementById("mySidenav").style.visibility = "hidden";
  };
  function change_width_0() {
    var links = document.getElementsByClassName('sidenav_link'),
    i = links.length;

    while(i--) {
      links[i].style.width = "0";
    }
  }
  function change_opacity_0() {
    var links = document.getElementsByClassName('sidenav_link'),
    i = links.length;
    var sub_links = document.getElementsByClassName('border_link'),
    u = sub_links.length;

    while(i--) {
      links[i].style.opacity = "0";
    }
    while(u--){
      sub_links[u].style.opacity= "0";
    }
  }
  function change_width() {
    var links = document.getElementsByClassName('sidenav_link'),
    i = links.length;

    while(i--) {
      links[i].removeAttribute("style");
    }
  }
  function change_opacity() {
    var links = document.getElementsByClassName('sidenav_link'),
    i = links.length;
    var sub_links = document.getElementsByClassName('border_link'),
    u = sub_links.length;

    while(i--) {
      links[i].style.opacity = "1";
    }
    while(u--){
      sub_links[u].style.opacity= "1";
    }
  }
  function change_border(){
    document.getElementById("mySidenavMenu").style.border = "none";
  }
  $(".border-intro a").on("click", function(){
    $(".border-intro").find(".active").removeClass("active");
    $(this).addClass("active");
  });
  $(".border-vertical a").on("click", function(){
    $(".border-vertical").find(".active").removeClass("active");
    $(this).addClass("active");
  });

  document.querySelector( "#nav-toggle" ).addEventListener( "click", function() {
    this.classList.toggle( "active" );
  });

  document.querySelector( "#nav-toggle" ).addEventListener( "mouseover", function() {
    this.classList.add( "closer" );
  });

  $(".about-menu").on("mouseover", function(){
    document.getElementById("mySidenavMenu").style.borderLeft = "1px solid #cccbc5";
    document.getElementById("mySidenavMenu").style.visibility = "visible";
    document.getElementById("mySidenavMenu").style.width = "60px";
    $('#myMenu').find('.select-submenu').removeClass('select-submenu');
    $(this).addClass('select-submenu');
    $("#mySidenavMenu .submenu").find(".active").hide().removeClass("active");
    $("#about_us-id").addClass("active").show();
  })
  ;
  $(".work-menu").on("mouseover", function(){
    document.getElementById("mySidenavMenu").style.borderLeft = "1px solid #cccbc5";
    document.getElementById("mySidenavMenu").style.visibility = "visible";
    document.getElementById("mySidenavMenu").style.width = "60px";
    $('#myMenu').find('.select-submenu').removeClass('select-submenu');
    $(this).addClass('select-submenu');
    $("#mySidenavMenu .submenu").find(".active").hide().removeClass("active");
    $("#our_work-id").addClass("active").show();
  });
  $(".why-menu").on("mouseover", function(){
    document.getElementById("mySidenavMenu").style.borderLeft = "1px solid #cccbc5";
    document.getElementById("mySidenavMenu").style.visibility = "visible";
    document.getElementById("mySidenavMenu").style.width = "60px";
    $('#myMenu').find('.select-submenu').removeClass('select-submenu');
    $(this).addClass('select-submenu');
    $("#mySidenavMenu .submenu").find(".active").hide().removeClass("active");
    $("#why_us-id").addClass("active").show();
  })
  ;
  $(".china-menu").on("mouseover", function(){
    document.getElementById("mySidenavMenu").style.borderLeft = "1px solid #cccbc5";
    document.getElementById("mySidenavMenu").style.visibility = "visible";
    document.getElementById("mySidenavMenu").style.width = "60px";
    $('#myMenu').find('.select-submenu').removeClass('select-submenu');
    $(this).addClass('select-submenu');
    $("#mySidenavMenu .submenu").find(".active").hide().removeClass("active");
    $("#crossing_culture-id").addClass("active").show();
  })
  ;
  $(".raq-menu").on("mouseover", function(){
    document.getElementById("mySidenavMenu").style.borderLeft = "1px solid #cccbc5";
    document.getElementById("mySidenavMenu").style.visibility = "visible";
    document.getElementById("mySidenavMenu").style.width = "60px";
    $('#myMenu').find('.select-submenu').removeClass('select-submenu');
    $(this).addClass('select-submenu');
    $("#mySidenavMenu .submenu").find(".active").hide().removeClass("active");
  })
  ;
  $(".contact-menu").on("mouseover", function(){
    document.getElementById("mySidenavMenu").style.width = "0";
    document.getElementById("mySidenavMenu").style.visibility = "hidden";

    $('#myMenu').find('.select-submenu').removeClass('select-submenu');
    $(this).addClass('select-submenu');
    $("#mySidenavMenu .submenu").find(".active").hide().removeClass("active");
  });
  $(".home-menu").on("mouseover", function(){
    document.getElementById("mySidenavMenu").style.width = "0";
    document.getElementById("mySidenavMenu").style.visibility = "hidden";

    $('#myMenu').find('.select-submenu').removeClass('select-submenu');
    $(this).addClass('select-submenu');
    $("#mySidenavMenu .submenu").find(".active").hide().removeClass("active");
  });
