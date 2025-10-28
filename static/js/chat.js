
$(function(){
	$uid=$('#chat').attr('data-uid');
	$linkman=$('#chat').attr('data-linkman')||'';
	$refer=$('#chat').attr('data-refer')||'';
	if(!$linkman){
		$linkman='在线咨询';
	}
	$html='	<div id="showBox">'+
			'<div class="header" >'+
				'<div class="chat-linkbox"><span>在线咨询</span> <div class="chat-icon-small notification"></div></div>'+
				'<div class="chat-icon-4"></div>'+
			'</div>'+
		'</div>'+
		'<div id="chatBox">'+
			'<div class="header">'+
				'<div class="chat-linkbox"><span>'+$linkman+'</span> <div class="chat-icon-small"></div></div>'+
				'<div class="chat-icon-5" ></div>'+
			'</div>'+
			'<iframe loading="lazy" class="onlinechat" src="//js.11467.com/chat/index2/iframe.html?uid='+$uid+'&refer='+$refer+'" id="iframebox"></iframe>'+
		'</div>';
	$css='<link rel="stylesheet" href="//js.11467.com/Public/static/chat/css/common.css">';
	$show_chat=localStorage.getItem('showchat');

	
	$('body').append($html);
	$('head').append($css);
	$('#showBox').find('.header').on('click',function(){
		$('#showBox').hide();
		$('#chatBox').show();
		localStorage.setItem('showchat',1)
	})
	$('#chatBox').find('.header').on('click',function(){
		$('#chatBox').hide();
		$('#showBox').show();
		localStorage.setItem('showchat',2)
	})
	if($show_chat==1){
		$('#showBox').hide();
		$('#chatBox').show();
	}else if($show_chat==2){
		$('#chatBox').hide();
		$('#showBox').show();
	}else{
		$('#chatBox').hide();
		$('#showBox').show();
	}
	// $irame=document.createElement('iframe');
	// $irame.src='222';
	// $('#chat').html('<iframe class="onlinechat" src="http://js.11467.com/chat/index2/iframe2/uid/'+$uid+'.html"></iframe>')
	// console.log('22');
})
