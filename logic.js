// Dato un array di oggetti letterali con: - url dell’immagine - titolo - descrizione
// Creare un carosello come nella foto allegata.
// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l’immagine grande in modo da poter stilare lo slider
// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello
// Al click dell’utente sulle frecce, l’immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo
// Milestone 2:
// Aggiungere il **ciclo infinito** del carosello. Ovvero se l’img attiva è la prima e l’utente clicca la freccia prev, l’img che deve attivarsi sarà l’ultima e viceversa per l’ultima img se l’utente clicca la freccia next



// arraey img
const images = [ 
    { 
        image: 'img/01.webp', title: 'Marvel\'s Spiderman Miles Morale', text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.'
    }, 
    { 
        image: 'img/02.webp', title: 'Ratchet & Clank: Rift Apart', text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.'
    },
    { 
        image: 'img/03.webp', title: 'Fortnite', text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos."
    }, 
    { 
        image: 'img/04.webp', title: 'Stray', text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city'
    }, 
    { 
        image: 'img/05.webp', title: "Marvel's Avengers", text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.'
    } 
];

// usiamo l’array di oggetti letterali per popolare dinamicamente il carosello
const contCaros = document.querySelector(".cont-caros");

images.forEach((img, i) => {
    console.log(img, i);

    console.log(img.image);
    console.log(img.title);
    console.log(img.text);

    contCaros.innerHTML += `
    <div class="cont-img">
        <img src="${img.image}">
        <div class="cont-text">
            <h2>${img.title}</h2>
            <p>${img.text}</p>
        </div>
        
    </div>`
});



let active = 0;
document.getElementsByClassName('cont-img')[active].classList.add('active');

const contImg = document.getElementsByClassName('cont-img');
const butUp = document.querySelector(".but-up");

butUp.addEventListener("click", 
    function(){
        
        if (active < images.length -1){
            contImg[active].classList.remove("active");
            active++;
            contImg[active].classList.add("active");

        } else {
            // ciclo infinito
            contImg[active].classList.remove("active");
            contImg[active=0].classList.add("active");
        }
    }
)

const butDown = document.querySelector(".but-down");
butDown.addEventListener("click", function(){
    
    if (active == 0) { 
        // ciclo infinito
        contImg[active].classList.remove("active");
        contImg[active=images.length - 1].classList.add("active");
        
    } else if (active < images.length){
        contImg[active].classList.remove("active");
        active--;
        contImg[active].classList.add("active");
    }
})










