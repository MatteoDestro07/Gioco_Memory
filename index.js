var cont = 1, inizia = false, timer = 0, img="", Coppie = 0, timer1 = 0, imgPrec = "";
var imgVet = ["img/Cane.jpg", "img/Elefante.jpg", "img/Maiale.jpg", "img/Leone.jpg", "img/Pecora.jpg", "img/Mucca.jpg"];
var numImg = [0,0,0,0,0,0]; //Per controllare se un immagine non viene generata per più di due volte

function init()
{
    let num = 0;
    let riga1 = document.querySelector("#riga1");
    let riga2 = document.querySelector("#riga2");

    //Genero immagini casuali per prima riga
    generaRiga(riga1);

    //Genero immagini casuali per seconda riga
    generaRiga(riga2);
}

function generaRiga(riga)
{
    for(let i = 0; i < imgVet.length; i++)
    {
        num = Math.round(Math.random()*5);
        while(numImg[num] == 2)
            num = Math.round(Math.random()*5);
        numImg[num]++;
        console.log(numImg);
        riga.innerHTML += `<div  onclick = "controlloImg(event)"><img src="${imgVet[num]}"></div>`;
    }
}

function gioca()
{
    let img1 = document.querySelector("img");
    img1.style.opacity = "0";
    if(Coppie!=0)
        document.location.reload();
    cont = 1;
    timer = 60;
    inizia = true;
    let header = document.querySelector("#descr");
    header.innerHTML = `Tempo Restante: ` + timer;
    timer1 = setInterval(impostaTimer, 1000);
}

function impostaTimer()
{
    timer--;
    let header = document.querySelector("#descr");
    header.innerHTML = `Tempo Restante: ` + timer;
    if(timer == 0)
    {
        alert("Hai perso");
        clearInterval(timer1);
        inizia = false;
    }
}

function controlloImg(evento)
{
    if(inizia)
    {
        if(cont == 1)
        {
            img = evento.srcElement;
            img.style.opacity = "100%";
            cont ++;
        }
        else if(cont == 2)
        {
            cont --;
            if(img.src == evento.srcElement.src && img != evento.srcElement)
            {
                img.style.opacity = "100%";
                evento.srcElement.style.opacity = "100%";
                Coppie ++;
            }
            else if(img.src != evento.srcElement.src)
            {
                img.style.opacity = "0%";
                evento.srcElement.style.opacity = "0%";
                evento.srcElement.classList = "animazione";
                img.classList = "animazione";
            }

            imgPrec = evento.srcElement;
            setTimeout(togliAnimazione, 1000);

        }
        
        if(Coppie == 6)
        {
            alert("Hai vinto");
            clearInterval(timer1);
            inizia = false;
        }
            
    }
    else
        alert("Prima Inizia il gioco");
}

function togliAnimazione()
{
    imgPrec.classList = "";
    img.classList = "";
}