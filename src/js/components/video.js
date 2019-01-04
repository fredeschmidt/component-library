
(function () {

    var videoContainer = $('.video--js');
    if (!videoContainer.length) {
        return;
    }


    $(videoContainer).each(function( i, video ) {

        // VIMEO
        if ($(video).data("vimeo-id")) { 
            var vimeoVideoID = $(video).data("vimeo-id");

            // play video
            $(video).find("span").click(function () {
                $(this).parent().addClass("playing");
                $(this).parent().append('<iframe src="https://player.vimeo.com/video/' + vimeoVideoID + '?title=1&amp;byline=1&amp;portrait=1&amp;autoplay=true" width="100%" height="100%" frameborder="0"></iframe>');
               
                $(video).parent('.media-article--video').find('.video_content').hide();
                $(video).parent('.media-article--video').css('background', 'none'); //removes the background
            });

            // background image
            $.getJSON('https://www.vimeo.com/api/v2/video/' + vimeoVideoID + '.json?callback=?',
                { format: "json" },
                function (data) {
                    $(video).parent().css('background-image', 'url(\'' + data[0].thumbnail_large + '\')');
            });
        }

        // YOUTUBE
        else if ($(video).data("youtube-id")) { 
            var youtubeVideoID = $(video).data("youtube-id");

            // play video
            $(video).find("span").click(function () {
                $(this).parent().addClass("playing");
                $(this).parent().append('<iframe src="https://www.youtube.com/embed/'+ youtubeVideoID +'?enablejsapi=1&version=3&rel=0&showinfo=0&autoplay=1" width="100%" height="100%" frameborder="0"></iframe>');
               
                $(video).parent('.media-article--video').find('.video_content').hide();
                $(video).parent('.media-article--video').css('background', 'none'); //removes the background
            });

            // background image
            videoThumbnail = jYoutube(youtubeVideoID);
            $(video).parent().css('background-image', 'url(\'' + videoThumbnail + '\')');
        }
    });
    
})();






// youtube get thumbnail
function jYoutube( url, size ){
    if(url === null){ return ""; }

    size = (size === null) ? "big" : size;
    var vid;
    var results;

    results = url.match("[\?&]v=([^&#]*)");

    vid = ( results === null ) ? url : results[1];

    if(size == "small"){
      return "http://img.youtube.com/vi/"+vid+"/2.jpg";
    }else {
      return "http://img.youtube.com/vi/"+vid+"/0.jpg";
    }
}

