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


        numb2.value = converter(num, 2);
        numb8.value = converter(num, 8);
        numb16.value = converter(num, 16);
    })

    let select  = document.querySelector("#other-bases");
    select.addEventListener('blur', (e) => {
        let result = document.querySelector("#result");
        result.value = converter(input.value, StringToNumber(select.value));
    })

    function converter(num, base){
        return StringToNumber(num).toString(base);
    }

    function StringToNumber(string){
        return Number(string);
    }
})();