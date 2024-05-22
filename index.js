var cont = 1, inizia = false, timer = 0, img="", Coppie = 0, timer1 = 0;

function gioca()
{
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
            cont ++;
        }
        else if(cont == 2)
        {
            cont --;
            if(img.src == evento.srcElement.src && img != evento.srcElement)
            {
                img.style.visibility = "hidden";
                evento.srcElement.style.visibility = "hidden";
                Coppie ++;
            }
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