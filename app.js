function changeColor(color,delay ,nextcolor){
    setTimeout(() => {
        h1.style.color = color;
        if(nextcolor){nextcolor();}
    }, delay);
}
changeColor("red",1000,()=>{
    changeColor("yello",2000);
});
