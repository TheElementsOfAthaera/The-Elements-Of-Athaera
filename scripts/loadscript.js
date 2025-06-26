$(document).on('click', 'a[href^="/"]', function(e) {
    e.preventDefault(); // Prevent default link behavior
    var newUrl = $(this).attr('href');
    loadNewContent(newUrl);
});

function loadNewContent(url) {
    $.ajax({
        url: url,
        dataType: 'html',
        success: function(data) {
            var newBodyContent = $(data).filter('main').html(); // Get only the body's inner HTML
            $('main').html(newBodyContent); // Replace the current body's content
            history.pushState(null, '', url); // Update the URL in the browser's history
        },
        error: function(xhr, status, error) {
            console.error("Error loading content:", error);
            // Handle error, e.g., redirect to the full page or show an error message
        }
    });
}