var myVideo = document.getElementById("video1");
var videoPlayer = document.getElementById("videoPlayer");


const vid = new Map();
vid.set("Big",560);
vid.set("Normal", 420);
vid.set("Small", 320);

function playPause(){
    if (myVideo.paused){
        myVideo.play();
        var text = document.getElementById("play").innerText;
        getInnerText("Pause", "play");
    } else {
        myVideo.pause();
        getInnerText("Play", "play");
    }
}
function makeBig(){
    myVideo.width = vid.get("Big");   
}
function makeSmall(){
    myVideo.width = vid.get("Small"); ;   
}
function makeNormal(){
    myVideo.width = vid.get("Normal"); ;   
}
function getInnerText(name, button1){
    document.getElementById(button1).innerText = name;
}
function changeVideo1(){
    myVideo.src = "maskLiner.mp4";
}
function changeVideo2(){
    myVideo.src = "PartAFinishedShape.mp4";
}
function changeVideo3(){
    myVideo.src = "FinishedShape.mp4";
}
function changeVideoSource1(){
    videoPlayer.src = "https://www.youtube.com/embed/nIJCg41lmvE?si=uTULI1KHn9yMtPg8";
}
function changeVideoSource2(){
    videoPlayer.src = "https://www.youtube.com/embed/G7BTtZT0ueM?si=KwAcqVAQOKimmdDo";
}
function changeVideoSource3(){
    videoPlayer.src = "https://www.youtube.com/embed/Khu9BB2g4Ks?si=s01No7PX-WxLBLL6";
}
function changeVideoSource4(){
    videoPlayer.src = "https://www.youtube.com/embed/PuaJF36DlRo?si=67d_u8jkhfjy-bBp";
}
