// the counter for the number of followers 
let count = 0; // initialize count to 0

function increaseCount(){
    count++;
    displayCount();
    checkCountValue();
    
}

function displayCount(){
    document.getElementById('countDisplay').innerHTML = count;
}

// check the value of count and trigger alerts 

function checkCountValue(){

    if (count === 10){
        alert("Your Instagram post gained 10 followers! Congratulations!");
    } else if (count === 20 ){
        alert("Your Instagram post gained 20 followers! Keep it up!");
    }

}

// setting the reset button 

function resetFollowers(){
    count = 0;
    document.getElementById('countDisplay').innerHTML = 0;
    alert("Followers count has been reset.");
}