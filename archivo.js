
    var cds = 
    {

        "Furor": [
                    "Burlar la ley",
                    "Un rato más",
                    "Perdón por nada",
                    "Apagado",
                    "A veces",
                    "Igual que perder",
                    "Iluminate",
                    "Los Salidores",
                    "Noche de sábado",
                    "Dormí",
                    "Salió el sol",
                    "Esto soy"
                ],
        "Cortejo" : [
                    "Fuegos de artificio",
                    "Perfumes cítricos",
                    "Terminemos los dos locos",
                    "El ritual",
                    "Dulce innovador",
                    "Activame vos",
                    "Un farsante",
                    "Mi risa ficcion",
                    "Pausa al tiempo",
                    "El esceptico",
                    "Cortejo "
                ],
        "Nuevocd" : [
                    "Me quemo"
                ],
   
}


    var letrasCanciones = 
    {
        "Burlar la ley" : "esto se va a reemplazarrr!!!!111111111111",
        "Un rato más": "esto se va a reemplazarrr!!!!2222222222222222",
        "Perdón por nada": "esto se va a reemplazarrr!!!!333333333333333",
        "Apagado": "esto se va a reemplazarrr!!!!4444444444",
        "A veces": "esto se va a reemplazarrr!!!!555555555",
        "Igual que perder": "esto se va a reemplazarrr!!!!6666666",
        "Iluminate": "esto se va a reemplazarrr!!!7777777!",
        "Los Salidores": "esto se va a reemplazarrr!!!!88888888",
        "Noche de sábado": "esto se va a reemplazarrr!!!!999999",
        "Dormí": "esto se va a reemplazarrr!!!!1010101",
        "Salió el sol": "esto se va a reemplazarrr!!!!111111111-11-11-11",
        "Esto soy": "esto se va a reemplazarrr!!!!12-12-12-12-12-12-",
        
    }

    var videoCancion = {
        "Burlar la ley" : "video:esto se va a reemplazarrr!!!!111111111111",
        "Un rato más": "esto se va a reemplazarrr!!!!2222222222222222",
        "Perdón por nada": "esto se va a reemplazarrr!!!!333333333333333",
        "Apagado": "esto se va a reemplazarrr!!!!4444444444",
        "A veces": "esto se va a reemplazarrr!!!!555555555",
        "Igual que perder": "esto se va a reemplazarrr!!!!6666666",
        "Iluminate": "esto se va a reemplazarrr!!!7777777!",
        "Los Salidores": "esto se va a reemplazarrr!!!!88888888",
        "Noche de sábado": "esto se va a reemplazarrr!!!!999999",
        "Dormí": "esto se va a reemplazarrr!!!!1010101",
        "Salió el sol": "esto se va a reemplazarrr!!!!111111111-11-11-11",
        "Esto soy": "esto se va a reemplazarrr!!!!12-12-12-12-12-12-",
    }

    var cancionSelect = "Dormí";

    var f = new XMLHttpRequest();
    f.open("GET", "letras/letra1.txt", true);
    f.onreadystatechange = function ()
    {
        
        if(f.readyState === 4)
        {
            if(f.status === 200 || f.status == 0)
            {
                var letraPage = document.getElementById("letra-cancion");
                letraPage.innerHTML = f.responseText;
            }
        }
    }

    f.send();

    // var letraPage = document.getElementById("letra-cancion");

    // letraPage.innerHTML = req.responseText;



   

