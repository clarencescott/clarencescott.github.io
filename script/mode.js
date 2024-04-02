
function toggleStylesheet() {
    var stylesheet = document.getElementById('stylesheet');
    if (stylesheet.getAttribute('href') === '/styles/style.css') {
        stylesheet.setAttribute('href', '/styles/whitestyle.css');
        document.getElementById("mode").innerHTML = 'light_mode';
        document.getElementById("btnMode").style.color = 'rgb(0, 193, 241)';
    } else {
        stylesheet.setAttribute('href', '/styles/style.css');
        document.getElementById("mode").innerHTML = 'dark_mode';
        document.getElementById("btnMode").style.color = '#d0caff';
    }
}