var ffmpeg = require('ffmpeg'); 

// processes video to images
try {
	var process = new ffmpeg('src/video/h264.mp4');
	process.then(function (video) {
		// Callback mode
		video.fnExtractFrameToJPG('dist/img', {
			frame_rate : 1,
			number : 5,
			file_name : 'my_frame_%t_%s'
		}, function (error, files) {
			if (!error)
				console.log('Frames: ' + files);
		});
	}, function (err) {
		console.log('Error: ' + err);
	});
} catch (e) {
	console.log(e.code);
	console.log(e.msg);
}

//  {
// 	var process = new ffmpeg('src/video/h264.mp4');

// 	process.then(function (video) {
// 		// Video metadata
// 		console.log(video.metadata);
// 		// FFmpeg configuration
// 		console.log(video.info_configuration);
// 	}, function (err) {
// 		console.log('Error: ' + err);
// 	});
// } catch (e) {
// 	console.log(e.code);
// 	console.log(e.msg);
// }


// try {
// 	var process = new ffmpeg('src/video/h264.mp4');
// 	process.then(function (video) {
		
// 		video
// 		.setVideoSize('640x?', true, true, '#fff')
// 		.setAudioCodec('libfaac')
// 		.setAudioChannels(2)
// 		.save('dist/your_movie.avi', function (error, file) {
// 			if (!error)
// 				console.log('Video file: ' + file);
// 		});

// 	}, function (err) {
// 		console.log('Error: ' + err);
// 	});
// } catch (e) {
// 	console.log(e.code);
// 	console.log(e.msg);
// }