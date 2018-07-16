
const video = document.getElementById('myVideo');
const transcript = document.querySelectorAll('span');
const wrap = document.querySelector('.wrapper');


// Highlighting transcript as the video plays
video.addEventListener("timeupdate", () => {
 for (let i = 0; i < transcript.length; i++) {
   if(video.currentTime > transcript[i].getAttribute('data-start') && video.currentTime < transcript[i].getAttribute('data-end')){
     transcript[i].style.color = "#ff0000";
   } else {
     transcript[i].style.color = "#4D4949";
   }
 }
});

// //When the user clicks on any sentence in the transcript the video player jumps to the appropriate time in the video
wrap.addEventListener('click', function(e) {
    video.currentTime = e.target.getAttribute('data-start');
});
