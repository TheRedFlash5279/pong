namespace SpriteKind {
    export const Player2 = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(MC, 0, 500)
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    controller.player2.moveSprite(MB, 0, 500)
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Released, function () {
    controller.player2.moveSprite(MB, 0, 100)
})
scene.onHitTile(SpriteKind.Enemy, 9, function (sprite) {
    info.player2.changeScoreBy(1)
})
scene.onHitTile(SpriteKind.Enemy, 6, function (sprite) {
    info.changeScoreBy(1)
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    controller.moveSprite(MC, 0, 100)
})
sprites.onOverlap(SpriteKind.Player2, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (Math.percentChance(50)) {
        Ball.setVelocity(-50, randint(30, 80))
    } else {
        Ball.setVelocity(-50, randint(-30, -80))
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (Math.percentChance(50)) {
        Ball.setVelocity(50, randint(30, 80))
    } else {
        Ball.setVelocity(50, randint(-30, -80))
    }
})
let Ball: Sprite = null
let MB: Sprite = null
let MC: Sprite = null
MC = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . 4 . . . . . . . . 
. . . . . . . 4 . . . . . . . . 
. . . . . . . 4 . . . . . . . . 
. . . . . . . 4 . . . . . . . . 
. . . . . . . 4 . . . . . . . . 
. . . . . . . 4 . . . . . . . . 
. . . . . . . 4 . . . . . . . . 
. . . . . . . 4 . . . . . . . . 
. . . . . . . 4 . . . . . . . . 
. . . . . . . 4 . . . . . . . . 
. . . . . . . 4 . . . . . . . . 
. . . . . . . 4 . . . . . . . . 
. . . . . . . 4 . . . . . . . . 
. . . . . . . 4 . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
MB = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . a . . . . . . . . 
. . . . . . . a . . . . . . . . 
. . . . . . . a . . . . . . . . 
. . . . . . . a . . . . . . . . 
. . . . . . . a . . . . . . . . 
. . . . . . . a . . . . . . . . 
. . . . . . . a . . . . . . . . 
. . . . . . . a . . . . . . . . 
. . . . . . . a . . . . . . . . 
. . . . . . . a . . . . . . . . 
. . . . . . . a . . . . . . . . 
. . . . . . . a . . . . . . . . 
. . . . . . . a . . . . . . . . 
. . . . . . . a . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player2)
scene.setBackgroundColor(6)
MC.setPosition(20, 59)
MB.setPosition(140, 59)
Ball = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . f f f . . . . . . 
. . . . . . f f f f f . . . . . 
. . . . . . f f f f f . . . . . 
. . . . . . f f f f f . . . . . 
. . . . . . . f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
if (Math.percentChance(50)) {
    Ball.setVelocity(50, 0)
} else {
    Ball.setVelocity(-50, 0)
}
controller.moveSprite(MC, 0, 100)
controller.player2.moveSprite(MB, 0, 100)
Ball.setFlag(SpriteFlag.BounceOnWall, true)
MB.setFlag(SpriteFlag.StayInScreen, true)
MC.setFlag(SpriteFlag.StayInScreen, true)
scene.setTileMap(img`
7 7 7 7 7 7 7 7 7 7 
9 . . . . . . . . 6 
9 . . . . . . . . 6 
9 . . . . . . . . 6 
9 . . . . . . . . 6 
9 . . . . . . . . 6 
9 . . . . . . . . 6 
7 7 7 7 7 7 7 7 7 7 
`)
scene.setTile(7, img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`, true)
scene.setTile(9, img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`, true)
scene.setTile(6, img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`, true)
game.onUpdateInterval(500, function () {
    if (info.score() == 12) {
        game.splash("Orange Player Wins!")
        game.reset()
    }
    if (info.player2.score() == 12) {
        game.splash("Purple Player Wins!")
        game.reset()
    }
})
