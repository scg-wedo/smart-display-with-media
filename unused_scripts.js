// var videos = jd.page.home_selected.front.videos;
// console.log(videos)
// $('#home-select-video-panel video source').attr('src', videos[0].url)
// $("#home-select-video-panel video")[0].load();

// var i = 1;
// function myLoop() {
//     setTimeout(function () {
//         console.log('play '+ i)
//         $('#home-select-video-panel video source').attr('src', videos[i].url)
//         $("#home-select-video-panel video")[0].load();
//         console.log('play '+ i + ' finish')
//         i++;
//         if (i < videos.length) {
//             myLoop();
//         }
//         else {
//             // IF Fisnish video array loop
//             // i = 0;
//             // myLoop();
//             // window.location.href = "home_select_template2.html";
//         }
//     }, videos[i].duration * 1000)
// }
// myLoop();