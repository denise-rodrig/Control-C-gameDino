const background=document.querySelector('.background');
const dino=document.querySelector('.dino'); /*selecionando  div pela  classe */
let pulando=false;/* só pula se for true */
let position = 0;/*posição do dino */

/*chama função de pular e descer com uso exclusivo da tecla espaço */
function teclaEspaco(event){
    if(event.keyCode===32){
        if (!pulando){
            acao();
        }
    }
}
/*função de pular ate a posição 150  e descer com intervalo 20s*/
function acao(){
    
    pulando=true;

    let intervalo=setInterval(()=>{
        if (position>=150){
            clearInterval(intervalo);

            /*função descer */
                let descer=setInterval(()=>{
                if (position <=0){
                    clearInterval(descer);
                    pulando=false;
                } else{   
                    position-=20;
                    dino.style.bottom=position+'px';}},20);
                } 
                /*função subir */   
                else{
                    position += 20;
                    dino.style.bottom= position+'px';}
        },20)
}

/*--------------cactos--------------------- */
/*cria div,dar classe a ela e add dentro do div pai */
function criaCactos(){
    const cactos=document.createElement('div');
    let randomTime=Math.random()*6000;/* gera novo cactos */

    cactos.classList.add('cactos');
    let posicaoCactos=1000;
    cactos.style.left=1000+'px'
    background.appendChild(cactos);
/* =========cacto andar====== */
    let leftIntervalo=setInterval(()=>{
       /*para se */
        if (posicaoCactos< -60){
            clearInterval(leftIntervalo);
            background.removeChild('cactos');/*removeu filho cacto */
        }/*===============logica do jogo======== */
        else if(posicaoCactos>0 && posicaoCactos<60 && position<60){
            clearInterval(leftIntervalo);
            document.body.innerHTML='<h1 class="game-over">fim de jogo</h1>'
        }
        
        /*anda se*/else{
             posicaoCactos -=10;
            cactos.style.left=posicaoCactos + 'px';
        }
    },20)
    /*chamando a propria função,em determinado tempo,gerado pelo random */
    setTimeout(criaCactos,randomTime);
}



/*ao digitar ocorre evento */
document.addEventListener('keyup',teclaEspaco);
criaCactos();
