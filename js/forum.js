/*jshint esversion: 6 */
/* (c) 2020 Star Inc.*/

function xyElevator() {}

xyElevator.prototype = {
    label: function () {
        $('.Post-header .Avatar').each(function () {
            let $pi = $(this).parents(".PostStream-item"), fn = $pi.attr("data-number");
            if (!$pi.find(".xy-floor").length && fn != undefined) {
                $(this).after('<span class="xy-floor"><i>' + fn + '</i>樓</span>');
            }
        });
    },

    input: function () {
        let $e = $(".DiscussionPage-nav .item-elevator"), $s = $(".DiscussionPage-nav .item-scrubber");
        if (!$e.length) {
            $s.before('<li class="item-elevator"><div class="ButtonGroup"><button class="Button hasIcon" title="" type="button" data-original-title="電梯直達"><input type="text" value="輸入樓層" id="xygoInt" class="xygo-int" autocomplete="off" onfocus="if(value==defaultValue){value=\'\';}" onblur="if(!value){value=defaultValue;}"></button><button class="Dropdown-toggle Button Button--icon"><i class="icon fas fa-location-arrow Button-icon xy-fgo"></i></button></div></li>');
            $(".DiscussionPage-nav").on('click', '.xy-fgo', function () {
                let $vin = $(this).parent().prev("button").children(".xygo-int"),
                    xfn = $vin.val();
                this.move(xfn, $vin);
            });
        }
        if ($e.length) {
            document.getElementById("xygoInt").onkeydown = function (e) {
                e = e ? e : window.event;
                let i = document.getElementById("xygoInt"),
                    n = i.value;
                if (e.keyCode == 13) {
                    this.move(n, i);
                }
            };
        }
    },

    move: function (n, i) {
        let lh = location.href, la = lh.split("/"), st = "";
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
            }
        }
    }
};

$(function () {
    context = new xyElevator();
    context.label();
    setInterval(function () {
        context.label();
        if (!$(".DiscussionPage-nav .item-elevator").length) {
            context.input();
        }
    }, 100);
    $(window).scroll(function () {
        context.label();
    });
    context.input();
});