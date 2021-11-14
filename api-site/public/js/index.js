
 const img = document.querySelectorAll("#id_img img");
const imgs = document.getElementById("id_img");

const selector = document.querySelector("#id_selector1");
const selector2 = document.querySelector("#id_selector2");
const selector3= document.querySelector("#id_selector3");
const selector4= document.querySelector("#id_selector4");
const selector5= document.querySelector("#id_selector5");
const selector6= document.querySelector("#id_selector6");
const selector7= document.querySelector("#id_selector7");



     selector.addEventListener('click',girar);
     selector2.addEventListener('click',girar2);
     selector3.addEventListener('click',girar3);
     selector4.addEventListener('click',girar4);
     selector5.addEventListener('click',girar5);
     selector6.addEventListener('click',girar6);
     
     selector7.addEventListener('click',girar7); 

     function girar(){

        
         imgs.style.transform = `translateX(${300}%)`;

        }
     function girar2(){

        
         imgs.style.transform = `translateX(${200}%)`;

        }
     function girar3(){

        
         imgs.style.transform = `translateX(${100}%)`;

        }
     function girar4(){

        
         imgs.style.transform = `translateX(${0}%)`;

        }
     function girar5(){

        
         imgs.style.transform = `translateX(${-100}%)`;

        }
        
        function girar6(){
   
           
            imgs.style.transform = `translateX(${-200}%)`;

           }
        function girar7(){
   
           
            imgs.style.transform = `translateX(${-300}%)`;
   
           }
        
        function typeWrite(elemento){
            const textoArray = elemento.innerHTML.split('');
            elemento.innerHTML = ''; 
            console.log(textoArray); 
            textoArray.forEach((letra,i) => {
               setTimeout(()=> {
                    elemento.innerHTML += letra;
               },75 * i)      
            })
        }


        const titulo = document.querySelector('#id_frase');


        typeWrite(titulo);

          
    
     //map() função de mapeament0 de um vetor 
     // reduce()

        
        function  card_sangue(){
            setTimeout(function(){
                window.location.href = "http://www.prosangue.sp.gov.br/home/";},2000)
       }
        function  card_adotar(){
            setTimeout(function(){
                window.location.href = "https://www.amigonaosecompra.com.br/";},2000)
       }
        function  card_orfa(){
            setTimeout(function(){
                window.location.href = "https://www.lalec.com.br/como-ajudar";},2000)
       }
        function  card_cabelo(){
            setTimeout(function(){
                window.location.href = "https://www.cabelegria.org/";},2000)
       }
    
        function  card_doe(){
            setTimeout(function(){
                window.location.href = "https://doebem.org.br/?gclid=Cj0KCQjw_fiLBhDOARIsAF4khR2--euVmm0_v0kAich2dvPKZpHFqz30lGbjDa2qu0XFDUXoelhR_n8aAnAmEALw_wcB";},2000)
       }
    