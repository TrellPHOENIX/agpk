    // img-width
    jQuery(document).ready(function($) {
        $(".owl-carousel").each(function(index, el) {
            var containerHeight = $(el).height();
            $(el).find("img").each(function(index, img) {
                    var w = $(img).prop('naturalWidth');
                    var h = $(img).prop('naturalHeight');
                    $(img).css({
                        'width': Math.round(containerHeight * w / h) + 'px',
                        'height': containerHeight + 'px'
                    });
                }),
                $(el).owlCarousel({
                    autoWidth: true,
                });
        });
    });