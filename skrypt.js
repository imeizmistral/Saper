var liczbaruchow=0;
function pokazPola()
{
//utworzenie wszystkich pól
    var przyciski="";
    for(x=0;x<81;x++)
    {
        przyciski=przyciski+ '<div onclick="odkryj('+x+')" id="P'+x+'"class="pole"></div>';
        if((x+1)%9==0){przyciski=przyciski+ '<div "style="clear:both;"></div>'}
    }
    document.getElementById("plansza").innerHTML=przyciski;

//rozlokowanie bomb
    rozlokowanieBomb();

// utworzenie pól nie funkcyjnych
    for (i=0;i < 9;i++) {
       
    $("#P"+i).css("background-color","grey");
    $("#P"+i).css("border","3px solid grey");
    $("#P"+i).css("cursor","auto");
    document.getElementById("P"+i).innerHTML = '<div id="B'+i+'"class="bomba">0</div>';
    document.getElementById("P"+i).setAttribute("onclick",";");   

    }
    for (i=72;i < 81;i++) {
       
        $("#P"+i).css("background-color","grey");
        $("#P"+i).css("border","3px solid grey");
        $("#P"+i).css("cursor","auto");
        document.getElementById("P"+i).innerHTML = '<div id="B'+i+'"class="bomba">0</div>';
        document.getElementById("P"+i).setAttribute("onclick",";");  
        }
    for(i=9;i<72;i++){
    if(i%9==0)
    {
        $("#P"+i).css("background-color","grey");
        $("#P"+i).css("border","3px solid grey");
        $("#P"+i).css("cursor","auto");
       
        document.getElementById("P"+i).innerHTML = '<div id="B'+i+'"class="bomba">0</div>';
        document.getElementById("P"+i).setAttribute("onclick",";");
    }
    else if (i%9==8)
    {
       $("#P"+i).css("background-color","grey");
        $("#P"+i).css("border","3px solid grey");
        $("#P"+i).css("cursor","auto");
        document.getElementById("P"+i).innerHTML = '<div id="B'+i+'"class="bomba">0</div>';
        document.getElementById("P"+i).setAttribute("onclick",";");
    }
}
}

// funkcja odkrywania pola
function odkryj(nr)
{
    // wynik 
    liczbaruchow++;
    $("#wynik").html("Liczba ruchów: "+liczbaruchow)

    // warunek aby grać
    if(document.getElementById("B"+nr).innerHTML==0){
    $("#P"+nr).css("background-color","green");
    $("#P"+nr).css("hover","none");
    document.getElementById("P"+nr).setAttribute("onclick",";"); 

    //informacja ile jest bomb w pobliżu
    informacjaIle(nr);
    }
    //warunek aby przegrać
    else
    {
    $("#plansza").html("Koniec gry!");
    $("#plansza").css("font-size","70px");
    }
    //warunek aby wygrać
    if(liczbaruchow==38) 
    {
    $("#plansza").html("Wygrałeś!");
    $("#plansza").css("color","white");
    $("#plansza").css("font-size","70px");
    }
}

function informacjaIle(nr)
{
    var X="";
   // zebranie liczb z sąsiednich pól
    NW=Number(document.getElementById("B"+(nr-10)).innerHTML);
    N=Number(document.getElementById("B"+(nr-9)).innerHTML);
    NE=Number(document.getElementById("B"+(nr-8)).innerHTML);
    W=Number(document.getElementById("B"+(nr-1)).innerHTML);
    E=Number(document.getElementById("B"+(nr+1)).innerHTML);
    SW=Number(document.getElementById("B"+(nr+8)).innerHTML);
    S=Number(document.getElementById("B"+(nr+9)).innerHTML);
    SE=Number(document.getElementById("B"+(nr+10)).innerHTML);

    X=(NW+N+NE+W+E+SW+S+SE);
    //wypisanie w konkretnych polu liczby bomb
    document.getElementById("K"+nr).innerHTML=(X);
    
}


function rozlokowanieBomb(){
// puste pola
for(y=0;y<81;y++)
{
    document.getElementById("P"+y).innerHTML = '<div id="B'+y+'"class="bomba">0</div><div id="K'+y+'"class="bombak"></div>';
}
// pola z bombą
for(r=0;r<11;r++)
{
rn = Math.floor(Math.random() * 71)+9;
document.getElementById("P"+rn).innerHTML = '<div id="B'+rn+'"class="bomba">1</div><div id="K'+rn+'"class="bombak"></div>';
}
}