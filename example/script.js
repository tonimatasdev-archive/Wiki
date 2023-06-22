// Show the pressed page and hide others
function showContent(contentId) {
    var contents = document.getElementsByClassName("wikiContent");
    for (var i = 0; i < contents.length; i++) {
        contents[i].style.display = "none";
    }

    var content = document.getElementById(contentId);
    if (content) {
        content.style.display = "block";
    }
}

// Convent .md to html code
function getContent(page) {
    fetch('content/' + page + '.md')
        .then(function(response) {
            return response.text();
        })
        .then(function(markdownContent) {
            var converter = new showdown.Converter();
            var htmlContent = converter.makeHtml(markdownContent);
            document.getElementById(page + '-markdown').innerHTML = htmlContent;
        });
}
