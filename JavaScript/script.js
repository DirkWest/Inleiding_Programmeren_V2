console.log ("Test123");

// 􂄾 Bron: Sonja Rouwhorst
// Aangeven welke HTML elementen worden gebruikt.
let afbeeldingvoor = document.getElementById("voorkantAuto");

let knopjeBlauw = document.getElementById("knopjeBlauw");
let knopjeWit = document.getElementById("knopjeWit");
let knopjeGroen = document.getElementById("knopjeGroen");
let knopjeOranje = document.getElementById("knopjeOranje");
let knopjePaars = document.getElementById("knopjePaars");

let knopjeGeleLampen = document.getElementById("knopjeGeleLampen");
let knopjeBlauweLampen = document.getElementById("knopjeBlauweLampen");


// Huidige kleuren bijhouden.
let nuAutoKleur = 'wit' ;
let nuKoplampKleur = 'geel' ;


// 􂄾 Bron: ChatGPT. (2024). Auto Configurator JavaScript Hulp. ChatGPT. https://chatgpt.com/share/e9813dff-c24e-47a1-86af-5ea0982f0dab
// 􂄾 Bron: Sonja Rouwhorst, tijdens een feedbackgesprek.
// Functies toekennen om afbeelding te veranderen. Hier is ook aangegeven dat oranje en paars niet in combinatie met LED koplampen mogen.
function updateAutoAfbeelding() {
    if ((nuAutoKleur === 'oranje' || nuAutoKleur === 'paars') && nuKoplampKleur === 'geel') {
        afbeeldingvoor.src = 'autotjes/BOEM.svg'; 
        alert("Deze combinatie is niet mogelijk. Deze kleuren zijn duurder en komen standaard met LED koplampen.");
    } else {
        let afbeeldingPath = 'autotjes/car_'+nuAutoKleur+'/'+nuAutoKleur+'_'+nuKoplampKleur+'.svg'; 
        afbeeldingvoor.src = afbeeldingPath;
    }
}

// Functies om autokleuren te wijzigen.
function wordtWit () {
    nuAutoKleur = 'wit' ;
    updateAutoAfbeelding() ;
}

function wordtBlauw () {
    nuAutoKleur = 'blauw' ;
    updateAutoAfbeelding() ;
}

function wordtGroen () {
    nuAutoKleur = 'groen' ; 
    updateAutoAfbeelding() ;
}

function wordtOranje () {
    nuAutoKleur = 'oranje' ; 
    updateAutoAfbeelding() ;
}

function wordtPaars () {
    nuAutoKleur = 'paars' ;
    updateAutoAfbeelding() ;
}

// Functies om koplampkleuren te veranderen.
function wordtGeelLampen () {
    nuKoplampKleur = 'geel' ;
    updateAutoAfbeelding() ; 
}

function wordtBlauwLampen () {
    nuKoplampKleur = 'blauw' ; 
    updateAutoAfbeelding() ;
}


// 􂄾 Bron geluid: W3Schools.com. (z.d.). https://www.w3schools.com/html/html5_audio.asp
// Event listners voor de kleuren van de auto.
knopjeWit.addEventListener('click', function() {
    klikGeluid.play();
    wordtWit();
});

knopjeBlauw.addEventListener('click', function() {
    klikGeluid.play();
    wordtBlauw();
});

knopjeGroen.addEventListener('click', function() {
    klikGeluid.play();
    wordtGroen();
});

knopjeOranje.addEventListener('click', function() {
    klikGeluid.play();
    wordtOranje();
});

knopjePaars.addEventListener('click', function() {
    klikGeluid.play();
    wordtPaars();
}); 

// Event listners voor de koplampkleuren van de auto.
knopjeGeleLampen.addEventListener('click', function() {
    klikGeluid.play();
    wordtGeelLampen();
});

knopjeBlauweLampen.addEventListener('click', function() {
    klikGeluid.play();
    wordtBlauwLampen();
});