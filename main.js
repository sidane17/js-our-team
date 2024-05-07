let profilo=
[{
    "Nome":"Wayne Barnett",
    "Ruolo":"Founder $ CEO",
    "Immagine":"wayne-barnett-founder-ceo.jpg"
    

},
{
    "Nome":"Angela Caroll",
    "Ruolo":"Chief Editor",
    "Immagine":"angela-caroll-chief-editor.jpg"
},
{
    "Nome":"Walter Gordon",
    "Ruolo":"Office Manager",
    "Immagine":"walter-gordon-office-manager.jpg"
},
{
    "Nome":"Angela Lopez",
    "Ruolo":"Social Media Manager",
    "Immagine":"angela-lopez-social-media-manager.jpg"   
},
{
    "Nome":"Scott Estrada",
    "Ruolo":"Developer",
    "Immagine":"scott-estrada-developer.jpg"   
},
{
    "Nome":"Barbara Ramos",
    "Ruolo":"Graphic Designer",
    "Immagine":"barbara-ramos-graphic-designer.jpg"   
}
];
console.log(profilo[2].Immagine)
for(let i=0;i<profilo.length;i++){
    document.getElementById("container").innerHTML+=`
        <div class="card" style="width: 18rem">
            <img
            class="card-img-top"
            src="/img/${profilo[i].Immagine}"
            alt="Card image cap"
            />
            <div class="card-body">
            <h5 class="card-title">${profilo[i].Nome}</h5>
            <p class="card-text">${profilo[i].Ruolo}</p>
            </div>
        </div>`
       
    
}
