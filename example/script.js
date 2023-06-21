// Show the pressed page and hide others
function showContent(contentId) {
    // Page information
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
          // Crear el convertidor de Markdown a HTML
          var converter = new showdown.Converter();

          // Convertir el contenido Markdown en HTML
          var htmlContent = converter.makeHtml(markdownContent);

          // Insertar el HTML convertido en el contenedor
          document.getElementById(page + '-markdown').innerHTML = htmlContent;
        });
}