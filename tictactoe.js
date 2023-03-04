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