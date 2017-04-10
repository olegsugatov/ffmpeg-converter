// var container = document.getElementById("myVid"),
//     video = document.createElement('video'),
//     canCapture = true;
// if (!video.canPlayType('video/wmv')) {
//     /* If you don't have multiple sources, you can load up a Flash fallback here
//        (like jPlayer), but you won't be able to capture frames */
//     canCapture = false;
//     return;
// }
// video.src = 'myvideo.wmv';
// container.appendChild(video);
// video.play(); //or put this in a button click handler if you want your own controls

// var canvas = document.createElement('canvas');
// canvas.width = 640;
// canvas.height = 480;
// var ctx = canvas.getContext('2d');
// // if you want to preview the captured image,
// // attach the canvas to the DOM somewhere you can see it.

// //draw image to canvas. scale to target dimensions
// ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

// //convert to desired file format
// var dataURI = canvas.toDataURL('image/jpeg'); // can also use 'image/png'