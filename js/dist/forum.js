module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (c) 2020 Star Inc.*/
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
      };
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
      } else {//console.info("erx:error!");
      }
    }
  }
});

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map