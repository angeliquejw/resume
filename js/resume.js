jQuery(document).ready(function($) {
    setWaypoint();
    scrollTo();

    function setWaypoint() {
        var waypoint = new Waypoint.Sticky({
            element: document.getElementById('js-waypoint'),
            stuckClass: 'isSticky',
            wrapper: '<div class="stickyWrapper"></div>',
            // handler: function(direction) {
            //     console.log('Scrolled to waypoint!')
            // }
        });
    }

    function scrollTo() {
        $('.js-scrollTo').click(function(e) {

            // Get the href dynamically
            var destination = $(this).attr('href');

            // Set defaults
            var thespeed = 800;
            var offset = $(destination).offset().top - 55;

            // Prevent href=“#” link from changing the URL hash (optional)
            e.preventDefault();

            // Animate scroll to destination
            $('html, body').animate({
                scrollTop: offset
            }, thespeed, 'swing');
        });
    }
});