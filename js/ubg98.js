function inFrame () {
  try {
      return window.self !== window.top;
  } catch (e) {
      return true;
  }
}


function botBrowser() {
try {
  return navigator.webdriver
} catch (e) {
    return true;
}
}


function desktopBrowser() {
  try {
    const w= window.screen.width;
    return (w>= 800);
  } catch (e) {
    return false;
  }
  return false;
}


function closeBacklinks() {
document.getElementById("backlinksPlace").style.display= "none";
return false;
}


function insertBacklinks() {
if (inFrame()) {
  return false;
}
if (!desktopBrowser()) {
  return false;
}
let backlinksHTML= "";
backlinksHTML= "<ul style=\"color: #ffffff; padding: 0px; margin: 0px; font-size:18px;\">";
backlinksHTML+= "<li style=\"padding: 10px; display: inline-block; float: left;\">"+
    "<a style=\"padding: 5px;color: #ffffff; text-decoration: none; \" onMouseOver=\"this.style.backgroundColor='#0C1E40';\" onMouseOut=\"this.style.backgroundColor='';\" href= \"//ubg98.github.io\">"+ decodeURIComponent(escape("\xF0\x9F\x8F\xA0")) +" ubg98</a>"+
    "</li>";
backlinksHTML+= "<li style=\"padding: 10px; display: inline-block; float: right;\">"+
    "<a onclick= \"return closeBacklinks();\" style=\"padding: 5px;color: #ffffff; text-decoration: none;\" onMouseOver=\"this.style.backgroundColor='#ff6666';\" onMouseOut=\"this.style.backgroundColor='';\" href=\"#\">"+ decodeURIComponent(escape("\xE2\x9D\x8C")) +"</a>"+
    "</li>";
backlinksHTML+= "</ul>";

const backlinksPlace = document.createElement("div");
backlinksPlace.setAttribute("id", "backlinksPlace");
backlinksPlace.style.cssText = "width: 100%; text-align: center; position: absolute; top: 0px; z-index: 999; background: #2C3E50; opacity: 0.9;";
backlinksPlace.innerHTML= backlinksHTML;
window.document.body.insertBefore(backlinksPlace, window.document.body.firstChild);
}

addEventListener("load", insertBacklinks);
setTimeout(closeBacklinks, 5* 60* 1000);