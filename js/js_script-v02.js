function checkSize(){window.matchMedia("only screen and (max-width: 767px)").matches?($("header").find('a[href^="#"]').each(function(e,t){var s="#"+$(this).attr("data-menuanchor")+"_mobile";$(this).attr("href",s)}),menuWidth="100%",$("#about_us-id").show(),$("#our_work-id").show(),$("#why_us-id").show(),$("#crossing_cultures-id").show(),$(".main-submenu").css({top:0,left:0}),$(".main-submenu").children().css({position:"relative"})):(menuWidth="50%",$(".about-menu").on("mouseover",function(){$("#myMenu").find(".select-submenu").removeClass("select-submenu"),$(this).addClass("select-submenu"),$(".main-submenu").find(".active").hide().removeClass("active"),$("#about_us-id").addClass("active").show()}),$(".work-menu").on("mouseover",function(){$("#myMenu").find(".select-submenu").removeClass("select-submenu"),$(this).addClass("select-submenu"),$(".main-submenu").find(".active").hide().removeClass("active"),$("#our_work-id").addClass("active").show()}),$(".why-menu").on("mouseover",function(){$("#myMenu").find(".select-submenu").removeClass("select-submenu"),$(this).addClass("select-submenu"),$(".main-submenu").find(".active").hide().removeClass("active"),$("#why_us-id").addClass("active").show()}),$(".china-menu").on("mouseover",function(){$("#myMenu").find(".select-submenu").removeClass("select-submenu"),$(this).addClass("select-submenu"),$(".main-submenu").find(".active").hide().removeClass("active"),$("#crossing_cultures-id").addClass("active").show()}),$(".contact-menu").on("mouseover",function(){$("#myMenu").find(".select-submenu").removeClass("select-submenu"),$(this).addClass("select-submenu"),$(".main-submenu").find(".active").hide().removeClass("active")}),$(".home-menu").on("mouseover",function(){$("#myMenu").find(".select-submenu").removeClass("select-submenu"),$(this).addClass("select-submenu"),$(".main-submenu").find(".active").hide().removeClass("active")}))}function openNav(){document.getElementById("mySidenav").style.visibility="visible",document.getElementById("mySidenav").style.width=menuWidth,setTimeout(change_width,200),setTimeout(change_opacity,200),document.querySelector("#nav-toggle").setAttribute("onclick","closeNav()"),document.getElementById("nav-toggle").className="active"}function closeNav(){$(".main-submenu").find(".active").hide().removeClass("active"),document.getElementById("mySidenav").style.width="0",document.querySelector("#nav-toggle").setAttribute("onclick","openNav()"),setTimeout(change_width_0,400),setTimeout(change_opacity_0,100),document.getElementById("nav-toggle").className="",document.getElementById("mySidenav").style.visibility="hidden"}function change_width_0(){for(var e=document.getElementsByClassName("sidenav_link"),t=e.length;t--;)e[t].style.width="0"}function change_opacity_0(){for(var e=document.getElementsByClassName("sidenav_link"),t=e.length,s=document.getElementsByClassName("border_link"),n=s.length;t--;)e[t].style.opacity="0";for(;n--;)s[n].style.opacity="0";document.getElementById("menu-footer").style.opacity="0"}function change_width(){for(var e=document.getElementsByClassName("sidenav_link"),t=e.length;t--;)e[t].removeAttribute("style")}function change_opacity(){for(var e=document.getElementsByClassName("sidenav_link"),t=e.length,s=document.getElementsByClassName("border_link"),n=s.length;t--;)e[t].style.opacity="1";for(;n--;)s[n].style.opacity="1";document.getElementById("menu-footer").style.opacity="1"}$(document).ready(checkSize),$(window).on("resize",checkSize),window.addEventListener("touchstart",function(){$("#about_us-id").show(),$("#our_work-id").show(),$("#why_us-id").show(),$("#crossing_cultures-id").show(),$(".main-submenu").css({top:0,left:0}),$(".main-submenu").children().css({position:"relative"}),document.getElementById("mySidenav").style.overflowY="visible",document.getElementById("mySidenav").style.display="inherit",$(".l2-boxes-in .overlay").css({opacity:1})}),document.getElementsByClassName("page_id")&&(document.getElementsByClassName("page_id").onmouseover=function(){closeNav()}),$(".header-lang a").on("click",function(){$(".nav").find(".active").removeClass("active"),$(this).addClass("active")}),$(".submenu a").on("click",function(){$(".submenu").find(".active").removeClass("active"),$(this).addClass("active")}),document.querySelector("#nav-toggle").addEventListener("mouseover",function(){this.classList.add("closer")}),document.querySelector("#nav-toggle").addEventListener("mouseout",function(){this.classList.remove("closer")}),function(e,t,s,n,i,a,o){e.GoogleAnalyticsObject=i,e.ga=e.ga||function(){(e.ga.q=e.ga.q||[]).push(arguments)},e.ga.l=1*new Date,a=t.createElement(s),o=t.getElementsByTagName(s)[0],a.async=1,a.src="https://www.google-analytics.com/analytics.js",o.parentNode.insertBefore(a,o)}(window,document,"script",0,"ga"),ga("create","UA-97367021-1","auto"),ga("send","pageview"),function(e,t,s,n,i,a){e.hj=e.hj||function(){(e.hj.q=e.hj.q||[]).push(arguments)},e._hjSettings={hjid:661648,hjsv:6},i=t.getElementsByTagName("head")[0],(a=t.createElement("script")).async=1,a.src="https://static.hotjar.com/c/hotjar-"+e._hjSettings.hjid+".js?sv="+e._hjSettings.hjsv,i.appendChild(a)}(window,document);