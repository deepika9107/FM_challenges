const buttons = document.querySelectorAll('#rating_btn button');
let submit_btn = document.getElementById('submit_btn');
let evaluation = document.getElementById('endState');
let ratings = document.getElementById('start');
let score = document.getElementById('score');
let btnVal = 0;
buttons.forEach(btn => {

    
    btn.addEventListener("click",()=>{
       
        btnVal = btn.value;
        
        buttons.forEach(btn =>{
            btn.classList.contains('selected');
            btn.classList.remove('selected');
            btn.style.backgroundColor = '';
            btn.style.color = 'grey';  
        });
        btn.classList.add('selected');
        btn.style.transition = '0.5s';
        btn.style.backgroundColor = 'hsl(25, 97%, 53%)';
        btn.style.color = 'white';
        
        submit_btn.addEventListener('click',(e)=>{
            evaluation.style.display='block';
            ratings.style.display= 'none';
            score.innerText = `You selected ${btnVal} out of 5`;
            console.log(e);

        })
        

});

})


