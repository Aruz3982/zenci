let divler = document.getElementById("sol4")
function cagri(){
    document.getElementById("32").src = "aaad.jpg"
    document.getElementById("31").innerHTML = "hoşgeldin"
}
function degistir(sayfa) {
    fetch(sayfa)
        .then(response => response.text())
        .then(yanit => {
            document.getElementById("content").innerHTML = yanit;
            document.getElementById("content").appendChild(divler)
            if(sayfa == "arsiv.html"){
                arsivyukleme()
            }
          });
}
degistir('server2.html')
function call(){
const video = document.getElementById("vidto");
video.volume = 0.2;
};
function giriss(){
    if (event.key === "Enter") {
        let so = document.getElementById("inputt");
        let so2 = so.value;
        if (so2 === "3169"){
            degistir('server2.html');
            so2 = null ;
            so = null;
            alert("hoşgeldin")
        }
    }
};


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////ARŞİV///YÜKLEME/////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let karaekran
function arsivyukleme(){
    karaekran = document.createElement('div')
    karaekran.setAttribute("id", "karaekran")
    karaekran.style.zIndex=4
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
            video.setAttribute("onClick", "buyut('"+videolink+"')")
    
            const p = document.createElement('p');
            p.classList.add('basliklar');
            p.textContent = videobaslik;
            p.setAttribute("onClick", "buyut('"+videolink+"')")
            
            const br = document.createElement('br')
    
            div.appendChild(video);
            div.appendChild(p);
            div.appendChild(br);
    
            document.body.appendChild(div);
        }
    })}
let buyuyen
let cikmatusu
let carpi
function buyut(video){
    console.log(video)
    document.body.style.overflow = "hidden"
    document.body.appendChild(karaekran)
    buyuyen = document.createElement('video')
    buyuyen.setAttribute("id", "vidto")
    buyuyen.setAttribute("src", video)
    buyuyen.play()
    buyuyen.controls = true;
    buyuyen.style.zIndex=5
    buyuyen.style.left = "50%"
    document.body.appendChild(buyuyen)
    buyuyen.volume = 0.2
    cikmatusu = document.createElement('div')
    cikmatusu.setAttribute("id", "cikmatusu")
    document.body.appendChild(cikmatusu)
    carpi = document.createElement('img')
    carpi.setAttribute("src", "dddf.png")
    cikmatusu.appendChild(carpi)
    carpi.setAttribute("id","carpi")
    carpi.setAttribute("onClick","cik()")
}
function cik(){
    cikmatusu.removeChild(carpi)
    document.body.removeChild(cikmatusu)
    document.body.removeChild(buyuyen)
    document.body.removeChild(karaekran)
    document.body.style.overflow = "visible"
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////ARABA///OYUNU////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
araba = document.getElementById("araba");
let yukseklik
let a = null
let ses = new Audio("sees.wav");
let skor = 0
let yyyy = 0
let func1
let hiz = 3
let func3
let toplar
let can = 0
document.addEventListener("mousemove", function(event) {
    a = event.clientY -50
});
function arabahareket(){
    yukseklik =  a+"px";
    araba.style.top = yukseklik;
};
function basla(){
    document.getElementById("arababasla").disabled = false;
    document.getElementById("sil").innerHTML = null;
    func3 = setInterval(arabahareket)
    func1 = setInterval(oyun, 1000)
    can = 2
    araba = document.getElementById("araba");
    toplar = document.getElementById("toplar")
}
function oyun(){
    const obje = document.createElement("img");
    toplar.appendChild(obje);
    obje.style.position = "absolute";
    obje.src = "circle.png";
    obje.style.height = "100px";
    let x = 2000;
    let random = Math.floor(Math.random()*800);
    obje.style.top = random+"px";
    const func = setInterval(yen)
    function yen(){
        x = x-hiz
        obje.style.left = x+"px";
        const d = parseInt(obje.style.top.replace("px",''))
        let f = document.getElementById("araba")
        let y = f.getBoundingClientRect();
        if(y.left+100>x+50 && x+50>y.left && a < d+70 && d-70 < a){
            ses.play();
            toplar.removeChild(obje);
            skor = skor+1
            clearInterval(func);
            return
        }
        if(skor==6){
            clearInterval(func1)
            func1 = setInterval(oyun, 500)
        }
        if(skor==12){
            hiz=5
        }
        if(skor==20){
            clearInterval(func1)
            func1 = setInterval(oyun, 200)
            hiz=7
        }
        if(skor==40){
            hiz=8
        }
        if(skor==60){
            clearInterval(func3)
            araba.style.top = "40%"
            document.getElementById("sil").innerHTML = '<button id="arababasla" onclick="basla()"><div id="karaekran"></div></button><p onclick="basla()" id="tıklayın">Tebrikler, kazandınız<br>Tekrar oynamak için<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; tıklayın</p>';
            yyyy = 0
            skor = 0;
            hiz = 3;
            toplar.innerHTML = null;
            console.log(func)
            clearInterval(func1);
            clearInterval(func);
            return oyun;
        }
        if(can<0){
            clearInterval(func3)
            araba.style.top = "40%"
            document.getElementById("sil").innerHTML = '<button id="arababasla" onclick="basla()"><div id="karaekran"></div></button><p onclick="basla()" id="tıklayın">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kaybettin<br>Tekrar oynamak için <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; tıklayın</p>';
            yyyy = 0
            skor = 0;
            hiz = 3;
            toplar.innerHTML = null;
            console.log(func)
            clearInterval(func1);
            clearInterval(func);
            return oyun;
        }
        if(x < 0){
            toplar.removeChild(obje);
            clearInterval(func)
            can--;
        }
    }
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////TİC///TAC///TOE///////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


let tuslar = ["tus1","tus2","tus3","tus4","tus5","tus6","tus7","tus8","tus9"];
let liste = ["tus1","tus2","tus3","tus4","tus5","tus6","tus7","tus8","tus9"];
let listecarpi = [null]
let listeyuv = [null]
function isaretli(tik, tus){
    var awr = document.getElementById(tik);
    awr.src = "dddf.png";
    document.getElementById(tus).disabled = true;
    for (var i = 0; i < liste.length; i++) {
        if (liste[i] == tus) {
          listecarpi.push(liste[i])
          liste.splice(i, 1);
          break;
        }
      }
    
      if (listecarpi.includes("tus1") && listecarpi.includes("tus2") && listecarpi.includes("tus3")) {
        kazn("Tebrikler, kazandın")
        return;
      }
      if (listecarpi.includes("tus1") && listecarpi.includes("tus4") && listecarpi.includes("tus7")) {
        kazn("Tebrikler, kazandın")
        return;
      }
      if (listecarpi.includes("tus1") && listecarpi.includes("tus5") && listecarpi.includes("tus9")) {
        kazn("Tebrikler, kazandın")
        return;
      }
      if (listecarpi.includes("tus2") && listecarpi.includes("tus5") && listecarpi.includes("tus8")) {
        kazn("Tebrikler, kazandın")
        return;
      }
      if (listecarpi.includes("tus3") && listecarpi.includes("tus6") && listecarpi.includes("tus9")) {
        kazn("Tebrikler, kazandın")
        return;
      }
      if (listecarpi.includes("tus3") && listecarpi.includes("tus5") && listecarpi.includes("tus7")) {
        kazn("Tebrikler, kazandın")
        return;
      }
      if (listecarpi.includes("tus7") && listecarpi.includes("tus8") && listecarpi.includes("tus9")) {
        kazn("Tebrikler, kazandın")
        return;
      }
      if (listecarpi.includes("tus4") && listecarpi.includes("tus5") && listecarpi.includes("tus6")) {
        kazn("Tebrikler, kazandın")
        return;}
        if(liste.length == 0){
          kazn("Berabere");
          return;
        }
////////////////////////////////////////////kaybetince//////////////////////////////////////////////////////////////
    let b = (Math.floor((Math.random() * liste.length) + 2)) - 2;
    let f = liste[b]
    document.getElementById(f).innerHTML = '<img class="tik" src="circle.png" alt=""></img>'
    listeyuv.push(f)
    document.getElementById(f).disabled = true;
    liste.splice(b, 1)
    if (listeyuv.includes("tus1") && listeyuv.includes("tus2") && listeyuv.includes("tus3")) {
      kazn("Kaybettin, aptal seni. Kaybetmek için nasıl bir gerizekalı olman lazım adam rastgele oynuyo aptal özürlü")
    }
    if (listeyuv.includes("tus1") && listeyuv.includes("tus4") && listeyuv.includes("tus7")) {
      kazn("Kaybettin, aptal seni. Kaybetmek için nasıl bir gerizekalı olman lazım adam rastgele oynuyo aptal özürlü")
    }
    if (listeyuv.includes("tus1") && listeyuv.includes("tus5") && listeyuv.includes("tus9")) {
      kazn("Kaybettin, aptal seni. Kaybetmek için nasıl bir gerizekalı olman lazım adam rastgele oynuyo aptal özürlü")
    }
    if (listeyuv.includes("tus2") && listeyuv.includes("tus5") && listeyuv.includes("tus8")) {
      kazn("Kaybettin, aptal seni. Kaybetmek için nasıl bir gerizekalı olman lazım adam rastgele oynuyo aptal özürlü")
    }
    if (listeyuv.includes("tus3") && listeyuv.includes("tus6") && listeyuv.includes("tus9")) {
      kazn("Kaybettin, aptal seni. Kaybetmek için nasıl bir gerizekalı olman lazım adam rastgele oynuyo aptal özürlü")
    }
    if (listeyuv.includes("tus3") && listeyuv.includes("tus5") && listeyuv.includes("tus7")) {
      kazn("Kaybettin, aptal seni. Kaybetmek için nasıl bir gerizekalı olman lazım adam rastgele oynuyo aptal özürlü")
    }
    if (listeyuv.includes("tus7") && listeyuv.includes("tus8") && listeyuv.includes("tus9")) {
      kazn("Kaybettin, aptal seni. Kaybetmek için nasıl bir gerizekalı olman lazım adam rastgele oynuyo aptal özürlü")
    }
    if (listeyuv.includes("tus4") && listeyuv.includes("tus5") && listeyuv.includes("tus6")) {
      kazn("Kaybettin, aptal seni. Kaybetmek için nasıl bir gerizekalı olman lazım adam rastgele oynuyo aptal özürlü")
    }
};
function kazn(bilgi){
    liste = ["tus1","tus2","tus3","tus4","tus5","tus6","tus7","tus8","tus9"];
    listecarpi = [null]
    listeyuv = [null]
    for(i in liste){
        let h = liste[i]
        let k = i;
        k++;
        document.getElementById(h).disabled = true;
    }
    document.getElementById("kazanmamesaji").innerHTML = bilgi;
}
function tekraroyn(){
  liste = ["tus1","tus2","tus3","tus4","tus5","tus6","tus7","tus8","tus9"];
  listecarpi = [null]
  listeyuv = [null]
  for(i in tuslar){
    let h = tuslar[i]
    let k = i;
    k++;
    document.getElementById(h).innerHTML = '<img class="tik" id="tik'+k+'" src="" alt=""></img>'
    document.getElementById(h).disabled = false;
    document.getElementById("kazanmamesaji").innerHTML = null;
  }
}