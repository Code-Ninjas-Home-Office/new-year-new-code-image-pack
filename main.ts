// background code
scene.setBackgroundImage(assets.image`backgroundImage`)
let nyePole = sprites.create(assets.image`poleImage`, SpriteKind.Player)
nyePole.setPosition(80, 60)
game.splash("Press A to start the", "New Years Countdown!")

// countdown image array
let countdownArray = [
    assets.image`img10`,
    assets.image`img09`,
    assets.image`img08`,
    assets.image`img07`,
    assets.image`img06`,
    assets.image`img05`,
    assets.image`img04`,
    assets.image`img03`,
    assets.image`img02`,
    assets.image`img01`
]

// nye ball drop code
let nyeBall = sprites.create(assets.image`ballImage`, SpriteKind.Player)
nyeBall.setPosition(80,0)
let isBallDropStarted = false

// nye ball drop event
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(isBallDropStarted)) {
        isBallDropStarted = true
        callBallDrop()
        music.play(music.createSong(assets.song`nyeSong`), music.PlaybackMode.InBackground)
        callFireworks()
    }
})

// nye ball drop functions
function callBallDrop () {
    for (let i = 0; i < 10; i++) {
        let countdownNum = sprites.create(countdownArray.shift(), SpriteKind.Player)
        countdownNum.setPosition(80, 60)
        for (let index = 0; index < 5; index++) {
            pause(200)
            countdownNum.changeScale(0.5, ScaleAnchor.Middle)
        }
        nyeBall.y += scene.screenHeight() / 10
        sprites.destroy(countdownNum)
    }
}

function callFireworks () {
    let fireworks1 = sprites.create(assets.image`fireworkImageOrange`, SpriteKind.Player)
    let fireworks2 = sprites.create(assets.image`fireworkImageGreen`, SpriteKind.Player)
    fireworks1.setPosition(43, 57)
    fireworks2.setPosition(117, 73)
    animation.runImageAnimation(fireworks1, assets.animation`fireworkAnimOrange`, 100, true)
    animation.runImageAnimation(fireworks2, assets.animation`fireworkAnimGreen`, 200, true)
}
