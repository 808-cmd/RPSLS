let score = 0;

function visibleBTN(){
    var rules = document.getElementById("rules");
    var header = document.getElementById("header");
    var options = document.getElementById("options");
    var option = document.getElementsByClassName("option");
    var rulesBtn = document.getElementById("rules-btn");
    
    if (rules.classList.contains("notvisible")) {
        rules.classList.remove("notvisible");
        rules.classList.add("visible");

        rulesBtn.setAttribute("onclick", "");
        rulesBtn.classList.add("no");

        header.classList.add("low");
        options.classList.add("low");
        rulesBtn.classList.add("low");

        for(var i = 0 ; i < option.length ; i++){
            option[i].classList.add("no");
            option[i].setAttribute("onclick", "")
        }
    }
    else if(rules.classList.contains("visible")) {
        rules.classList.remove("visible");
        rules.classList.add("notvisible");

        rulesBtn.setAttribute("onclick", "visibleBTN()");
        rulesBtn.classList.remove("no");
        
        header.classList.remove("low");
        options.classList.remove("low");
        rulesBtn.classList.remove("low");

        for(var i = 0 ; i < option.length ; i++){
            option[i].classList.remove("no");
            option[i].setAttribute("onclick", "clicked()")
        }
    }
}

document.addEventListener("click" , e=>{
    const beats =   /*rock*/    [["lizard", "scissors"],
                    /*paper*/   ["rock", "spock"],
                    /*scissors*/["paper" , "lizard"],
                    /*spock*/   ["scissors", "rock"],
                    /*lizard*/  ["spock", "paper"]];

    const picks = ["rock", "paper", "scissors", "spock" , "lizard"]

    if (e.target.classList.contains('option')){
        var userpick = e.target.id;
        var compick = computerPick();
        var outcome = 0;

        for(var i = 0 ; i < 2 ; i++){
            if(userpick === beats[compick][i]){
                outcome = 1;
            }
        }

        if(picks[compick] === userpick){
            outcome = 2;
        }

        console.log("you choose: " + userpick);
        console.log("computer choose: " + picks[compick])
        if(outcome === 0){
            score++
            let temp = document.getElementById('score-value')
            temp.innerHTML = score;
            console.log("you WIN!!!!")
        }
        else if(outcome === 1){
            if(score != 0){
                score--
                let temp = document.getElementById('score-value')
                temp.innerHTML = score;
            }
            console.log("you lose")
        }
        else if(outcome === 2){
            console.log("draw")
        }
    }

    function computerPick(){
        let temp = Math.floor(Math.random()*(5-0) + 0);
    
        switch(temp){
            case 0:
                var pick = 0;
                return pick
            case 1:
                var pick = 1;
                return pick
            case 2:
                var pick = 2;
                return pick
            case 3:
                var pick = 3;
                return pick
            case 4:
                var pick = 4;
                return pick
        }
    }
})

