/**
 *
 * @authors erx (erx@qq.com)
 * @date    2019-12-16 13:25:17
 * @version $Id$
 */

$(function () {
    function xyFloor() {
      $('.Post-header .Avatar').each(function () {
        var $pi = $(this).parents(".PostStream-item"),
          fn = $pi.attr("data-number");
        if (!$pi.find(".xy-floor").length && fn != undefined) {
          $(this).after('<span class="xy-floor"><i>' + fn + '</i>樓</span>');
        }
      });
    }
    xyFloor();
    setInterval(function () {
      xyFloor();
      if (!$(".DiscussionPage-nav .item-elevator").length) {
        xyElevator();
      }
    }, 100);
    $(window).scroll(function () {
      xyFloor();
    });
    /*
    $("body").on('mouseenter','*', function(){
        xyElevator();
    });
    */
    function xyElevator() {
      var $e = $(".DiscussionPage-nav .item-elevator"),
        $s = $(".DiscussionPage-nav .item-scrubber");
      if (!$e.length) {
        $s.before('<li class="item-elevator"><div class="ButtonGroup"><button class="Button hasIcon" title="" type="button" data-original-title="電梯直達"><input type="text" value="輸入樓層" id="xygoInt" class="xygo-int" autocomplete="off" onfocus="if(value==defaultValue){value=\'\';}" onblur="if(!value){value=defaultValue;}"></button><button class="Dropdown-toggle Button Button--icon"><i class="icon fas fa-location-arrow Button-icon xy-fgo"></i></button></div></li>');
        $(".DiscussionPage-nav").on('click', '.xy-fgo', function () {
          var $vin = $(this).parent().prev("button").children(".xygo-int"),
            xfn = $vin.val();
          xyEjump(xfn, $vin);
        });
      }
      if ($e.length) {
        document.getElementById("xygoInt").onkeydown = function (e) {
          e = e ? e : window.event;
          var i = document.getElementById("xygoInt"),
            n = i.value;
          if (e.keyCode == 13) {
            xyEjump(n, i);
          }
        }
      }
    }
    xyElevator();
  
    function xyEjump(n, i) {
      var lh = location.href,
        la = lh.split("/"),
        st = "";
      if (n == '' || n == '輸入樓層') {
        i.focus();
      } else {
        if (la.length == 5) {
          st = la.join("/");
          location.href = st + '/' + n;
        } else if (la.length == 6) {
          la.pop();
          st = la.join("/");
          location.href = st + '/' + n;
        } else {
          //console.info("erx:error!");
        }
      }
    }
  });
  