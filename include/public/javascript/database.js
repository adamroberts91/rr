function zdc_getElements(a,b,d){var c=[],e,f=a.getElementsByClassName,g=new RegExp("\\b"+d+"\\b","i");a||(a=document);b||(b="*");a=f?a.getElementsByClassName(d):a.getElementsByTagName(b);for(e=a.length;e--;)(f&&"*"!==b&&a[e].nodeName.toLowerCase()===b||"*"===b||!f&&-1<a[e].className.indexOf(d)&&g.test(a[e].className))&&c.push(a[e]);return c.length?c:!1}function zdc_setDisplay(a,b){for(var d in a)d.match(/^[0-9]+$/)&&(a[d].style.display=b)} function zdc_closeAll(a){if(!(-1<a.indexOf("zdc-records")||-1<a.indexOf("zdc-explain")||-1<a.indexOf("zdc-backtrace"))){var b=["zdc-errors","zdc-successful-queries","zdc-unsuccessful-queries","zdc-warnings"],d,c,e;for(d in b)c=b[d],c!==a&&(c=document.getElementById(c),null!==c&&(e=zdc_getElements(c,"table","zdc-entry"),zdc_setDisplay(e,"none"),c.style.display="none"));b="post get session cookie files server".split(" ");if(null===a.match(/^zdc\-globals/))for(d in document.getElementById("zdc-globals-submenu").style.display= "none",a=document.getElementById("zdc-globals"),a.style.display="none",b)c="zdc-globals-"+b[d],null!==document.getElementById(c)&&(document.getElementById(c).style.display="none");else for(d in b)c="zdc-globals-"+b[d],c!==a&&null!==document.getElementById(c)&&(document.getElementById(c).style.display="none")}} function zdc_toggle(a){var b,d,c;zdc_closeAll(a);if("console"===a)b=document.getElementById("zdc"),b.style.display="block"!==b.style.display?"block":"none";else switch(a){case "zdc-errors":case "zdc-successful-queries":case "zdc-unsuccessful-queries":case "zdc-warnings":b=document.getElementById(a);null!==b&&(a=zdc_getElements(b,"table","zdc-entry"),d="block"!==b.style.display?"block":"none",zdc_setDisplay(a,d),b.style.display=d);break;case "zdc-globals-submenu":b=document.getElementById(a);a=document.getElementById("zdc-globals"); b.style.display="block"!==b.style.display?"block":"none";a.style.display="block"!==a.style.display?"block":"none";break;case "zdc-globals-post":case "zdc-globals-get":case "zdc-globals-session":case "zdc-globals-cookie":case "zdc-globals-files":case "zdc-globals-server":b=document.getElementById(a);b.style.display="block"!==b.style.display?"block":"none";break;default:b=document.getElementById(a),c=a.match(/\-([a-z]+)([0-9]+)$/),null!==c&&(a=document.getElementById("zdc-records-"+c[1]+c[2]),d=document.getElementById("zdc-explain-"+ c[1]+c[2]),c=document.getElementById("zdc-backtrace-"+c[1]+c[2]),null!==a&&a!==b&&(a.style.display="none"),null!==d&&d!==b&&(d.style.display="none"),null!==c&&c!==b&&(c.style.display="none")),null!==b&&(b.style.display="block"!==b.style.display?"block":"none")}}var startStack=function(){},registerOnLoad=function(a){var b=startStack;startStack=function(){b();a()}},ranOnload=!1,orgOnLoad; document.addEventListener?document.addEventListener("DOMContentLoaded",function(){ranOnload||(ranOnload=!0,startStack())},!1):document.all&&!window.opera&&(document.write('<script id="DOMReady" defer=true src=//:>\x3c/script>'),document.getElementById("DOMReady").onreadystatechange=function(){"complete"!==this.readyState||ranOnload||(ranOnload=!0,startStack())});orgOnLoad=window.onload;window.onload=function(){"function"===typeof orgOnLoad&&orgOnLoad();ranOnload||(ranOnload=!0,startStack())}; registerOnLoad(function(){var a=document.getElementById("zdc-errors"),b=document.getElementById("zdc-unsuccessful-queries"),d;null!==a?(d=zdc_getElements(a,"table","zdc-entry"),zdc_setDisplay(d,"block"),a.style.display="block"):null!==b?(d=zdc_getElements(b,"table","zdc-entry"),zdc_setDisplay(d,"block"),b.style.display="block"):(a=document.getElementById("zdc-successful-queries"),a=zdc_getElements(a,"table","zdc-highlight"),zdc_setDisplay(a,"block"));document.addEventListener("keydown",function(a){a= a||window.event;27===a.keyCode&&zdc_closeAll("")})});