/*
    [DESTOON B2B System] Copyright (c) 2008-2020 www.destoon.com
    This is NOT a freeware, use is subject to license.txt
*/

function Ds(i) {$('#'+i).show();}
function Dh(i) {$('#'+i).hide();}
function ext(v) {return v.substring(v.lastIndexOf('.')+1, v.length).toLowerCase();}
function Album(id) {
    var t = $('#thumbs img').length;
    for(var i=0; i<t; i++) {
        $('#tbs_'+i).className = i==id ? 'ab_on' : 'ab_im';
    }
    $('#mid_pic').src = $('#tbs_'+id).attr('src').replace('.thumb.', '.middle.');




}



function SAlbum() {
    s = $('#mid_pic').attr('src');
    if(s.indexOf('null.') != -1) return;
    if(s.indexOf('.middle.') != -1) s = s.substring(0, s.length-8-ext(s).length);
    $('#big_pic').attr('src',s) ;
    Ds('big_div');
    Ds('zoomer');
}
function HAlbum() {
    Dh('zoomer');
    Dh('big_div');
}
function VAlbum(o) {
    if($('#mid_pic').attr('src').indexOf('null.')==-1){
        window.location.href = $('#mid_pic').attr('src');
    }
}
function PAlbum() {
    var l = parseInt($('#thumbs').css('margin-left').match(/\d+/));
    if(l > 0) {
        $('#thumbs').css('margin-left', '-'+(l-70)+'px');
        $('#tbsn').attr('src', $('#tbsn').attr('src').replace('next-0', 'next-1'));
    }   
    if(l <= 70) $('#tbsp').attr('src', $('#tbsp').attr('src').replace('prev-1', 'prev-0'));
}
function NAlbum() {
    var l = parseInt($('#thumbs').css('margin-left').match(/\d+/));
    var m = ($('#thumbs img').length - 5)*70;
    if(l < m) {
        $('#thumbs').css('margin-left', '-'+(l+70)+'px');
        $('#tbsp').attr('src', $('#tbsp').attr('src').replace('prev-0', 'prev-1'));
    }   
    if(l >= m - 70) $('#tbsn').attr('src', $('#tbsn').attr('src').replace('next-1', 'next-0'));
    
}
function APlay(v) {
    $('#ab-video').html(player(v,400,300,1));
    $('#ab-video,.ab_hide').show();
}
function AHide() {
    $('#ab-video').children().remove();
    $('#ab-video,.ab_hide').hide();
}
$(function(){
    $('#zoomer').hide();
    var AL = $('#mid_div').offset().left + 1;
    var AT = $('#mid_div').offset().top + 1;
    var ZW = $('#zoomer').width();
    var ZH = $('#zoomer').height();
    var PW = $('#mid_pic').width();
    var PH = $('#mid_pic').height();
    $('#mid_div').on('mousemove',function(e){
        var l,t,ll,tt;
        eX = e.clientX;
        var pl = ($('#big_pic').width() - $('#big_div').width())/(PW - ZW);
        if(eX <= AL + ZW/2) {
            l = 0;
            ll = 0;
        } else if(eX >= AL + (PW - ZW/2)) {
            l = PW - ZW;
            ll = $('#big_div').width() - $('#big_pic').width();
        } else {
            l = eX - ZW/2-AL;
            ll = parseInt((AL - eX + ZW/2) * pl);
        }
       

        if($('#big_pic').width() < $('#big_div').width()) ll = 0;
        eY = e.clientY + $(document).scrollTop();
        var pt = ($('#big_pic').height() - $('#big_div').height())/(PH - ZH);
        if(eY <= AT + ZH/2) {
            t = 0;
            tt = 0;
        } else if(eY >= AT + (PH - ZH/2)) {
            t = PH - ZH;
            tt = $('#big_div').height() - $('#big_pic').height();
        } else {
            t = eY - ZH/2-AT;
            tt =  parseInt((AT - eY + ZH/2) * pt);
        }
        if($('#big_pic').height() < $('#big_div').height()) tt = 0;
        $('#zoomer').css({'left':l + 'px','top':t + 'px'});
        $('#big_pic').css({'left':ll + 'px','top':tt + 'px'});
    });
    $('.thumbimg').on('mouseover',function(){
        $(this).addClass('ab_on').siblings('.thumbimg').removeClass('ab_on')
        $src=$(this).attr('src').replace('_small', '');
        if($(this).hasClass('video')){
            $('#imgshow').hide();
            $('#videoshow').show();
        }else{
            $('#imgshow').show();
            $('#videoshow').hide();
        }
        $('#mid_pic').attr('src',$src);
    })
    $('#zoomer').on('click',function(){

    })
});
$('video').bind('contextmenu',function() { return false; });