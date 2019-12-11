let player = {
    top: 585,
    left: 710
}

const randomDrop = () => {
    return Math.floor(Math.random() * 900) + 170
}

let enemyBlocks = {
    top: 0,
    left: randomDrop()
}

const move = () => {
    document.getElementById('player').style.left = player.left + "px"
    document.getElementById('player').style.top = player.top + "px"
    document.getElementById('enemyBlocks').style.left = enemyBlocks.left + "px"
document.getElementById('enemyBlocks').style.top = enemyBlocks.top + "px"
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
        if (player.left > 960) {
            console.log("stop")
        }
        else {
            player.left = player.left + 20
            console.log("right")
            move()
        }
    }
}

