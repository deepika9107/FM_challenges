let age = document.querySelectorAll('.age-info span');
var ageDate = document.querySelector('.date span');
let ageYear = document.querySelector('.year span');
let ageMonth = document.querySelector('.month span');
let dateInfo = document.querySelectorAll('input');
let dateSpan = document.querySelectorAll('form span');
let dateLabel = document.querySelectorAll('label');
var empty = '';
var current_date = new Date();

// function move(){
//     age[0].classList.add('active');
    
// }

// making the labels red in color
function makeError(flag){
    if(flag){
        dateLabel.forEach(element=>{
            element.style.color='red';
        })

    }
    else{
        dateLabel.forEach(element=>{
            element.style.color='black';
        })
    }
    
}

// making the error span empty
function makeEmpty(i){
    dateSpan[i].innerText= empty;
}

// checking if each the field is empty and valid
function checkEmpty(){
    let i = 0;
    let flag= true;

    dateInfo.forEach(element => {
        if(!element.value){
            dateSpan[i].innerText= 'This field is required'; 
           
        }
        else{
            let num = Number(element.value);
            switch(i){
                case 0:if(!(num<=31 && num>=1)){
                            dateSpan[i].innerText= 'Must be valid day';   
                        }else{makeEmpty(i)};
                        break;

                case 1:if(!(num<=12 && num>=1)){
                        dateSpan[i].innerText= 'Must be a valid month';
                        }else{makeEmpty(i)};
                        break;

                case 2:if(!(num<=current_date.getFullYear() && num>=0)){
                        dateSpan[i].innerText= 'Must be a past year';
                        }else{makeEmpty(i)};
                        break;
            }
        }  
        i++;  
    });
    
    dateSpan.forEach((e)=>{
        if (e.innerText != ''){
            makeError(true);
            flag = false;
        }
        else if(flag){
            makeError(false);
        }
    });
    return flag;
    

}

// checking if the date is valid including leap year
function checkValid(){
      // to check if the current date is not in future
    let user_date = new Date(`${dateInfo[2].value}-${dateInfo[1].value}-${dateInfo[0].value}`);
    if(!(user_date <= current_date)){
        dateSpan[0].innerText = 'Must be valid date'
        return;
    }
    // checking if user entered month is feburary
    if(dateInfo[1].value == 2){
        if(dateInfo[0].value <= 29){
            // checking if its a leap year
            if (dateInfo[0].value== 29){
            ((dateInfo[2].value % 4 == 0 && dateInfo[2].value % 100 !=0)|| dateInfo[2].value % 400 == 0) ?
            dateSpan[0].innerText=empty: dateSpan[0].innerText = 'Must be valid date';
            }
        }
        else{
            dateSpan[0].innerText = 'Must be valid date';    
        }
    }

    // checking if even months have 31 days
    else{
        if(dateInfo[0].value == 31 && dateInfo[1].value % 2 != 0){ 
        dateSpan[0].innerText = 'Must be valid date';
        }

        else{
            makeEmpty(0);
        }
    }

    // checking if there are any error span
    if (dateSpan[0].innerText == empty){
        makeError(false);
        return true;
    }
    else{
        makeError(true);
        return false;
    }
 
}


document.querySelector('.submitBtn').addEventListener('click',(e)=>{
    e.preventDefault();

    age.forEach(e=>{
        e.innerText='--';
        e.classList.remove('active');
    })
    

    if(checkEmpty()){

        if(checkValid()){

            let user_date = new Date(`${dateInfo[2].value}-${dateInfo[1].value}-${dateInfo[0].value}`);
            var diff = (user_date - current_date)/1000;
            var diff = Math.abs(Math.floor(diff));
            
            var years = Math.floor(diff/(365*24*60*60));
            var leftSec = diff - years * 365*24*60*60;
            
            var month = Math.floor(leftSec/((365/12)*24*60*60));
            var leftSec = leftSec - month * (365/12)*24*60*60;    
            
            function daysInMonth(){
                m = user_date.getMonth()+1;
                y = user_date.getFullYear();
                d = user_date.getDate();
                if(d<=current_date.getDate()){
                    return Math.abs(d - current_date.getDate());
                }
                return (new Date(y,m,0).getDate() - d) + current_date.getDate();
                
            }
            
            age.forEach(e=>{e.classList.add('active')});
            ageDate.innerText= daysInMonth();
            ageMonth.innerText=month;
            ageYear.innerText=years;
            
   
        }   
    } 
});

