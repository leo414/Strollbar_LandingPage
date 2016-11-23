$(function() {
  window.fnames = new Array();
  window.ftypes = new Array();
  fnames[0] = 'EMAIL';
  ftypes[0] = 'email';
  fnames[2] = 'NAME';
  ftypes[2] = 'text';
  fnames[3] = 'CITY';
  ftypes[3] = 'text';
  fnames[1] = 'DEVICE';
  ftypes[1] = 'radio';


  var closeMask = function() {
    $('#mask_msg').fadeOut()
  }

  fullPageStart()
  function fullPageStart() {
    var str1 = '<img class="down_sign hidden-xs" id="down_1" src="../img/down.png" />'
    var str2 = '<img class="down_sign hidden-xs" id="down_2" src="../img/down-2.png" />'
    var str3 = '<img class="down_sign hidden-xs" id="down_3" src="../img/up.png" />'

    $('#fullpage').fullpage({
      verticalCentered: false,
      resize: true,
      scrollingSpeed: 700,
      loopBottom: false,
      navigation: true,
      navigationPosition: 'left',
      fixedElements: '#logoFilxed',
      afterLoad: function(anchorLink, index) {
        if(index === 9 || index === 10) {
          $('#logoFilxed').hide()
        } else {
          $('#logoFilxed').show()
        }

        if(index === 8) {
          $('.down_sign').remove()
          $('#fp-nav').append(str1)
        }

        if(index === 9) {
          $('.down_sign').remove()
          $('#fp-nav').append(str2)
        }

        if(index === 10) {
          $('.down_sign').remove()
          $('#fp-nav').append(str3)
          $
        }

        if(index < 8) {
          $('.down_sign').remove()
        }

        if(index > 9) {
          $('#footer').show()
        } else {
          $('#footer').hide()
        }

        if(index !== 9) closeMask()
        if(index === 10 && $(window).width() < 768) descHide()
        if(index !== 10 ) $('#desc_section').fadeIn()
      },
    })
  }

  maskFade()
  function maskFade() {
    $('#pic_list .pic').click(function() {
      var index = $(this).index('#pic_list  .pic') + 1;
      $('#mask_msg').fadeIn().children('.pic').css({
        background: 'url(../img/bg_small-' + index + '.png) center center no-repeat',
        backgroundSize: 'cover'
      })

      $('#mask_msg .desc').html(textList[index - 1])
    })

    $('#close_mask').click(closeMask)
  }

  function descHide(){
    setTimeout(function() {$('#desc_section').fadeOut()}, 2000)
  }
})
