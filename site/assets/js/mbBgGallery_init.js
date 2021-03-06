
(function(){
    "use strict";


    $(function ($) {

        //BG SLIDESHOW WITH ZOOM EFFECT
        var images_col;
        if (window.innerWidth > 760) {
            images_col = ["img/background/bg_1.jpg", "img/background/bg_2.jpg", "img/background/bg_3.jpg"];
        }
        else {
            images_col = ["img/background/bg_1.jpg"];
        }
        $.mbBgndGallery.buildGallery({
            containment:"body",
            timer:750, //TODO return to 1000
            effTimer:10000, //TODO return to 15000
            controls:false,
            grayScale:false,
            shuffle:true,
            preserveWidth:false,
            preserveTop: true,
            effect:{enter:{transform:"scale("+(1+ Math.random()*5)+")",opacity:0},exit:{transform:"scale("+(1 + Math.random()*5)+")",opacity:0}, enterTiming:"cubic-bezier(0.19, 1, 0.22, 1)", exitTiming:"cubic-bezier(0.19, 1, 0.22, 1)"},
            /* effect:{enter:{transform:"scale("+(1+ Math.random()*2)+")",opacity:0},exit:{transform:"scale("+(Math.random()*2)+")",opacity:0}},*/

            // If your server allow directory listing you can use:
            // (however this doesn't work locally on your computer)
            // else:
            images:images_col,
            onStart:function(){},
            onPause:function(){},
            onPlay:function(opt){},
            onChange:function(opt,idx){},
            onNext:function(opt){},
            onPrev:function(opt){}
        });




    });
// $(function ($)  : ends

})();
