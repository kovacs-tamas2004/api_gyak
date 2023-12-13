let link = document.getElementById("url").value;
link = "www.github.com";

function keres(){
    fetch("https://favicongrabber.com/api/grab/"+link+"?pretty=true")
    .then(response => response.json())
    .then(data => {
        console.log("kép: " + data.icons[0].src);
    })    
}