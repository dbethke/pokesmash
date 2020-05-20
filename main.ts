sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    Pizza.destroy()
    info.changeLifeBy(1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    Sharpedo.destroy()
    info.changeScoreBy(1)
    Sludge_bomb.destroy(effects.fire, 500)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Sludge_bomb = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . c c c c c . . . . . . . 
. . . c c c c c c c c . . . . . 
. . c c c a a c a a c c . . . . 
. . c c c c c c c a a c c . . . 
. . c a a c a a a c a a c . . . 
. c c a c c c c a c c c . . . . 
. c c c c a a c a c c c . . . . 
. . c c c a c c c c c . . . . . 
. . c c c c c a c c . . . . . . 
. . . c c a a c c . . . . . . . 
. . . . . c . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Weezing, 63, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
let Sludge_bomb: Sprite = null
let Sharpedo: Sprite = null
let Pizza: Sprite = null
let Weezing: Sprite = null
Weezing = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . b b . . . f f f f f . . 
. . . . . . . . . . . . b b . . f b b b b b f . 
. . . . . . . . . . . . b b b b f b b b b b f . 
. . . . . . . . . . f f f f . . f b f b f b f . 
. . . . . . . . f f b b b b f f f b b d b b f . 
. . . . . . . f b b b b b b b b f b f f f b f . 
. . . . . . . f b b b b b b b b f f f f f f . . 
. . . . . . f b b b b b b b b b b f . . . . . . 
. . . . . . f b b b b b b b b b b f . . . . . . 
. . . . . . f b b b b b b b b b b f . . . . . . 
. . . . . . f b b b f b b f b b b f . . . . . . 
. . . . . . f c b c d d d d c b c f . . . . . . 
. . . . . . f f b b d d d d b b f . . . . . . . 
. . . . . . . f f b f f f f b f f . . . . . . . 
. . . . . . . . f f f f f f f f . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
Weezing.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(5)
controller.moveSprite(Weezing)
game.onUpdateInterval(500, function () {
    Sharpedo = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . c c f f f . . . . . . . . . . . 
. . . . . . . . . . f f f f f f f f f c c c c c f . . . . . . . . . . . 
. . . . . . . . . f c c c c c c c c c f f f c f . . . . . . . . . . . . 
. . . . . . . . . f c c c c c c c f c c c c f f . . . . . . . . . . . . 
. . . . . . . . . f c c c c c c f 2 c c c c c c c c . . . . . . . . . . 
. . . . . . . . . f c f f f f c c c c f f f c f f c c . . . . . . . . . 
. . . . . . . . . . f f 1 f 1 c c c f f c f c c f c c c . . . c c c c c 
. . . . . . . . . . . . f 3 3 3 c f f c f f c f f c c c c c c c c c c c 
. . . . . . . . . . . f 3 3 3 c c f c c c c c c c c c c c c c c c c c . 
. . . . . . . . . . . f 3 3 1 c c c c c c c c c c c c c c c c c c c . . 
. . . . . . . . . . f f f 3 c c c c c c c c c c c c c c f f c c c f . . 
. . . . . . . . . . f f f f f f f c c c c c c c c c c c c . f c c f . . 
. . . . . . . . . . . f f f f f f c c c c c c c c c c c . . f c c c f . 
. . . . . . . . . . . . . f f f f f f f c f f c c c c . . . . f c c c . 
. . . . . . . . . . . . . . . . . . f f f f f f c c . . . . . . f c c f 
. . . . . . . . . . . . . . . . . . . f f f f f . . . . . . . . . f f f 
`, SpriteKind.Enemy)
    Sharpedo.setVelocity(-100, 0)
    Sharpedo.setPosition(160, Math.randomRange(0, 120))
})
game.onUpdateInterval(5000, function () {
    Pizza = sprites.create(img`
. . . . . . . . . . . . . b e e b b b b . . . . . . . . . . . . 
. . . . . . . . . . . . e e b b b b 4 b b . . . . . . . . . . . 
. . . . . . . . . . . . e b 3 4 4 b b 4 b b . . . . . . . . . . 
. . . . . . . . . . . . e 4 4 3 3 4 b b 4 b b . . . . . . . . . 
. . . . . . . . . . . . e b 4 3 3 3 4 4 b 4 b e . . . . . . . . 
. . . . . . . . . . . . 4 e b 4 3 3 4 4 4 4 4 b e . . . . . . . 
. . . . . . . . . . . b d 4 e b 4 3 3 3 3 3 4 4 b b . . . . . . 
. . . . . . . . . . b 4 5 5 d 4 4 4 3 3 3 3 4 4 4 b b . . . . . 
. . . . . . . . . . 4 d 5 5 5 5 d 4 4 4 3 3 3 4 4 4 b b . . . . 
. . . . . . . . . 4 5 5 5 5 5 5 d d 4 b 4 4 4 3 4 4 4 b e . . . 
. . . . . . . . b d 5 5 5 5 d 5 5 5 d 4 b b 4 4 4 4 4 4 e e . . 
. . . . . . . . b 5 5 d d d 6 6 5 5 5 5 b b 4 b 4 4 4 4 4 e e . 
. . . . . . . b d 5 5 5 5 6 7 7 6 5 5 5 5 4 e b b 4 4 4 4 4 e b 
. . . . . . . 4 3 2 2 2 5 5 8 8 5 5 5 5 5 d 4 e e b 4 4 b 4 e e 
. . . . . . b 4 2 2 3 3 2 d d d 5 5 5 2 2 2 d 4 e e b b b 4 b e 
. . . . . . b e 2 2 2 3 2 e d 5 5 5 2 2 3 3 2 d b 4 e b b b b e 
. . . . . b d e 2 2 2 2 2 e 5 5 5 e 2 2 2 3 2 e d d 4 b b b b e 
. . . . . b 5 2 e 2 2 2 e 3 5 5 5 e 2 2 2 2 2 e d d d 4 e b e e 
. . . . b d 5 5 2 e e e 3 5 5 5 5 2 e 2 2 2 e 3 5 5 5 4 4 e e e 
. . . . 6 6 5 d d 5 5 5 5 5 5 5 5 5 2 e e e 3 5 5 d d 4 d e e e 
. . . 6 7 7 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 1 5 5 4 d 4 e e 
. . . 4 8 8 5 2 2 2 5 5 5 d d d d 6 6 5 5 5 5 1 5 4 4 d 4 e e e 
. . b 4 5 5 2 2 3 3 2 5 5 5 d d 6 7 7 6 1 1 d 4 4 4 d d e e e . 
. . 4 d 5 2 2 2 2 3 2 e 5 5 5 5 5 8 8 1 d 4 4 d d d 4 e e e . . 
. b d d 5 e 2 2 2 2 2 e 5 5 5 1 1 5 1 1 4 d 5 4 d 4 e e . . . . 
. b 5 5 d 2 e 2 2 2 e 3 5 1 1 4 4 d 1 d 5 5 e e e e . . . . . . 
b d 5 d d d 2 e e e 3 d 4 4 4 5 5 5 d d 4 e . . . . . . . . . . 
b 5 5 5 1 1 5 d d d d 5 5 d 5 4 4 e e d e . . . . . . . . . . . 
4 5 1 1 d 4 4 4 d 5 5 4 4 e e . . . 4 d e . . . . . . . . . . . 
4 1 d 4 5 5 5 d 4 e e . . . . . . . . 4 4 . . . . . . . . . . . 
4 1 5 5 4 e e d e . . . . . . . . . . . . . . . . . . . . . . . 
4 4 e e . . . 4 e . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Food)
    Pizza.setPosition(160, Math.randomRange(50, 10))
    Pizza.setVelocity(Math.randomRange(0, -180), 0)
})
