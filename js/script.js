(function(){
    let input = document.querySelector('#num');
    input.addEventListener('blur', (e) => {
        let num;
        
        if(input.value === '' || isNaN(input.value)){
            input.style.display = 'block';
            document.querySelector("#message").innerHTML = "<small style='color :red;'>Este campo não pode estar vazio e deve ser um número</small>";
        }else{
            input.style.display = 'inline-block';
            document.querySelector("#message").innerHTML = "";
            num = input.value;
        }
        
        let numb2 = document.querySelector("#num-bin");
        let numb8 = document.querySelector("#num-b8");
        let numb16 = document.querySelector("#num-b16");


        numb2.value = Number(num).toString(2);
        numb8.value = Number(num).toString(8);
        numb16.value = Number(num).toString(16);
    })
})();