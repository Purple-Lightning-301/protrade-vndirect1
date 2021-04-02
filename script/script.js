function setTime(){
    setInterval(() => {
        let date = new Date();
        let hour = formatTime(date.getHours());
        let min = formatTime(date.getMinutes());
        let sec = formatTime(date.getSeconds());

        let year = date.getFullYear();
        let month = formatTime(date.getMonth() + 1);
        let day = formatTime(date.getDate());

        let time = `${hour}:${min}:${sec}`;
        let today = `${year}/${month}/${day}`;
    
        document.getElementById('hours').innerHTML = time;
        document.getElementById('days').innerHTML = today;
    }, 1000);
}
function formatTime(x){
  if(x<10){
    x = "0"+x;
  }
  return x;
}
document.getElementById('actionDefault1').click();

function click(){
  document.getElementById("actionDefault").click() ;
  document.getElementById("actionDefault2").click() ;
  document.getElementById("actionDefault3").click() ;
}
window.onload = () => {
    console.log(window.innerWidth)
    if(window.innerWidth > 1024){
      click();
    }
  }
window.onresize = () => {
  if(window.innerWidth < 1024){
    closeButton();
  }else if (window.innerWidth > 1024){
    showRight();
  }
}
function showRight(){
    document.getElementsByClassName("main-right")[0].style.display = "block";
    document.getElementsByClassName("main-content")[0].style.gridTemplateColumns  = "1fr 350px 400px";
    document.getElementsByClassName("command-menu")[0].style.width = "400px";
}

function openDiv2(evt, tabName, tablink, close) {
    var tablinks = document.getElementsByClassName(tablink);
    var tabcontent = document.getElementsByClassName(close);
    for (var i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    for (var i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementsByClassName("double")[0].style.width = "400px";
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";

    document.getElementById("actionDefault2").click() ;
    document.getElementsByClassName("main-content")[0].style.gridTemplateColumns  = "1fr 350px 400px";
    document.getElementsByClassName("main-right")[0].style.display = "block";
}

function closeButton(tablink){
    var tablinks = document.getElementsByClassName(tablink);
    document.getElementsByClassName("main-right")[0].style.display = "none";
    document.getElementsByClassName("main-content")[0].style.gridTemplateColumns  = "1fr 350px";
    document.getElementsByClassName("command-menu")[0].style.width = "350px";
    for (var i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
}
function showCommandFilter(closeName, openName, radioChecked){
  document.getElementsByClassName(closeName)[0].style.display = "none";
  document.getElementsByClassName(openName)[0].style.display = "block";
  document.getElementById(radioChecked).click();
}

setTime();