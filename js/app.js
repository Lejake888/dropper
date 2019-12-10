let player = {
    top: 585,
    left: 700,
}

const move = () => {
    document.getElementById('player').style.left = player.left + "px"
    document.getElementById('player').style.top = player.top + "px"
}

document.onkeydown = (e) => {
    if (e.keyCode === 37){
        if (player.left < 450) {
            console.log("stop")
        }
        else {
            player.left = player.left - 25
            console.log("left")
            move()
        }

    }
    else if(e.keyCode === 39){
        if (player.left > 950) {
            console.log("stop")
        }
        else {
            player.left = player.left + 25
            console.log("right")
            move()
        }
    }
}