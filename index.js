// Home_Score

let count = 0;

function increment_by_one() {
    count = count + 1;
    document.getElementById("homeScore").innerText = count
    check()
}

function increment_by_two() {
    count = count + 2;
    document.getElementById("homeScore").innerText = count
    check()
}

function increment_by_three() {
    count = count + 3;
    document.getElementById("homeScore").innerText = count
    check()
}



// Guest_Score 

let guestS_count = 0

function increment_by_oneG() {
    guestS_count = guestS_count + 1;
    document.getElementById("guestScore").innerText = guestS_count
    check()
}

function increment_by_twoG() {
    guestS_count = guestS_count + 2;
    document.getElementById("guestScore").innerText = guestS_count
    check()
}

function increment_by_threeG() {
    guestS_count = guestS_count + 3;
    document.getElementById("guestScore").innerText = guestS_count
    check()
}


function check() {
    if (guestS_count > count) {
        document.getElementById('leading_team').innerText = "Guest"
    } else if (count > guestS_count) {
        document.getElementById('leading_team').innerText = "Home"
    } else {
        document.getElementById('leading_team').innerText = "Tie"
    }
}


function new_game(){
    document.getElementById("homeScore").innerText = 0
    document.getElementById("guestScore").innerText = 0
    document.getElementById("leading_team").innerText = "New Game is Yet To Start.......!!!"
}

