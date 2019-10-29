var img1 = "";
var img2 = "https://kanjiantu.com/images/2019/10/12/250x25019009b8ef820e231.gif";
var img3 = "";
var img4 = "https://kanjiantu.com/images/2019/10/12/250x25019009b8ef820e231.gif";

var url1 = "/";   // 右上
var url2 = "https://11qp77.com/index.html?shareName=11qp20";  // 右下
var url3 = "/"; // 左上
var url4 = "https://11qp77.com/index.html?shareName=11qp20"; // 左上

// 单位px
var pcWidth = 150; //电脑时图片长度
var padWidth = 100; // pad长度
var phoneWidth = 65; // 手机时图片长度

function isPhone() {
  return ~navigator.userAgent.indexOf('Mobile');
}

function creat(isRight, src1, src2, link1, link2) {
  var leftRoot = document.createElement("div");
  leftRoot.style.position = "fixed";
  leftRoot.style.display = "flex";
  leftRoot.style.height = "100%";
  leftRoot.style.alignItems = "center";
  leftRoot.style.top = "0";
  leftRoot.style.zIndex = 2147483647;
  isRight ? leftRoot.style.right = "0" : leftRoot.style.left = "0";
  if (isRight) leftRoot.style.right = "0";
  var leftContainer = document.createElement("div");
  leftContainer.style.position = "relative";
  leftContainer.style.flexDirection = "column";
  leftContainer.style.maxWidth = isPhone() ? window.innerWidth > 576 ? padWidth + "px" :
    phoneWidth + "px" :
    pcWidth + "px";
  leftContainer.style.position = "relative";

  var leftBtn = document.createElement("button");
  leftBtn.innerText = "关闭";
  leftBtn.addEventListener("click", function (event) {
    event.preventDefault();
    leftRoot.remove();
  }, false);
  leftBtn.style.border = "0";
  leftBtn.style.position = "absolute";
  isRight ? leftBtn.style.left = "1px" : leftBtn.style.right = "1px";
  leftBtn.style.backgroundColor = "transparent";
  leftBtn.style.cursor = "pointer";
  leftBtn.style.bottom = "100%"
  if (isPhone()) leftBtn.style.fontSize = window.innerWidth > 576 ? leftBtn.style.fontSize = "inherit" :
    leftBtn.style.fontSize = "15px";
  leftBtn.addEventListener("mouseenter", function (event) {
    event.target.style.color = "red";
  }, false);
  leftBtn.addEventListener("mouseleave", function (event) {
    event.target.style.color = "inherit";
  }, false);

  var leftA1 = document.createElement("a");
  leftA1.href = link1;
  leftA1.target = "_blank";
  leftA1.style.display = "block";
  leftA1.style.marginBottom = "7%";

  var leftImg1 = document.createElement("img");
  leftImg1.style.width = "100%";
  leftImg1.src = src1;

  leftA1.appendChild(leftImg1);

  var leftA2 = document.createElement("a");
  leftA2.href = link2;
  leftA2.target = "_blank";
  leftA2.style.display = "block";
  leftA2.style.marginTop = "7%";

  var leftImg2 = document.createElement("img");
  leftImg2.style.width = "100%";
  leftImg2.src = src2;

  leftA2.appendChild(leftImg2);

  leftContainer.appendChild(leftBtn);
  leftContainer.appendChild(leftA1);
  leftContainer.appendChild(leftA2);
  leftRoot.appendChild(leftContainer);
  document.body.appendChild(leftRoot);
  window.addEventListener("resize", function (event) {
    leftContainer.style.maxWidth = isPhone() ? window.innerWidth > 576 ? padWidth + "px" :
      phoneWidth + "px" :
      pcWidth + "px";
    isPhone() ? window.innerWidth > 576 ? leftBtn.style.fontSize = "inherit" :
      leftBtn.style.fontSize = "15px" : leftBtn.style.fontSize = "inherit";
  }, false);
}
creat(false, img1, img2, url1, url2);
creat(true, img3, img4, url3, url4);