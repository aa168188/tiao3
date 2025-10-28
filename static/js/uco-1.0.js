var ifmobile, ifwindows, browser = navigator.userAgent.toLowerCase(),
    hostname = window.location.host,
    path = window.location.pathname;
(-1 != browser.indexOf("iphone") || -1 != browser.indexOf("android")) && -1 == browser.indexOf("ipad") && (ifmobile = !0), (-1 != browser.indexOf("windows") || -1 !== browser.indexOf("macintosh")) && (ifwindows = !0), (-1 != hostname.indexOf(".b2b.") || -1 != hostname.indexOf("0")) && (-1 == path.indexOf("/m/") ? ifmobile && (location.href = "https://" + hostname + "/m" + path) : ifwindows && (location.href = "https://" + hostname + path.replace("/m/", "/"))), -1 != path.indexOf("info/") && ifmobile && (location.href = "https://m.11467.com/product/d" + path.substr(6)), "/" == path && "www.11467.com" == hostname && ifmobile && (location.href = "https://m.11467.com/");
var _hmt = _hmt || [];

function GoMobile() {}

function getCookie(e) {
    var t = document.cookie.match(RegExp("(^| )" + e + "=([^;]+)"));
    if (t) return t[2]
}

function showm(e) {
    if (!document.getElementById("erweimadiv")) {
        var t = document.createElement("span");
        t.innerHTML = '<a href="#" onclick="document.getElementById(\'erweimadiv\').style.display=\'none\';return false;" class="btnclose">关闭</a><img src="//do.11467.com/erweima.php?murl=' + e + '" /><br>扫一扫，进入手机版', document.body.appendChild(t), t.id = "erweimadiv", t.style.display = "block"
    }
}


/* ================== 2. 懒加载核心 ================= */
function initLazy() {
  /* 工具：加载图片 */
  function loadImg(el) {
    var src = el.dataset ? el.dataset.src : el.getAttribute('data-src');
    if (!src) return;

    el.src = src;
    if (el.classList) {
      el.classList.remove('lazy');
    } else {
      el.className = el.className.replace(/\blazy\b/, '');
    }
  }

  /* 收集目标 */
  var lazyImgs = Array.prototype.slice.call(
    document.querySelectorAll('img.lazy')
  );

  /* —— 分支 1：IntersectionObserver —— */
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          loadImg(entry.target);
          obs.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '200px 0px',
      threshold: 0.01
    });

    lazyImgs.forEach(function (img) { io.observe(img); });
    return;                     // 现代浏览器路径结束
  }

  /* —— 分支 2：scroll / resize 回退 —— */
  function throttle(fn, delay) {
    var t; return function () {
      if (t) return;
      t = setTimeout(function () { fn(); t = null; }, delay);
    };
  }

  var check = throttle(function () {
    var viewBottom = (window.pageYOffset || document.documentElement.scrollTop)
                   + window.innerHeight + 200;

    lazyImgs = lazyImgs.filter(function (img) {
      if (img.offsetTop < viewBottom) {
        loadImg(img); return false;
      }
      return true;
    });

    if (lazyImgs.length === 0) {
      window.removeEventListener('scroll', check);
      window.removeEventListener('resize', check);
      window.removeEventListener('orientationchange', check);
    }
  }, 200);

  window.addEventListener('scroll', check);
  window.addEventListener('resize', check);
  window.addEventListener('orientationchange', check);
  check();                      // 首次执行
}

function showfooter() {
 
  initLazy();          // 确保在所有 <img class="lazy"> 插入后调用


 if (/(?:\/product\/|\/info\/|\/news\/)/.test(location.href)||location.host.includes("blog"))document.write('<script src="https://do.11467.com/countp.php?kc=1&refer='+encodeURIComponent(document.referrer)+"&page="+encodeURIComponent(location.href)+'"></script>');

var shunqiadDiv = document.getElementById('shunqiad');
if (shunqiadDiv) {
    var scriptElement = document.createElement('script');
    scriptElement.src = 'https://do.11467.com/js/gg.js';
    shunqiadDiv.appendChild(scriptElement);
}

   var e = document.getElementById("toplogin");
    function t() {
        let e = document.getElementById("coverbox_gray");
        e && e.remove()
    }
    null !== e && (void 0 !== getCookie("uid") ? e.innerHTML = '您好，您已经登陆 <a target="_blank" rel="nofollow" href="https://cp.11467.com/home/" title="登录" >会员中心</a> <a target="_blank" rel="nofollow" href="https://cp.11467.com/home/product/">产品管理</a> <a target="_blank" rel="nofollow" href="https://cp.11467.com/home/personal/company_info.html">公司资料</a> <a href="https://cp.11467.com/home/login/logout.html">退出登录</a>' : e.innerHTML = '欢迎来到顺企网，中国企业产品免费发布平台，请 <a target=_blank rel="nofollow" href="https://cp.11467.com" title="登录" >登录</a>  <a rel="nofollow" href="https://cp.11467.com/Home/reg/" target="_blank" class="areg">免费注册</a>'), document.querySelectorAll(".btn-xunjia").forEach(function(e) {
        e.addEventListener("click", function() {
            let t = e.getAttribute("data-id"),
                n = e.getAttribute("data-uid"),
                a = e.getAttribute("data-type");
            a || (a = 0);
            let o = "//cp.11467.com/api/xunjia/index/pid/" + t + "/type/" + a + (n ? "/userid/" + n : ""),
                i = document.getElementById("xunjia");
            i && i.remove();
            let r = document.createElement("div");
            r.id = "coverbox_gray", r.style.position = "fixed", r.style.zIndex = "1003", r.style.left = "0", r.style.top = "0", r.style.right = "0", r.style.bottom = "0", r.style.background = "rgba(0, 0, 0, 0.5)";
            let c = document.createElement("div");
            c.id = "xunjia";
            let l = document.createElement("span");
            l.className = "btnclose", l.textContent = "关闭";
            let s = document.createElement("iframe");
            s.scrolling = "no", s.frameBorder = "0", s.name = "myfram", s.style.width = "608px", s.style.height = "430px", s.src = o, c.appendChild(l), c.appendChild(s), r.appendChild(c), document.body.appendChild(r)
        })
    });
    let n = document.querySelector("#bottom-ad-shop.close");
    n && n.addEventListener("click", function() {
        let e = document.querySelector("#bottom-ad-shop");
        e && (e.style.display = "none")
    }), document.body.addEventListener("click", function(e) {
        if (e.target && e.target.classList.contains("btnclose")) {
            let t = document.getElementById("coverbox_gray");
            t && t.remove()
        }
    })
}

function showtab(e) {
    for (var t = document.getElementById(e), n = t.getElementsByTagName("h3"), a = t.getElementsByTagName("div"), o = 0; o < n.length; o++) n[o].index = o, n[o].onclick = function() {
        for (var e = 0; e < n.length; e++) n[e].className = "", a[e].style.display = "none", a[this.index].className = "", a[this.index].className = "content";
        this.className = "active", a[this.index].style.display = "block"
    }
}

function showmore(e) {
    var t = document.getElementById(e),
        n = t.innerHTML;
    content2 = (content2 = n.replace(/(^\s*)|(\s*$)/g, "")).replace(/<[^>]+>/g, "");
    var a = document.createElement("span"),
        o = document.createElement("a");
    a.innerHTML = content2.substring(0, 300), o.innerHTML = n.length > 300 ? "... 展开" : "", o.href = "javascript:void(0)", o.onclick = function() {
        o.innerHTML.indexOf("展开") > 0 ? (o.innerHTML = "<<&nbsp;收起", a.innerHTML = n) : (o.innerHTML = "... 展开", a.innerHTML = n.substring(0, 300))
    }, t.innerHTML = "", t.appendChild(a), t.appendChild(o)
}
(function(){
    var a=document.createElement("script"),b="//hm.baidu.com/hm.js?",c=window.location.href,d=window.location.host;
    a.src=b+(~c.indexOf("/product/")?"7ac26bd3ffd937f5821b4eedacaebf63":~c.indexOf("/info/")?"719637f141f1fad6594d68a33b79b0c0":~c.indexOf("/news/")||~d.indexOf("blog")?"dc67ac5484f83420f08121752862f403":~c.indexOf("www.11467.com")?"291f91f93e981298bf9f990196e21722":~d.indexOf(".b2b.")||~d.indexOf("0")?"a10570994c495a01b14c7249bdbba471":"819e30d55b0d1cf6f2c4563aa3c36208");
    document.getElementsByTagName("script")[0].parentNode.insertBefore(a,document.getElementsByTagName("script")[0]);
})();