let tabelement=document.querySelector(".tab_element");
let tabelement2=document.querySelector(".tab_element2");
let tabelement3=document.querySelector(".tab_element3");


tabelement.addEventListener("click", tabclick);
tabelement2.addEventListener("click", tabclick2);
tabelement3.addEventListener("click", tabclick3);

function tabclick(){
    document.querySelector('.tab_element').style.borderBottom= "thick solid gray";
    }

function tabclick2(){
    document.querySelector('.tab_element2').style.borderBottom= "thick solid gray";
    }
    function tabclick3(){
        document.querySelector('.tab_element3').style.borderBottom= "thick solid gray";
        }