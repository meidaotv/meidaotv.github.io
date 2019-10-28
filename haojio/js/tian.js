//Scroll Top
(function(e){e.scrollUp=function(t){var n={scrollName:"scrollUp",topDistance:50,topSpeed:300,animation:"fade",animationInSpeed:200,animationOutSpeed:200,scrollText:"",scrollImg:false,activeOverlay:false};var r=e.extend({},n,t),i="#"+r.scrollName;e("<a/>",{id:r.scrollName,href:"#top",title:r.scrollText}).appendTo("body");if(!r.scrollImg){e(i).text(r.scrollText)}e(i).css({display:"none",position:"fixed","z-index":"2147483647"});if(r.activeOverlay){e("body").append("<div id='"+r.scrollName+"-active'></div>");e(i+"-active").css({position:"absolute",top:r.topDistance+"px",width:"100%","border-top":"1px dotted "+r.activeOverlay,"z-index":"2147483647"})}e(window).scroll(function(){switch(r.animation){case"fade":e(e(window).scrollTop()>r.topDistance?e(i).fadeIn(r.animationInSpeed):e(i).fadeOut(r.animationOutSpeed));break;case"slide":e(e(window).scrollTop()>r.topDistance?e(i).slideDown(r.animationInSpeed):e(i).slideUp(r.animationOutSpeed));break;default:e(e(window).scrollTop()>r.topDistance?e(i).show(0):e(i).hide(0))}});e(i).click(function(t){e("html, body").animate({scrollTop:0},r.topSpeed);t.preventDefault()})}})(jQuery);
//bootstrap-scrollspy.js v2.0.2
!function($){function ScrollSpy(element,options){var process=$.proxy(this.process,this),$element=$(element).is("body")?$(window):$(element),href;this.options=$.extend({},$.fn.scrollspy.defaults,options);this.$scrollElement=$element.on("scroll.scroll.data-api",process);this.selector=(this.options.target||((href=$(element).attr("href"))&&href.replace(/.*(?=#[^\s]+$)/,""))||"")+" ul li > a";this.$body=$("body").on("click.scroll.data-api",this.selector,process);this.refresh();this.process()}ScrollSpy.prototype={constructor:ScrollSpy,refresh:function(){this.targets=this.$body.find(this.selector).map(function(){var href=$(this).attr("href");return/^#\w/.test(href)&&$(href).length?href:null});this.offsets=$.map(this.targets,function(id){return $(id).position().top})},process:function(){var scrollTop=this.$scrollElement.scrollTop()+this.options.offset,offsets=this.offsets,targets=this.targets,activeTarget=this.activeTarget,i;for(i=offsets.length;i--;){activeTarget!=targets[i]&&scrollTop>=offsets[i]&&(!offsets[i+1]||scrollTop<=offsets[i+1])&&this.activate(targets[i])}},activate:function(target){var active;this.activeTarget=target;this.$body.find(this.selector).parent(".active").removeClass("active");active=this.$body.find(this.selector+'[href="'+target+'"]').parent("li").addClass("active");if(active.parent(".dropdown-menu")){active.closest("li.dropdown").addClass("active")}}};$.fn.scrollspy=function(option){return this.each(function(){var $this=$(this),data=$this.data("scrollspy"),options=typeof option=="object"&&option;if(!data){$this.data("scrollspy",(data=new ScrollSpy(this,options)))}if(typeof option=="string"){data[option]()}})};$.fn.scrollspy.Constructor=ScrollSpy;$.fn.scrollspy.defaults={offset:10};$(function(){$('[data-spy="scroll"]').each(function(){var $spy=$(this);$spy.scrollspy($spy.data())})})}(window.jQuery);

$(function(){
	$('#nav-plane ul li a,.r_nav a').on('click', function(e){
		var aim = $(e.target).attr('href').slice(1),dom = $('#'+aim),top = dom.offset().top;
		$('html, body').animate({scrollTop: top-59}, 200,function(){ dom.stop();});
		e.preventDefault();
	})
});

$(function(){
	/*********hover*********/
	$(".web_list>li>div").css("background-color","#F66").hide();
	$(".web_list>li").mouseover(function(){
		$(this).children("div").stop().fadeIn(100);
	});
	$(".web_list>li").mouseout(function(){
		$(this).children("div").stop().fadeOut(200);
	});
	/*左右下角 底部关闭*/	
	$(".b_close a").click(function(){
		$(this).parent().parent("div").hide()	
	})
	$(".bottom_fixed div").click(function(){
		$(this).parent("div").hide()	
	})	

});
$(function () {
	var $li = $("#skin li"); 
	$li.click(function (){ 
			switchSkin(this.id);
	});
	// Save Cookie
	var cookie_skin = $.cookie("MyCssSkin");
		if (cookie_skin) {                       
			switchSkin(cookie_skin); 
		}
});
function switchSkin(skinName) {   
	$("#" + skinName).addClass("selected") .siblings().removeClass("selected"); 
	$("#cssfile").attr("href", "/haojio/css/" + skinName + ".css");
	$.cookie("MyCssSkin", skinName, { path: '/', expires: 10 }); 
}
$(document).ready(function(){
    $(".open").click(function(){
		$(".tanchu").fadeIn(200)
	})
	$(".tanchu-close p").click(function(){
		$(".tanchu").fadeOut(200)
	})
	$(".zx").click(function(){
		$(".zuixin").fadeIn(200)
	})
	$(".tanchu-close p").click(function(){
		$(".zuixin").fadeOut(200)
	})
	$(".fb").click(function(){
		$(".fabu").fadeIn(200)
	})
	$(".tanchu-close p").click(function(){
		$(".fabu").fadeOut(200)
	})
});
//$(function(){
//var urlstr = location.href;
//alert((urlstr + '/').indexOf($(this).attr('href')));
//var urlstatus=false;
//$(".nav a").each(function () {
//if ((urlstr + '/').indexOf($(this).attr('href')) > -1&&$(this).attr('href')!='') {
//$(this).addClass('on'); urlstatus = true;
//} else {
//$(this).removeClass('on');
//}
//});
//if (!urlstatus) {$(".nav li").eq(0).addClass('on'); }
//});
/*
function nav_trace(obj, clas) {
    var spl_url = window.location.pathname.split('/'),
        nav_len = $(obj).length,
        flag = true;
    var same_index = new Array();
    spl_url[spl_url.length - 1] == "" ? current_url = spl_url[spl_url.length - 2] : current_url = spl_url[spl_url.length - 1];
    for (i = 0; i < nav_len; i++) {
        var a_href = $(obj).eq(i).attr("href").split('/');
        a_href[a_href.length - 1] == "" ? a_url = a_href[a_href.length - 2] : a_url = a_href[a_href.length - 1];
        if (a_url == current_url) {
            flag = false;
            same_index.push($(obj).eq(i));
        }
    }
    same_index[0].addClass(clas).siblings().removeClass(clas);
}
nav_trace('.nav li a', 'on');
})*/
$(document).ready(function(){
    $('#a2').click(function(event) {
        var sign = $('#b2').css('display');
        if(sign == 'none'){
            if($('#b1').css('top') == '40px'){
                $('#a1').click();
            }
            $('#b2').show();
            $('#a2').removeClass('spanoff');
            $('#a2').addClass('spanon');
        }else{
            $('#b2').hide();
            $('#a2').removeClass('spanon');
            $('#a2').addClass('spanoff');
        }
    });
    $('#a1').click(function(event) {
        var sign = $('#b1').css('top');
        if(sign != '40px'){
            if($('#b2').css('display') != 'none'){
                $('#a2').click();
            }
            $('#b1').css('top','40px')
            $('#a1').removeClass('spanoff');
            $('#a1').addClass('spanon');
        }else{
            $('#b1').css('top','-150px')
            $('#a1').removeClass('spanon');
            $('#a1').addClass('spanoff');
        }
    });

});
$(function(){ 
  $(window).scroll(function() {   
    if($(window).scrollTop() >= 300){
      $('.gotop').fadeIn(400); 
    }else{    
      $('.gotop').fadeOut(400);    
    }  
  });
  $('.gotop').click(function(){
  $('html,body').animate({scrollTop: '0px'}, 800);}); 
});