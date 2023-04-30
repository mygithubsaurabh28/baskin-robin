let sidebar=document.querySelector(".sidebar");
let sidemenu=document.querySelector(".sidemenu");

sidebar.addEventListener("click",function(){
    sidemenu.classList.toggle('showsidemenu');

    console.log('hi');
})




let flag=0;

function slideshow(num){
    let card=document.getElementsByClassName('card');
    if(num == card.length){
       flag=0;
       num=0;
    }

    if(num < 0){
        flag=card.length-1;
        num=card.length-1;
     }

    for(let y of card){
        y.style.display="none";
    }
    card[num].style.display='block';
}

slideshow(flag);

function controller(x){
    flag=flag+x;
    slideshow(flag);
}