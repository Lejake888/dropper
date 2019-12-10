let player = {
    top: 0,
    left: 0,
}

const move = () => {
    document.getElementById('player').style.left = player.left + "px"
}

document.onkeydown = (e) => {
    if (e.keyCode === 37){
         player.left = player.left - 10
         console.log("left")
         move()
    }
    else if(e.keyCode === 39){
        player.left = player.left + 10
        console.log("right")
        move()
    }
}