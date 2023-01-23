let userScore=0;
let computerScore=0;


for(let i=0;i<3;i++){
 document.querySelectorAll("img")[i].addEventListener("click", function(){
    const audio = new Audio("audio/pictures.wav");
    audio.play();

     
     let computerChoice = Math.floor(Math.random()*3);
     if(computerScore===10||userScore===10){
        return;
     }
    if(i===computerChoice){
        document.querySelector(".comment").innerHTML="<P>It's a tie!!!...</p>";
        return ;
     }
     if(i==0){
        if(computerChoice==2){
            document.querySelector(".comment").innerHTML="<p>Computer chose scissor. You got a point:)</p>";
            console.log("you chose rock and computer chose scissor");
            userScore=userScore+1;
            document.querySelector(".userScore").innerHTML= userScore;
            console.log(userScore);
            if(userScore==10){
                
                winner();
            }
            return;
        }else{
            document.querySelector(".comment").innerHTML="<p>Computer chose paper. Computer got a point:(</p>";
            console.log("you chose rock and computer chose paper");
            computerScore=computerScore+1;
            document.querySelector(".computerScore").innerHTML= computerScore;
            console.log(computerScore);
            if(computerScore==10){
                
                losser();
            
            }
            
            
            return;
        }
     }
     if(i==1){
        if(computerChoice==0){
            document.querySelector(".comment").innerHTML="<p>Computer chose rock. You got a point:)</p>";
            console.log("you chose paper and computer chose rock");
            userScore=userScore+1;
            document.querySelector(".userScore").innerHTML= userScore;
            console.log(userScore);
            if(userScore==10){
                winner();
                
                return;
            }
        return;
        }else{
            document.querySelector(".comment").innerHTML="<p>Computer chose scissor. Computer got a point:(</p>";
            console.log("you chose paper and computer chose scissor");
            computerScore=computerScore+1;
            document.querySelector(".computerScore").innerHTML= computerScore;
            console.log(computerScore);
            if(computerScore==10){
                losser();
               
                return;
            }
            return;
        }
     }
     if(i==2){
        if(computerChoice==1){
            document.querySelector(".comment").innerHTML="<p>Computer chose paper. You got a point:)</p>";
            console.log("you chose scissor and computer chose paper");
            userScore=userScore+1;
            document.querySelector(".userScore").innerHTML= userScore;
            console.log(userScore);
            if(userScore==10){
               winner();
                return;
            }
            return;
            
        }else{
            document.querySelector(".comment").innerHTML="<p>Computer chose rock. Computer got a point:(</p>";
            console.log("you chose scissor and computer chose rock");
            computerScore=computerScore+1;
            document.querySelector(".computerScore").innerHTML= computerScore;
            console.log(computerScore);
            if(computerScore==10){
                losser();
                return;
            }
            return;
        }
     }

    });
}
    



const button =document.querySelector("button");
button.onclick=function(){
    buttonSound();
    reset();
    
};

    


const reset = function(){
    userScore=0;
    computerScore=0;
    document.querySelector(".userScore").innerHTML= userScore;
    document.querySelector(".computerScore").innerHTML= computerScore;
    document.querySelector(".comment").innerHTML="<p>START THE GAME</p>";
    
}

const winner=function(){
    let x= document.querySelector("#myWinnerDialog");
    console.log(x);
    const audio = new Audio("audio/dialogBox.wav");
    audio.play();
    x.show();

}

const losser=function(){
    let x= document.querySelector("#myLosserDialog");
    
    console.log(x);
    const audio = new Audio("audio/dialogBox.wav");
    audio.play();
    x.show();
}

const buttonSound= function(){
const audio = new Audio("audio/button.wav");
    const button = document.querySelector(".back, .reset");
    button.addEventListener("click", () => {
    audio.play();
  });

}


const dialogBoxSound= function(){
    const audio = new Audio("audio/dialogBox.wav");
        const box = document.querySelector(".myWinnnerDialog,.myLosserDialog");
        box.addEventListener("click", () => {
        audio.play();
      });
    
    }





