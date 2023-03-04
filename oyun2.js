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