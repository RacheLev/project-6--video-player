
const video = document.getElementById('myVideo');
const transcript = document.querySelectorAll('span');


// Highlighting transcript
video.addEventListener("timeupdate", () => {
 for (let i = 0; i < transcript.length; i++) {
   if(video.currentTime > transcript[i].getAttribute('data-start') && video.currentTime < transcript[i].getAttribute('data-end')){
     transcript[i].style.color = "red";
   } else {
     transcript[i].style.color = "#4D4949";
   }
 }
});

//When the user clicks on any sentence in the transcript the video player jumps to the appropriate time in the video
  transcript.addEventListener("click", () => {
   for (let i = 0; i < transcript.length; i++) {
  //    if(   ==transcript[i]) {
  //     video.currentTime = transcript[i].getAttribute('data-start');
// //     video.play();
      //}
     }
   });
