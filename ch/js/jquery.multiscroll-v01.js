(function($,window,document,Math,undefined){$.fn.multiscroll=function(options){var MS=$.fn.multiscroll;options=$.extend({'verticalCentered':true,'scrollingSpeed':800,'easing':'easeInOutExpo','menu':false,'sectionsColor':[],'anchors':[],'navigation':false,'navigationPosition':'right','navigationColor':'#000','navigationTooltips':[],'loopBottom':false,'loopTop':false,'css3':false,'paddingTop':0,'paddingBottom':0,'fixedElements':null,'normalScrollElements':null,'keyboardScrolling':true,'touchSensitivity':5,'sectionSelector':'.ms-section','leftSelector':'.ms-left','rightSelector':'.ms-right','afterLoad':null,'onLeave':null,'afterRender':null,'afterResize':null},options);var scrollDelay=400;var isTouch=(('ontouchstart'in window)||(navigator.msMaxTouchPoints>0)||(navigator.maxTouchPoints));if(options.rightSelector!=='.ms-right'){$(options.rightSelector).addClass('ms-right');}if(options.leftSelector!=='.ms-left'){$(options.leftSelector).addClass('ms-left');}var numberSections=$('.ms-left').find('.ms-section').length;var isMoving=false;var nav;var windowHeight=$(window).height();addMouseWheelHandler();addTouchHandler();if(options.css3){options.css3=support3d();}$('html, body').css({'overflow':'hidden','height':'100%'});if(options.sectionSelector!=='.ms-section'){$(options.sectionSelector).each(function(){$(this).addClass('ms-section');});}if(options.navigation){$('body').append('<div id="multiscroll-nav"><ul></ul></div>');nav=$('#multiscroll-nav');nav.css('color',options.navigationColor);nav.addClass(options.navigationPosition);}$('.ms-right, .ms-left').css({'width':'50%','position':'absolute','height':'100%','-ms-touch-action':'none'});$('.ms-right').css({'right':'1px','top':'0','-ms-touch-action':'none','touch-action':'none'});$('.ms-left').css({'left':'0','top':'0','-ms-touch-action':'none','touch-action':'none'});$('.ms-left .ms-section, .ms-right .ms-section').each(function(){var sectionIndex=$(this).index();if(options.paddingTop||options.paddingBottom){$(this).css('padding',options.paddingTop+' 0 '+options.paddingBottom+' 0');}if(typeof options.sectionsColor[sectionIndex]!=='undefined'){$(this).css('background-color',options.sectionsColor[sectionIndex]);}if(typeof options.anchors[sectionIndex]!=='undefined'){$(this).attr('data-anchor',options.anchors[sectionIndex]);}if(options.verticalCentered){addTableClass($(this));}if($(this).closest('.ms-left').length&&options.navigation){var link='';if(options.anchors.length){link=options.anchors[sectionIndex];}var tooltip=options.navigationTooltips[sectionIndex];if(typeof tooltip==='undefined'){tooltip='';}if(options.navigation){nav.find('ul').append('<li data-tooltip="'+tooltip+'"><a href="#'+link+'"><span></span></a></li>');}}});$('.ms-right').html($('.ms-right').find('.ms-section').get().reverse());$('.ms-left .ms-section, .ms-right .ms-section').each(function(){var sectionIndex=$(this).index();$(this).css({'height':'100%'});if(!sectionIndex&&options.navigation){nav.find('li').eq(sectionIndex).find('a').addClass('active');}}).promise().done(function(){if(!$('.ms-left .ms-section.active').length){$('.ms-right').find('.ms-section').last().addClass('active');$('.ms-left').find('.ms-section').first().addClass('active');}if(options.navigation){nav.css('margin-top','-'+(nav.height()/2)+'px');}$.isFunction(options.afterRender)&&options.afterRender.call(this);silentScroll();setBodyClass();$(window).on('load',function(){scrollToAnchor();});});$(window).on('hashchange',hashChangeHandler);function hashChangeHandler(){var value=window.location.hash.replace('#','');var sectionAnchor=value;if(sectionAnchor.length){var section=$('.ms-left').find('[data-anchor="'+sectionAnchor+'"]');var isFirstScrollMove=(typeof lastScrolledDestiny==='undefined');if(isFirstScrollMove||sectionAnchor!==lastScrolledDestiny){scrollPage(section);}}};$(document).keydown(keydownHandler);var keydownId;function keydownHandler(e){clearTimeout(keydownId);var activeElement=$(document.activeElement);if(!activeElement.is('textarea')&&!activeElement.is('input')&&!activeElement.is('select')&&options.keyboardScrolling){var keyCode=e.which;var keyControls=[40,38,32,33,34];if($.inArray(keyCode,keyControls)>-1){e.preventDefault();}keydownId=setTimeout(function(){onkeydown(e);},150);}}function onkeydown(e){var shiftPressed=e.shiftKey;switch(e.which){case 38:case 33:MS.moveSectionUp();break;case 32:if(shiftPressed){MS.moveSectionUp();break;}case 40:case 34:MS.moveSectionDown();break;case 36:MS.moveTo(1);break;case 35:MS.moveTo($('.ms-left .ms-section').length);break;default:return;}}$(document).mousedown(function(e){if(e.button==1){e.preventDefault();return false;}});function navClickHandler(e){e.preventDefault();var index=$(this).parent().index();scrollPage($('.ms-left .ms-section').eq(index));}$(document).on('click','#multiscroll-nav a',navClickHandler);function navMouseEnterHandler(){var tooltip=$(this).data('tooltip');$('<div class="multiscroll-tooltip '+options.navigationPosition+'">'+tooltip+'</div>').hide().appendTo($(this)).fadeIn(200);}function navMouseLeaveHandler(){$(this).find('.multiscroll-tooltip').fadeOut(200,function(){$(this).remove();});}$(document).on({mouseenter:navMouseEnterHandler,mouseleave:navMouseLeaveHandler},'#multiscroll-nav li');if(options.normalScrollElements){$(document).on('mouseenter',options.normalScrollElements,function(){MS.setMouseWheelScrolling(false);});$(document).on('mouseleave',options.normalScrollElements,function(){MS.setMouseWheelScrolling(true);});}$(window).on('resize',doneResizing);function doneResizing(){windowHeight=$(window).height();$('.ms-tableCell').each(function(){$(this).css({height:getTableHeight($(this).parent())});});silentScroll();$.isFunction(options.afterResize)&&options.afterResize.call(this);}function silentScroll(){if(options.css3){transformContainer($('.ms-left'),'translate3d(0px, -'+$('.ms-left').find('.ms-section.active').position().top+'px, 0px)',false);transformContainer($('.ms-right'),'translate3d(0px, -'+$('.ms-right').find('.ms-section.active').position().top+'px, 0px)',false);}else{$('.ms-left').css('top',-$('.ms-left').find('.ms-section.active').position().top);$('.ms-right').css('top',-$('.ms-right').find('.ms-section.active').position().top);}}MS.moveSectionUp=function(){var prev=$('.ms-left .ms-section.active').prev('.ms-section');if(!prev.length&&options.loopTop){prev=$('.ms-left .ms-section').last();}if(prev.length){scrollPage(prev);}};MS.moveSectionDown=function(){var next=$('.ms-left .ms-section.active').next('.ms-section');if(!next.length&&options.loopBottom){next=$('.ms-left .ms-section').first();}if(next.length){scrollPage(next);}};MS.moveTo=function(section){var destiny='';if(isNaN(section)){destiny=$('.ms-left [data-anchor="'+section+'"]');}else{destiny=$('.ms-left .ms-section').eq((section-1));}scrollPage(destiny);};function scrollPage(leftDestination){var leftDestinationIndex=leftDestination.index();var rightDestination=$('.ms-right').find('.ms-section').eq(numberSections-1-leftDestinationIndex);var rightDestinationIndex=numberSections-1-leftDestinationIndex;var anchorLink=leftDestination.data('anchor');var activeSection=$('.ms-left .ms-section.active');var leavingSection=activeSection.index()+1;var yMovement=getYmovement(leftDestination);isMoving=true;var topPos={'left':leftDestination.position().top,'right':rightDestination.position().top};rightDestination.addClass('active').siblings().removeClass('active');leftDestination.addClass('active').siblings().removeClass('active');setURLHash(anchorLink);if(options.css3){$.isFunction(options.onLeave)&&options.onLeave.call(this,leavingSection,(leftDestinationIndex+1),yMovement);var translate3dLeft='translate3d(0px, -'+topPos['left']+'px, 0px)';var translate3dRight='translate3d(0px, -'+topPos['right']+'px, 0px)';transformContainer($('.ms-left'),translate3dLeft,true);transformContainer($('.ms-right'),translate3dRight,true);setTimeout(function(){$.isFunction(options.afterLoad)&&options.afterLoad.call(this,anchorLink,(leftDestinationIndex+1));setTimeout(function(){isMoving=false;},scrollDelay);},options.scrollingSpeed);}else{$.isFunction(options.onLeave)&&options.onLeave.call(this,leavingSection,(leftDestinationIndex+1),yMovement);$('.ms-left').animate({'top':-topPos['left']},options.scrollingSpeed,options.easing,function(){$.isFunction(options.afterLoad)&&options.afterLoad.call(this,anchorLink,(leftDestinationIndex+1));setTimeout(function(){isMoving=false;},scrollDelay);});$('.ms-right').animate({'top':-topPos['right']},options.scrollingSpeed,options.easing);}lastScrolledDestiny=anchorLink;activateMenuElement(anchorLink);activateNavDots(anchorLink,leftDestinationIndex);}function removeMouseWheelHandler(){if(document.addEventListener){document.removeEventListener('mousewheel',MouseWheelHandler,false);document.removeEventListener('wheel',MouseWheelHandler,false);}else{document.detachEvent("onmousewheel",MouseWheelHandler);}}function addMouseWheelHandler(){if(document.addEventListener){document.addEventListener("mousewheel",MouseWheelHandler,false);document.addEventListener("wheel",MouseWheelHandler,false);}else{document.attachEvent("onmousewheel",MouseWheelHandler);}}function MouseWheelHandler(e){e=window.event||e;var delta=Math.max(-1,Math.min(1,(e.wheelDelta||-e.deltaY||-e.detail)));if(!isMoving){if(delta<0){MS.moveSectionDown();}else{MS.moveSectionUp();}}return false;}function transformContainer(container,translate3d,animated){container.toggleClass('ms-easing',animated);container.css(getTransforms(translate3d));}function getTransforms(translate3d){return{'-webkit-transform':translate3d,'-moz-transform':translate3d,'-ms-transform':translate3d,'transform':translate3d};}function activateNavDots(name,sectionIndex){if(options.navigation){$('#multiscroll-nav').find('.active').removeClass('active');if(name){$('#multiscroll-nav').find('a[href="#'+name+'"]').addClass('active');}else{$('#multiscroll-nav').find('li').eq(sectionIndex).find('a').addClass('active');}}}
  function activateMenuElement(name){if(options.menu){
  $(options.menu).find('.active').removeClass('active');
  $(options.menu).find('[data-menuanchor="'+name+'"]').addClass('active');


  // $('.submenu').find('.active').hide().removeClass('active');
  // $('#'+name+'-id').addClass("active").show();
  $(options.menu).find('.select-submenu').removeClass('select-submenu');
  $(options.menu).find('[data-menuanchor="'+name+'"]').addClass('select-submenu');
}}


  function getYmovement(destiny){var fromIndex=$('.ms-left .ms-section.active').index();var toIndex=destiny.index();if(fromIndex>toIndex){return'up';}return'down';}function setURLHash(anchorLink){if(options.anchors.length){location.hash=anchorLink;}setBodyClass();}function setBodyClass(){var section=$('.ms-left .ms-section.active');var sectionAnchor=section.data('anchor');var sectionIndex=section.index();var text=String(sectionIndex);if(options.anchors.length){text=sectionAnchor;}text=text.replace('/','-').replace('#','');var classRe=new RegExp('\\b\\s?'+'ms-viewing'+'-[^\\s]+\\b',"g");$('body')[0].className=$('body')[0].className.replace(classRe,'');$('body').addClass('ms-viewing-'+text);}function support3d(){var el=document.createElement('p'),has3d,transforms={'webkitTransform':'-webkit-transform','OTransform':'-o-transform','msTransform':'-ms-transform','MozTransform':'-moz-transform','transform':'transform'};document.body.insertBefore(el,null);for(var t in transforms){if(el.style[t]!==undefined){el.style[t]="translate3d(1px,1px,1px)";has3d=window.getComputedStyle(el).getPropertyValue(transforms[t]);}}document.body.removeChild(el);return(has3d!==undefined&&has3d.length>0&&has3d!=="none");}function addTableClass(element){element.addClass('ms-table').wrapInner('<div class="ms-tableCell" style="height: '+getTableHeight(element)+'px" />');}function getTableHeight(section){var sectionHeight=windowHeight;if(options.paddingTop||options.paddingBottom){var paddings=parseInt(section.css('padding-top'))+parseInt(section.css('padding-bottom'));sectionHeight=(windowHeight-paddings);}return sectionHeight;}function scrollToAnchor(){var sectionAnchor=window.location.hash.replace('#','');var section=$('.ms-left .ms-section[data-anchor="'+sectionAnchor+'"]');if(sectionAnchor.length){scrollPage(section);}}MS.setKeyboardScrolling=function(value){options.keyboardScrolling=value;};MS.setMouseWheelScrolling=function(value){if(value){addMouseWheelHandler();}else{removeMouseWheelHandler();}};MS.setScrollingSpeed=function(value){options.scrollingSpeed=value;};var touchStartY=0;var touchStartX=0;var touchEndY=0;var touchEndX=0;function touchMoveHandler(event){var e=event.originalEvent;if(isReallyTouch(e)){event.preventDefault();var activeSection=$('.ms-left .ms-section.active');if(!isMoving){var touchEvents=getEventsPage(e);touchEndY=touchEvents['y'];touchEndX=touchEvents['x'];if(Math.abs(touchStartY-touchEndY)>($(window).height()/100*options.touchSensitivity)){if(touchStartY>touchEndY){MS.moveSectionDown();}else if(touchEndY>touchStartY){MS.moveSectionUp();}}}}}function isReallyTouch(e){return typeof e.pointerType==='undefined'||e.pointerType!='mouse';}function touchStartHandler(event){var e=event.originalEvent;if(isReallyTouch(e)){var touchEvents=getEventsPage(e);touchStartY=touchEvents['y'];touchStartX=touchEvents['x'];}}function addTouchHandler(){if(isTouch){MSPointer=getMSPointer();$(document).off('touchstart '+MSPointer.down).on('touchstart '+MSPointer.down,touchStartHandler);$(document).off('touchmove '+MSPointer.move).on('touchmove '+MSPointer.move,touchMoveHandler);}}function removeTouchHandler(){if(isTouch){MSPointer=getMSPointer();$(document).off('touchstart '+MSPointer.down);$(document).off('touchmove '+MSPointer.move);}}function getMSPointer(){var pointer;if(window.PointerEvent){pointer={down:"pointerdown",move:"pointermove"};}else{pointer={down:"MSPointerDown",move:"MSPointerMove"};}return pointer;}function getEventsPage(e){var events=[];events.y=(typeof e.pageY!=='undefined'&&(e.pageY||e.pageX)?e.pageY:e.touches[0].pageY);events.x=(typeof e.pageX!=='undefined'&&(e.pageY||e.pageX)?e.pageX:e.touches[0].pageX);if(isTouch&&isReallyTouch(e)){events.y=e.touches[0].pageY;events.x=e.touches[0].pageX;}return events;}MS.destroy=function(){MS.setKeyboardScrolling(false);MS.setMouseWheelScrolling(false);removeTouchHandler();$(window).off('hashchange',hashChangeHandler).off('resize',doneResizing);$(document).off('mouseenter','#multiscroll-nav li').off('mouseleave','#multiscroll-nav li').off('click','#multiscroll-nav a');};MS.build=function(){MS.setKeyboardScrolling(true);MS.setMouseWheelScrolling(true);addTouchHandler();$(window).on('hashchange',hashChangeHandler).on('resize',doneResizing);$(document).on('mouseenter','#multiscroll-nav li',navMouseEnterHandler).on('mouseleave','#multiscroll-nav li',navMouseLeaveHandler).on('click','#multiscroll-nav a',navClickHandler);};};})(jQuery,window,document,Math);
