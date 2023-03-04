function arsivyukleme(){
let klasör = 'arsivden-videolar\ '
fetch(klasör)
.then(response => response.text())
.then(data => {
    const parser = new DOMParser();
    const htmlDocument = parser.parseFromString(data, 'text/html');
    const videolar = htmlDocument.getElementsByClassName("name");
    for(const link of videolar) {
        const videoisim = link.textContent;
        const videobaslik = videoisim.slice(0,-4)
        const videolink = "arsivden-videolar/" + videoisim
        if(videoisim == ".."){
            continue;
        }
        const div = document.createElement('div');
        div.classList.add('videolar');

        const video = document.createElement('video');
        video.classList.add('videolar-buyukluk');
        video.setAttribute('src', videolink);

        const button = document.createElement('button');
        button.classList.add('video-tiklama');

        const p = document.createElement('p');
        p.classList.add('basliklar');
        p.textContent = videobaslik;
        
        const br = document.createElement('br')

        div.appendChild(video);
        div.appendChild(button);
        div.appendChild(p);
        div.appendChild(br);

        document.body.appendChild(div);
        console.log(videoisim)
    }
})}