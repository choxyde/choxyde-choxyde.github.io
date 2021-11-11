$('.coll-img, .coll-bg').click(function(){
        if($(this).hasClass('active')){
                $(this).removeClass("active");
                //removes div if button is activatedn't
                // $("#twitchBox").css({
                //         display: "none",
                // });
                $("#SamplePlayerDivID").remove();
                $(".hr-top").remove();
        }
        else{
                $('.coll-img, .coll-bg').removeClass("active");
                $(this).toggleClass("active");

                //show active button channelName
                var imgSrc = this.getAttribute('src');
                channelName = imgSrc.slice(17,-4);
                
                $("#twitchBox").html('<div id="SamplePlayerDivID"></div>');
                $("#cont-hr").html('<div class="hr-top"></div>');
                        
                var options = { width: 720, height: 360, channel: "" , muted: true, parent: ["choxyde.github.io"] }; 
                options.channel = channelName
                var player = new Twitch.Player("SamplePlayerDivID", options);

                // $("#twitchBox").css({
                //         display: "inline",
                // });

        }
});
