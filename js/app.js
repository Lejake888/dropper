let player = {
    top: 585,
    left: 720,
}

const move = () => {
    document.getElementById('player').style.left = player.left + "px"
    document.getElementById('player').style.top = player.top + "px"
}

document.onkeydown = (e) => {
    if (e.keyCode === 37){
        if (player.left < 430) {
            console.log("stop")
        }
        else {
            player.left = player.left - 20
            console.log("left")
            move()
        }

    }
    else if(e.keyCode === 39){
        if (player.left > 950) {
            console.log("stop")
        }
        else {
            player.left = player.left + 20
            console.log("right")
            move()
        }
    }
}