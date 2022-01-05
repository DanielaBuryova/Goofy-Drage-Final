enum ActionKind {
    RunningLeft,
    RunningRight,
    Idle,
    IdleLeft,
    IdleRight,
    JumpingLeft,
    JumpingRight,
    CrouchLeft,
    CrouchRight,
    Flying,
    Walking,
    Jumping
}
namespace SpriteKind {
    export const Bumper = SpriteKind.create()
    export const Goal = SpriteKind.create()
    export const Coin = SpriteKind.create()
    export const key = SpriteKind.create()
    export const heart = SpriteKind.create()
    export const caveBoss = SpriteKind.create()
    export const button = SpriteKind.create()
    export const cursor = SpriteKind.create()
}
function initializeKeyAni () {
    KeyAni = animation.createAnimation(ActionKind.Idle, 225)
    KeyAni.addAnimationFrame(img`
        . . . . . f f f f f f . . . . . 
        . . . . f 4 5 5 5 5 4 f . . . . 
        . . . f 4 5 5 4 4 5 5 4 f . . . 
        . . . f 5 5 4 f f 4 5 5 f . . . 
        . . . f 5 5 f . . f 5 5 f . . . 
        . . . f 5 5 4 f f 4 5 5 f . . . 
        . . . f 4 5 5 4 4 5 5 4 f . . . 
        . . . . f 4 5 5 5 5 4 f . . . . 
        . . . . . f f 5 5 f f . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . f f 5 5 f . . . . . . 
        . . . . f 5 5 4 5 f . . . . . . 
        . . . . . f 4 4 5 f . . . . . . 
        . . . . f 5 5 4 5 f . . . . . . 
        . . . . . f f f f . . . . . . . 
        `)
    KeyAni.addAnimationFrame(img`
        . . . . . f f f f f f . . . . . 
        . . . . f f 4 5 5 5 f f . . . . 
        . . . . f 4 4 4 5 5 5 f . . . . 
        . . . . f 4 f f f 5 5 f . . . . 
        . . . . f 4 f . f 5 5 f . . . . 
        . . . . f 4 f f f 5 5 f . . . . 
        . . . . f 4 4 4 5 5 5 f . . . . 
        . . . . f f 4 5 5 5 f f . . . . 
        . . . . . f f 4 5 f f . . . . . 
        . . . . . . . 4 5 f . . . . . . 
        . . . . . . . 4 5 f . . . . . . 
        . . . . . . f 4 5 f . . . . . . 
        . . . . . f 4 4 5 f . . . . . . 
        . . . . . . f 4 5 f . . . . . . 
        . . . . . f 4 4 5 f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `)
    KeyAni.addAnimationFrame(img`
        . . . . . . f f f f . . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . f 4 5 5 5 f . . . . . 
        . . . . . f 4 5 5 5 f . . . . . 
        . . . . . f 4 5 5 5 f . . . . . 
        . . . . . f 4 5 5 5 f . . . . . 
        . . . . . f 4 5 5 5 f . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . . f 4 5 f . . . . . . 
        . . . . . . f 4 5 f . . . . . . 
        . . . . . . f 4 5 f . . . . . . 
        . . . . . . f 4 5 f . . . . . . 
        . . . . . . f 4 5 f . . . . . . 
        . . . . . . f 4 5 f . . . . . . 
        . . . . . . f 4 5 f . . . . . . 
        . . . . . . . f f . . . . . . . 
        `)
    KeyAni.addAnimationFrame(img`
        . . . . . f f f f f f . . . . . 
        . . . . f f 4 5 5 5 f f . . . . 
        . . . . f 4 4 4 5 5 5 f . . . . 
        . . . . f 4 f f f 5 5 f . . . . 
        . . . . f 4 f . f 5 5 f . . . . 
        . . . . f 4 f f f 5 5 f . . . . 
        . . . . f 4 4 4 5 5 5 f . . . . 
        . . . . f f 4 5 5 5 f f . . . . 
        . . . . . f f 4 5 f f . . . . . 
        . . . . . . . 4 5 f . . . . . . 
        . . . . . . . 4 5 f . . . . . . 
        . . . . . . f 4 5 f . . . . . . 
        . . . . . f 4 4 5 f . . . . . . 
        . . . . . . f 4 5 f . . . . . . 
        . . . . . f 4 4 5 f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `)
    KeyAni.addAnimationFrame(img`
        . . . . . f f f f f f . . . . . 
        . . . . f 4 5 5 5 5 4 f . . . . 
        . . . f 4 5 5 4 4 5 5 4 f . . . 
        . . . f 5 5 4 f f 4 5 5 f . . . 
        . . . f 5 5 f . . f 5 5 f . . . 
        . . . f 5 5 4 f f 4 5 5 f . . . 
        . . . f 4 5 5 4 4 5 5 4 f . . . 
        . . . . f 4 5 5 5 5 4 f . . . . 
        . . . . . f f 5 5 f f . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . f f 5 5 f . . . . . . 
        . . . . f 5 5 4 5 f . . . . . . 
        . . . . . f 4 4 5 f . . . . . . 
        . . . . f 5 5 4 5 f . . . . . . 
        . . . . . f f f f . . . . . . . 
        `)
    KeyAni.addAnimationFrame(img`
        . . . . . f f f f f f . . . . . 
        . . . . f f 4 5 5 5 f f . . . . 
        . . . . f 4 4 4 5 5 5 f . . . . 
        . . . . f 4 f f f 5 5 f . . . . 
        . . . . f 4 f . f 5 5 f . . . . 
        . . . . f 4 f f f 5 5 f . . . . 
        . . . . f 4 4 4 5 5 5 f . . . . 
        . . . . f f 4 5 5 5 f f . . . . 
        . . . . . f f 4 5 f f . . . . . 
        . . . . . . . 4 5 f . . . . . . 
        . . . . . . . 4 5 f . . . . . . 
        . . . . . . f 4 5 f . . . . . . 
        . . . . . f 4 4 5 f . . . . . . 
        . . . . . . f 4 5 f . . . . . . 
        . . . . . f 4 4 5 f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `)
    KeyAni.addAnimationFrame(img`
        . . . . . . f f f f . . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . f 4 5 5 5 f . . . . . 
        . . . . . f 4 5 5 5 f . . . . . 
        . . . . . f 4 5 5 5 f . . . . . 
        . . . . . f 4 5 5 5 f . . . . . 
        . . . . . f 4 5 5 5 f . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . . f 4 5 f . . . . . . 
        . . . . . . f 4 5 f . . . . . . 
        . . . . . . f 4 5 f . . . . . . 
        . . . . . . f 4 5 f . . . . . . 
        . . . . . . f 4 5 f . . . . . . 
        . . . . . . f 4 5 f . . . . . . 
        . . . . . . f 4 5 f . . . . . . 
        . . . . . . . f f . . . . . . . 
        `)
    KeyAni.addAnimationFrame(img`
        . . . . . f f f f f f . . . . . 
        . . . . f f 4 5 5 5 f f . . . . 
        . . . . f 4 4 4 5 5 5 f . . . . 
        . . . . f 4 f f f 5 5 f . . . . 
        . . . . f 4 f . f 5 5 f . . . . 
        . . . . f 4 f f f 5 5 f . . . . 
        . . . . f 4 4 4 5 5 5 f . . . . 
        . . . . f f 4 5 5 5 f f . . . . 
        . . . . . f f 4 5 f f . . . . . 
        . . . . . . . 4 5 f . . . . . . 
        . . . . . . . 4 5 f . . . . . . 
        . . . . . . f 4 5 f . . . . . . 
        . . . . . f 4 4 5 f . . . . . . 
        . . . . . . f 4 5 f . . . . . . 
        . . . . . f 4 4 5 f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Bumper, function (sprite, otherSprite) {
    if (sprite.vy > 0 && !(sprite.isHittingTile(CollisionDirection.Bottom)) || sprite.y < otherSprite.top) {
        otherSprite.destroy(effects.ashes, 250)
        otherSprite.vy = -50
        sprite.vy = -2 * pixelsToMeters
        info.changeScoreBy(3)
    } else {
        if (currentLanguage == 0) {
            sprite.say("Ow!", invincibilityPeriod)
        } else {
            sprite.say("Au!", invincibilityPeriod)
        }
        info.changeLifeBy(-1)
    }
    pause(invincibilityPeriod)
})
function initializeAnimations () {
    initializeHeroAnimations()
    initializeKeyAni()
    initializecaveBossAni()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    attemptJump()
})
function animateDrage () {
    mainDrageLeft = animation.createAnimation(ActionKind.CrouchLeft, 100)
    animation.attachAnimation(hero, mainDrageLeft)
    mainDrageLeft.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 5 . . . . . . . 
        . . . . . . . 5 . 8 . 6 6 6 . . 
        . . . . . 5 5 5 8 8 6 6 7 . . . 
        . . . 6 6 6 5 8 8 6 6 7 6 6 . . 
        . 7 f 6 9 6 6 8 5 6 7 6 7 . . . 
        . 7 7 7 7 7 6 6 8 6 6 7 6 . . . 
        . . 1 . . . 7 6 8 6 6 6 . . . . 
        . . . . . 7 6 6 8 6 7 . . . . . 
        . . . . 7 6 6 6 6 6 6 . . . . . 
        . . . . 7 6 6 6 6 6 6 6 . . 5 . 
        . . . . 7 6 7 6 6 7 6 7 6 . . 6 
        . . . . . 6 7 7 7 . 6 . 7 6 . 6 
        . . . . . 6 . . . . 6 . . 7 6 . 
        . . . 5 6 6 . . 5 6 6 . . . . . 
        `)
    mainDrageRight = animation.createAnimation(ActionKind.CrouchRight, 100)
    animation.attachAnimation(hero, mainDrageRight)
    mainDrageRight.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . 6 6 6 . 8 . 5 . . . . . . . 
        . . . 7 6 6 8 8 5 5 5 . . . . . 
        . . 6 6 7 6 6 8 8 5 6 6 6 . . . 
        . . . 7 6 7 6 5 8 6 6 9 6 f 7 . 
        . . . 6 7 6 6 8 6 6 7 7 7 7 7 . 
        . . . . 6 6 6 8 6 7 . . . 1 . . 
        . . . . . 7 6 8 6 6 7 . . . . . 
        . . . . . 6 6 6 6 6 6 7 . . . . 
        . 5 . . 6 6 6 6 6 6 6 7 . . . . 
        6 . . 6 7 6 7 6 6 7 6 7 . . . . 
        6 . 6 7 . 6 . 7 7 7 6 . . . . . 
        . 6 7 . . 6 . . . . 6 . . . . . 
        . . . . . 6 6 5 . . 6 6 5 . . . 
        `)
}
function goBack () {
    Cursor0.setPosition(80, 35)
    if (currentLevel == 4) {
        Easy.destroy()
        Medium.destroy()
        Hard.destroy()
    }
    if (currentLevel == 5) {
        EN.destroy()
        SK.destroy()
    }
    if (currentLevel == 3 || (currentLevel == 4 || currentLevel == 5)) {
        currentLevel = 2
        setLevelTileMap0(currentLevel)
    } else if (currentLevel == 2) {
        goToMenu()
    }
}
function attemptJump () {
    // else if: either fell off a ledge, or double jumping
    if (hero.isHittingTile(CollisionDirection.Bottom)) {
        hero.vy = -4 * pixelsToMeters
    } else if (canDoubleJump) {
        doubleJumpSpeed = -3 * pixelsToMeters
        // Good double jump
        if (hero.vy >= -40) {
            doubleJumpSpeed = -4.5 * pixelsToMeters
            hero.startEffect(effects.trail, 500)
            scene.cameraShake(2, 150)
        }
        hero.vy = doubleJumpSpeed
        canDoubleJump = false
    }
}
function isDead () {
    if (currentLanguage == 0) {
        hero.say("Be careful!", invincibilityPeriod)
    } else {
        hero.say("Buď opatrný!", invincibilityPeriod)
    }
    if (currentDifficulty == 0) {
        info.setLife(currentLife)
    }
    if (currentDifficulty == 1) {
        info.setLife(3)
    }
    setLevelTileMap0(currentLevel)
}
function animateIdle () {
    mainIdleLeft = animation.createAnimation(ActionKind.IdleLeft, 100)
    animation.attachAnimation(hero, mainIdleLeft)
    mainIdleLeft.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 5 . . . . . . . 
        . . . . . . . 5 . 8 . 6 6 6 . . 
        . . . . . 5 5 5 8 8 6 6 7 . . . 
        . . . 6 6 6 5 8 8 6 6 7 6 6 . . 
        . 7 f 6 9 6 6 8 5 6 7 6 7 . . . 
        . 7 7 7 7 7 6 6 8 6 6 7 6 . . . 
        . . 1 . . . 7 6 8 6 6 6 . . . . 
        . . . . . 7 6 6 8 6 7 . . . . . 
        . . . . 7 6 6 6 6 6 6 . . . . . 
        . . . . 7 6 6 6 6 6 6 6 . . 5 . 
        . . . . 7 6 7 6 6 7 6 7 6 . . 6 
        . . . . . 6 7 7 7 . 6 . 7 6 . 6 
        . . . . . 6 . . . . 6 . . 7 6 . 
        . . . 5 6 6 . . 5 6 6 . . . . . 
        `)
    mainIdleRight = animation.createAnimation(ActionKind.IdleRight, 100)
    animation.attachAnimation(hero, mainIdleRight)
    mainIdleRight.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . 6 6 6 . 8 . 5 . . . . . . . 
        . . . 7 6 6 8 8 5 5 5 . . . . . 
        . . 6 6 7 6 6 8 8 5 6 6 6 . . . 
        . . . 7 6 7 6 5 8 6 6 9 6 f 7 . 
        . . . 6 7 6 6 8 6 6 7 7 7 7 7 . 
        . . . . 6 6 6 8 6 7 . . . 1 . . 
        . . . . . 7 6 8 6 6 7 . . . . . 
        . . . . . 6 6 6 6 6 6 7 . . . . 
        . 5 . . 6 6 6 6 6 6 6 7 . . . . 
        6 . . 6 7 6 7 6 6 7 6 7 . . . . 
        6 . 6 7 . 6 . 7 7 7 6 . . . . . 
        . 6 7 . . 6 . . . . 6 . . . . . 
        . . . . . 6 6 5 . . 6 6 5 . . . 
        `)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.heart, function (sprite, otherSprite) {
    otherSprite.destroy(effects.halo, 250)
    otherSprite.y += 3
    info.changeLifeBy(1)
})
function giveIntroductionSK () {
    game.setDialogCursor(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 5 . . . . . . . 
        . . . . . . . 5 . 8 . 6 6 6 . . 
        . . . . . 5 5 5 8 8 6 6 7 . . . 
        . . . 6 6 6 5 8 8 6 6 7 6 6 . . 
        . 7 f 6 9 6 6 8 5 6 7 6 7 . . . 
        . 7 7 7 7 7 6 6 8 6 6 7 6 . . . 
        . . 1 . . . 7 6 8 6 6 6 . . . . 
        . . . . . 7 6 6 8 6 7 . . . . . 
        . . . . 7 6 6 6 6 6 6 . . . . . 
        . . . . 7 6 6 6 6 6 6 6 . . 5 . 
        . . . . 7 6 7 6 6 7 6 7 6 . . 6 
        . . . . 6 7 7 7 7 . 6 . 7 6 . 6 
        . . . . 6 . . . . . 6 . . 7 6 . 
        . 5 6 6 . . . . 5 6 6 . . . . . 
        `)
    game.setDialogFrame(img`
        . a a a a a a a a a a a a a . . 
        a a 1 1 1 1 1 1 1 1 1 1 1 a a . 
        a 1 1 a a a a a a a a a 1 1 a . 
        a 1 a a a a a a a a a a a 1 a . 
        a 1 a a a a a a a a a a a 1 a . 
        a 1 a a a a a a a a a a a 1 a . 
        a 1 a a a a a a a a a a a 1 a . 
        a 1 a a a a a a a a a a a 1 a . 
        a 1 a a a a a a a a a a a 1 a . 
        a 1 a a a a a a a a a a a 1 a . 
        a 1 a a a a a a a a a a a 1 a . 
        a 1 a a a a a a a a a a a 1 a . 
        a 1 1 a a a a a a a a a 1 1 a . 
        a a 1 1 1 1 1 1 1 1 1 1 1 a a . 
        . a a a a a a a a a a a a a . . 
        . . . . . . . . . . . . . . . . 
        `)
    if (currentLevel == 10) {
        game.setDialogFrame(img`
            . a a a a a a a a a a a a a . . 
            a a 1 1 1 1 1 1 1 1 1 1 1 a a . 
            a 1 1 a a a a a a a a a 1 1 a . 
            a 1 a a a a a a a a a a a 1 a . 
            a 1 a a a a a a a a a a a 1 a . 
            a 1 a a a a a a a a a a a 1 a . 
            a 1 a a a a a a a a a a a 1 a . 
            a 1 a a a a a a a a a a a 1 a . 
            a 1 a a a a a a a a a a a 1 a . 
            a 1 a a a a a a a a a a a 1 a . 
            a 1 a a a a a a a a a a a 1 a . 
            a 1 a a a a a a a a a a a 1 a . 
            a 1 1 a a a a a a a a a 1 1 a . 
            a a 1 1 1 1 1 1 1 1 1 1 1 a a . 
            . a a a a a a a a a a a a a . . 
            . . . . . . . . . . . . . . . . 
            `)
        game.setDialogCursor(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 5 . . . . . . . 
            . . . . . . . 5 . 8 . 6 6 6 . . 
            . . . . . 5 5 5 8 8 6 6 7 . . . 
            . . . 6 6 6 5 8 8 6 6 7 6 6 . . 
            . 7 f 6 9 6 6 8 5 6 7 6 7 . . . 
            . 7 7 7 7 7 6 6 8 6 6 7 6 . . . 
            . . 1 . . . 7 6 8 6 6 6 . . . . 
            . . . . . 7 6 6 8 6 7 . . . . . 
            . . . . 7 6 6 6 6 6 6 . . . . . 
            . . . . 7 6 6 6 6 6 6 6 . . 5 . 
            . . . . 7 6 7 6 6 7 6 7 6 . . 6 
            . . . . 6 7 7 7 7 . 6 . 7 6 . 6 
            . . . . 6 . . . . . 6 . . 7 6 . 
            . 5 6 6 . . . . 5 6 6 . . . . . 
            `)
        showInstruction("Použite ŠÍPKY na pohyb a A na skok. Vyskočte do vzduchu na DVOJSKOK!")
        game.setDialogCursor(img`
            . . . . . . . 2 . . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . 2 . 2 4 4 2 . . . . . . 
            . 2 . . 2 2 4 5 4 4 2 . . . 2 . 
            . 2 2 . . 2 4 5 5 5 4 2 . 2 2 . 
            . 2 5 2 2 4 f 5 5 5 f 4 2 4 2 . 
            . . 2 4 4 5 4 f 4 f 4 4 4 5 2 . 
            . . 2 5 4 4 4 4 4 4 4 4 5 5 2 . 
            2 . 2 5 5 4 f 4 5 4 f 4 5 4 2 . 
            2 2 4 4 4 4 5 5 5 5 4 4 4 2 . 2 
            2 5 4 5 4 5 5 5 f 5 5 4 4 4 2 2 
            . 2 4 2 4 2 4 f 5 f 4 4 2 4 5 2 
            . 2 8 5 2 4 4 4 4 2 4 2 5 8 2 2 
            . 9 9 2 8 2 4 2 2 4 2 8 2 9 9 . 
            . . 5 9 5 8 2 2 2 2 8 5 9 5 . . 
            . . . 5 5 9 8 5 8 5 9 9 5 . . . 
            `)
        showInstruction("Nenechaj si spáliť tvár, inak prídeš o život.")
        game.setDialogFrame(img`
            . 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
            4 4 1 1 1 1 1 1 1 1 1 1 1 4 4 . 
            4 1 1 4 4 4 4 4 4 4 4 4 1 1 4 . 
            4 1 4 4 4 4 4 4 4 4 4 4 4 1 4 . 
            4 1 4 4 4 4 4 4 4 4 4 4 4 1 4 . 
            4 1 4 4 4 4 4 4 4 4 4 4 4 1 4 . 
            4 1 4 4 4 4 4 4 4 4 4 4 4 1 4 . 
            4 1 4 4 4 4 4 4 4 4 4 4 4 1 4 . 
            4 1 4 4 4 4 4 4 4 4 4 4 4 1 4 . 
            4 1 4 4 4 4 4 4 4 4 4 4 4 1 4 . 
            4 1 4 4 4 4 4 4 4 4 4 4 4 1 4 . 
            4 1 4 4 4 4 4 4 4 4 4 4 4 1 4 . 
            4 1 1 4 4 4 4 4 4 4 4 4 1 1 4 . 
            4 4 1 1 1 1 1 1 1 1 1 1 1 4 4 . 
            . 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
            . . . . . . . . . . . . . . . . 
            `)
        game.setDialogCursor(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f f f . . . . f f f f . . 
            . f 2 2 2 2 f . . f 2 2 2 2 f . 
            f 2 2 2 2 2 2 f f 2 2 2 2 2 2 f 
            f 2 2 2 2 2 2 2 2 2 2 2 4 2 2 f 
            f 2 2 2 2 2 2 2 2 2 2 4 2 2 2 f 
            f c 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
            . f c 2 2 2 2 2 2 2 2 2 2 2 f . 
            . . f c 2 2 2 2 2 2 2 2 2 f . . 
            . . . f c 2 2 2 2 2 2 2 f . . . 
            . . . . f c 2 2 2 2 2 f . . . . 
            . . . . . f c 2 2 2 f . . . . . 
            . . . . . . f c c f . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        showInstruction("Hrajte s priateľmi, získajte čo najviac bodov, porazte svojich priateľov a staňte sa tým najlepším GOOFY DRAKOM v celom vesmíre! Veľa štastia!")
        game.setDialogCursor(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 5 . . . . . . . 
            . . . . . . . 5 . 8 . 6 6 6 . . 
            . . . . . 5 5 5 8 8 6 6 7 . . . 
            . . . 6 6 6 5 8 8 6 6 7 6 6 . . 
            . 7 f 6 9 6 6 8 5 6 7 6 7 . . . 
            . 7 7 7 7 7 6 6 8 6 6 7 6 . . . 
            . . 1 . . . 7 6 8 6 6 6 . . . . 
            . . . . . 7 6 6 8 6 7 . . . . . 
            . . . . 7 6 6 6 6 6 6 . . . . . 
            . . . . 7 6 6 6 6 6 6 6 . . 5 . 
            . . . . 7 6 7 6 6 7 6 7 6 . . 6 
            . . . . 6 7 7 7 7 . 6 . 7 6 . 6 
            . . . . 6 . . . . . 6 . . 7 6 . 
            . 5 6 6 . . . . 5 6 6 . . . . . 
            `)
    }
    if (currentLevel == 11) {
        game.setDialogFrame(img`
            . a a a a a a a a a a a a a . . 
            a a 1 1 1 1 1 1 1 1 1 1 1 a a . 
            a 1 1 a a a a a a a a a 1 1 a . 
            a 1 a a a a a a a a a a a 1 a . 
            a 1 a a a a a a a a a a a 1 a . 
            a 1 a a a a a a a a a a a 1 a . 
            a 1 a a a a a a a a a a a 1 a . 
            a 1 a a a a a a a a a a a 1 a . 
            a 1 a a a a a a a a a a a 1 a . 
            a 1 a a a a a a a a a a a 1 a . 
            a 1 a a a a a a a a a a a 1 a . 
            a 1 a a a a a a a a a a a 1 a . 
            a 1 1 a a a a a a a a a 1 1 a . 
            a a 1 1 1 1 1 1 1 1 1 1 1 a a . 
            . a a a a a a a a a a a a a . . 
            . . . . . . . . . . . . . . . . 
            `)
        game.setDialogCursor(img`
            . . . . . . . 2 . . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . 2 . 2 4 4 2 . . . . . . 
            . 2 . . 2 2 4 5 4 4 2 . . . 2 . 
            . 2 2 . . 2 4 5 5 5 4 2 . 2 2 . 
            . 2 5 2 2 4 f 5 5 5 f 4 2 4 2 . 
            . . 2 4 4 5 4 f 4 f 4 4 4 5 2 . 
            . . 2 5 4 4 4 4 4 4 4 4 5 5 2 . 
            2 . 2 5 5 4 f 4 5 4 f 4 5 4 2 . 
            2 2 4 4 4 4 5 5 5 5 4 4 4 2 . 2 
            2 5 4 5 4 5 5 5 f 5 5 4 4 4 2 2 
            . 2 4 2 4 2 4 f 5 f 4 4 2 4 5 2 
            . 2 8 5 2 4 4 4 4 2 4 2 5 8 2 2 
            . 9 9 2 8 2 4 2 2 4 2 8 2 9 9 . 
            . . 5 9 5 8 2 2 2 2 8 5 9 5 . . 
            . . . 5 5 9 8 5 8 5 9 9 5 . . . 
            `)
        showInstruction("Svojich nepriateľov môžete zničiť skákaním po hlave.")
        game.setDialogCursor(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 5 . . . . . . . 
            . . . . . . . 5 . 8 . 6 6 6 . . 
            . . . . . 5 5 5 8 8 6 6 7 . . . 
            . . . 6 6 6 5 8 8 6 6 7 6 6 . . 
            . 7 f 6 9 6 6 8 5 6 7 6 7 . . . 
            . 7 7 7 7 7 6 6 8 6 6 7 6 . . . 
            . . 1 . . . 7 6 8 6 6 6 . . . . 
            . . . . . 7 6 6 8 6 7 . . . . . 
            . . . . 7 6 6 6 6 6 6 . . . . . 
            . . . . 7 6 6 6 6 6 6 6 . . 5 . 
            . . . . 7 6 7 6 6 7 6 7 6 . . 6 
            . . . . 6 7 7 7 7 . 6 . 7 6 . 6 
            . . . . 6 . . . . . 6 . . 7 6 . 
            . 5 6 6 . . . . 5 6 6 . . . . . 
            `)
    }
    if (currentLevel == 22) {
        game.setDialogFrame(img`
            . a a a a a a a a a a a a a . . 
            a a 1 1 1 1 1 1 1 1 1 1 1 a a . 
            a 1 1 a a a a a a a a a 1 1 a . 
            a 1 a a a a a a a a a a a 1 a . 
            a 1 a a a a a a a a a a a 1 a . 
            a 1 a a a a a a a a a a a 1 a . 
            a 1 a a a a a a a a a a a 1 a . 
            a 1 a a a a a a a a a a a 1 a . 
            a 1 a a a a a a a a a a a 1 a . 
            a 1 a a a a a a a a a a a 1 a . 
            a 1 a a a a a a a a a a a 1 a . 
            a 1 a a a a a a a a a a a 1 a . 
            a 1 1 a a a a a a a a a 1 1 a . 
            a a 1 1 1 1 1 1 1 1 1 1 1 a a . 
            . a a a a a a a a a a a a a . . 
            . . . . . . . . . . . . . . . . 
            `)
        game.setDialogCursor(img`
            b c c c c c c b d c c c b b b b c c c d b c c c c c c b 
            c c f f f f f c b d c c c b b c c c d b c f f f f f c c 
            c f f f f 2 f f c b c c c b b c c c b c f f 2 f f f f c 
            b f f f 2 1 2 f f d b c c d d c c b d f f 2 1 2 f f f b 
            b d f f f 2 f f f d b b c b b c b b d f f f 2 f f f d b 
            c c b d f f f b b b d c c c c c c d b b b f f f d b c c 
            b c c c d d d c c c c c c b b c c c c c c d d d c c c b 
            `)
        showInstruction("Pozor, jaskynná socha je škodlivejšia ako oheň hnevu, s ktorým ste sa už stretli. Ak chcete prejsť do ďalšej úrovne, musíte zabiť toto monštrum a uniknúť do 10 sekúnd.")
        game.setDialogCursor(img`
            . . . . . f f f f f f . . . . . 
            . . . . f 4 5 5 5 5 4 f . . . . 
            . . . f 4 5 5 4 4 5 5 4 f . . . 
            . . . f 5 5 4 f f 4 5 5 f . . . 
            . . . f 5 5 f . . f 5 5 f . . . 
            . . . f 5 5 4 f f 4 5 5 f . . . 
            . . . f 4 5 5 4 4 5 5 4 f . . . 
            . . . . f 4 5 5 5 5 4 f . . . . 
            . . . . . f f 5 5 f f . . . . . 
            . . . . . . f 5 5 f . . . . . . 
            . . . . . . f 5 5 f . . . . . . 
            . . . . . f f 5 5 f . . . . . . 
            . . . . f 5 5 4 5 f . . . . . . 
            . . . . . f 4 4 5 f . . . . . . 
            . . . . f 5 5 4 5 f . . . . . . 
            . . . . . f f f f . . . . . . . 
            `)
        showInstruction("Ak chcete uniknúť, musíte v tejto úrovni nazbierať aspoň 5 kľúčov.")
        game.setDialogCursor(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 5 . . . . . . . 
            . . . . . . . 5 . 8 . 6 6 6 . . 
            . . . . . 5 5 5 8 8 6 6 7 . . . 
            . . . 6 6 6 5 8 8 6 6 7 6 6 . . 
            . 7 f 6 9 6 6 8 5 6 7 6 7 . . . 
            . 7 7 7 7 7 6 6 8 6 6 7 6 . . . 
            . . 1 . . . 7 6 8 6 6 6 . . . . 
            . . . . . 7 6 6 8 6 7 . . . . . 
            . . . . 7 6 6 6 6 6 6 . . . . . 
            . . . . 7 6 6 6 6 6 6 6 . . 5 . 
            . . . . 7 6 7 6 6 7 6 7 6 . . 6 
            . . . . 6 7 7 7 7 . 6 . 7 6 . 6 
            . . . . 6 . . . . . 6 . . 7 6 . 
            . 5 6 6 . . . . 5 6 6 . . . . . 
            `)
    }
    if (currentLevel == 26 || currentLevel == 17) {
        game.setDialogCursor(img`
            . . . . . f f f f f f . . . . . 
            . . . . f 4 5 5 5 5 4 f . . . . 
            . . . f 4 5 5 4 4 5 5 4 f . . . 
            . . . f 5 5 4 f f 4 5 5 f . . . 
            . . . f 5 5 f . . f 5 5 f . . . 
            . . . f 5 5 4 f f 4 5 5 f . . . 
            . . . f 4 5 5 4 4 5 5 4 f . . . 
            . . . . f 4 5 5 5 5 4 f . . . . 
            . . . . . f f 5 5 f f . . . . . 
            . . . . . . f 5 5 f . . . . . . 
            . . . . . . f 5 5 f . . . . . . 
            . . . . . f f 5 5 f . . . . . . 
            . . . . f 5 5 4 5 f . . . . . . 
            . . . . . f 4 4 5 f . . . . . . 
            . . . . f 5 5 4 5 f . . . . . . 
            . . . . . f f f f . . . . . . . 
            `)
        showInstruction("Ak chcete uniknúť, musíte v tejto úrovni nazbierať aspoň 5 kľúčov.")
        game.setDialogCursor(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 5 . . . . . . . 
            . . . . . . . 5 . 8 . 6 6 6 . . 
            . . . . . 5 5 5 8 8 6 6 7 . . . 
            . . . 6 6 6 5 8 8 6 6 7 6 6 . . 
            . 7 f 6 9 6 6 8 5 6 7 6 7 . . . 
            . 7 7 7 7 7 6 6 8 6 6 7 6 . . . 
            . . 1 . . . 7 6 8 6 6 6 . . . . 
            . . . . . 7 6 6 8 6 7 . . . . . 
            . . . . 7 6 6 6 6 6 6 . . . . . 
            . . . . 7 6 6 6 6 6 6 6 . . 5 . 
            . . . . 7 6 7 6 6 7 6 7 6 . . 6 
            . . . . 6 7 7 7 7 . 6 . 7 6 . 6 
            . . . . 6 . . . . . 6 . . 7 6 . 
            . 5 6 6 . . . . 5 6 6 . . . . . 
            `)
    }
    game.setDialogFrame(img`
        . a a a a a a a a a a a a a . . 
        a a 1 1 1 1 1 1 1 1 1 1 1 a a . 
        a 1 1 a a a a a a a a a 1 1 a . 
        a 1 a a a a a a a a a a a 1 a . 
        a 1 a a a a a a a a a a a 1 a . 
        a 1 a a a a a a a a a a a 1 a . 
        a 1 a a a a a a a a a a a 1 a . 
        a 1 a a a a a a a a a a a 1 a . 
        a 1 a a a a a a a a a a a 1 a . 
        a 1 a a a a a a a a a a a 1 a . 
        a 1 a a a a a a a a a a a 1 a . 
        a 1 a a a a a a a a a a a 1 a . 
        a 1 1 a a a a a a a a a 1 1 a . 
        a a 1 1 1 1 1 1 1 1 1 1 1 a a . 
        . a a a a a a a a a a a a a . . 
        . . . . . . . . . . . . . . . . 
        `)
    game.setDialogCursor(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 5 . . . . . . . 
        . . . . . . . 5 . 8 . 6 6 6 . . 
        . . . . . 5 5 5 8 8 6 6 7 . . . 
        . . . 6 6 6 5 8 8 6 6 7 6 6 . . 
        . 7 f 6 9 6 6 8 5 6 7 6 7 . . . 
        . 7 7 7 7 7 6 6 8 6 6 7 6 . . . 
        . . 1 . . . 7 6 8 6 6 6 . . . . 
        . . . . . 7 6 6 8 6 7 . . . . . 
        . . . . 7 6 6 6 6 6 6 . . . . . 
        . . . . 7 6 6 6 6 6 6 6 . . 5 . 
        . . . . 7 6 7 6 6 7 6 7 6 . . 6 
        . . . . 6 7 7 7 7 . 6 . 7 6 . 6 
        . . . . 6 . . . . . 6 . . 7 6 . 
        . 5 6 6 . . . . 5 6 6 . . . . . 
        `)
}
function initializePlayAni () {
    playAni = animation.createAnimation(ActionKind.Idle, 225)
    playAni.addAnimationFrame(img`
        51515151515151515151515151515
        1fffffffffffffffffffffffffff1
        5f5555555555555555555555555f5
        1f5ffff55f555555fff55f555f5f1
        5f5f555f5f55555f555f5f555f5f5
        1f5f555f5f55555f555f55f5f55f1
        5f5ffff55f55555f555f555f555f5
        1f5f55555f55555fffff555f555f1
        5f5f55555f55555f555f555f555f5
        1f5f55555fffff5f555f555f555f1
        5f5555555555555555555555555f5
        1fffffffffffffffffffffffffff1
        51515151515151515151515151515
        `)
    playAni.addAnimationFrame(img`
        15151515151515151515151515151
        5fffffffffffffffffffffffffff5
        1f5555555555555555555555555f1
        5f5ffff55f555555fff55f555f5f5
        1f5f555f5f55555f555f5f555f5f1
        5f5f555f5f55555f555f55f5f55f5
        1f5ffff55f55555f555f555f555f1
        5f5f55555f55555fffff555f555f5
        1f5f55555f55555f555f555f555f1
        5f5f55555fffff5f555f555f555f5
        1f5555555555555555555555555f1
        5fffffffffffffffffffffffffff5
        15151515151515151515151515151
        `)
}
function setLevelTileMap0 (level: number) {
    clearGame()
    if (level == 0) {
        effects.bubbles.startScreenEffect()
        scene.setBackgroundImage(img`
            9999999999999999999999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777799999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777799999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777799999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777799999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777799999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777799999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777799999999999999999999999999999999999999999999999
            9999999999999999999999999999fffff99999999999999fffff777777ffffffffffffffffffffff777777ffffff77777777777fffff777779fffff999999999999fffff999999999999999999999999
            9999999999999999999999999999ffffff999999999999ffffff777777ffffffffffffffffffffff777777fffffff7777777777fffff777779fffff999999999999fffff999999999999999999999999
            9999999999999999999999999999fffffff9999999999fffffff777777ffffffffffffffffffffff777777fffffff7777777777fffff777779fffff999999999999fffff999999999999999999999999
            9999999999999999999999999999ffffffff99999999ffffffff777777ffffffffffffffffffffff777777ffffffff777777777fffff777779fffff999999999999fffff999999999999999999999999
            9999999999999999999999999999fffffffff999999fffffffff777777ffffffffffffffffffffff777777fffffffff77777777fffff777779fffff999999999999fffff999999999999999999999999
            9999999999999999999999999999ffffffffff9999ffffffffff777777fffff77777777777777777777777fffffffff77777777fffff777779fffff999999999999fffff999999999999999999999999
            9999999999999999999999999999fffffffffff99fffffffffff777777fffff77777777777777777777777ffffffffff7777777fffff777779fffff999999999999fffff999999999999999999999999
            9999999999999999999999999999ffffffffffffffffffffffff777777fffff77777777777777777777777fffffffffff777777fffff777779fffff999999999999fffff999999999999999999999999
            9999999999999999999999999999ffffffffffffffffffffffff777777fffff77777777777777777777777fffffffffff777777fffff777779fffff999999999999fffff999999999999999999999999
            9999999999999999999999999999ffffffffffffffffffffffff777777fffff77777777777777777777777ffffffffffff77777fffff777779fffff999999999999fffff999999999999999999999999
            9999999999999999999999999999fffff9ffffffffffff9fffff777777fffff77777777777777777777777fffffffffffff7777fffff777779fffff999999999999fffff999999999999999999999999
            9999999999999999999999999999fffff99ffffffffff99fffff777777fffff77777777777777777777777fffff7fffffff7777fffff777779fffff999999999999fffff999999999999999999999999
            9999999999999999999999999999fffff999ffffffff999fffff777777ffffffffffffff77777777777777fffff7ffffffff777fffff777779fffff999999999999fffff999999999999999999999999
            9999999999999999999999999999fffff9999ffffff9999fffff777777ffffffffffffff77777777777777fffff77ffffffff77fffff777779fffff999999999999fffff999999999999999999999999
            9999999999999999999999999999fffff99999fffff9999fffff777777ffffffffffffff77777777777777fffff777ffffffff7fffff777779fffff999999999999fffff999999999999999999999999
            9999999999999999999999999999fffff99999999999999fffff777777ffffffffffffff77777777777777fffff777ffffffff7fffff777779fffff999999999999fffff999999999999999999999999
            7777777777777777777777777777fffff77777777777777fffff777777ffffffffffffff77777777777777fffff7777fffffffffffff777777fffff777777777777fffff777777777777777777777777
            7777777777777777777777777777fffff77777777777777fffff777777fffff77777777777777777777777fffff77777ffffffffffff777777fffff777777777777fffff777777777777777777777777
            7777777777777777777777777777fffff77777777777777fffff777777fffff77777777777777777777777fffff777777fffffffffff777777fffff777777777777fffff777777777777777777777777
            7777777777777777777777777777fffff77777777777777fffff777777fffff77777777777777777777777fffff777777fffffffffff777777fffff777777777777fffff777777777777777777777777
            7777777777777777777777777777fffff77777777777777fffff777777fffff77777777777777777777777fffff7777777ffffffffff777777ffffff7777777777ffffff777777777777777777777777
            7777777777777777777777777777fffff77777777777777fffff777777fffff77777777777777777777777fffff77777777fffffffff777777ffffffff777777ffffffff777777777777777777777777
            7777777777777777777777777777fffff77777777777777fffff777777fffff77777777777777777777777fffff77777777fffffffff777777ffffffffff77ffffffffff777777777777777777777777
            7777777777777777777777777777fffff77777777777777fffff777777ffffffffffffffffffffff777777fffff777777777ffffffff7777777fffffffffffffffffffff777777777777777777777777
            7777777777777777777777777777fffff77777777777777fffff777777ffffffffffffffffffffff777777fffff7777777777fffffff7777777ffffffffffffffffffff7777777777777777777777777
            7777777777777777777777777777fffff77777777777777fffff777777ffffffffffffffffffffff777777fffff7777777777fffffff77777777ffffffffffffffffff77777777777777777777777777
            7777777777777777777777777777fffff77777777777777fffff777777ffffffffffffffffffffff777777fffff77777777777ffffff7777777777ffffffffffffff7777777777777777777777777777
            7777777777777777777777777777fffff77777777777777fffff777777ffffffffffffffffffffff777777fffff777777777777fffff777777777777ffffffffff777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777fffffff777777777777777777777777777777777777777777777777777777777777777777777777fffffff7777777777777777777777777777777777
            7777777777777777777777777777777777777777fffffff777777777777777777777777777777777777777777777777777777777777777777777777fffffff7777777777777777777777777777777777
            7777777777777777777777777777777777777777fffffff777777777777777777777777777777777777777777777777777777777777777777777777fffffff7777777777777777777777777777777777
            7777777777777777777777777777777777777777fffffff777777777777777777777777777777777777777777777777777777777777777777777777fffffff7777777777777777777777777777777777
            7777777777777777777777777777777777777777fffffff777777777777777777777777777777777777777777777777777777777777777777777777fffffff7777777777777777777777777777777777
            7777777777777777777777777777777777777777fffffff777777777777777777777777777777777777777777777777777777777777777777777777fffffff7777777777777777777777777777777777
            7777777777777777777777777777777777777777fffffff777777777777777777777777777777777777777777777777777777777777777777777777fffffff7777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            6666666666666111111111111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777771111111111111111111111111111111116666666666666
            6666666666666111111111111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777771111111111111111111111111111111116666666666666
            6666666666666111111111111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777771111111111111111111111111111111116666666666666
            6666666666666111111111111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777771111111111111111111111111111111116666666666666
            6666666666666111111111111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777771111111111111111111111111111111116666666666666
            6666666666666111111111111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777771111111111111111111111111111111116666666666666
            6666666666666111111111111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777771111111111111111111111111111111116666666666666
            6666666666666111111111111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777771111111111111111111111111111111116666666666666
            6666666666666111111111111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777771111111111111111111111111111111116666666666666
            6666666666666111111111111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777771111111111111111111111111111111116666666666666
            6666666666666111111111111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777771111111111111111111111111111111116666666666666
            6666666666666111111111111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777771111111111111111111111111111111116666666666666
            6666666666666111111111111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777771111111111111111111111111111111116666666666666
            6666666666666111111111111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777771111111111111111111111111111111116666666666666
            6666666666666111111111111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777771111111111111111111111111111111116666666666666
            6666666666666111111111111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777771111111111111111111111111111111116666666666666
            6666666666666111111111111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777771111111111111111111111111111111116666666666666
            6666666666666111111111111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777771111111111111111111111111111111116666666666666
            6666666666666111111111111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777771111111111111111111111111111111116666666666666
            6666666666666111111111111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777771111111111111111111111111111111116666666666666
            6666666666666111111111111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777771111111111111111111111111111111116666666666666
            6666666666666111111111111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777771111111111111111111111111111111116666666666666
            6666666666666111111111111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777771111111111111111111111111111111116666666666666
            6666666666666111111111111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777771111111111111111111111111111111116666666666666
            6666666666666666666666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666
            6666666666666666666666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666
            6666666666666666666666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666
            6666666666666666666666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666
            6666666666666666666666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666
            6666666666666666666666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666
            6666666666666666666666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666
            6666666666666666666666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666
            6666666666666666666666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666
            6666666666666666666666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666
            6666666666666666666666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666
            6666666666666666666666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666
            6666666666666666666666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666
            6666666666666666666666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666
            6666666666666666666666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666
            6666666666666666666666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666
            6666666666666666666666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666
            6666666666666666666666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666
            6666666666666666666666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666
            6666666666666666666666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666
            6666666666666666666666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666
            6666666666666666666666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666
            6666666666666666666666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666
            6666666666666666666666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666
            6666666666666666666666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666
            6666666666666666666666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666
            6666666666666666666666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666
            6666666666666666666666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666
            6666666666666666666666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666
            6666666666666666666666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666
            6666666666666666666666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666
            6666666666666666666666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666
            6666666666666666666666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666
            6666666666666666666666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666
            6666666666666666666666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666
            6666666666666666666666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666
            `)
        Cursor0.setPosition(80, 35)
        buttonsMenu()
        buttonsPositionMenu()
    }
    if (level >= 10) {
        Cursor0.destroy()
        effects.bubbles.endScreenEffect()
    }
    if (level != 0) {
        Play.destroy()
        HighScore.destroy()
        Options.destroy()
        Credits.destroy()
        if (level == 1 && controller.A.isPressed()) {
        	
        } else if (level == 2) {
            Cursor0.setPosition(80, 35)
            buttonsOptions()
            buttonsPositionOptions()
        } else if (level == 3) {
        	
        } else if (level == 4) {
            Cursor0.setPosition(80, 35)
            Easy = sprites.create(img`
                f f f f f f f f f f f f f f f f f f f f f f f f f f f 
                f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
                f 5 f f f f f 5 5 f f f 5 5 5 f f f 5 5 f 5 5 5 f 5 f 
                f 5 f 5 5 5 5 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 
                f 5 f 5 5 5 5 5 f 5 5 5 f 5 f 5 5 5 5 5 5 f 5 f 5 5 f 
                f 5 f f f 5 5 5 f 5 5 5 f 5 5 f f f 5 5 5 5 f 5 5 5 f 
                f 5 f 5 5 5 5 5 f f f f f 5 5 5 5 5 f 5 5 5 f 5 5 5 f 
                f 5 f 5 5 5 5 5 f 5 5 5 f 5 f 5 5 5 f 5 5 5 f 5 5 5 f 
                f 5 f f f f f 5 f 5 5 5 f 5 5 f f f 5 5 5 5 f 5 5 5 f 
                f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
                f f f f f f f f f f f f f f f f f f f f f f f f f f f 
                `, SpriteKind.button)
            Medium = sprites.create(img`
                fffffffffffffffffffffffffffffffffffffff
                f5555555555555555555555555555555555555f
                f5f555f5fffff5ffff55fffff5f555f5f555f5f
                f5ff5ff5f55555f555f555f555f555f5ff5ff5f
                f5f5f5f5f55555f555f555f555f555f5f5f5f5f
                f5f555f5fff555f555f555f555f555f5f555f5f
                f5f555f5f55555f555f555f555f555f5f555f5f
                f5f555f5f55555f555f555f555f555f5f555f5f
                f5f555f5fffff5ffff55fffff55fff55f555f5f
                f5555555555555555555555555555555555555f
                fffffffffffffffffffffffffffffffffffffff
                `, SpriteKind.button)
            Hard = sprites.create(img`
                f f f f f f f f f f f f f f f f f f f f f f f f f f f 
                f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
                f 5 f 5 5 5 f 5 5 f f f 5 5 f f f f 5 5 f f f f 5 5 f 
                f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 
                f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 
                f 5 f f f f f 5 f 5 5 5 f 5 f f f f 5 5 f 5 5 5 f 5 f 
                f 5 f 5 5 5 f 5 f f f f f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 
                f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 
                f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 f 5 f f f f 5 5 f 
                f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
                f f f f f f f f f f f f f f f f f f f f f f f f f f f 
                `, SpriteKind.button)
            Easy.setPosition(80, 65)
            Medium.setPosition(80, 80)
            Hard.setPosition(80, 95)
        } else if (level == 5) {
            Cursor0.setPosition(80, 35)
            EN = sprites.create(img`
                ffffffffffffffffffffffffffffff
                f2118888818881221888188888112f
                f1211188818881221888188811121f
                f1112118881881221881888112111f
                f8111221188181221818811221118f
                f8881112118181221818112111888f
                f8888111221111221111221118888f
                f8888881112111221112111888888f
                f8888888811221221221188888888f
                f1111111111111221111111111111f
                f2222222222222222222222222222f
                f1111111111111221111111111111f
                f8888888811221221221188888888f
                f8888881112111221112111888888f
                f8888111221111221111221118888f
                f8881112111811221181112111888f
                f8111221188181221818811221118f
                f1112118881881221881888112111f
                f1211188881881221881888811221f
                f2118888818881221888188888112f
                ffffffffffffffffffffffffffffff
                `, SpriteKind.button)
            SK = sprites.create(img`
                ffffffffffffffffffffffffffffff
                f1111111111111111111111111111f
                f1111111111111111111111111111f
                f1111111111111111111111111111f
                f1111111111111111111111111111f
                f1122222221111111111111111111f
                f1122212221111111111111111111f
                f1122111221111111111111111111f
                f8122212221888888888888888888f
                f8121111121888888888888888888f
                f8122212221888888888888888888f
                f8122888221888888888888888888f
                f8188888881888888888888888888f
                f8188888881888888888888888888f
                f2188888881222222222222222222f
                f2218888812222222222222222222f
                f2221888122222222222222222222f
                f2222111222222222222222222222f
                f2222222222222222222222222222f
                f2222222222222222222222222222f
                ffffffffffffffffffffffffffffff
                `, SpriteKind.button)
            EN.setPosition(80, 50)
            SK.setPosition(80, 80)
        }
        if (level == 10) {
            Back.destroy()
            Instructions.destroy()
            gravity = 9.81 * pixelsToMeters
            scene.setBackgroundImage(img`
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999911111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999911111999111111119991119999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111999999999999999999999999999
                9999999999999999991111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111999999999999999999999
                9999999999999999911111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111119999999999999999999
                9999999999999999111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111119999999999999999999
                9999999999999999111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111999999999999999999
                9999999999999991111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111999999999999999999
                9999999999999991111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111999999999999999999
                9999999999999991111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111999999999999999999
                9999999999999991111111111111111111111111111119999999999999999999999999999999911111119999911199999999999999999999999999999999111111111111111119999999999999999999
                9999999999999999111111111111111111111111111119999999999999999999999999999991111111111999111111999999999999999999999999999999999111111111111999999999999999999999
                9999999999999999911111111111111111111111111199999999999999999999999999999991111111111911111111111111119999999999999999999999999999999999999999999999999999999999
                9999999999999999991111111111111111999999999999999999999999999999999999999911111111111111111111111111111199999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111119999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111119999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111119999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111119999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111119999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111119999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111111199999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111119999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111119999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999997779999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999977777999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999977777999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999977777777999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999777777777777777779999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999977777777777777777777779999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999997777777777777777777777777799999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999977777777777777777777777777779999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999997777797777777777777777777777777777777999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999997777777777777777777777777777777777777799999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999977777777777777777777777777777777777777779999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999977777777777777777777777777777777777777777999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999977777777777777777777777777777777777777777799999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999977777777777777777777777777777777777777777779999999999999999999999999999999999999999999999999999999999999999999999977799997777999999999999999999999
                9999999999997777777777777777777777777777777777777777777777999999999999999999999999977779999999999999999999999999999999999999999777777777777777999999999999999999
                9999999999977777777777777777777777777777777777777777777777999999999999999999999999777777999999999999999999999999999999999999999777777777777777777999999999999999
                9999999999777777777777777777777777777777777777777777777777799999999999999999999999777777999999999999999999999999999999999999999777777777777777777779999999999999
                9999999977777777777777777777777777777777777777777777777777779999999999999999999999777777999999999999999999999999999999999999999977777777777777777777999999999999
                9999999777777777777777777777777777777777777777777777777777777999999999999999999977777777777999999999999999999999999999999999999977777777777777777777779999999999
                9999997777777777777777777777777777777777777777777777777777777799999999999999977777777777777777779999999999999999999999999999999977777777777777777777777799999999
                9999977777777777777777777777777777777777777777777777777777777779999999999999777777777777777777777779997777799999999999999999999777777777777777777777777779999999
                9997777777777777777777777777777777777777777777777777777777777777999999999997777777777777777777777777797777779999999999999999997777777777777777777777777777999999
                9977777777777777777777777777777777777777777777777777777777777777799999999777777777777777777777777777777777779999999999999999997777777777777777777777777777779999
                9777777777777777777777777777777777777777777777777777777777777777777999997777777777777777777777777777777777779999999999999999977777777777777777777777777777777799
                7777777777777777777777777777777777777777777777777777777777777777777799977777777777777777777777777777777777799999999999999997777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777779999777777777777777777777777777777777777777799999999999977777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777997777777777777777777777777777777777777777777779999999999777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777779977777777777777777777777777777777777777777777777999999977777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777799777777777777777777777777777777777777777777777777779999777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777997777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777977777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777977777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777977777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777997777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777799777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777999977777777799999999997777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777799999999977777777779999997777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777779999977777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777799977777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777999777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777799997777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777799777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777779977777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777997777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777799777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777799977777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777779977777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777779977777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777779977777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777779977777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777779977777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777779977777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777799977777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777999977777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777999977777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777779999977777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777779999777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777799997777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777999997777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777799999977777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777799999999777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777779999999999999999999999999999777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777779999999999999999999999999999999999999977777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777799999999999999999999999999999999999999999999997777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777779999999999999999999999999999999999999999999999999997777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777999999999999999999999999999977777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777999999999999999999977777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777999999999999997777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777799999999999777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777779999999997777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777779999999999977777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777799999999997777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777999999999777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777779999999997777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777999999999777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777999999997777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777779999999997777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777799999999777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777799999997777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777799999997777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                `)
            tiles.setTilemap(tilemap`level_1`)
            createHero(hero)
            invincibilityPeriod = 600
            if (currentLanguage == 0) {
                giveIntroductionEN()
            } else if (currentLanguage == 1) {
                giveIntroductionSK()
            }
            initializeAnimations()
            currentLife = 3
        } else if (level == 11) {
            tiles.setTilemap(tilemap`level2`)
        } else if (level == 12) {
            scene.setBackgroundImage(img`
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111199999999999999999999999999999
                9999999999999999999999999991111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111999111111119991111199999999999999999999
                9999999999999999999991111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111999999999999999999
                9999999999999999999111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111199999999999999999
                9999999999999999999111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111119999999999999999
                9999999999999999991111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111119999999999999999
                9999999999999999991111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111999999999999999
                9999999999999999991111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111999999999999999
                9999999999999999991111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111999999999999999
                9999999999999999999111111111111111119999999999999999999999999999999911199999111111199999999999999999999999999999999111111111111111111111111111111999999999999999
                9999999999999999999991111111111119999999999999999999999999999999991111119991111111111999999999999999999999999999999111111111111111111111111111119999999999999999
                9999999999999999999999999999999999999999999999999999999999111111111111111191111111111999999999999999999999999999999911111111111111111111111111199999999999999999
                9999999999999999999999999999999999999999999999999999999911111111111111111111111111111199999999999999999999999999999999999999991111111111111111999999999999999999
                9999999999999999999999999999999999999999999999999999999111111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999111111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999111111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999111111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999111111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999111111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999911111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999977777777777777799999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999997777777777777777777779999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999777777777777777777777777799999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999997777777777777777777777777779999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999977777777777777777777777777777777777799999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999777777777777777777777777777777777777777999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999997777777777777777777777777777777777777777779999999999999999999999999999999999999999999977
                9999999999999999999999999999999999999999999999999999999999997777777777777777777777777777777777777777777777777777779999999999999999999999999999999999999999997777
                9999999999999999999999999999999999999999999999999999999999977777777777777777777777777777777777777777777777777777779999999999999999999999999999999999999999997777
                9999999999999999999999999999999999999999999999999999999999777777777777777777777777777777777777777777777777777777779999999999999999999999999999999999999999997777
                9999999999999999999999999999999999999999999999999999999997777777777777777777777777777777777777777777777777777777777999999999999999999999999999999999999999977777
                9999999999999999999999999999999999999999999999999999999997777777777777777777777777777777777777777777777777777777777999999999999999999999999999999999999999977777
                9999999999999999999999999999999999999999999999999999999977777777777777777777777777777777777777777777777777777777777799999777777779999777777779999999999999777777
                9999999999999999999999999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777799997777777777797777777777799999999997777777
                9999999999999999999999999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777799777777777777797777777777779999999997777777
                9999999999999999999999999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777797777777777777777777777777777977777777777777
                9999999999999999999999999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                9999999999999999999999999999999999999999999999999999997777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                9999999999999999999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                9999999999999999999999999999999999999999999999997777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                9999999999999999999999999999999999999999999999977777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                9999999999999999999999999999999999999999999999977777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                9999999999999999999999999999999999999999999999977777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                9999999999999999999999999999999999999999999999977777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                9999999999999999999999999999999999999999999999977777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                9999999999999999999999999999999999999999999999977777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                9999999999999999999999999999999999999999999999977777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                9999999999999999999999999999999999999999999999977777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                9999999999999999999999999999999999999999999999977777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                9999999999999999999999999999999999999999999999977777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                9999999999999999999999999999999999999999999999977777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                9999999999999999999999999999999999999999999999997777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                9999999999999999999999999999999999999999999999997777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                9999999999999999999999999999999999999999999999997777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                9999999999999999999999999999999999999999999999999777777777777777777777777777777777777777777777777777777779777777777777777777777777ee7777777777777777777777777777
                99999999999999999999999999999999999999999999999999777777777777777777777777777777777777777777777777777777999999977777777777777777eeeeee77777777777777777777777777
                9999999999999999999999999999999999999999999999999997777777777777777777777777eeee777777777777777777777799999999977777777777777eeeeeeeeeeee77777799999999999777777
                999999999999999999999999999999999999999999999999999999777777777777777777777eeeeeee7777777777777777779999999999997777777777777eeeeeeeeeeeeeee99999999999999997777
                999999999999999999999999999999999999999999999999999999997777777777777777777eeeeeeee777777777777779999999999999999997777777999eeeeeeeeeeeee9999999999999999999977
                99999999999999999999997777999999999999999999999999999999997777777777777777eeeeeeeeeeee7777777999999999999999999999999999999999eeeeeeeeeeee99999999999999999999ee
                9999999999999999999997777777799999999999999999999999999999997777777777799eeeeeeeeeeeeeeeee9999999999999999999999999999999999999eeeeeeeeeee99999999999999999999ee
                999999999999999999777777777777999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeee9999999999999999999999999999999999999eeeeeeeeeee9999999999999999999eee
                99999999999999999977777777777799999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999eeeeeeeeeeee999999999999999999eee
                99999999999999999977777777777799999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeee999999999999999999999999999999999999eeeeeeeeeeeee99999999999999999eeee
                999999999999999999777777777777999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeee99999999999999999999999999999999999eeeeeeeeeeeeee9999999999999999eeee
                999999999999999999777777777777999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeee99999999999999999999999999999999999eeeeeeeeeeeeee999999999999999eeeee
                9999999999999999997777eee77777999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeee99999999999999999999999999999999999eeeeeeeeeeeeeee99999999999999eeeee
                999999999999999999999eeeee9999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeee999999999999999999999999999999999eeeeeeeeeeeeeeee9999999999999eeeeee
                999999999999999999999eeeee9999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeee999999999999999999999999999999999eeeeeeeeeeeeeeeee999999999999eeeeee
                999999999999999999999eeeeee999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999eeeeeeeeeeeeeeeeeee9999999999eeeeeee
                99999999999999999999eeeeeeee99999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999eeeeeeeeeeeeeeeeeee999999999eeeeeeee
                99999999997777777777eeeeeeee7777777779999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeee9999977777777777777777799999999eeeeeeeeeeeeeeeeeeee9999999eeeeeeeee
                9977777777777777777eeeeeeeee7777777777777779999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeee99777777777777777777777799999eeeeeeeeeeeeeeeeeeeee977777eeeeeeeeee
                7777777777777777777eeeeeeeee7777777777777777777777777999999999999999eeeeeeeeeeeeeeeeeeeeeeeeee77777777777777777777777777999eeeeeeeeeeeeeeeeeeeeee77777eeeeeeeeee
                7777777777777777777eeeeeeeee7777777777777777777777777777777779999999eeeeeeeeeeeeeeeeeeeeeeeeeee7777777777777777777777777799eeeeeeeeeeeeeeeeeeeeee7777eeeeeeeeeee
                7777777777777777777eeeeeeeee777777777777777777777777777777777779999eeeeeeeeeeeeeeeeeeeeeeeeeeee777777777777777777777777777eeeeeeeeeeeeeeeeeeeeeeee77eeeeeeeeeeee
                77777777777777777777eeeeeeee777777777777777777777777777777777777799eeeeeeeeeeeeeeeeeeeeeeeeeeeee7777777777777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                77777777777777777777777eee7777777777777777777777777777777777777779eeeeeeeeeeeeeeeeeeeeeeeeeeeeee7777777777777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                777777777777777777777777777777777777777777777777777777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee777777777777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                77777777777777777777777777777777777777777777777777777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7777777777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                7777777777777777777777777777777777777777777777777777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7777777777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                777777777777777777777777777777777777777777777777777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee77777777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                777777777777777777777777777777777777777777777777777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee77777777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                777777777777777777777777777777777777777777777777777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7777777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                77777777777777777777777777777777777777777777777777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee777777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                77777777777777777777777777777777777777777777777777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                777777777777777777777777777777777777777777777777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                77777777777777777777777777777777777777777777777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                77777777777777777777777777777777777777777777777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee77777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                77777777777777777777777777777777777777777777777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee77777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                77777777777777777777777777777777777777777777777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee77777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                `)
            tiles.setTilemap(tilemap`level3`)
        } else if (level == 13) {
            scene.setBackgroundImage(img`
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                9977777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                9997777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                9999977777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                9999997777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                9999999977777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                9999999999977777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                9999999999999777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                9999999999999997777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                9999999999999999997777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                99999999999999999999777777777777777777777777777777777777777777777777777777777777777777777777e7777777777777777777777777777777777777777777777777777777777777777777
                9999999999999999999999977777777777777777777777777977777777777777777777777777777777777777777eeee77777777777777777777777777777777777777777777777777777777777777777
                9999999999999999999999999777777777777777777777779999777777777777777777777777777777777777777eeeeee777777777777777777777777777777777777777777777777777777777777777
                99999999999999999999999999999999999997777777779999999997777777777777777777777777777777777eeeeeeeeee77777777777777777777777777777777777777777777777777777777eeeee
                999999999999999999999999999999999999999999999999999999999977777777777777777777777777777eeeeeeeeeeeeee7777777777777777777777777777777777777777777777777777eeeeeee
                9999999999999999999999999999999999999999999999999999999999999977777777777777777777777eeeeeeeeeeeeeeeeee7777777777777777777777777777777777777777777777777eeeeeeee
                999999999999999999999999999999999999999999999999999999999999999999eeeeee77777777eeeeeeeeeeeeeeeeeeeeeeeeee77777777777777777777777777777777777777777777eeeeeeeeee
                999999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee777777777777777777777777777777777777777eeeeeeeeeeee
                9999999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee777777777777777777777777777777777eeeeeeeeeeeeeeee
                9999999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee77777777777777777777777777eeeeeeeeeeeeeeeeeee
                9999999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee777777777777777777eeeeeeeeeeeeeeeeeeeeee
                9999999999999999999999999999999999999999999999999999999999777777999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                9999999999999999999999999999999999999999999999999999999999777777779eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                99999999999999999999999999999999999977779999999999999999997777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                99999999999999999999999999999999997777777999997779999999997777777777eeee7777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                99999999999999999999999999999999997777777999997779999999997777777777eeee7777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                999999999999999999999999999999999977777779999977799999999999777777eeeeee7777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                9999999999999999999999999999999999777777799999ee9999999977797777eeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeee7777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                9999999999999999999999999999999999977777e99999ee9999999977799999eeeeeeeeeddeeeeeeeeeeeeeeeeeeeeeeee7777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                99999999999999999999999999999999777799eeeee999ee99999999777999999eeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeee7777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                999999999999999999999999999997777777eeeeeeee99eee9999999ee9999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                999999999999999999999999999997777777eeeeeeeeeeeee99999977799999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeee777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                99999999999999999999999999999777777799eeeeeeeeeee999999777999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddeeeeeeeeeeeeeeeeeeee7777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                999999999999999999999999999999777779999999eeeeeee999999777999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeee7777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                9999999999999999999999999999999999999999999eeeeeee9999e7779999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                99999999999999999999999999999999999999999999777eeee999eee99999999999eeeeeeeeeeeeeeeeeeeeeee77eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                99999999999999999999999999999999999999999999777eeeee99eee99999999999eeeeeeeeeeeeeeeeeeee7777777eeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                99999999999999999999999999999999999999999999777eeeeeeeeee99999999999eeeeeeeeeeeeeeeeeeee77777777eeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                99999999999999999999999999999999999999999999999eeeeeeeeee99999999999eeeeeeeeeeeeeeeeeeee7777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeddeeeeeeeeeeeeee77777eeeeeeeeeeeeeeee
                99999999999999999999999999999999999999999999999eeeeeeeeeee9999999999eeeeeeeeeeeeeeeeeeee777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeee7777777eeeeeeeeeeeeeee
                999999999999999999999999999999999999999999999999eeeeeeeeee9999999999eeeeeeeeeeeeeeeeeeeee77777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7777777eeeeeeeeeeeeeee
                9999999999999999999999999999999999999999999999999eeeeeeeee9999999999eeeeeeeeeeeeeeeeeeeeeeeddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7777777eeeeeeeeeeeeeee
                999999999999999999999999999999999999999777eeeeeeeeeeeeeeeee999999999eeeeeeeeeeeeeeeeeeeeeeeddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7777777eeeeeeeeeeeeeee
                9999999999999999999999999999999999999997779eeeeeeeeeeeeeeeee99999999eeeeeeeeeeeeeeeeeeeeeedddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee777777eeeeeeeeeeeeeee
                9999999999999999999999999999999999999997779999eee777eeeeeeeee9999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddeeeeeeeeeeeeeeeee
                999999999999999999999999999999999999999999999999e777eeeeeeeeee999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddeeeeeeeeeeeeeeeee
                99999999999999999999999999999999999999999999999997779eeeeeeeee999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddeeeeeeeeeeeeeeee
                999999999999999999999999999999999999999999999999999999eeeeeeeeee9999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddeeeeeeeeeeeeeeee
                9999999999999999999999999999999999999999999999999999999eeeeeeeee9999eeeeeeeeeeeeeeeeee777eeeeeeeeeeeeeeeeeeeeeeeee77777eeeeeeeeeeeeeeeeeeeeeddddeeeeeeeeeeeeeeee
                99999999999999999999999999999999999999999999999999999999eeeeeeeee999eeeeeeeeeeeeeeeeee777eeeeeeeeeeeeeeeeeeeeeeeee77777eeeeeeeeeeeeeeeeeeeeeddeeeeeeeeeeeeeeeeee
                99999999999999999999999999999999999999999999999999999999eeeeeeeee999eeeeeeeeeeeeeeeeee777eeeeeeeeeeeeeeeeeeeeeeeee77777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                999999999999999999999999999999999999999999999999999999999eeeeeeeee99eeeeeeeeeeeeeeeeee777eeeeeeeeeeeeeeeeeeeeeeeeee7777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                9999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee777ee
                9999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee777ee
                9999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee777ee
                99999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeee
                999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeee
                999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                9999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                9999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                99999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                99999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                99999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                9999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                9999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                9999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                99999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                99999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                99999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                99999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                999999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                9999999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                999999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                999999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                999999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                999999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                99999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                99999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                99999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                99999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                99999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                99999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                99999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                99999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                9999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                9999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                9999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                99999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                99999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                99999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                `)
            tiles.setTilemap(tilemap`level16`)
        } else if (level == 14) {
            tiles.setTilemap(tilemap`level15`)
        } else if (level == 15) {
            scene.setBackgroundImage(img`
                1111111111111999999999999999999111111111111119999999999999999999999999999999999999999999999999999999999999991111111111111111111111199999999999999999999999999999
                1111111111111999999999999999999111111111111111199999999999999999999999999999999999999999999999999999999991111111111111111111111111199999999999999999999999999999
                1111111111111999999999999999999111111111111111119999999999999999999999999999999999999999999999999999991111111111111111111111111111199999999999999999999999999999
                1111111111111999999999999999999111111111111111119999999999999999999999999999999999999999999999999999991111111111111111111111111111199999999999999999999999999999
                1111111111111999999999999999999111111111111111119999999999999999999999999999999999999999999999999999991111111111111111111111111999999999999999999999999999999999
                1111111111119999999999999999999999111111111111119999999999999999999999999999999999999999999999999999991111111111111111111119999999999999999999999999999999999999
                1111111111199999999999999999999999991111111111119999999999999999999999999999999999999999999999999999991111111199999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999777777777777799999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9777777777777777777777779999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9777777777777777777777777779999999999999999999999999999997777777777777777777777777999999999999999999999999999999999977777777777777777777777999999999999999999999
                9777777777777777777777777777777999999999999999999999777777777777777777777777777777779999999999999999999999999977777777777777777777777777777777779999999999999999
                7777777777777777777777777777777777999999999999999777777777777777777777777777777777777799999999999999999999777777777777777777777777777777777777777799999999999999
                7777777777777777777777777777777777777799999999997777777777777777777777777777777777777777999999999999999977777777777777777777777777777777777777777777999999999999
                7777777777777777777777777777777777777777799999777777777777777777777777777777777777777777779999999999997777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777999999999777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777779999977777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777999777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777799eeeeeee77777777777777777777777777777777777777777777777eee999777777777777777777777777777777777777777777
                77777777777777777777777777777777777777777777777777777777999eeeeee77777777777777777777777777777777777777777777799eee99e777777777777777777777777777777777777777777
                777777777777777777777777777777777777777777777777777777779777eeeeee7777777777777777777777777777777777777777779999ee7779777777777777777777777777777777777777777777
                7777777777777777777777777eee99999977e77777777777777777779777eeee97777777777777777777777777777777777777777777ee99ee7779777777777777777777777777777777777777777777
                777777777777777777777799eeeeee77799ee97777777777777777779777eee9977777777777777777777777777777777777777777779777ee7779777777777777777777777777777777777777777777
                7777777777777777777777999eeeee77799ee99777777777777777779eeeee99777777777777777777777777777777777777777777779777eee997777777777777777777777777777777777777777777
                77777777777777777777779999eeee77799ee9977777777777777777ee777999777777777777777777777777777777777777777777779777eee977777777777777777777ee9999ee7777777777777777
                77777777777777777777779999777eeeee9ee9997777777777777777ee777999777777777777777777777777777777777777777777779999eee777777777777777777779ee999eeee777777777777777
                777777777777777777777799ee777eeeeeeee9997777777777777777ee777999777777777777777777777777777777777777777777799999eee7777777777777777779999ee9eeeee777777777777777
                7777777777777777777777eeee777eeeeeeee9997777777777777777ee999997777777777777777777777777777777777777777777799999eee7777777777777777779999ee9ee777777777777777777
                77777777777777777777777eeeeeeeeeeeeee9997777777777777777e9999997777777777777777777777777777777777777777777799999eee7777777777777777799999777ee777777777777777777
                777777777777777777777777ee999eee777eee99777777777777777799999997777777777777777777777777777777777777777777799999eee7777777777777777799999777ee777777777777777777
                77777777777777777777777777999999777eeeee777777777777777799999977777777777777777777777777777777777777777777799999eee7777777777777777799999777ee999777777777777777
                77777777777777777777777777799999777eeeee777777777777777799999977777777777777777777777777777777777777777777799999eee77777777777777777999999eeee999777777777777777
                777777777777777777777777777799999999eeee77777777777777777777777777777777777777777777777777777777777777777779999977777777777777777777999999eeee999777777777777777
                77777777777777777777777777777999999999ee77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777999999eee9977777777777777777
                777777777777777777777777777777999999999e77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777799999eee7777777777777777777
                777777777777777777777777777777799999999e77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777eee7777777777777777777
                7777777777777777777777777777777799999997777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777779999997777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                777777777777ee77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                77777777779eee9997777777777777777777777777777777777777ee99777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                77777777779eee99997e77777777777777777777777777777779eeee99777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                77777777779eee99777e777777777777777777777777777777799eee99777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                77777777779eee9e7779777777777777777777777777777777799e7779777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                77777777799eeeee7779977777777777777777777777777777799e7779777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                77777777799eeeee9999977777777777777777777777777777799e7779777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                77777777799e77799999977777777777777777777777777777779eeee9777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                77777777799e777999999777777777777777777777777777777777eee7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                777777777eee7779999997777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                777777777eeeee99999997777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777eeeee9999997777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                77777777777eeeee999997777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                77777777777eeeee999977777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777eee999977777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777eee777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777e777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777779eee977777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777779eee977777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777779eee9e7777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777779eeeee7777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777799e777ee777777777777777777777777777777777777777777777777777777777777
                777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777779ee77799777777777777777777777777777777777777777777777777777777777777
                777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777779ee77799777777777777777777777777777777777777777777777777777777777777
                777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777779eee9997777777777777777777777777777777777777777777777777777777777777
                777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777779eee9997777777777777777777777777777777777777777777777777777777777777
                777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777eee9997777777777777777777777777777777777777777777777777777777777777
                77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777e9997777777777777777777777777777777777777777777777777777777777777
                77777777777777777777777777777777777777e999ee77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777779eee999777777777777777777
                7777777777777777777777777777777777777eee99ee97777777777777777777777777777777777777777777777777777777777777777777777777777777777777777779eee999777777777777777777
                777777777777777777777777777777777777eeeeeeee97777777777777777777777777777777777777777777777777777777777777777777777777777777777777777779eee999777777777777777777
                7777777777777777777777777777777777779eeeeeee97777777777777777777777777777777777777777777777777777777777777777777777777777777777777777779eee999777777777777777777
                7777777777777777777777777777777777779777eee997777777777777777777777777777777777777777777777777777777777777777777777777777777777777777779eeee99777777777777777777
                7777777777777777777777777777777777779777eee997777777777777777777777777777777777777777777777777777777777777777777777777777777777777777779eeee97777777777777777777
                7777777777777777777777777777777777779777eeee977777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777eee77777777777777777777
                7777777777777777777777777777777777779999eeee97777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                77777777777777777777777777777777777799999eeee7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777977777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                `)
            tiles.setTilemap(tilemap`level17`)
        } else if (level == 16) {
            tiles.setTilemap(tilemap`level21`)
        } else if (level == 17) {
            scene.setBackgroundImage(img`
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                9977777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                9997777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                9999977777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                9999997777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                9999999977777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                9999999999977777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                9999999999999777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                9999999999999997777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                9999999999999999997777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                99999999999999999999777777777777777777777777777777777777777777777777777777777777777777777777e7777777777777777777777777777777777777777777777777777777777777777777
                9999999999999999999999977777777777777777777777777977777777777777777777777777777777777777777eeee77777777777777777777777777777777777777777777777777777777777777777
                9999999999999999999999999777777777777777777777779999777777777777777777777777777777777777777eeeeee777777777777777777777777777777777777777777777777777777777777777
                99999999999999999999999999999999999997777777779999999997777777777777777777777777777777777eeeeeeeeee77777777777777777777777777777777777777777777777777777777eeeee
                999999999999999999999999999999999999999999999999999999999977777777777777777777777777777eeeeeeeeeeeeee7777777777777777777777777777777777777777777777777777eeeeeee
                9999999999999999999999999999999999999999999999999999999999999977777777777777777777777eeeeeeeeeeeeeeeeee7777777777777777777777777777777777777777777777777eeeeeeee
                999999999999999999999999999999999999999999999999999999999999999999eeeeee77777777eeeeeeeeeeeeeeeeeeeeeeeeee77777777777777777777777777777777777777777777eeeeeeeeee
                999999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee777777777777777777777777777777777777777eeeeeeeeeeee
                9999999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee777777777777777777777777777777777eeeeeeeeeeeeeeee
                9999999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee77777777777777777777777777eeeeeeeeeeeeeeeeeee
                9999999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee777777777777777777eeeeeeeeeeeeeeeeeeeeee
                9999999999999999999999999999999999999999999999999999999999777777999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                9999999999999999999999999999999999999999999999999999999999777777779eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                99999999999999999999999999999999999977779999999999999999997777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                99999999999999999999999999999999997777777999997779999999997777777777eeee7777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                99999999999999999999999999999999997777777999997779999999997777777777eeee7777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                999999999999999999999999999999999977777779999977799999999999777777eeeeee7777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                9999999999999999999999999999999999777777799999ee9999999977797777eeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeee7777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                9999999999999999999999999999999999977777e99999ee9999999977799999eeeeeeeeeddeeeeeeeeeeeeeeeeeeeeeeee7777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                99999999999999999999999999999999777799eeeee999ee99999999777999999eeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeee7777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                999999999999999999999999999997777777eeeeeeee99eee9999999ee9999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                999999999999999999999999999997777777eeeeeeeeeeeee99999977799999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeee777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                99999999999999999999999999999777777799eeeeeeeeeee999999777999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddeeeeeeeeeeeeeeeeeeee7777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                999999999999999999999999999999777779999999eeeeeee999999777999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeee7777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                9999999999999999999999999999999999999999999eeeeeee9999e7779999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                99999999999999999999999999999999999999999999777eeee999eee99999999999eeeeeeeeeeeeeeeeeeeeeee77eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                99999999999999999999999999999999999999999999777eeeee99eee99999999999eeeeeeeeeeeeeeeeeeee7777777eeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                99999999999999999999999999999999999999999999777eeeeeeeeee99999999999eeeeeeeeeeeeeeeeeeee77777777eeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                99999999999999999999999999999999999999999999999eeeeeeeeee99999999999eeeeeeeeeeeeeeeeeeee7777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeddeeeeeeeeeeeeee77777eeeeeeeeeeeeeeee
                99999999999999999999999999999999999999999999999eeeeeeeeeee9999999999eeeeeeeeeeeeeeeeeeee777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeee7777777eeeeeeeeeeeeeee
                999999999999999999999999999999999999999999999999eeeeeeeeee9999999999eeeeeeeeeeeeeeeeeeeee77777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7777777eeeeeeeeeeeeeee
                9999999999999999999999999999999999999999999999999eeeeeeeee9999999999eeeeeeeeeeeeeeeeeeeeeeeddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7777777eeeeeeeeeeeeeee
                999999999999999999999999999999999999999777eeeeeeeeeeeeeeeee999999999eeeeeeeeeeeeeeeeeeeeeeeddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7777777eeeeeeeeeeeeeee
                9999999999999999999999999999999999999997779eeeeeeeeeeeeeeeee99999999eeeeeeeeeeeeeeeeeeeeeedddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee777777eeeeeeeeeeeeeee
                9999999999999999999999999999999999999997779999eee777eeeeeeeee9999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddeeeeeeeeeeeeeeeee
                999999999999999999999999999999999999999999999999e777eeeeeeeeee999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddeeeeeeeeeeeeeeeee
                99999999999999999999999999999999999999999999999997779eeeeeeeee999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddeeeeeeeeeeeeeeee
                999999999999999999999999999999999999999999999999999999eeeeeeeeee9999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddeeeeeeeeeeeeeeee
                9999999999999999999999999999999999999999999999999999999eeeeeeeee9999eeeeeeeeeeeeeeeeee777eeeeeeeeeeeeeeeeeeeeeeeee77777eeeeeeeeeeeeeeeeeeeeeddddeeeeeeeeeeeeeeee
                99999999999999999999999999999999999999999999999999999999eeeeeeeee999eeeeeeeeeeeeeeeeee777eeeeeeeeeeeeeeeeeeeeeeeee77777eeeeeeeeeeeeeeeeeeeeeddeeeeeeeeeeeeeeeeee
                99999999999999999999999999999999999999999999999999999999eeeeeeeee999eeeeeeeeeeeeeeeeee777eeeeeeeeeeeeeeeeeeeeeeeee77777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                999999999999999999999999999999999999999999999999999999999eeeeeeeee99eeeeeeeeeeeeeeeeee777eeeeeeeeeeeeeeeeeeeeeeeeee7777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                9999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee777ee
                9999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee777ee
                9999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee777ee
                99999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeee
                999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeee
                999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                9999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                9999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                99999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                99999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                99999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                9999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                9999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                9999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                99999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                99999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                99999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                99999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                999999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                9999999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                999999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                999999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                999999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                999999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                99999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                99999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                99999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                99999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                99999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                99999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                99999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                99999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                9999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                9999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                9999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                99999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                99999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                99999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                `)
            tiles.setTilemap(tilemap`level18`)
        } else if (level == 18) {
            scene.setBackgroundImage(img`
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111199999999999999999999999999999
                9999999999999999999999999991111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111999111111119991111199999999999999999999
                9999999999999999999991111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111999999999999999999
                9999999999999999999111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111199999999999999999
                9999999999999999999111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111119999999999999999
                9999999999999999991111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111119999999999999999
                9999999999999999991111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111999999999999999
                9999999999999999991111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111999999999999999
                9999999999999999991111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111999999999999999
                9999999999999999999111111111111111119999999999999999999999999999999911199999111111199999999999999999999999999999999111111111111111111111111111111999999999999999
                9999999999999999999991111111111119999999999999999999999999999999991111119991111111111999999999999999999999999999999111111111111111111111111111119999999999999999
                9999999999999999999999999999999999999999999999999999999999111111111111111191111111111999999999999999999999999999999911111111111111111111111111199999999999999999
                9999999999999999999999999999999999999999999999999999999911111111111111111111111111111199999999999999999999999999999999999999991111111111111111999999999999999999
                9999999999999999999999999999999999999999999999999999999111111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999111111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999111111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999111111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999111111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999111111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999911111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999977777777777777799999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999997777777777777777777779999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999777777777777777777777777799999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999997777777777777777777777777779999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999977777777777777777777777777777777777799999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999777777777777777777777777777777777777777999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999997777777777777777777777777777777777777777779999999999999999999999999999999999999999999977
                9999999999999999999999999999999999999999999999999999999999997777777777777777777777777777777777777777777777777777779999999999999999999999999999999999999999997777
                9999999999999999999999999999999999999999999999999999999999977777777777777777777777777777777777777777777777777777779999999999999999999999999999999999999999997777
                9999999999999999999999999999999999999999999999999999999999777777777777777777777777777777777777777777777777777777779999999999999999999999999999999999999999997777
                9999999999999999999999999999999999999999999999999999999997777777777777777777777777777777777777777777777777777777777999999999999999999999999999999999999999977777
                9999999999999999999999999999999999999999999999999999999997777777777777777777777777777777777777777777777777777777777999999999999999999999999999999999999999977777
                9999999999999999999999999999999999999999999999999999999977777777777777777777777777777777777777777777777777777777777799999777777779999777777779999999999999777777
                9999999999999999999999999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777799997777777777797777777777799999999997777777
                9999999999999999999999999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777799777777777777797777777777779999999997777777
                9999999999999999999999999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777797777777777777777777777777777977777777777777
                9999999999999999999999999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                9999999999999999999999999999999999999999999999999999997777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                9999999999999999999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                9999999999999999999999999999999999999999999999997777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                9999999999999999999999999999999999999999999999977777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                9999999999999999999999999999999999999999999999977777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                9999999999999999999999999999999999999999999999977777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                9999999999999999999999999999999999999999999999977777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                9999999999999999999999999999999999999999999999977777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                9999999999999999999999999999999999999999999999977777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                9999999999999999999999999999999999999999999999977777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                9999999999999999999999999999999999999999999999977777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                9999999999999999999999999999999999999999999999977777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                9999999999999999999999999999999999999999999999977777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                9999999999999999999999999999999999999999999999977777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                9999999999999999999999999999999999999999999999997777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                9999999999999999999999999999999999999999999999997777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                9999999999999999999999999999999999999999999999997777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                9999999999999999999999999999999999999999999999999777777777777777777777777777777777777777777777777777777779777777777777777777777777ee7777777777777777777777777777
                99999999999999999999999999999999999999999999999999777777777777777777777777777777777777777777777777777777999999977777777777777777eeeeee77777777777777777777777777
                9999999999999999999999999999999999999999999999999997777777777777777777777777eeee777777777777777777777799999999977777777777777eeeeeeeeeeee77777799999999999777777
                999999999999999999999999999999999999999999999999999999777777777777777777777eeeeeee7777777777777777779999999999997777777777777eeeeeeeeeeeeeee99999999999999997777
                999999999999999999999999999999999999999999999999999999997777777777777777777eeeeeeee777777777777779999999999999999997777777999eeeeeeeeeeeee9999999999999999999977
                99999999999999999999997777999999999999999999999999999999997777777777777777eeeeeeeeeeee7777777999999999999999999999999999999999eeeeeeeeeeee99999999999999999999ee
                9999999999999999999997777777799999999999999999999999999999997777777777799eeeeeeeeeeeeeeeee9999999999999999999999999999999999999eeeeeeeeeee99999999999999999999ee
                999999999999999999777777777777999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeee9999999999999999999999999999999999999eeeeeeeeeee9999999999999999999eee
                99999999999999999977777777777799999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999eeeeeeeeeeee999999999999999999eee
                99999999999999999977777777777799999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeee999999999999999999999999999999999999eeeeeeeeeeeee99999999999999999eeee
                999999999999999999777777777777999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeee99999999999999999999999999999999999eeeeeeeeeeeeee9999999999999999eeee
                999999999999999999777777777777999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeee99999999999999999999999999999999999eeeeeeeeeeeeee999999999999999eeeee
                9999999999999999997777eee77777999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeee99999999999999999999999999999999999eeeeeeeeeeeeeee99999999999999eeeee
                999999999999999999999eeeee9999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeee999999999999999999999999999999999eeeeeeeeeeeeeeee9999999999999eeeeee
                999999999999999999999eeeee9999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeee999999999999999999999999999999999eeeeeeeeeeeeeeeee999999999999eeeeee
                999999999999999999999eeeeee999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999eeeeeeeeeeeeeeeeeee9999999999eeeeeee
                99999999999999999999eeeeeeee99999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999eeeeeeeeeeeeeeeeeee999999999eeeeeeee
                99999999997777777777eeeeeeee7777777779999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeee9999977777777777777777799999999eeeeeeeeeeeeeeeeeeee9999999eeeeeeeee
                9977777777777777777eeeeeeeee7777777777777779999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeee99777777777777777777777799999eeeeeeeeeeeeeeeeeeeee977777eeeeeeeeee
                7777777777777777777eeeeeeeee7777777777777777777777777999999999999999eeeeeeeeeeeeeeeeeeeeeeeeee77777777777777777777777777999eeeeeeeeeeeeeeeeeeeeee77777eeeeeeeeee
                7777777777777777777eeeeeeeee7777777777777777777777777777777779999999eeeeeeeeeeeeeeeeeeeeeeeeeee7777777777777777777777777799eeeeeeeeeeeeeeeeeeeeee7777eeeeeeeeeee
                7777777777777777777eeeeeeeee777777777777777777777777777777777779999eeeeeeeeeeeeeeeeeeeeeeeeeeee777777777777777777777777777eeeeeeeeeeeeeeeeeeeeeeee77eeeeeeeeeeee
                77777777777777777777eeeeeeee777777777777777777777777777777777777799eeeeeeeeeeeeeeeeeeeeeeeeeeeee7777777777777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                77777777777777777777777eee7777777777777777777777777777777777777779eeeeeeeeeeeeeeeeeeeeeeeeeeeeee7777777777777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                777777777777777777777777777777777777777777777777777777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee777777777777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                77777777777777777777777777777777777777777777777777777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7777777777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                7777777777777777777777777777777777777777777777777777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7777777777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                777777777777777777777777777777777777777777777777777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee77777777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                777777777777777777777777777777777777777777777777777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee77777777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                777777777777777777777777777777777777777777777777777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7777777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                77777777777777777777777777777777777777777777777777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee777777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                77777777777777777777777777777777777777777777777777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                777777777777777777777777777777777777777777777777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                77777777777777777777777777777777777777777777777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                77777777777777777777777777777777777777777777777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee77777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                77777777777777777777777777777777777777777777777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee77777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                77777777777777777777777777777777777777777777777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee77777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                `)
            tiles.setTilemap(tilemap`level20`)
        } else if (level == 19) {
            scene.setBackgroundImage(img`
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999911111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999911111999111111119991119999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111999999999999999999999999999
                9999999999999999991111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111999999999999999999999
                9999999999999999911111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111119999999999999999999
                9999999999999999111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111119999999999999999999
                9999999999999999111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111999999999999999999
                9999999999999991111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111999999999999999999
                9999999999999991111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111999999999999999999
                9999999999999991111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111999999999999999999
                9999999999999991111111111111111111111111111119999999999999999999999999999999911111119999911199999999999999999999999999999999111111111111111119999999999999999999
                9999999999999999111111111111111111111111111119999999999999999999999999999991111111111999111111999999999999999999999999999999999111111111111999999999999999999999
                9999999999999999911111111111111111111111111199999999999999999999999999999991111111111911111111111111119999999999999999999999999999999999999999999999999999999999
                9999999999999999991111111111111111999999999999999999999999999999999999999911111111111111111111111111111199999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111119999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111119999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111119999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111119999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111119999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111119999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111111199999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111119999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111119999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999997779999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999977777999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999977777999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999977777777999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999777777777777777779999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999977777777777777777777779999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999997777777777777777777777777799999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999977777777777777777777777777779999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999997777797777777777777777777777777777777999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999997777777777777777777777777777777777777799999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999977777777777777777777777777777777777777779999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999977777777777777777777777777777777777777777999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999977777777777777777777777777777777777777777799999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999977777777777777777777777777777777777777777779999999999999999999999999999999999999999999999999999999999999999999999977799997777999999999999999999999
                9999999999997777777777777777777777777777777777777777777777999999999999999999999999977779999999999999999999999999999999999999999777777777777777999999999999999999
                9999999999977777777777777777777777777777777777777777777777999999999999999999999999777777999999999999999999999999999999999999999777777777777777777999999999999999
                9999999999777777777777777777777777777777777777777777777777799999999999999999999999777777999999999999999999999999999999999999999777777777777777777779999999999999
                9999999977777777777777777777777777777777777777777777777777779999999999999999999999777777999999999999999999999999999999999999999977777777777777777777999999999999
                9999999777777777777777777777777777777777777777777777777777777999999999999999999977777777777999999999999999999999999999999999999977777777777777777777779999999999
                9999997777777777777777777777777777777777777777777777777777777799999999999999977777777777777777779999999999999999999999999999999977777777777777777777777799999999
                9999977777777777777777777777777777777777777777777777777777777779999999999999777777777777777777777779997777799999999999999999999777777777777777777777777779999999
                9997777777777777777777777777777777777777777777777777777777777777999999999997777777777777777777777777797777779999999999999999997777777777777777777777777777999999
                9977777777777777777777777777777777777777777777777777777777777777799999999777777777777777777777777777777777779999999999999999997777777777777777777777777777779999
                9777777777777777777777777777777777777777777777777777777777777777777999997777777777777777777777777777777777779999999999999999977777777777777777777777777777777799
                7777777777777777777777777777777777777777777777777777777777777777777799977777777777777777777777777777777777799999999999999997777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777779999777777777777777777777777777777777777777799999999999977777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777997777777777777777777777777777777777777777777779999999999777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777779977777777777777777777777777777777777777777777777999999977777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777799777777777777777777777777777777777777777777777777779999777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777997777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777977777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777977777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777977777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777997777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777799777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777999977777777799999999997777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777799999999977777777779999997777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777779999977777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777799977777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777999777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777799997777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777799777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777779977777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777997777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777799777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777799977777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777779977777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777779977777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777779977777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777779977777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777779977777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777779977777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777799977777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777999977777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777999977777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777779999977777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777779999777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777799997777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777999997777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777799999977777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777799999999777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777779999999999999999999999999999777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777779999999999999999999999999999999999999977777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777799999999999999999999999999999999999999999999997777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777779999999999999999999999999999999999999999999999999997777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777999999999999999999999999999977777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777999999999999999999977777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777999999999999997777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777799999999999777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777779999999997777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777779999999999977777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777799999999997777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777999999999777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777779999999997777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777999999999777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777999999997777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777779999999997777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777799999999777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777799999997777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777799999997777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                `)
            tiles.setTilemap(tilemap`level19`)
        } else if (level == 20) {
            scene.setBackgroundImage(img`
                ccccccccccccccbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbcbbbbbbbbccbbcccccccccccccccbbbbbbbccccccbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccc
                ccccccccccccccbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbcbbbcbbbbbcbbcbbccccccccccccbbbbbbcccccccbbbbccbbbcbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbcccccc
                cccccccccccccbbbbbbbbbbbbbbbbbbccccccccccccccccccccccbbbbbbcbbbbbcbbcbbbcccccccccccbbccccbccccccbbbbbcbbcbbbbbbbbbbbbbbcbbbbbbccccbbbbbbbbbbbbbbbbbbbbcccccccccc
                cccccccccccccbbbbbbbbbcbbbbbcccccccccccccccccccccbbccbbbbbbcbbbbcbbccbbbbccccccccccbbbbbbbccccccbbbbbbcccbbbbbbcbbbbbbbcbbbbbbccccbbbbbbccccbbbbbbbbbbcccccccccc
                cccccccccccccbbbbbbbccbbbbbccccccccccccccccccccccbbbbbbbbbbccbbbcbcbbbbbbccccccccccbbcbbbbcccccbbbbbbbbcccbbbbbbcccbbbbbccbbbcccccbbbbbbbbbbcbbbbccbbccccccccccc
                ccccccccccccbbbbbbcccbbbbbbccccccccccccccccccccccbbbbcbbbbbbcbbbcbbbbbbbbccccccccccbbccbbbcccccbbbbbbccbccbbbbbbbbcbbbbbbcbbbcccccbbbbbbbbbbbccccbbbcccccccccccc
                ccccccccccccbbbbbcbbccbbbbbcccccccccccccccccccccccbbbcccbbbbbbccbbbbbfffbccccccccccbbbcccccccccbbbbccbbbbbcccccbbbbcbbbbbbbbbccccccbbbbcbbbbbbbbbccccccccccccccc
                ccccccccccccbbbccbbbbcbbbbccccccccccccccccccccccccbbbbcccbbbbbcbbbbbfffffccccccccccbbbbbbbbccccbbbcbbbbbbccccccccbbbcbbbbbbcccccccccbbbbcbbbbbbccccccccccccccccc
                ccccccccccccbbcbbbbbbcbbbbcbcccccccccccccccccccccccbbbbbbbbbbbbbbbbffffffcccccccccccbbbbbbbccccbbbbbbbbbbccccccccbbbbcbbbbcccccccccccbbbbcbbbbbccccccccccccccccc
                ccccccccccccccbbbbbbbbcbbccbbcccccccccccccccccccccccbbbbbbbbbbcbbbbffffffcccccccccccbbbbbbbccccbbbbbbbbbcccccccccbbbbcbbbbcccccccccccbbbbbcbbbbccccccccccccccccc
                cccccccccccbbcbbbbbbbbbccbcbbcccccccccfffcccccccccccbbbbbcbbbbbcbbfffffffcccccccccccbbbbbbbbccccbbbbbbcccccffffffbbbbbcbbbcccccccccccbbbbbbccccccccccccccccccccc
                cccccccbcccbbbcbbbbbbcccbbbcbbcccccccffffffcccccccccbbcbbbcbbbbcbbffffffffccccccccccbbbbbbbbccccbbbbbcbccccfffffffbbbbcbbbcccfffffcccccbbccbbccccccccccccccccccc
                ccccccbbcccbbcbcbbbbbbcbbbbcbcccccccfffffffffcccccccbbbbbbcbbbbcbffffffffffcccccccccbbbccccbbcccbbbbcbbbffffffffffcbbbcbbccccfffffcccccbcbbbbccccccccccccccccccc
                cccccbbbbcbbbcbbcbbbbcbbbbbbccccccccfffffffffccccccccbbbbbbcbbbbfffffffffffffcccccccbbbbbbbcccccbbbcbbbbfffffffffffcccbbbccccfffffffccccbbbbbbcccccccccccccccccc
                cccccbbbbbcbcbbbcbbbbcbbbbbbccccccccfffffffffffccccccbbbbbbcbbbffffffffffffffcccccccbbbbbbbbccccbbcbbbbfffffffffffffbcbbcccccfffffffffccbbbbbbbccccccccccccccccc
                cccccbcbbbcbcbbbcbbbcbbcbcccbccccccfffffffffffffcccccbbbcbbcbbffffffffffffffffcccccccbbbbbbbccccbcbbbbffffffffffffffbbcbcccffffffffffffcbbbbbbcccbcccccccccccccc
                ccccbcbbbbcbbbbbcbbbbbccccccbccccccffffffffffffffccccbbbccbbbffffffffffffffffffccccccbbbbbbbccccbbbbbbffffffffffffffffcbcccfffffffffffffcbbbbbbbbccccccccccccccc
                ccccbcbbbbcbbbbbcbbbbbcbccccccccccfffffffffffffffccccbcbbcbbffffffffffffffffffffccccccbbbbbbccccbbbbbfffffffffffffffffcbbfffffffffffffffbbbbbbbbbbcbbbcccccccccc
                cccbbbcbbbbcbbbcbbbbcccbccccccccccfffffffffffffffcccccccbccffffffffffffffffffffffccccccbbbbbcbbbbbbbbfffffffffffffffffbbbffffffffffffffffbbbbbbbbbcbbbbbcccccccc
                cccbbbbcffbcbbcbbbbbcbbbcccccccccffffffffffffffffffcccbcbfffffffffffffffffffffffffcccccbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffbbbbbbcbbcbbbbbbbbbcccc
                cccbbbccfffbbbcbbbbcbbbbcccccccccffffffffffffffffffcccbcbffffffffffffffffffffffffffcccccbbcbbbbbbbbffffffffffffffffffffffffffffffffffffffbbbcbbcbbcbbbbbbbbbbccc
                cccbbbbbffffbbcbbbcbbbbbccccccccffffffffffffffffffffcccbbfffffffffffffffffffffffffffccccbbbccbbbbbbffffffffffffffffffffffffffffffffffffffbbbcbbcbbbcccccbbbbbbcc
                cccbbbfffffffbcbbbcbbbbbccccccccffffffffffffffffffffffcbbfffffffffffffffffffffffffffccccbbbbcbbbbbffffffffffffffffffffffffffffffffffffffffbbbcbcbbbbbbbbbbbbbbbb
                cccbbbffffffffcbbbbbbbbbccccccffffffffffffffffffffffffcbbffffffffffffffffffffffffffffcccbbbbcbbbbfffffffffffffffffffffffffffffffffffffffffbbbcbcbbbbbbbbbbbbbbbb
                cccbbffffffffcbbbbbbbbbbccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffccccbbbcbbbbfffffffffffffffffffffffffffffffffffffffffbbbcbcccccccbbbbbbbcbb
                ccbbbffffffffffbbbbbbccbcccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccbbbcbbbbfffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbcc
                ccbbfffffffffffbbbbcccbbcccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccbbbcbbbfffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbb
                ccbbffffffffffffbbbccbbbcccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccbbbcbbbfffffffffffffffffffffffffffffffffffffffffffcccbbbbbbbbbbbbbccccf
                ccbfffffffffffffbbbbcbbbcccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccbbbcbbffffffffffffffffffffffffffffffffffffffffffffccccbbbbbbbbbbccccccf
                bbbffffffffffffffbbbcbbccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccbbbbbbffffffffffffffffffffffffffffffffffffffffffffcccccbbcccccbbccccccf
                fffffffffffffffffbbbcbcccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbfffffffffffffffffffffffffffffffffffffffffffffccccbbbbbbbcccccccff
                fffffffffffffffffbbbcbccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbcbfffffffffffffffffffffffffffffffffffffffffffffccccbbbbbbbbcbbcccff
                ffffffffffffffffffbbcbccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbcbfffffffffffffffffffffffffffffffffffffffffffffccccbbbbbbbbbbbbbfff
                ffffffffffffffffffbbbcccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbcbfffffffffffffffffffffffffffffffffffffffffffffccccbbbbbbbbbbbbbfff
                fffffffffffffffffffbbcccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbcbffffffffffffffffffffffffffffffffffffffffffffffcccbbbbbbbcbbbbbbfff
                ffffffffffffffffffffbcbcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbcbfffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbcccccbbfff
                ffffffffffffffffffffbcbcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbcbfffffffffffffffffffffffffffffffffffffffffffffffbbbbbbccbbbbbbbbfff
                ffffffffffffffffffffbcbcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbcbfffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbcbbbbbbbffff
                fffffffffffffffffffffbbcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbcbfffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbffff
                ffffffffffffffffffffffbcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbcbbfffffffffffffffffffffffffffffffffffffffffffffffbbbcbbbbbbbbbbfffff
                ffffffffffffffffffffffbbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbcbbfffffffffffffffffffffffffffffffffffffffffffffffbbbccbbbbbbbbbfffff
                fffffffffffffffffffffffccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbcbbfffffffffffffffffffffffffffffffffffffffffffffffbbbbbcccbbbbbffffff
                fffffffffffffffffffffffccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbfffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbcccbffffff
                ffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbcccbffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbcccbffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbcccfffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbcccfffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbcccfffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbcccfffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbcbbbbfffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbcccfffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbcbbbbfffffffffffffffffffffffffffffffffffffffffffffffffbbbbbccccfffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbcbbcccfffffffffffffffffffffffffffffffffffffffffffffffffbbbbccccfffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccbbcccfffffffffffffffffffffffffffffffffffffffffffffffffbbbbcccffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbcccffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbcccfffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbcccfffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbcccfffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbcccfffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbcccffffffffffffffffffffffffffffffffffffffffffffffffffffbbbfffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbcccffffffffffffffffffffffffffffffffffffffffffffffffffffbbbfffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbcccffffffffffffffffffffffffffffffffffffffffffffffffffffbbbfffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbccbbccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbcbbccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbcbbbcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbcbbbcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbcbcbccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbcbcbccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbcbbbbcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbcccbbbbbcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbcccbbbbbcccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbcccccbbbbbcccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbcccccbbcbbccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbccccbbbcbbccccbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbccccbbbcbbccccbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbccccbbbcbbccccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbb
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbccccbbcbbbccccbfffffffffffffffffffffffffffffffffffffffffffffffffffffffbccc
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbcccccbbcbbbccccbffffffffffffffffffffffffffffffffffffffffffffffffffffffbbccc
                cfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbcccccbbcbbbbcccbffffffffffffffffffffffffffffffffffffffffffffffffffffffbbccc
                ccfffffffffffffffffffffffffffffffffffffffffffffffffffffffccffffffffffffffffffffffbbbbcccccbbccbbbccccbfffffffffffffffffffffffffffffffffffffffffffffffffffffbbccc
                cccffffffffffffffffffffffffffffffffffffffffffffffffffffcccbbfffffffffffffffffffffbbbbcccccbbbcbbbccccbfffffffffffffffffffffffffffffffffffffffffffffffffffffbbccc
                cccffffffffffffffffffffffffffffffffffffffffffffffffffffcccccbffffffffffffffffffffbbbbccccbbbbbcbbccccbffffffffffffffffffffffffffffffffffffffffffffffffffffbbbccc
                ccccfffffffffffffffffffffffffffffffffffffffffffffffffffcccccbffffffffffffffffffffbbbbccccbbbbbcbbcccccbfffffffffffffffffffffffffffffffffffffffffffffffffffbbcccc
                cccccfffffffffffffffffffffffffffffffffffffffffffffffffccccccbffffffffffffffffffffbbbbccccbcccbcbbcccccbfffffffffffffffffffffffffffffffffffffffffffffffffffbbcccc
                cccccfffffffffffffffffffffffffffffffffffffffffffffffffcccccbbbfffffffffffffffffffbbbccccbbbcbccbbcccccbfffffffffffffffffffffffffffffffffffffffffffffffffffbbcccc
                ccccccffffffffffffffffffffffffffffffffffffffffffffffffcccccbbbfffffffffffffffffffbbcccccbbbccccbbcccccbbffffffffffffffffffffffffffffffffffffffffffffffffffbbcccc
                ccccccccfffffffffffffffffffffffffffffffffffffffffffffcccccccbbffffffffffffffffffbbbcccccbbbccccbbcccccbbfffffffffffffffffffffffffffffffffffffffffffffffffbbbcccc
                cccccccccffffffffffffffffffffffffffffffffffffffffffffccccccccbbffffffffffffffffbbbbccccbbbbccccbbccccccbfffffffffffffffffffffffffffffffffffffffffffffffffbbbcccc
                ccccccccccfffffffffffffffffffffffffffffffffffffffffffcccccbbccbbfffffffffffffffbbbcccccbbbbcbbbbbccccccbbfffffffffffffffffffffffffffffffffffffffffffffffbbbccccc
                cccccccccccffffffffffffffffffffffffffffffffffffffffffcccccbbbcbbbfffffffffffffbbbbccccbbbbbcbbbbbccccccbbfffffffffffffffffffffffffffffffffffffffffffffffbccccccc
                bbccccccccccfffffffffffffffffffffffffffffffffffffffffcccccbbbcbbbbffffffffffffbbbbccccbbbbbbbbbbbcccccccbffffffffffffffffffffffffffffffffffffffffffffffbbbbccccc
                bbcccccccccccfffffffffffffffffffffffffffffffffffffffccccccbbbbbbbbbbfffffffffbbbbbccccbbbbbbbbbbbccccccccfffffffffffffffffffffffffbbbfffffffffffffffffbbbbbccccc
                bbbcccccccccccffffffffffffffffffffffffffffffffffffffccccccbbbbbccccbbbfffffffbbbbcccccbbbbbbbbbbbccccccccbffffffffffffffffffffffffbbbfffffffffffffffffbbbbbccccc
                cbbccccccccccccffffffffffffffffffffffffffffffffffffcccccccbbbbbbcbcbbbbbfffffbbbbcccccbbcbbbbbbcbccccccccbffffffffffffffffffffffffbbbbfffffffffffffffbbbbbbccccc
                cbbcbcccccccccccffffffffffffffffffffffffffffffffffccccccccbbbbcbcbccbbcbbbffbbbbccccccbbcbbbbbbcbbcccccccbbfffffffffffffffffffffbbbbbbbbffffffffffffbbbbbbbccccc
                bbbcbbccccccccccccfffffffffffffffffffffffffffffffccccccccccbbbbccbbcbbbcbbbbbbbcccccccbbcbbbbcccbbcccccccbbfffffffffffffffffffffbbbbbcccccfffffffffbbbbbbbcccccc
                bbbbccbccccccccccccffffffffffffffffffffffffffffffccccccccccccccbcbbbcbbcbbbbbbbcccccccbbbcbbbbcbcbccccccccbbfffffffffffffffffffbbbbbbccccccffffffffbbbbbbbcccccc
                bbbccccbbccccccccccccfffffffffffffffffffffffffffccccccccccccccbbcbbbcbbbcbbbbbbcccccccbbcbbbbbcbbccccccccccbffffffffffffffffffbbbbbbbcccccccffffffbbbbbbbbcccccc
                bbbbbbbccbcccccccccccccfffffffffffffffffffffffffccccccccccccccccbcbbbcbbbcbbbcccccccccbbcbbbbbcbbbcccccccccbbffffffffffffffffbbbbbcbccccccccccffffbbbbccbccccccc
                bbbbbbbccccccccccccccccccfffffffffffffffffffffffcccccccccccbbbbcbbcbbcbbbbcbbcccccccccbbcbbcbbccbbbcccccccccbbfffffffffffffbbbbbbcbbccccccccccfffbbbbbcbbccccccc
                bbbbbbbbcccccccccccccccccffffffffffffffffffffffccccccccbcccbbbbcbbbbbbcbbbbbbcccccccccccbbbccbbcbbbcccccccccbbbfffffffffffbbbbbbbcbbcccccccccccfbbbbbbcbbccccccc
                bbcccccccbccccccccccccccccccffffffffffffffffffccccccccbbbbbbbbbccbbbbccbbbbbbccccccccccccbbbbccccbbbccccccccbbbfffffffffbbbbbbcccbbbcccccccccccbbbbbbbcbcccccccc
                bbbccccccccccccccccccccccccccfffffffffffffffccccccccccccbbbbbbbbbbbbbcbbbbbbccccccccccccccbbbbbbcbbbccccccccbbbbfffffffbbbbbbbbbbbbbcccccccccccbbbbbbcbbcccccccc
                bbbbbbbbbbccccccccccccccccccccfffffffffffffccccccccccccccbbcccbbbbbbcbbbcbbbccccccccccccccbbbbbbbcbbcccccccccbbbfffffbbbbbbbbbbbbbbbcccccccccccbbbbbcbbbcccccccc
                bbcbbbbbbbbbcccccccccccccccccccfffffffffffcccccccccccccccbbbbccbbbbcbbbbcbbbccccccccccccccbbbbbbbbccccccccccccbbffffbbbbbbbbbbbbbbbbcccccccccccbbbbbcbbbcccccccc
                bbbccccbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccbbbbcbbbbcbbbbcbbbcccccccccbbbbbbbbbbbbbbcccccccccccbbffbbbbbbbbbbbbccbbbbcccccccccccbbbbbbbbbcccccccc
                bbbbbbcccbbbbbbbbcccccccccccccccccccccccccccccccccccccccccbbbbbcbbccbbbbcbbbbcccccccbbbbbbbbbbbcbbbbccccccccccbbccccccbbbbbbbbbbcccbbcccccccccbbbbbbbbbbcccccccc
                bbbbbbbbbcbbbbbbbccccccccccccccccccccccccccccccccccccccccccbbbbcbbcbbbbbccbbbcccccccbbbbbcbbbbbcbbbbbcccccccccbbccccccbbbbcbbbbbbcbbbcccccccccbbbbbbbbbbcccccccc
                bbbbbcccccccbbbbbbccccccccccccccccccccccccccccccccccccccccccccbbbbbccbbbbccbbcccccccbbbbbcbbbbbcbbbbbbccccccccbcccccccbbbbcbbbbbbbbbbcccccccccbbbbbbbccbcccccccc
                bbbcccccccccccccbbbcccccccccccccccccccccccccccccccccbbbbccccccccbbbbccbbbbcbbcccccccbbbbbbcbbbbcbbbbbbccccccccccccccccccccbbbbbbbbbbbcccccccccbbbbbbcbbbcccccccc
                bbbbbbbbbbccccccccccccccccccccccccccccccccccbcccccccbbbbbcccccbbbbbbcbcbbbbccccccccbbbbbbbcbbbbcbbbbbbccccccccccccccccccccbbbbbbbbbbbccccccccccbbbbbcbbbcccccccc
                bbbccbbbbbbbbbbbbccccccccccccccccccccccccccbcbcccccbbbbbbbbbbbbbbbbbcbbbbbbccccccccbbbbbbbcbbbbcbbbcccccccccccccccccccccccbbbbbbbbbbbccccccccccbbbbbcbbbbccccccc
                bbbbbccccccbbbbbbbbbbcbbbbcccccccccccccccccbcbcccccbbcbbbbbbbbbccccbcbbbbbbccccccccbbbbcbbcbbbcccccccbbbcccccccccccccccccbbbbbccbbbbbccccccccccbbbbbbbbbbbcccccc
                bbbbbbbbbbbbbbbcbbbbbbbccbbbbbbbcccccbcbbbbcbbccccbbbbcbbbbccccbbbcbcbbbbbbcccccccbcbbbcbbcbbbccccbbbbbbccccccccccccccccbbbbbbbbcbbbbccccccccccbbbbbbbbbbbcccccc
                bbbbbbbbbbbbbbbbccbbbbbbbcccbbbbbbbbbbcbbbbcbcccccbbbbcbbbccccbbbbbccbbbcbcccccbbbbcbbcbbbcbbcbbbbbbbbbbcccccccccccccccbbbbbbbbbbcbbbbcccccccccbbbbbbbbbbbcccccc
                bbbbbbbbbbbbbbbbbccbbbbbbbbcbbbbbbbbbcbbbbbcbcccccbbbbcbccbbbbbbbbbbcbbbcbcccccbbbccccbbbccbbcbbbbbbbbbbbcccccccccccccbbbbbbbbbbbbbbbbbccccccccbbbbbbbbbbbbccccc
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbccbbbbbbbcbbcbbbbbbbbbbbbcccccccccccccbbbbbbbbbbbbbbbbbccccccccbbbbbbbbbbbbccccc
                `)
            tiles.setTilemap(tilemap`level`)
            isKilled = 0
            keyCount = 5
        } else if (level == 21) {
            tiles.setTilemap(tilemap`level_0`)
        } else if (level == 22) {
            tiles.setTilemap(tilemap`level5`)
        } else if (level == 23) {
            tiles.setTilemap(tilemap`level32`)
        } else if (level == 24) {
            tiles.setTilemap(tilemap`level4`)
        } else if (level == 25) {
            tiles.setTilemap(tilemap`level33`)
        } else if (level == 26) {
            tiles.setTilemap(tilemap`level34`)
            keyCount = 5
        } else if (level == 27) {
            tiles.setTilemap(tilemap`level35`)
            keyCount = 5
        } else if (false) {
        	
        }
        initializeLevel(level)
        Instructions.destroy()
    }
}
function giveIntroductionEN () {
    game.setDialogCursor(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 5 . . . . . . . 
        . . . . . . . 5 . 8 . 6 6 6 . . 
        . . . . . 5 5 5 8 8 6 6 7 . . . 
        . . . 6 6 6 5 8 8 6 6 7 6 6 . . 
        . 7 f 6 9 6 6 8 5 6 7 6 7 . . . 
        . 7 7 7 7 7 6 6 8 6 6 7 6 . . . 
        . . 1 . . . 7 6 8 6 6 6 . . . . 
        . . . . . 7 6 6 8 6 7 . . . . . 
        . . . . 7 6 6 6 6 6 6 . . . . . 
        . . . . 7 6 6 6 6 6 6 6 . . 5 . 
        . . . . 7 6 7 6 6 7 6 7 6 . . 6 
        . . . . 6 7 7 7 7 . 6 . 7 6 . 6 
        . . . . 6 . . . . . 6 . . 7 6 . 
        . 5 6 6 . . . . 5 6 6 . . . . . 
        `)
    game.setDialogFrame(img`
        . a a a a a a a a a a a a a . . 
        a a 1 1 1 1 1 1 1 1 1 1 1 a a . 
        a 1 1 a a a a a a a a a 1 1 a . 
        a 1 a a a a a a a a a a a 1 a . 
        a 1 a a a a a a a a a a a 1 a . 
        a 1 a a a a a a a a a a a 1 a . 
        a 1 a a a a a a a a a a a 1 a . 
        a 1 a a a a a a a a a a a 1 a . 
        a 1 a a a a a a a a a a a 1 a . 
        a 1 a a a a a a a a a a a 1 a . 
        a 1 a a a a a a a a a a a 1 a . 
        a 1 a a a a a a a a a a a 1 a . 
        a 1 1 a a a a a a a a a 1 1 a . 
        a a 1 1 1 1 1 1 1 1 1 1 1 a a . 
        . a a a a a a a a a a a a a . . 
        . . . . . . . . . . . . . . . . 
        `)
    if (currentLevel == 10) {
        game.setDialogFrame(img`
            . a a a a a a a a a a a a a . . 
            a a 1 1 1 1 1 1 1 1 1 1 1 a a . 
            a 1 1 a a a a a a a a a 1 1 a . 
            a 1 a a a a a a a a a a a 1 a . 
            a 1 a a a a a a a a a a a 1 a . 
            a 1 a a a a a a a a a a a 1 a . 
            a 1 a a a a a a a a a a a 1 a . 
            a 1 a a a a a a a a a a a 1 a . 
            a 1 a a a a a a a a a a a 1 a . 
            a 1 a a a a a a a a a a a 1 a . 
            a 1 a a a a a a a a a a a 1 a . 
            a 1 a a a a a a a a a a a 1 a . 
            a 1 1 a a a a a a a a a 1 1 a . 
            a a 1 1 1 1 1 1 1 1 1 1 1 a a . 
            . a a a a a a a a a a a a a . . 
            . . . . . . . . . . . . . . . . 
            `)
        game.setDialogCursor(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 5 . . . . . . . 
            . . . . . . . 5 . 8 . 6 6 6 . . 
            . . . . . 5 5 5 8 8 6 6 7 . . . 
            . . . 6 6 6 5 8 8 6 6 7 6 6 . . 
            . 7 f 6 9 6 6 8 5 6 7 6 7 . . . 
            . 7 7 7 7 7 6 6 8 6 6 7 6 . . . 
            . . 1 . . . 7 6 8 6 6 6 . . . . 
            . . . . . 7 6 6 8 6 7 . . . . . 
            . . . . 7 6 6 6 6 6 6 . . . . . 
            . . . . 7 6 6 6 6 6 6 6 . . 5 . 
            . . . . 7 6 7 6 6 7 6 7 6 . . 6 
            . . . . 6 7 7 7 7 . 6 . 7 6 . 6 
            . . . . 6 . . . . . 6 . . 7 6 . 
            . 5 6 6 . . . . 5 6 6 . . . . . 
            `)
        showInstruction("Use ARROWS to move and A to jump. Jump in the air to DOUBLE JUMP!")
        game.setDialogCursor(img`
            . . . . . . . 2 . . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . 2 . 2 4 4 2 . . . . . . 
            . 2 . . 2 2 4 5 4 4 2 . . . 2 . 
            . 2 2 . . 2 4 5 5 5 4 2 . 2 2 . 
            . 2 5 2 2 4 f 5 5 5 f 4 2 4 2 . 
            . . 2 4 4 5 4 f 4 f 4 4 4 5 2 . 
            . . 2 5 4 4 4 4 4 4 4 4 5 5 2 . 
            2 . 2 5 5 4 f 4 5 4 f 4 5 4 2 . 
            2 2 4 4 4 4 5 5 5 5 4 4 4 2 . 2 
            2 5 4 5 4 5 5 5 f 5 5 4 4 4 2 2 
            . 2 4 2 4 2 4 f 5 f 4 4 2 4 5 2 
            . 2 8 5 2 4 4 4 4 2 4 2 5 8 2 2 
            . 9 9 2 8 2 4 2 2 4 2 8 2 9 9 . 
            . . 5 9 5 8 2 2 2 2 8 5 9 5 . . 
            . . . 5 5 9 8 5 8 5 9 9 5 . . . 
            `)
        showInstruction("Don't get your face burnt or you'll lose your lifes.")
        game.setDialogFrame(img`
            . 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
            4 4 1 1 1 1 1 1 1 1 1 1 1 4 4 . 
            4 1 1 4 4 4 4 4 4 4 4 4 1 1 4 . 
            4 1 4 4 4 4 4 4 4 4 4 4 4 1 4 . 
            4 1 4 4 4 4 4 4 4 4 4 4 4 1 4 . 
            4 1 4 4 4 4 4 4 4 4 4 4 4 1 4 . 
            4 1 4 4 4 4 4 4 4 4 4 4 4 1 4 . 
            4 1 4 4 4 4 4 4 4 4 4 4 4 1 4 . 
            4 1 4 4 4 4 4 4 4 4 4 4 4 1 4 . 
            4 1 4 4 4 4 4 4 4 4 4 4 4 1 4 . 
            4 1 4 4 4 4 4 4 4 4 4 4 4 1 4 . 
            4 1 4 4 4 4 4 4 4 4 4 4 4 1 4 . 
            4 1 1 4 4 4 4 4 4 4 4 4 1 1 4 . 
            4 4 1 1 1 1 1 1 1 1 1 1 1 4 4 . 
            . 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
            . . . . . . . . . . . . . . . . 
            `)
        game.setDialogCursor(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f f f . . . . f f f f . . 
            . f 2 2 2 2 f . . f 2 2 2 2 f . 
            f 2 2 2 2 2 2 f f 2 2 2 2 2 2 f 
            f 2 2 2 2 2 2 2 2 2 2 2 4 2 2 f 
            f 2 2 2 2 2 2 2 2 2 2 4 2 2 2 f 
            f c 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
            . f c 2 2 2 2 2 2 2 2 2 2 2 f . 
            . . f c 2 2 2 2 2 2 2 2 2 f . . 
            . . . f c 2 2 2 2 2 2 2 f . . . 
            . . . . f c 2 2 2 2 2 f . . . . 
            . . . . . f c 2 2 2 f . . . . . 
            . . . . . . f c c f . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        showInstruction("Play with friends, gain as much points as possible, beat your friends and become the best GOOFY DRAGON in the entire universe! Good luck!")
        game.setDialogCursor(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 5 . . . . . . . 
            . . . . . . . 5 . 8 . 6 6 6 . . 
            . . . . . 5 5 5 8 8 6 6 7 . . . 
            . . . 6 6 6 5 8 8 6 6 7 6 6 . . 
            . 7 f 6 9 6 6 8 5 6 7 6 7 . . . 
            . 7 7 7 7 7 6 6 8 6 6 7 6 . . . 
            . . 1 . . . 7 6 8 6 6 6 . . . . 
            . . . . . 7 6 6 8 6 7 . . . . . 
            . . . . 7 6 6 6 6 6 6 . . . . . 
            . . . . 7 6 6 6 6 6 6 6 . . 5 . 
            . . . . 7 6 7 6 6 7 6 7 6 . . 6 
            . . . . 6 7 7 7 7 . 6 . 7 6 . 6 
            . . . . 6 . . . . . 6 . . 7 6 . 
            . 5 6 6 . . . . 5 6 6 . . . . . 
            `)
    }
    if (currentLevel == 11) {
        game.setDialogFrame(img`
            . a a a a a a a a a a a a a . . 
            a a 1 1 1 1 1 1 1 1 1 1 1 a a . 
            a 1 1 a a a a a a a a a 1 1 a . 
            a 1 a a a a a a a a a a a 1 a . 
            a 1 a a a a a a a a a a a 1 a . 
            a 1 a a a a a a a a a a a 1 a . 
            a 1 a a a a a a a a a a a 1 a . 
            a 1 a a a a a a a a a a a 1 a . 
            a 1 a a a a a a a a a a a 1 a . 
            a 1 a a a a a a a a a a a 1 a . 
            a 1 a a a a a a a a a a a 1 a . 
            a 1 a a a a a a a a a a a 1 a . 
            a 1 1 a a a a a a a a a 1 1 a . 
            a a 1 1 1 1 1 1 1 1 1 1 1 a a . 
            . a a a a a a a a a a a a a . . 
            . . . . . . . . . . . . . . . . 
            `)
        game.setDialogCursor(img`
            . . . . . . . 2 . . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . 2 . 2 4 4 2 . . . . . . 
            . 2 . . 2 2 4 5 4 4 2 . . . 2 . 
            . 2 2 . . 2 4 5 5 5 4 2 . 2 2 . 
            . 2 5 2 2 4 f 5 5 5 f 4 2 4 2 . 
            . . 2 4 4 5 4 f 4 f 4 4 4 5 2 . 
            . . 2 5 4 4 4 4 4 4 4 4 5 5 2 . 
            2 . 2 5 5 4 f 4 5 4 f 4 5 4 2 . 
            2 2 4 4 4 4 5 5 5 5 4 4 4 2 . 2 
            2 5 4 5 4 5 5 5 f 5 5 4 4 4 2 2 
            . 2 4 2 4 2 4 f 5 f 4 4 2 4 5 2 
            . 2 8 5 2 4 4 4 4 2 4 2 5 8 2 2 
            . 9 9 2 8 2 4 2 2 4 2 8 2 9 9 . 
            . . 5 9 5 8 2 2 2 2 8 5 9 5 . . 
            . . . 5 5 9 8 5 8 5 9 9 5 . . . 
            `)
        showInstruction("You can destroy your enemies by jumping on their heads.")
        game.setDialogCursor(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 5 . . . . . . . 
            . . . . . . . 5 . 8 . 6 6 6 . . 
            . . . . . 5 5 5 8 8 6 6 7 . . . 
            . . . 6 6 6 5 8 8 6 6 7 6 6 . . 
            . 7 f 6 9 6 6 8 5 6 7 6 7 . . . 
            . 7 7 7 7 7 6 6 8 6 6 7 6 . . . 
            . . 1 . . . 7 6 8 6 6 6 . . . . 
            . . . . . 7 6 6 8 6 7 . . . . . 
            . . . . 7 6 6 6 6 6 6 . . . . . 
            . . . . 7 6 6 6 6 6 6 6 . . 5 . 
            . . . . 7 6 7 6 6 7 6 7 6 . . 6 
            . . . . 6 7 7 7 7 . 6 . 7 6 . 6 
            . . . . 6 . . . . . 6 . . 7 6 . 
            . 5 6 6 . . . . 5 6 6 . . . . . 
            `)
    }
    if (currentLevel == 22) {
        game.setDialogFrame(img`
            . a a a a a a a a a a a a a . . 
            a a 1 1 1 1 1 1 1 1 1 1 1 a a . 
            a 1 1 a a a a a a a a a 1 1 a . 
            a 1 a a a a a a a a a a a 1 a . 
            a 1 a a a a a a a a a a a 1 a . 
            a 1 a a a a a a a a a a a 1 a . 
            a 1 a a a a a a a a a a a 1 a . 
            a 1 a a a a a a a a a a a 1 a . 
            a 1 a a a a a a a a a a a 1 a . 
            a 1 a a a a a a a a a a a 1 a . 
            a 1 a a a a a a a a a a a 1 a . 
            a 1 a a a a a a a a a a a 1 a . 
            a 1 1 a a a a a a a a a 1 1 a . 
            a a 1 1 1 1 1 1 1 1 1 1 1 a a . 
            . a a a a a a a a a a a a a . . 
            . . . . . . . . . . . . . . . . 
            `)
        game.setDialogCursor(img`
            b c c c c c c b d c c c b b b b c c c d b c c c c c c b 
            c c f f f f f c b d c c c b b c c c d b c f f f f f c c 
            c f f f f 2 f f c b c c c b b c c c b c f f 2 f f f f c 
            b f f f 2 1 2 f f d b c c d d c c b d f f 2 1 2 f f f b 
            b d f f f 2 f f f d b b c b b c b b d f f f 2 f f f d b 
            c c b d f f f b b b d c c c c c c d b b b f f f d b c c 
            b c c c d d d c c c c c c b b c c c c c c d d d c c c b 
            `)
        showInstruction("Beware, the cave statue is more harmful, than the fire of it's anger you've already met. You need to kill this monster and escape in 10s to enter the next level.")
        game.setDialogCursor(img`
            . . . . . f f f f f f . . . . . 
            . . . . f 4 5 5 5 5 4 f . . . . 
            . . . f 4 5 5 4 4 5 5 4 f . . . 
            . . . f 5 5 4 f f 4 5 5 f . . . 
            . . . f 5 5 f . . f 5 5 f . . . 
            . . . f 5 5 4 f f 4 5 5 f . . . 
            . . . f 4 5 5 4 4 5 5 4 f . . . 
            . . . . f 4 5 5 5 5 4 f . . . . 
            . . . . . f f 5 5 f f . . . . . 
            . . . . . . f 5 5 f . . . . . . 
            . . . . . . f 5 5 f . . . . . . 
            . . . . . f f 5 5 f . . . . . . 
            . . . . f 5 5 4 5 f . . . . . . 
            . . . . . f 4 4 5 f . . . . . . 
            . . . . f 5 5 4 5 f . . . . . . 
            . . . . . f f f f . . . . . . . 
            `)
        showInstruction("You need to collect at least 5 keys in this level to escape.")
        game.setDialogCursor(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 5 . . . . . . . 
            . . . . . . . 5 . 8 . 6 6 6 . . 
            . . . . . 5 5 5 8 8 6 6 7 . . . 
            . . . 6 6 6 5 8 8 6 6 7 6 6 . . 
            . 7 f 6 9 6 6 8 5 6 7 6 7 . . . 
            . 7 7 7 7 7 6 6 8 6 6 7 6 . . . 
            . . 1 . . . 7 6 8 6 6 6 . . . . 
            . . . . . 7 6 6 8 6 7 . . . . . 
            . . . . 7 6 6 6 6 6 6 . . . . . 
            . . . . 7 6 6 6 6 6 6 6 . . 5 . 
            . . . . 7 6 7 6 6 7 6 7 6 . . 6 
            . . . . 6 7 7 7 7 . 6 . 7 6 . 6 
            . . . . 6 . . . . . 6 . . 7 6 . 
            . 5 6 6 . . . . 5 6 6 . . . . . 
            `)
    }
    if (currentLevel == 26 || currentLevel == 17) {
        game.setDialogCursor(img`
            . . . . . f f f f f f . . . . . 
            . . . . f 4 5 5 5 5 4 f . . . . 
            . . . f 4 5 5 4 4 5 5 4 f . . . 
            . . . f 5 5 4 f f 4 5 5 f . . . 
            . . . f 5 5 f . . f 5 5 f . . . 
            . . . f 5 5 4 f f 4 5 5 f . . . 
            . . . f 4 5 5 4 4 5 5 4 f . . . 
            . . . . f 4 5 5 5 5 4 f . . . . 
            . . . . . f f 5 5 f f . . . . . 
            . . . . . . f 5 5 f . . . . . . 
            . . . . . . f 5 5 f . . . . . . 
            . . . . . f f 5 5 f . . . . . . 
            . . . . f 5 5 4 5 f . . . . . . 
            . . . . . f 4 4 5 f . . . . . . 
            . . . . f 5 5 4 5 f . . . . . . 
            . . . . . f f f f . . . . . . . 
            `)
        showInstruction("You need to collect at least 5 keys in this level to escape.")
        game.setDialogCursor(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 5 . . . . . . . 
            . . . . . . . 5 . 8 . 6 6 6 . . 
            . . . . . 5 5 5 8 8 6 6 7 . . . 
            . . . 6 6 6 5 8 8 6 6 7 6 6 . . 
            . 7 f 6 9 6 6 8 5 6 7 6 7 . . . 
            . 7 7 7 7 7 6 6 8 6 6 7 6 . . . 
            . . 1 . . . 7 6 8 6 6 6 . . . . 
            . . . . . 7 6 6 8 6 7 . . . . . 
            . . . . 7 6 6 6 6 6 6 . . . . . 
            . . . . 7 6 6 6 6 6 6 6 . . 5 . 
            . . . . 7 6 7 6 6 7 6 7 6 . . 6 
            . . . . 6 7 7 7 7 . 6 . 7 6 . 6 
            . . . . 6 . . . . . 6 . . 7 6 . 
            . 5 6 6 . . . . 5 6 6 . . . . . 
            `)
    }
    game.setDialogFrame(img`
        . a a a a a a a a a a a a a . . 
        a a 1 1 1 1 1 1 1 1 1 1 1 a a . 
        a 1 1 a a a a a a a a a 1 1 a . 
        a 1 a a a a a a a a a a a 1 a . 
        a 1 a a a a a a a a a a a 1 a . 
        a 1 a a a a a a a a a a a 1 a . 
        a 1 a a a a a a a a a a a 1 a . 
        a 1 a a a a a a a a a a a 1 a . 
        a 1 a a a a a a a a a a a 1 a . 
        a 1 a a a a a a a a a a a 1 a . 
        a 1 a a a a a a a a a a a 1 a . 
        a 1 a a a a a a a a a a a 1 a . 
        a 1 1 a a a a a a a a a 1 1 a . 
        a a 1 1 1 1 1 1 1 1 1 1 1 a a . 
        . a a a a a a a a a a a a a . . 
        . . . . . . . . . . . . . . . . 
        `)
    game.setDialogCursor(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 5 . . . . . . . 
        . . . . . . . 5 . 8 . 6 6 6 . . 
        . . . . . 5 5 5 8 8 6 6 7 . . . 
        . . . 6 6 6 5 8 8 6 6 7 6 6 . . 
        . 7 f 6 9 6 6 8 5 6 7 6 7 . . . 
        . 7 7 7 7 7 6 6 8 6 6 7 6 . . . 
        . . 1 . . . 7 6 8 6 6 6 . . . . 
        . . . . . 7 6 6 8 6 7 . . . . . 
        . . . . 7 6 6 6 6 6 6 . . . . . 
        . . . . 7 6 6 6 6 6 6 6 . . 5 . 
        . . . . 7 6 7 6 6 7 6 7 6 . . 6 
        . . . . 6 7 7 7 7 . 6 . 7 6 . 6 
        . . . . 6 . . . . . 6 . . 7 6 . 
        . 5 6 6 . . . . 5 6 6 . . . . . 
        `)
}
function buttonsPositionMenu () {
    Play.setPosition(80, 50)
    HighScore.setPosition(80, 65)
    Options.setPosition(80, 80)
    Credits.setPosition(80, 95)
    Instructions.setPosition(80, 110)
    Back.setPosition(80, 110)
}
function buttonDifficultyEffect () {
    if (currentDifficulty == 0) {
        animation.runImageAnimation(
        Easy,
        [img`
            f f f f f f f f f f f f f f f f f f f f f f f f f f f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f 5 f f f f f 5 5 f f f 5 5 5 f f f 5 5 f 5 5 5 f 5 f 
            f 5 f 5 5 5 5 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 
            f 5 f 5 5 5 5 5 f 5 5 5 f 5 f 5 5 5 5 5 5 f 5 f 5 5 f 
            f 5 f f f 5 5 5 f 5 5 5 f 5 5 f f f 5 5 5 5 f 5 5 5 f 
            f 5 f 5 5 5 5 5 f f f f f 5 5 5 5 5 f 5 5 5 f 5 5 5 f 
            f 5 f 5 5 5 5 5 f 5 5 5 f 5 f 5 5 5 f 5 5 5 f 5 5 5 f 
            f 5 f f f f f 5 f 5 5 5 f 5 5 f f f 5 5 5 5 f 5 5 5 f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f f f f f f f f f f f f f f f f f f f f f f f f f f f 
            `,img`
            f f f f f f f f f f f f f f f f f f f f f f f f f f f 
            f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 
            f 5 f f f f f 5 5 f f f 5 5 5 f f f 5 5 f 5 5 5 f 5 f 
            f 5 f 5 5 5 5 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 
            f 5 f 5 5 5 5 5 f 5 5 5 f 5 f 5 5 5 5 5 5 f 5 f 5 5 f 
            f 5 f f f 5 5 5 f 5 5 5 f 5 5 f f f 5 5 5 5 f 5 5 5 f 
            f 5 f 5 5 5 5 5 f f f f f 5 5 5 5 5 f 5 5 5 f 5 5 5 f 
            f 5 f 5 5 5 5 5 f 5 5 5 f 5 f 5 5 5 f 5 5 5 f 5 5 5 f 
            f 5 f f f f f 5 f 5 5 5 f 5 5 f f f 5 5 5 5 f 5 5 5 f 
            f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 
            f f f f f f f f f f f f f f f f f f f f f f f f f f f 
            `,img`
            f f f f f f f f f f f f f f f f f f f f f f f f f f f 
            f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 
            f 9 f f f f f 9 9 f f f 9 9 9 f f f 9 9 f 9 9 9 f 9 f 
            f 5 f 5 5 5 5 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 
            f 5 f 5 5 5 5 5 f 5 5 5 f 5 f 5 5 5 5 5 5 f 5 f 5 5 f 
            f 5 f f f 5 5 5 f 5 5 5 f 5 5 f f f 5 5 5 5 f 5 5 5 f 
            f 5 f 5 5 5 5 5 f f f f f 5 5 5 5 5 f 5 5 5 f 5 5 5 f 
            f 5 f 5 5 5 5 5 f 5 5 5 f 5 f 5 5 5 f 5 5 5 f 5 5 5 f 
            f 9 f f f f f 9 f 9 9 9 f 9 9 f f f 9 9 9 9 f 9 9 9 f 
            f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 
            f f f f f f f f f f f f f f f f f f f f f f f f f f f 
            `,img`
            f f f f f f f f f f f f f f f f f f f f f f f f f f f 
            f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 
            f 9 f f f f f 9 9 f f f 9 9 9 f f f 9 9 f 9 9 9 f 9 f 
            f 9 f 9 9 9 9 9 f 9 9 9 f 9 f 9 9 9 f 9 f 9 9 9 f 9 f 
            f 5 f 5 5 5 5 5 f 5 5 5 f 5 f 5 5 5 5 5 5 f 5 f 5 5 f 
            f 5 f f f 5 5 5 f 5 5 5 f 5 5 f f f 5 5 5 5 f 5 5 5 f 
            f 5 f 5 5 5 5 5 f f f f f 5 5 5 5 5 f 5 5 5 f 5 5 5 f 
            f 9 f 9 9 9 9 9 f 9 9 9 f 9 f 9 9 9 f 9 9 9 f 9 9 9 f 
            f 9 f f f f f 9 f 9 9 9 f 9 9 f f f 9 9 9 9 f 9 9 9 f 
            f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 
            f f f f f f f f f f f f f f f f f f f f f f f f f f f 
            `,img`
            f f f f f f f f f f f f f f f f f f f f f f f f f f f 
            f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 
            f 9 f f f f f 9 9 f f f 9 9 9 f f f 9 9 f 9 9 9 f 9 f 
            f 9 f 9 9 9 9 9 f 9 9 9 f 9 f 9 9 9 f 9 f 9 9 9 f 9 f 
            f 9 f 9 9 9 9 9 f 9 9 9 f 9 f 9 9 9 9 9 9 f 9 f 9 9 f 
            f 5 f f f 5 5 5 f 5 5 5 f 5 5 f f f 5 5 5 5 f 5 5 5 f 
            f 9 f 9 9 9 9 9 f f f f f 9 9 9 9 9 f 9 9 9 f 9 9 9 f 
            f 9 f 9 9 9 9 9 f 9 9 9 f 9 f 9 9 9 f 9 9 9 f 9 9 9 f 
            f 9 f f f f f 9 f 9 9 9 f 9 9 f f f 9 9 9 9 f 9 9 9 f 
            f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 
            f f f f f f f f f f f f f f f f f f f f f f f f f f f 
            `,img`
            f f f f f f f f f f f f f f f f f f f f f f f f f f f 
            f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 
            f 9 f f f f f 9 9 f f f 9 9 9 f f f 9 9 f 9 9 9 f 9 f 
            f 9 f 9 9 9 9 9 f 9 9 9 f 9 f 9 9 9 f 9 f 9 9 9 f 9 f 
            f 9 f 9 9 9 9 9 f 9 9 9 f 9 f 9 9 9 9 9 9 f 9 f 9 9 f 
            f 9 f f f 9 9 9 f 9 9 9 f 9 9 f f f 9 9 9 9 f 9 9 9 f 
            f 9 f 9 9 9 9 9 f f f f f 9 9 9 9 9 f 9 9 9 f 9 9 9 f 
            f 9 f 9 9 9 9 9 f 9 9 9 f 9 f 9 9 9 f 9 9 9 f 9 9 9 f 
            f 9 f f f f f 9 f 9 9 9 f 9 9 f f f 9 9 9 9 f 9 9 9 f 
            f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 
            f f f f f f f f f f f f f f f f f f f f f f f f f f f 
            `,img`
            f f f f f f f f f f f f f f f f f f f f f f f f f f f 
            f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 
            f 9 f f f f f 9 9 f f f 9 9 9 f f f 9 9 f 9 9 9 f 9 f 
            f 9 f 9 9 9 9 9 f 9 9 9 f 9 f 9 9 9 f 9 f 9 9 9 f 9 f 
            f 9 f 9 9 9 9 9 f 9 9 9 f 9 f 9 9 9 9 9 9 f 9 f 9 9 f 
            f 5 f f f 5 5 5 f 5 5 5 f 5 5 f f f 5 5 5 5 f 5 5 5 f 
            f 9 f 9 9 9 9 9 f f f f f 9 9 9 9 9 f 9 9 9 f 9 9 9 f 
            f 9 f 9 9 9 9 9 f 9 9 9 f 9 f 9 9 9 f 9 9 9 f 9 9 9 f 
            f 9 f f f f f 9 f 9 9 9 f 9 9 f f f 9 9 9 9 f 9 9 9 f 
            f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 
            f f f f f f f f f f f f f f f f f f f f f f f f f f f 
            `,img`
            f f f f f f f f f f f f f f f f f f f f f f f f f f f 
            f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 
            f 9 f f f f f 9 9 f f f 9 9 9 f f f 9 9 f 9 9 9 f 9 f 
            f 9 f 9 9 9 9 9 f 9 9 9 f 9 f 9 9 9 f 9 f 9 9 9 f 9 f 
            f 5 f 5 5 5 5 5 f 5 5 5 f 5 f 5 5 5 5 5 5 f 5 f 5 5 f 
            f 5 f f f 5 5 5 f 5 5 5 f 5 5 f f f 5 5 5 5 f 5 5 5 f 
            f 5 f 5 5 5 5 5 f f f f f 5 5 5 5 5 f 5 5 5 f 5 5 5 f 
            f 9 f 9 9 9 9 9 f 9 9 9 f 9 f 9 9 9 f 9 9 9 f 9 9 9 f 
            f 9 f f f f f 9 f 9 9 9 f 9 9 f f f 9 9 9 9 f 9 9 9 f 
            f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 
            f f f f f f f f f f f f f f f f f f f f f f f f f f f 
            `,img`
            f f f f f f f f f f f f f f f f f f f f f f f f f f f 
            f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 
            f 9 f f f f f 9 9 f f f 9 9 9 f f f 9 9 f 9 9 9 f 9 f 
            f 5 f 5 5 5 5 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 
            f 5 f 5 5 5 5 5 f 5 5 5 f 5 f 5 5 5 5 5 5 f 5 f 5 5 f 
            f 5 f f f 5 5 5 f 5 5 5 f 5 5 f f f 5 5 5 5 f 5 5 5 f 
            f 5 f 5 5 5 5 5 f f f f f 5 5 5 5 5 f 5 5 5 f 5 5 5 f 
            f 5 f 5 5 5 5 5 f 5 5 5 f 5 f 5 5 5 f 5 5 5 f 5 5 5 f 
            f 9 f f f f f 9 f 9 9 9 f 9 9 f f f 9 9 9 9 f 9 9 9 f 
            f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 
            f f f f f f f f f f f f f f f f f f f f f f f f f f f 
            `,img`
            f f f f f f f f f f f f f f f f f f f f f f f f f f f 
            f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 
            f 5 f f f f f 5 5 f f f 5 5 5 f f f 5 5 f 5 5 5 f 5 f 
            f 5 f 5 5 5 5 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 
            f 5 f 5 5 5 5 5 f 5 5 5 f 5 f 5 5 5 5 5 5 f 5 f 5 5 f 
            f 5 f f f 5 5 5 f 5 5 5 f 5 5 f f f 5 5 5 5 f 5 5 5 f 
            f 5 f 5 5 5 5 5 f f f f f 5 5 5 5 5 f 5 5 5 f 5 5 5 f 
            f 5 f 5 5 5 5 5 f 5 5 5 f 5 f 5 5 5 f 5 5 5 f 5 5 5 f 
            f 5 f f f f f 5 f 5 5 5 f 5 5 f f f 5 5 5 5 f 5 5 5 f 
            f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 
            f f f f f f f f f f f f f f f f f f f f f f f f f f f 
            `,img`
            f f f f f f f f f f f f f f f f f f f f f f f f f f f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f 5 f f f f f 5 5 f f f 5 5 5 f f f 5 5 f 5 5 5 f 5 f 
            f 5 f 5 5 5 5 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 
            f 5 f 5 5 5 5 5 f 5 5 5 f 5 f 5 5 5 5 5 5 f 5 f 5 5 f 
            f 5 f f f 5 5 5 f 5 5 5 f 5 5 f f f 5 5 5 5 f 5 5 5 f 
            f 5 f 5 5 5 5 5 f f f f f 5 5 5 5 5 f 5 5 5 f 5 5 5 f 
            f 5 f 5 5 5 5 5 f 5 5 5 f 5 f 5 5 5 f 5 5 5 f 5 5 5 f 
            f 5 f f f f f 5 f 5 5 5 f 5 5 f f f 5 5 5 5 f 5 5 5 f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f f f f f f f f f f f f f f f f f f f f f f f f f f f 
            `],
        100,
        false
        )
    } else if (currentDifficulty == 1) {
        animation.runImageAnimation(
        Medium,
        [img`
            fffffffffffffffffffffffffffffffffffffff
            f5555555555555555555555555555555555555f
            f5f555f5fffff5ffff55fffff5f555f5f555f5f
            f5ff5ff5f55555f555f555f555f555f5ff5ff5f
            f5f5f5f5f55555f555f555f555f555f5f5f5f5f
            f5f555f5fff555f555f555f555f555f5f555f5f
            f5f555f5f55555f555f555f555f555f5f555f5f
            f5f555f5f55555f555f555f555f555f5f555f5f
            f5f555f5fffff5ffff55fffff55fff55f555f5f
            f5555555555555555555555555555555555555f
            fffffffffffffffffffffffffffffffffffffff
            `,img`
            fffffffffffffffffffffffffffffffffffffff
            f4444444444444444444444444444444444444f
            f5f555f5fffff5ffff55fffff5f555f5f555f5f
            f5ff5ff5f55555f555f555f555f555f5ff5ff5f
            f5f5f5f5f55555f555f555f555f555f5f5f5f5f
            f5f555f5fff555f555f555f555f555f5f555f5f
            f5f555f5f55555f555f555f555f555f5f555f5f
            f5f555f5f55555f555f555f555f555f5f555f5f
            f5f555f5fffff5ffff55fffff55fff55f555f5f
            f4444444444444444444444444444444444444f
            fffffffffffffffffffffffffffffffffffffff
            `,img`
            fffffffffffffffffffffffffffffffffffffff
            f4444444444444444444444444444444444444f
            f4f444f4fffff4ffff44fffff4f444f4f444f4f
            f5ff5ff5f55555f555f555f555f555f5ff5ff5f
            f5f5f5f5f55555f555f555f555f555f5f5f5f5f
            f5f555f5fff555f555f555f555f555f5f555f5f
            f5f555f5f55555f555f555f555f555f5f555f5f
            f5f555f5f55555f555f555f555f555f5f555f5f
            f4f444f4fffff4ffff44fffff44fff44f444f4f
            f4444444444444444444444444444444444444f
            fffffffffffffffffffffffffffffffffffffff
            `,img`
            fffffffffffffffffffffffffffffffffffffff
            f4444444444444444444444444444444444444f
            f4f444f4fffff4ffff44fffff4f444f4f444f4f
            f4ff4ff4f44444f444f444f444f444f4ff4ff4f
            f5f5f5f5f55555f555f555f555f555f5f5f5f5f
            f5f555f5fff555f555f555f555f555f5f555f5f
            f5f555f5f55555f555f555f555f555f5f555f5f
            f4f444f4f44444f444f444f444f444f4f444f4f
            f4f444f4fffff4ffff44fffff44fff44f444f4f
            f4444444444444444444444444444444444444f
            fffffffffffffffffffffffffffffffffffffff
            `,img`
            fffffffffffffffffffffffffffffffffffffff
            f4444444444444444444444444444444444444f
            f4f444f4fffff4ffff44fffff4f444f4f444f4f
            f4ff4ff4f44444f444f444f444f444f4ff4ff4f
            f4f4f4f4f44444f444f444f444f444f4f4f4f4f
            f5f555f5fff555f555f555f555f555f5f555f5f
            f4f444f4f44444f444f444f444f444f4f444f4f
            f4f444f4f44444f444f444f444f444f4f444f4f
            f4f444f4fffff4ffff44fffff44fff44f444f4f
            f4444444444444444444444444444444444444f
            fffffffffffffffffffffffffffffffffffffff
            `,img`
            fffffffffffffffffffffffffffffffffffffff
            f4444444444444444444444444444444444444f
            f4f444f4fffff4ffff44fffff4f444f4f444f4f
            f4ff4ff4f44444f444f444f444f444f4ff4ff4f
            f4f4f4f4f44444f444f444f444f444f4f4f4f4f
            f4f444f4fff444f444f444f444f444f4f444f4f
            f4f444f4f44444f444f444f444f444f4f444f4f
            f4f444f4f44444f444f444f444f444f4f444f4f
            f4f444f4fffff4ffff44fffff44fff44f444f4f
            f4444444444444444444444444444444444444f
            fffffffffffffffffffffffffffffffffffffff
            `,img`
            fffffffffffffffffffffffffffffffffffffff
            f4444444444444444444444444444444444444f
            f4f444f4fffff4ffff44fffff4f444f4f444f4f
            f4ff4ff4f44444f444f444f444f444f4ff4ff4f
            f4f4f4f4f44444f444f444f444f444f4f4f4f4f
            f5f555f5fff555f555f555f555f555f5f555f5f
            f4f444f4f44444f444f444f444f444f4f444f4f
            f4f444f4f44444f444f444f444f444f4f444f4f
            f4f444f4fffff4ffff44fffff44fff44f444f4f
            f4444444444444444444444444444444444444f
            fffffffffffffffffffffffffffffffffffffff
            `,img`
            fffffffffffffffffffffffffffffffffffffff
            f4444444444444444444444444444444444444f
            f4f444f4fffff4ffff44fffff4f444f4f444f4f
            f4ff4ff4f44444f444f444f444f444f4ff4ff4f
            f5f5f5f5f55555f555f555f555f555f5f5f5f5f
            f5f555f5fff555f555f555f555f555f5f555f5f
            f5f555f5f55555f555f555f555f555f5f555f5f
            f4f444f4f44444f444f444f444f444f4f444f4f
            f4f444f4fffff4ffff44fffff44fff44f444f4f
            f4444444444444444444444444444444444444f
            fffffffffffffffffffffffffffffffffffffff
            `,img`
            fffffffffffffffffffffffffffffffffffffff
            f4444444444444444444444444444444444444f
            f4f444f4fffff4ffff44fffff4f444f4f444f4f
            f5ff5ff5f55555f555f555f555f555f5ff5ff5f
            f5f5f5f5f55555f555f555f555f555f5f5f5f5f
            f5f555f5fff555f555f555f555f555f5f555f5f
            f5f555f5f55555f555f555f555f555f5f555f5f
            f5f555f5f55555f555f555f555f555f5f555f5f
            f4f444f4fffff4ffff44fffff44fff44f444f4f
            f4444444444444444444444444444444444444f
            fffffffffffffffffffffffffffffffffffffff
            `,img`
            fffffffffffffffffffffffffffffffffffffff
            f4444444444444444444444444444444444444f
            f5f555f5fffff5ffff55fffff5f555f5f555f5f
            f5ff5ff5f55555f555f555f555f555f5ff5ff5f
            f5f5f5f5f55555f555f555f555f555f5f5f5f5f
            f5f555f5fff555f555f555f555f555f5f555f5f
            f5f555f5f55555f555f555f555f555f5f555f5f
            f5f555f5f55555f555f555f555f555f5f555f5f
            f5f555f5fffff5ffff55fffff55fff55f555f5f
            f4444444444444444444444444444444444444f
            fffffffffffffffffffffffffffffffffffffff
            `,img`
            fffffffffffffffffffffffffffffffffffffff
            f5555555555555555555555555555555555555f
            f5f555f5fffff5ffff55fffff5f555f5f555f5f
            f5ff5ff5f55555f555f555f555f555f5ff5ff5f
            f5f5f5f5f55555f555f555f555f555f5f5f5f5f
            f5f555f5fff555f555f555f555f555f5f555f5f
            f5f555f5f55555f555f555f555f555f5f555f5f
            f5f555f5f55555f555f555f555f555f5f555f5f
            f5f555f5fffff5ffff55fffff55fff55f555f5f
            f5555555555555555555555555555555555555f
            fffffffffffffffffffffffffffffffffffffff
            `],
        100,
        false
        )
    } else if (currentDifficulty == 2) {
        animation.runImageAnimation(
        Hard,
        [img`
            f f f f f f f f f f f f f f f f f f f f f f f f f f f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f 5 f 5 5 5 f 5 5 f f f 5 5 f f f f 5 5 f f f f 5 5 f 
            f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 
            f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 
            f 5 f f f f f 5 f 5 5 5 f 5 f f f f 5 5 f 5 5 5 f 5 f 
            f 5 f 5 5 5 f 5 f f f f f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 
            f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 
            f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 f 5 f f f f 5 5 f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f f f f f f f f f f f f f f f f f f f f f f f f f f f 
            `,img`
            f f f f f f f f f f f f f f f f f f f f f f f f f f f 
            f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
            f 5 f 5 5 5 f 5 5 f f f 5 5 f f f f 5 5 f f f f 5 5 f 
            f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 
            f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 
            f 5 f f f f f 5 f 5 5 5 f 5 f f f f 5 5 f 5 5 5 f 5 f 
            f 5 f 5 5 5 f 5 f f f f f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 
            f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 
            f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 f 5 f f f f 5 5 f 
            f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
            f f f f f f f f f f f f f f f f f f f f f f f f f f f 
            `,img`
            f f f f f f f f f f f f f f f f f f f f f f f f f f f 
            f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
            f 2 f 2 2 2 f 2 2 f f f 2 2 f f f f 2 2 f f f f 2 2 f 
            f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 
            f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 
            f 5 f f f f f 5 f 5 5 5 f 5 f f f f 5 5 f 5 5 5 f 5 f 
            f 5 f 5 5 5 f 5 f f f f f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 
            f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 
            f 2 f 2 2 2 f 2 f 2 2 2 f 2 f 2 2 2 f 2 f f f f 2 2 f 
            f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
            f f f f f f f f f f f f f f f f f f f f f f f f f f f 
            `,img`
            f f f f f f f f f f f f f f f f f f f f f f f f f f f 
            f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
            f 2 f 2 2 2 f 2 2 f f f 2 2 f f f f 2 2 f f f f 2 2 f 
            f 2 f 2 2 2 f 2 f 2 2 2 f 2 f 2 2 2 f 2 f 2 2 2 f 2 f 
            f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 
            f 5 f f f f f 5 f 5 5 5 f 5 f f f f 5 5 f 5 5 5 f 5 f 
            f 5 f 5 5 5 f 5 f f f f f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 
            f 2 f 2 2 2 f 2 f 2 2 2 f 2 f 2 2 2 f 2 f 2 2 2 f 2 f 
            f 2 f 2 2 2 f 2 f 2 2 2 f 2 f 2 2 2 f 2 f f f f 2 2 f 
            f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
            f f f f f f f f f f f f f f f f f f f f f f f f f f f 
            `,img`
            f f f f f f f f f f f f f f f f f f f f f f f f f f f 
            f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
            f 2 f 2 2 2 f 2 2 f f f 2 2 f f f f 2 2 f f f f 2 2 f 
            f 2 f 2 2 2 f 2 f 2 2 2 f 2 f 2 2 2 f 2 f 2 2 2 f 2 f 
            f 2 f 2 2 2 f 2 f 2 2 2 f 2 f 2 2 2 f 2 f 2 2 2 f 2 f 
            f 5 f f f f f 5 f 5 5 5 f 5 f f f f 5 5 f 5 5 5 f 5 f 
            f 2 f 2 2 2 f 2 f f f f f 2 f 2 2 2 f 2 f 2 2 2 f 2 f 
            f 2 f 2 2 2 f 2 f 2 2 2 f 2 f 2 2 2 f 2 f 2 2 2 f 2 f 
            f 2 f 2 2 2 f 2 f 2 2 2 f 2 f 2 2 2 f 2 f f f f 2 2 f 
            f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
            f f f f f f f f f f f f f f f f f f f f f f f f f f f 
            `,img`
            f f f f f f f f f f f f f f f f f f f f f f f f f f f 
            f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
            f 2 f 2 2 2 f 2 2 f f f 2 2 f f f f 2 2 f f f f 2 2 f 
            f 2 f 2 2 2 f 2 f 2 2 2 f 2 f 2 2 2 f 2 f 2 2 2 f 2 f 
            f 2 f 2 2 2 f 2 f 2 2 2 f 2 f 2 2 2 f 2 f 2 2 2 f 2 f 
            f 2 f f f f f 2 f 2 2 2 f 2 f f f f 2 2 f 2 2 2 f 2 f 
            f 2 f 2 2 2 f 2 f f f f f 2 f 2 2 2 f 2 f 2 2 2 f 2 f 
            f 2 f 2 2 2 f 2 f 2 2 2 f 2 f 2 2 2 f 2 f 2 2 2 f 2 f 
            f 2 f 2 2 2 f 2 f 2 2 2 f 2 f 2 2 2 f 2 f f f f 2 2 f 
            f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
            f f f f f f f f f f f f f f f f f f f f f f f f f f f 
            `,img`
            f f f f f f f f f f f f f f f f f f f f f f f f f f f 
            f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
            f 2 f 2 2 2 f 2 2 f f f 2 2 f f f f 2 2 f f f f 2 2 f 
            f 2 f 2 2 2 f 2 f 2 2 2 f 2 f 2 2 2 f 2 f 2 2 2 f 2 f 
            f 2 f 2 2 2 f 2 f 2 2 2 f 2 f 2 2 2 f 2 f 2 2 2 f 2 f 
            f 5 f f f f f 5 f 5 5 5 f 5 f f f f 5 5 f 5 5 5 f 5 f 
            f 2 f 2 2 2 f 2 f f f f f 2 f 2 2 2 f 2 f 2 2 2 f 2 f 
            f 2 f 2 2 2 f 2 f 2 2 2 f 2 f 2 2 2 f 2 f 2 2 2 f 2 f 
            f 2 f 2 2 2 f 2 f 2 2 2 f 2 f 2 2 2 f 2 f f f f 2 2 f 
            f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
            f f f f f f f f f f f f f f f f f f f f f f f f f f f 
            `,img`
            f f f f f f f f f f f f f f f f f f f f f f f f f f f 
            f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
            f 2 f 2 2 2 f 2 2 f f f 2 2 f f f f 2 2 f f f f 2 2 f 
            f 2 f 2 2 2 f 2 f 2 2 2 f 2 f 2 2 2 f 2 f 2 2 2 f 2 f 
            f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 
            f 5 f f f f f 5 f 5 5 5 f 5 f f f f 5 5 f 5 5 5 f 5 f 
            f 5 f 5 5 5 f 5 f f f f f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 
            f 2 f 2 2 2 f 2 f 2 2 2 f 2 f 2 2 2 f 2 f 2 2 2 f 2 f 
            f 2 f 2 2 2 f 2 f 2 2 2 f 2 f 2 2 2 f 2 f f f f 2 2 f 
            f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
            f f f f f f f f f f f f f f f f f f f f f f f f f f f 
            `,img`
            f f f f f f f f f f f f f f f f f f f f f f f f f f f 
            f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
            f 2 f 2 2 2 f 2 2 f f f 2 2 f f f f 2 2 f f f f 2 2 f 
            f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 
            f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 
            f 5 f f f f f 5 f 5 5 5 f 5 f f f f 5 5 f 5 5 5 f 5 f 
            f 5 f 5 5 5 f 5 f f f f f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 
            f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 
            f 2 f 2 2 2 f 2 f 2 2 2 f 2 f 2 2 2 f 2 f f f f 2 2 f 
            f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
            f f f f f f f f f f f f f f f f f f f f f f f f f f f 
            `,img`
            f f f f f f f f f f f f f f f f f f f f f f f f f f f 
            f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
            f 5 f 5 5 5 f 5 5 f f f 5 5 f f f f 5 5 f f f f 5 5 f 
            f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 
            f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 
            f 5 f f f f f 5 f 5 5 5 f 5 f f f f 5 5 f 5 5 5 f 5 f 
            f 5 f 5 5 5 f 5 f f f f f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 
            f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 
            f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 f 5 f f f f 5 5 f 
            f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
            f f f f f f f f f f f f f f f f f f f f f f f f f f f 
            `,img`
            f f f f f f f f f f f f f f f f f f f f f f f f f f f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f 5 f 5 5 5 f 5 5 f f f 5 5 f f f f 5 5 f f f f 5 5 f 
            f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 
            f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 
            f 5 f f f f f 5 f 5 5 5 f 5 f f f f 5 5 f 5 5 5 f 5 f 
            f 5 f 5 5 5 f 5 f f f f f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 
            f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 
            f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 f 5 f f f f 5 5 f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f f f f f f f f f f f f f f f f f f f f f f f f f f f 
            `],
        100,
        false
        )
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    attemptJump()
})
function animateRun () {
    mainRunLeft = animation.createAnimation(ActionKind.RunningLeft, 100)
    animation.attachAnimation(hero, mainRunLeft)
    mainRunLeft.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 5 . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . 5 5 5 8 . . . . . . . 
        . . . 6 6 6 5 8 8 6 6 6 6 6 . . 
        . 7 f 6 9 6 6 8 5 6 7 6 6 6 6 . 
        . 7 7 7 7 7 6 6 8 6 6 7 6 6 6 6 
        . . 1 . . . 7 6 8 6 6 6 . . . . 
        . . . . . 7 6 6 8 6 7 . . . . . 
        . . . . 7 6 6 6 6 6 6 . . . . . 
        . . . . 7 6 6 6 6 6 6 6 . . 5 . 
        . . . . 7 6 7 6 6 7 6 7 6 . . 6 
        . . . . . 6 7 7 7 . 6 . 7 6 . 6 
        . . . . . 6 . . . . 6 . . 7 6 . 
        . . . 5 6 6 . . 5 6 6 . . . . . 
        `)
    mainRunLeft.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 5 . . . . . . . 
        . . . . . . . 5 . 8 . 6 6 6 . . 
        . . . . . 5 5 5 8 8 6 6 7 . . . 
        . . . 6 6 6 5 8 8 6 6 7 6 6 . . 
        . 7 f 6 9 6 6 8 5 6 7 6 7 . . . 
        . 7 7 7 7 7 6 6 8 6 6 7 6 . . . 
        . . 1 . . . 7 6 8 6 6 6 . . . . 
        . . . . . 7 6 6 8 6 7 . . . . . 
        . . . . 7 6 6 6 6 6 6 . . . . . 
        . . . . 7 6 6 6 6 6 6 6 . . 5 . 
        . . . . 7 6 7 6 6 7 6 7 6 . . 6 
        . . . . . 6 7 7 7 . 6 6 7 6 . 6 
        . . . . . 6 . . . . . . 6 7 6 . 
        . . . 5 6 6 . . . . 5 6 6 . . . 
        `)
    mainRunLeft.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 5 . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . 5 5 5 8 . . . . . . . 
        . . . 6 6 6 5 8 8 6 6 6 6 6 . . 
        . 7 f 6 9 6 6 8 5 6 7 6 6 6 . . 
        . 7 7 7 7 7 6 6 8 6 6 7 6 6 6 . 
        . . 1 . . . 7 6 8 6 6 6 . . . . 
        . . . . . 7 6 6 8 6 7 . . . . . 
        . . . . 7 6 6 6 6 6 6 . . . . . 
        . . . . 7 6 6 6 6 6 6 6 . . 5 . 
        . . . . 7 6 7 6 6 7 6 7 6 . . 6 
        . . . . . 6 7 7 7 . 6 . 7 6 . 6 
        . . . . . 6 . . . . 6 . . 7 6 . 
        . . . 5 6 6 . . 5 6 6 . . . . . 
        `)
    mainRunLeft.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 5 . . . . . . . 
        . . . . . . . 5 . 8 . 6 6 6 . . 
        . . . . . 5 5 5 8 8 6 6 7 . . . 
        . . . 6 6 6 5 8 8 6 6 7 6 6 . . 
        . 7 f 6 9 6 6 8 5 6 7 6 7 . . . 
        . 7 7 7 7 7 6 6 8 6 6 7 6 . . . 
        . . 1 . . . 7 6 8 6 6 6 . . . . 
        . . . . . 7 6 6 8 6 7 . . . . . 
        . . . . 7 6 6 6 6 6 6 . . . . . 
        . . . . 7 6 6 6 6 6 6 6 . . 5 . 
        . . . . 7 6 7 6 6 7 6 7 6 . . 6 
        . . . . 6 7 7 7 7 . 6 . 7 6 . 6 
        . . . . 6 . . . . . 6 . . 7 6 . 
        . 5 6 6 . . . . 5 6 6 . . . . . 
        `)
    mainRunRight = animation.createAnimation(ActionKind.RunningRight, 100)
    animation.attachAnimation(hero, mainRunRight)
    mainRunRight.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . . 5 . . . . . . . 
        . . . . . . . 8 5 5 5 . . . . . 
        . . 6 6 6 6 6 8 8 5 6 6 6 . . . 
        . . 6 6 6 7 6 5 8 6 6 9 6 f 7 . 
        . 6 6 6 7 6 6 8 6 6 7 7 7 7 7 . 
        . . . . 6 6 6 8 6 7 . . . 1 . . 
        . . . . . 7 6 8 6 6 7 . . . . . 
        . . . . . 6 6 6 6 6 6 7 . . . . 
        . 5 . . 6 6 6 6 6 6 6 7 . . . . 
        6 . . 6 7 6 7 6 6 7 6 7 . . . . 
        6 . 6 7 . 6 . 7 7 7 6 . . . . . 
        . 6 7 . . 6 . . . . 6 . . . . . 
        . . . . . 6 6 5 . . 6 6 5 . . . 
        `)
    mainRunRight.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . 6 6 6 . 8 . 5 . . . . . . . 
        . . . 7 6 6 8 8 5 5 5 . . . . . 
        . . 6 6 7 6 6 8 8 5 6 6 6 . . . 
        . . . 7 6 7 6 5 8 6 6 9 6 f 7 . 
        . . . 6 7 6 6 8 6 6 7 7 7 7 7 . 
        . . . . 6 6 6 8 6 7 . . . 1 . . 
        . . . . . 7 6 8 6 6 7 . . . . . 
        . . . . . 6 6 6 6 6 6 7 . . . . 
        . 5 . . 6 6 6 6 6 6 6 7 . . . . 
        6 . . 6 7 6 7 6 6 7 6 7 . . . . 
        6 . 6 7 6 6 . 7 7 7 6 . . . . . 
        . 6 7 6 . . . . . . 6 . . . . . 
        . . . 6 6 5 . . . . 6 6 5 . . . 
        `)
    mainRunRight.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . . 5 . . . . . . . 
        . . . . . . . 8 5 5 5 . . . . . 
        . . 6 6 6 6 6 8 8 5 6 6 6 . . . 
        . . 6 6 6 7 6 5 8 6 6 9 6 f 7 . 
        . 6 6 6 7 6 6 8 6 6 7 7 7 7 7 . 
        . . . . 6 6 6 8 6 7 . . . 1 . . 
        . . . . . 7 6 8 6 6 7 . . . . . 
        . . . . . 6 6 6 6 6 6 7 . . . . 
        . 5 . . 6 6 6 6 6 6 6 7 . . . . 
        6 . . 6 7 6 7 6 6 7 6 7 . . . . 
        6 . 6 7 . 6 . 7 7 7 6 . . . . . 
        . 6 7 . . 6 . . . . 6 . . . . . 
        . . . . . 6 6 5 . . 6 6 5 . . . 
        `)
    mainRunRight.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . 6 6 6 . 8 . 5 . . . . . . . 
        . . . 7 6 6 8 8 5 5 5 . . . . . 
        . . 6 6 7 6 6 8 8 5 6 6 6 . . . 
        . . . 7 6 7 6 5 8 6 6 9 6 f 7 . 
        . . . 6 7 6 6 8 6 6 7 7 7 7 7 . 
        . . . . 6 6 6 8 6 7 . . . 1 . . 
        . . . . . 7 6 8 6 6 7 . . . . . 
        . . . . . 6 6 6 6 6 6 7 . . . . 
        . 5 . . 6 6 6 6 6 6 6 7 . . . . 
        6 . . 6 7 6 7 6 6 7 6 7 . . . . 
        6 . 6 7 . 6 . 7 7 7 7 6 . . . . 
        . 6 7 . . 6 . . . . . 6 . . . . 
        . . . . . 6 6 5 . . . . 6 6 5 . 
        `)
}
function difficultyMedium () {
    if (currentLevel >= 15 && currentLevel < 20) {
        currentLevel = 15
    } else if (currentLevel >= 20 && currentLevel < 25) {
        currentLevel = 20
    } else if (currentLevel >= 25 && currentLevel < 30) {
        currentLevel = 25
    }
    isDead()
}
function destroyOptionsMenu () {
    Sounds2.destroy()
    Difficulty.destroy()
    Language.destroy()
}
function animateJumps () {
    mainJumpLeft = animation.createAnimation(ActionKind.JumpingLeft, 100)
    animation.attachAnimation(hero, mainJumpLeft)
    mainJumpLeft.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 5 . . . . . . . 
        . . . . . . . 5 . 8 . 6 6 6 . . 
        . . . . . 5 5 5 8 8 6 6 7 . . . 
        . . . 6 6 6 5 8 8 6 6 7 6 6 . . 
        . 7 f 6 9 6 6 8 5 6 7 6 7 . . . 
        . 7 7 7 7 7 6 6 8 6 6 7 6 . . . 
        . . 1 . . . 7 6 8 6 6 6 . . . . 
        . . . . . 7 6 6 8 6 7 . . . . . 
        . . . . 7 6 6 6 6 6 6 . . . . . 
        . . . . 7 6 6 6 6 6 6 6 . . 5 . 
        . . . . 7 6 7 6 6 7 6 7 6 . . 6 
        . . . . . 6 7 7 7 . 6 . 7 6 . 6 
        . . . . . 6 . . . . 6 . . 7 6 . 
        . . . 5 6 6 . . 5 6 6 . . . . . 
        `)
    mainJumpLeft.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 5 . . . . . . . 
        . . . . . . . 5 . 8 . 6 6 6 . . 
        . . . . . 5 5 5 8 8 6 6 7 . . . 
        . . . 6 6 6 5 8 8 6 6 7 6 6 . . 
        . 7 f 6 9 6 6 8 5 6 7 6 7 . . . 
        . 7 7 7 7 7 6 6 8 6 6 7 6 . . . 
        . . 1 . . . 7 6 8 6 6 6 . . . . 
        . . . . . 7 6 6 8 6 7 . . . . . 
        . . . . 7 6 6 6 6 6 6 . . . . . 
        . . . . 7 6 6 6 6 6 6 6 . . 5 . 
        . . . . 7 6 7 6 6 7 6 7 6 . . 6 
        . . . . . 6 7 7 7 . 6 . 7 6 . 6 
        . . . . . 6 . . . . 6 . . 7 6 . 
        . . . 5 6 6 . . 5 6 6 . . . . . 
        `)
    for (let index = 0; index < 30; index++) {
        mainJumpLeft.addAnimationFrame(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . 5 . . . . . . 
            . . . . . . . . 5 . . . . . . . 
            . . . . . . 5 5 5 . . . . . . . 
            . . . 6 6 6 6 5 8 8 6 6 6 . . . 
            . 7 f 6 9 7 6 6 8 5 6 6 6 6 . . 
            . 7 7 7 7 7 7 6 8 6 7 6 6 6 6 . 
            . . 1 . . 7 6 6 6 6 7 . 5 . . . 
            . . . . 7 6 6 6 6 6 6 . . 6 7 . 
            . . . . 7 6 6 6 6 6 6 6 . . 6 . 
            . . . . 6 6 7 7 7 7 6 7 6 6 7 . 
            . . . . 6 . . 7 7 . 6 . 7 7 . . 
            . . . . 6 6 5 . . . 6 6 5 . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
    mainJumpRight = animation.createAnimation(ActionKind.JumpingRight, 100)
    animation.attachAnimation(hero, mainJumpRight)
    mainJumpRight.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . 6 6 6 . 8 . 5 . . . . . . . 
        . . . 7 6 6 8 8 5 5 5 . . . . . 
        . . 6 6 7 6 6 8 8 5 6 6 6 . . . 
        . . . 7 6 7 6 5 8 6 6 9 6 f 7 . 
        . . . 6 7 6 6 8 6 6 7 7 7 7 7 . 
        . . . . 6 6 6 8 6 7 . . . 1 . . 
        . . . . . 7 6 8 6 6 7 . . . . . 
        . . . . . 6 6 6 6 6 6 7 . . . . 
        . 5 . . 6 6 6 6 6 6 6 7 . . . . 
        6 . . 6 7 6 7 6 6 7 6 7 . . . . 
        6 . 6 7 . 6 . 7 7 7 6 . . . . . 
        . 6 7 . . 6 . . . . 6 . . . . . 
        . . . . . 6 6 5 . . 6 6 5 . . . 
        `)
    mainJumpRight.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . 6 6 6 . 8 . 5 . . . . . . . 
        . . . 7 6 6 8 8 5 5 5 . . . . . 
        . . 6 6 7 6 6 8 8 5 6 6 6 . . . 
        . . . 7 6 7 6 5 8 6 6 9 6 f 7 . 
        . . . 6 7 6 6 8 6 6 7 7 7 7 7 . 
        . . . . 6 6 6 8 6 7 . . . 1 . . 
        . . . . . 7 6 8 6 6 7 . . . . . 
        . . . . . 6 6 6 6 6 6 7 . . . . 
        . 5 . . 6 6 6 6 6 6 6 7 . . . . 
        6 . . 6 7 6 7 6 6 7 6 7 . . . . 
        6 . 6 7 . 6 . 7 7 7 6 . . . . . 
        . 6 7 . . 6 . . . . 6 . . . . . 
        . . . . . 6 6 5 . . 6 6 5 . . . 
        `)
    for (let index = 0; index < 30; index++) {
        mainJumpRight.addAnimationFrame(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 5 . . . . . . . . . 
            . . . . . . . 5 . . . . . . . . 
            . . . . . . . 5 5 5 . . . . . . 
            . . . 6 6 6 8 8 5 6 6 6 6 . . . 
            . . 6 6 6 6 5 8 6 6 7 9 6 f 7 . 
            . 6 6 6 6 7 6 8 6 7 7 7 7 7 7 . 
            . . . 5 . 7 6 6 6 6 7 . . 1 . . 
            . 7 6 . . 6 6 6 6 6 6 7 . . . . 
            . 6 . . 6 6 6 6 6 6 6 7 . . . . 
            . 7 6 6 7 6 7 7 7 7 6 6 . . . . 
            . . 7 7 . 6 . 7 7 . . 6 . . . . 
            . . . 5 6 6 . . . 5 6 6 . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
}
function createCaveBoss () {
    for (let value0 of tiles.getTilesByType(assets.tile`boss`)) {
        boss = sprites.create(img`
            ........ccddcbddddbcddcc........
            ......dddcccbcbddbcbcccddd......
            ....dbbbbddccdcbbcdccddbbbbd....
            ...bccccbbbdccbccbccdbbbccccb...
            ..dccccccbbbdccbbccdbbbccccccd..
            ..ccbbbbccbbbddccddbbbccbbbbcc..
            .ccbdddddccbbbbddbbbbccdddddbcc.
            .cddbbbbbdcccbbbbbbcccdbbbbbddc.
            cdbccccccbdcccbbbbcccdbccccccbdc
            dbccfffffcbdcccbbcccdbcfffffccbd
            cccffff2ffcbcccbbcccbcff2ffffccc
            bbbfff212ffdbccddccbdff212fffbbb
            ccbdfff2fffdbbcbbcbbdfff2fffdbcc
            cbccbdfffbbbdccccccdbbbfffdbccbc
            ccbcccdddccccccbbccccccdddcccbcc
            bccbcccccbccbcbddbcbccbcccccbccb
            ccddddddcccccbddddbcccccddddddcc
            cdbdbdbddccbddbddbddbccddbdbdbdc
            dbdbdbdbddcbdcddddcdbcddbdbdbdbd
            bbcdbdbcbdbcbbccccbbcbdbcbdbdcbb
            bcbcbbcbcbdccccbbccccdbcbcbbcbcb
            bbccccddddbbcbdbbdbcbbddddccccbb
            bccccdbbccbcddddddddcbccbbdccccb
            .bccdbbccbcdbbbbbbbbdcbccbbdccb.
            .ccdbbccbcdbcccbbcccbdcbccbbdcc.
            .cdbbccbccbcbbccccbbcbccbccbbdc.
            ..dbbccbcccccdbbbbdcccccbccbbd..
            ..dbbccbcccdbcddddcbdcccbccbbd..
            ...bbcccdcdbdccbbccdbdcdcccbb...
            ....bccccbbcbdccccdbcbbccccb....
            ......ccccccbddddddbcccccc......
            ........ccbcbddbbddbcbcc........
            `, SpriteKind.caveBoss)
        tiles.placeOnTile(boss, value0)
        tiles.setTileAt(value0, assets.tile`tile0`)
        boss.ay = gravity
        if (Math.percentChance(50)) {
            boss.ay = Math.randomRange(30, 60)
        } else {
            boss.ay = Math.randomRange(-60, -30)
        }
        animation.attachAnimation(boss, caveBossAni)
        animation.setAction(boss, ActionKind.Idle)
    }
}
function clearGame () {
    for (let value of sprites.allOfKind(SpriteKind.Bumper)) {
        value.destroy()
    }
    for (let value2 of sprites.allOfKind(SpriteKind.key)) {
        value2.destroy()
    }
    for (let value3 of sprites.allOfKind(SpriteKind.Goal)) {
        value3.destroy()
    }
    for (let value4 of sprites.allOfKind(SpriteKind.heart)) {
        value4.destroy()
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile11`, function (sprite, location) {
    if (isKilled == 1 && keyCount <= 0) {
        info.stopCountdown()
        if (currentLevel < 20 && (currentDifficulty == 0 || currentDifficulty == 1)) {
            info.changeLifeBy(1)
            currentLife += 1
        }
        currentLevel += 1
        if (hasNextLevel()) {
            if (currentLanguage == 0) {
                game.splash("Next level unlocked!")
            } else {
                game.splash("Ďalšia úroveň odomknutá!")
            }
            setLevelTileMap0(currentLevel)
        } else {
            game.over(true, effects.confetti)
        }
    }
})
function buttonsOptions () {
    Sounds2 = sprites.create(img`
        fffffffffffffffffffffffffffffffffffffff
        f5555555555555555555555555555555555555f
        f55fff555fff55f555f5ff55f5ffff555fff55f
        f5f555f5f555f5f555f5ff55f5f555f5f555f5f
        f5f55555f555f5f555f5f5f5f5f555f5f55555f
        f55fff55f555f5f555f5f5f5f5f555f55fff55f
        f55555f5f555f5f555f5f5f5f5f555f55555f5f
        f5f555f5f555f5f555f5f55ff5f555f5f555f5f
        f55fff555fff555fff55f55ff5ffff555fff55f
        f5555555555555555555555555555555555555f
        fffffffffffffffffffffffffffffffffffffff
        `, SpriteKind.button)
    Difficulty = sprites.create(img`
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f5555555555555555555555555555555555555555555555555555555555555f
        f5ffff55fffff5fffff5fffff5fffff55fff55f555f5f55555fffff5f555f5f
        f5f555f555f555f55555f5555555f555f555f5f555f5f5555555f555f555f5f
        f5f555f555f555f55555f5555555f555f55555f555f5f5555555f5555f5f55f
        f5f555f555f555fff555fff55555f555f55555f555f5f5555555f55555f555f
        f5f555f555f555f55555f5555555f555f55555f555f5f5555555f55555f555f
        f5f555f555f555f55555f5555555f555f555f5f555f5f5555555f55555f555f
        f5ffff55fffff5f55555f55555fffff55fff555fff55fffff555f55555f555f
        f5555555555555555555555555555555555555555555555555555555555555f
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `, SpriteKind.button)
    Language = sprites.create(img`
        fffffffffffffffffffffffffffffffffffffffffffffffffff
        f5555555555555555555555555555555555555555555555555f
        f5f555555fff55ff55f55fff55f555f55fff555fff55fffff5f
        f5f55555f555f5ff55f5f555f5f555f5f555f5f555f5f55555f
        f5f55555f555f5f5f5f5f55555f555f5f555f5f55555f55555f
        f5f55555f555f5f5f5f5f5ff55f555f5f555f5f5ff55fff555f
        f5f55555fffff5f5f5f5f555f5f555f5fffff5f555f5f55555f
        f5f55555f555f5f55ff5f555f5f555f5f555f5f555f5f55555f
        f5fffff5f555f5f55ff55fff555fff55f555f55fff55fffff5f
        f5555555555555555555555555555555555555555555555555f
        fffffffffffffffffffffffffffffffffffffffffffffffffff
        `, SpriteKind.button)
    if (currentLanguage != 0) {
        buttonsSK()
    }
}
function buttonsPositionOptions () {
    Sounds2.setPosition(80, 50)
    Difficulty.setPosition(80, 65)
    Language.setPosition(80, 80)
}
function createEnemies () {
    for (let value5 of tiles.getTilesByType(assets.tile`tile10`)) {
        fire = sprites.create(img`
            . . . . . . . 2 . . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . 2 . 2 4 4 2 . . . . . . 
            . 2 . . 2 2 4 5 4 4 2 . . . 2 . 
            . 2 2 . . 2 4 5 5 5 4 2 . 2 2 . 
            . 2 5 2 2 4 f 5 5 5 f 4 2 4 2 . 
            . . 2 4 4 5 4 f 4 f 4 4 4 5 2 . 
            . . 2 5 4 4 4 4 4 4 4 4 5 5 2 . 
            2 . 2 5 5 4 f 4 5 4 f 4 5 4 2 . 
            2 2 4 4 4 4 5 5 5 5 4 4 4 2 . 2 
            2 5 4 5 4 5 5 5 f 5 5 4 4 4 2 2 
            . 2 4 2 4 2 4 f 5 f 4 4 2 4 5 2 
            . 2 8 5 2 4 4 4 4 2 4 2 5 8 2 2 
            . 9 9 2 8 2 4 2 2 4 2 8 2 9 9 . 
            . . 5 9 5 8 2 2 2 2 8 5 9 5 . . 
            . . . 5 5 9 8 5 8 5 9 9 5 . . . 
            `, SpriteKind.Bumper)
        tiles.placeOnTile(fire, value5)
        tiles.setTileAt(value5, assets.tile`tile0`)
        fire.ay = gravity
        if (Math.percentChance(50)) {
            fire.vx = Math.randomRange(30, 60)
        } else {
            fire.vx = Math.randomRange(-60, -30)
        }
    }
}
function buttonsMenu () {
    Play = sprites.create(img`
        f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f 5 f f f f 5 5 f 5 5 5 5 5 5 f f f 5 5 f 5 5 5 f 5 f 
        f 5 f 5 5 5 f 5 f 5 5 5 5 5 f 5 5 5 f 5 f 5 5 5 f 5 f 
        f 5 f 5 5 5 f 5 f 5 5 5 5 5 f 5 5 5 f 5 5 f 5 f 5 5 f 
        f 5 f f f f 5 5 f 5 5 5 5 5 f 5 5 5 f 5 5 5 f 5 5 5 f 
        f 5 f 5 5 5 5 5 f 5 5 5 5 5 f f f f f 5 5 5 f 5 5 5 f 
        f 5 f 5 5 5 5 5 f 5 5 5 5 5 f 5 5 5 f 5 5 5 f 5 5 5 f 
        f 5 f 5 5 5 5 5 f f f f f 5 f 5 5 5 f 5 5 5 f 5 5 5 f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        `, SpriteKind.button)
    HighScore = sprites.create(img`
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f555555555555555555555555555555555555555555555555555555555f
        f5f555f5fffff55fff55f555f5555fff555fff555fff55ffff55fffff5f
        f5f555f555f555f555f5f555f555f555f5f555f5f555f5f555f5f55555f
        f5f555f555f555f55555f555f555f55555f55555f555f5f555f5f55555f
        f5fffff555f555f5fff5fffff5555fff55f55555f555f5ffff55fff555f
        f5f555f555f555f555f5f555f5555555f5f55555f555f5f5f555f55555f
        f5f555f555f555f555f5f555f555f555f5f555f5f555f5f55f55f55555f
        f5f555f5fffff55fff55f555f5555fff555fff555fff55f555f5fffff5f
        f555555555555555555555555555555555555555555555555555555555f
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `, SpriteKind.button)
    Options = sprites.create(img`
        fffffffffffffffffffffffffffffffffffffffffffff
        f5555555555555555555555555555555555555555555f
        f55fff55ffff55fffff5fffff55fff55ff55f55fff55f
        f5f555f5f555f555f55555f555f555f5ff55f5f555f5f
        f5f555f5f555f555f55555f555f555f5f5f5f5f55555f
        f5f555f5ffff5555f55555f555f555f5f5f5f55fff55f
        f5f555f5f5555555f55555f555f555f5f5f5f55555f5f
        f5f555f5f5555555f55555f555f555f5f55ff5f555f5f
        f55fff55f5555555f555fffff55fff55f55ff55fff55f
        f5555555555555555555555555555555555555555555f
        fffffffffffffffffffffffffffffffffffffffffffff
        `, SpriteKind.button)
    Credits = sprites.create(img`
        fffffffffffffffffffffffffffffffffffffffffffff
        f5555555555555555555555555555555555555555555f
        f55fff55ffff55fffff5ffff55fffff5fffff55fff55f
        f5f555f5f555f5f55555f555f555f55555f555f555f5f
        f5f55555f555f5f55555f555f555f55555f555f55555f
        f5f55555ffff55fff555f555f555f55555f5555fff55f
        f5f55555f5f555f55555f555f555f55555f5555555f5f
        f5f555f5f55f55f55555f555f555f55555f555f555f5f
        f55fff55f555f5fffff5ffff55fffff555f5555fff55f
        f5555555555555555555555555555555555555555555f
        fffffffffffffffffffffffffffffffffffffffffffff
        `, SpriteKind.button)
    Back = sprites.create(img`
        f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f 5 f f f f 5 5 5 f f f 5 5 5 f f f 5 5 f 5 5 5 f 5 f 
        f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 
        f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 5 5 f 5 5 f 5 5 f 
        f 5 f f f f 5 5 f 5 5 5 f 5 f 5 5 5 5 5 f f f 5 5 5 f 
        f 5 f 5 5 5 f 5 f f f f f 5 f 5 5 5 5 5 f 5 5 f 5 5 f 
        f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 
        f 5 f f f f 5 5 f 5 5 5 f 5 5 f f f 5 5 f 5 5 5 f 5 f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        `, SpriteKind.button)
    Instructions = sprites.create(img`
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f5555555555555555555555555555555555555555555555555555555555555555555555555f
        f5fffff5f555f55fff55fffff5ffff55f555f55fff55fffff5fffff55fff55f555f55fff55f
        f555f555f555f5f555f555f555f555f5f555f5f555f555f55555f555f555f5f555f5f555f5f
        f555f555ff55f5f5555555f555f555f5f555f5f5555555f55555f555f555f5ff55f5f55555f
        f555f555f5f5f55fff5555f555ffff55f555f5f5555555f55555f555f555f5f5f5f55fff55f
        f555f555f5f5f55555f555f555f555f5f555f5f5555555f55555f555f555f5f5f5f55555f5f
        f555f555f55ff5f555f555f555f555f5f555f5f555f555f55555f555f555f5f55ff5f555f5f
        f5fffff5f555f55fff5555f555f555f55fff555fff5555f555fffff55fff55f555f55fff55f
        f5555555555555555555555555555555555555555555555555555555555555555555555555f
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `, SpriteKind.button)
    if (currentLanguage != 0) {
        buttonsSK()
    }
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(hero.isHittingTile(CollisionDirection.Bottom))) {
        hero.vy += 80
    }
})
function createHero (hero: Sprite) {
    hero.ay = gravity
    controller.moveSprite(hero, 100, 0)
    hero.z = 5
    scene.cameraFollowSprite(hero)
    info.setScore(0)
    info.setLife(3)
}
info.onLifeZero(function () {
    if (currentDifficulty == 2) {
        if (currentLanguage != 0) {
            game.splash("Prehral si!")
        }
        game.over(false, effects.melt)
    } else if (currentDifficulty == 1) {
        difficultyMedium()
    } else if (currentDifficulty == 0) {
        isDead()
    } else {
        game.over(false, effects.melt)
    }
})
function createCursor (cursor: Sprite) {
    controller.moveSprite(cursor, 0, 50)
    cursor.z = 5
    cursor.setStayInScreen(true)
}
function spawnHearts () {
    for (let value10 of tiles.getTilesByType(assets.tile`myTile3`)) {
        heart2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f f f . . . . f f f f . . 
            . f 2 2 2 2 f . . f 2 2 2 2 f . 
            f 2 2 2 2 2 2 f f 2 2 2 2 2 2 f 
            f 2 2 2 2 2 2 2 2 2 2 2 4 2 2 f 
            f 2 2 2 2 2 2 2 2 2 2 4 2 2 2 f 
            f c 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
            . f c 2 2 2 2 2 2 2 2 2 2 2 f . 
            . . f c 2 2 2 2 2 2 2 2 2 f . . 
            . . . f c 2 2 2 2 2 2 2 f . . . 
            . . . . f c 2 2 2 2 2 f . . . . 
            . . . . . f c 2 2 2 f . . . . . 
            . . . . . . f c c f . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.heart)
        tiles.setTileAt(value10, assets.tile`tile0`)
        tiles.placeOnTile(heart2, value10)
    }
}
function showInstruction (text: string) {
    game.showLongText(text, DialogLayout.Full)
}
sprites.onOverlap(SpriteKind.button, SpriteKind.cursor, function (sprite, otherSprite) {
    if (Cursor0.overlapsWith(Back) && controller.A.isPressed()) {
        goBack()
    }
    if (Cursor0.overlapsWith(Play) && controller.A.isPressed()) {
        currentLevel = 10
        otherSprite.destroy()
        setLevelTileMap0(currentLevel)
    }
    if (Cursor0.overlapsWith(HighScore) && controller.A.isPressed()) {
        Back.destroy()
        currentLevel = 1
        setLevelTileMap0(currentLevel)
        game.setDialogFrame(img`
            . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
            9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 
            9 1 9 9 9 9 9 9 9 9 9 9 9 9 1 9 
            9 1 9 9 9 9 9 9 9 9 9 9 9 9 1 9 
            9 1 9 9 9 9 9 9 9 9 9 9 9 9 1 9 
            9 1 9 9 9 9 9 9 9 9 9 9 9 9 1 9 
            9 1 9 9 9 9 9 9 9 9 9 9 9 9 1 9 
            9 1 9 9 9 9 9 9 9 9 9 9 9 9 1 9 
            9 1 9 9 9 9 9 9 9 9 9 9 9 9 1 9 
            9 1 9 9 9 9 9 9 9 9 9 9 9 9 1 9 
            9 1 9 9 9 9 9 9 9 9 9 9 9 9 1 9 
            9 1 9 9 9 9 9 9 9 9 9 9 9 9 1 9 
            9 1 9 9 9 9 9 9 9 9 9 9 9 9 1 9 
            9 1 9 9 9 9 9 9 9 9 9 9 9 9 1 9 
            9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 
            . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
            `)
        game.setDialogCursor(img`
            . . . . . . . 5 4 . . . . . . . 
            . . . . . . 5 5 5 4 . . . . . . 
            . . . . . . . 4 4 . . . . . . . 
            . . . . . 5 4 5 5 5 4 . . . . . 
            . . 4 . 5 5 5 5 5 5 5 4 . 5 . . 
            . 5 . 5 4 4 4 4 4 4 4 4 5 . 4 . 
            . 4 . 5 5 5 5 5 5 5 5 5 4 . 5 . 
            . 5 . 5 4 5 5 5 5 5 5 5 4 . 4 . 
            . . 4 5 4 5 5 5 5 5 5 5 4 5 . . 
            . . . . 5 4 5 5 5 5 5 4 . . . . 
            . . . . . 5 4 5 5 5 4 . . . . . 
            . . . . . . 5 5 5 4 . . . . . . 
            . . . . . . . 5 4 . . . . . . . 
            . . . . . . . 5 4 . . . . . . . 
            . . . . . . 5 4 4 4 . . . . . . 
            . . . . 5 4 5 5 5 5 4 4 . . . . 
            `)
        if (currentLanguage == 0) {
            showHighScore("Your current high score is " + convertToText(info.highScore()) + "." + " Press \"A\" button to get back to the main menu.")
        } else {
            showHighScore("Vaše aktuálne najvyššie skóre je " + convertToText(info.highScore()) + "." + " Stlačením tlačidla \"A\" sa vrátite do hlavného menu.")
        }
        goToMenu()
    }
    if (Cursor0.overlapsWith(Options) && controller.A.isPressed()) {
        currentLevel = 2
        setLevelTileMap0(currentLevel)
    }
    if (currentLevel == 2 && controller.A.isPressed()) {
        if (Cursor0.overlapsWith(Difficulty)) {
            destroyOptionsMenu()
            currentLevel = 4
            setLevelTileMap0(currentLevel)
        } else if (Cursor0.overlapsWith(Language)) {
            destroyOptionsMenu()
            currentLevel = 5
            setLevelTileMap0(currentLevel)
        }
    }
    if (currentLevel == 4) {
        if (Cursor0.overlapsWith(Easy) && controller.A.isPressed()) {
            currentDifficulty = 0
            buttonDifficultyEffect()
        } else if (Cursor0.overlapsWith(Medium) && controller.A.isPressed()) {
            currentDifficulty = 1
            buttonDifficultyEffect()
        } else if (Cursor0.overlapsWith(Hard) && controller.A.isPressed()) {
            currentDifficulty = 2
            buttonDifficultyEffect()
        }
    }
    if (currentLevel == 5) {
        if (Cursor0.overlapsWith(EN) && controller.A.isPressed()) {
            currentLanguage = 0
            buttonLaguegeEffect()
            Back.setImage(img`
                f f f f f f f f f f f f f f f f f f f f f f f f f f f 
                f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
                f 5 f f f f 5 5 5 f f f 5 5 5 f f f 5 5 f 5 5 5 f 5 f 
                f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 
                f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 5 5 f 5 5 f 5 5 f 
                f 5 f f f f 5 5 f f f f f 5 f 5 5 5 5 5 f f f 5 5 5 f 
                f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 5 5 f 5 5 f 5 5 f 
                f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 
                f 5 f f f f 5 5 f 5 5 5 f 5 5 f f f 5 5 f 5 5 5 f 5 f 
                f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
                f f f f f f f f f f f f f f f f f f f f f f f f f f f 
                `)
        } else if (Cursor0.overlapsWith(SK) && controller.A.isPressed()) {
            currentLanguage = 1
            buttonLaguegeEffect()
            Back.setImage(img`
                f f f f f f f f f f f f f f f f f f f f f f f f f f f 
                f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
                f 5 5 f f f 5 5 f f f f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 f 
                f 5 f 5 5 5 f 5 f 5 5 5 f 5 5 5 5 5 5 5 5 5 f 5 5 5 f 
                f 5 f 5 5 5 5 5 f 5 5 5 f 5 5 f f f 5 5 f f f f f 5 f 
                f 5 5 f f f 5 5 f f f f 5 5 f 5 5 5 f 5 5 5 f 5 5 5 f 
                f 5 5 5 5 5 f 5 f 5 5 5 5 5 f f f f f 5 5 5 f 5 5 5 f 
                f 5 f 5 5 5 f 5 f 5 5 5 5 5 f 5 5 5 f 5 5 5 f 5 5 5 f 
                f 5 5 f f f 5 5 f 5 5 5 5 5 f 5 5 5 f 5 5 5 f 5 5 5 f 
                f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
                f f f f f f f f f f f f f f f f f f f f f f f f f f f 
                `)
        }
    }
})
function initializeHeroAnimations () {
    animateRun()
    animateIdle()
    animateDrage()
    animateJumps()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.caveBoss, function (sprite, otherSprite) {
    if (sprite.vy > 0 && !(sprite.isHittingTile(CollisionDirection.Top)) || sprite.y < otherSprite.top) {
        otherSprite.destroy(effects.blizzard, 250)
        otherSprite.vy = -50
        sprite.vy = -2 * pixelsToMeters
        info.changeScoreBy(25)
        info.startCountdown(10)
        pause(invincibilityPeriod)
        isKilled = 1
    } else {
        if (info.life() > 2) {
            if (currentLanguage == 0) {
                sprite.say("Ow!", invincibilityPeriod)
            } else {
                sprite.say("Au!", invincibilityPeriod)
            }
            info.changeLifeBy(-2)
        }
        if (info.life() <= 2) {
            isDead()
        }
    }
})
function initializecaveBossAni () {
    caveBossAni = animation.createAnimation(ActionKind.Idle, 150)
    caveBossAni.addAnimationFrame(img`
        ........ccddcbddddbcddcc........
        ......dddcccbcbddbcbcccddd......
        ....dbbbbddccdcbbcdccddbbbbd....
        ...bccccbbbdccbccbccdbbbccccb...
        ..dccccccbbbdccbbccdbbbccccccd..
        ..ccbbbbccbbbddccddbbbccbbbbcc..
        .ccbdddddccbbbbddbbbbccdddddbcc.
        .cddbbbbbdcccbbbbbbcccdbbbbbddc.
        cdbccccccbdcccbbbbcccdbccccccbdc
        dbccfffffcbdcccbbcccdbcfffffccbd
        cccffff2ffcbcccbbcccbcff2ffffccc
        bbbfff212ffdbccddccbdff212fffbbb
        ccbdfff2fffdbbcbbcbbdfff2fffdbcc
        cbccbdfffbbbdccccccdbbbfffdbccbc
        ccbcccdddccccccbbccccccdddcccbcc
        bccbcccccbccbcbddbcbccbcccccbccb
        ccddddddcccccbddddbcccccddddddcc
        cdbdbdbddccbddbddbddbccddbdbdbdc
        dbdbdbdbddcbdcddddcdbcddbdbdbdbd
        bbcdbdbcbdbcbbccccbbcbdbcbdbdcbb
        bcbcbbcbcbdccccbbccccdbcbcbbcbcb
        bbccccddddbbcbdbbdbcbbddddccccbb
        bccccdbbccbcddddddddcbccbbdccccb
        .bccdbbccbcdbbbbbbbbdcbccbbdccb.
        .ccdbbccbcdbcccbbcccbdcbccbbdcc.
        .cdbbccbccbcbbccccbbcbccbccbbdc.
        ..dbbccbcccccdbbbbdcccccbccbbd..
        ..dbbccbcccdbcddddcbdcccbccbbd..
        ...bbcccdcdbdccbbccdbdcdcccbb...
        ....bccccbbcbdccccdbcbbccccb....
        ......ccccccbddddddbcccccc......
        ........ccbcbddbbddbcbcc........
        `)
    caveBossAni.addAnimationFrame(img`
        ........ccddcbddddbcddcc........
        ......dddcccbcbddbcbcccddd......
        ....dbbbbddccdcbbcdccddbbbbd....
        ...bccccbbbdccbccbccdbbbccccb...
        ..dccccccbbbdccbbccdbbbccccccd..
        ..ccbbbbccbbbddccddbbbccbbbbcc..
        .ccbdddddccbbbbddbbbbccdddddbcc.
        .cddbbbbbdcccbbbbbbcccdbbbbbddc.
        cdbccccccbdcccbbbbcccdbccccccbdc
        dbccfffffcbdcccbbcccdbcfffffccbd
        cccffff2ffcbcccbbcccbcff2ffffccc
        bbbfff212ffdbccddccbdff212fffbbb
        ccbdfff2fffdbbcbbcbbdfff2fffdbcc
        cbccbdfffbbbdccccccdbbbfffdbccbc
        ccbcccdddccccccbbccccccdddcccbcc
        bccbcccccbccbcbddbcbccbcccccbccb
        ccddddddcccccbddddbcccccddddddcc
        cdbdbdbddccbddbddbddbccddbdbdbdc
        dbdbdbdbddcbdcddddcdbcddbdbdbdbd
        bbcdbdbcbdbcbbccccbbcbdbcbdbdcbb
        bcbcbbcbcbdccccbbccccdbcbcbbcbcb
        bbccccddddbbcbdbbdbcbbddddccccbb
        bccccdbbccbcddddddddcbccbbdccccb
        .bccdbbccbcdbbbbbbbbdcbccbbdccb.
        .ccdbbccbcdbcccbbcccbdcbccbbdcc.
        .cdbbccbccbcffccccffcbccbccbbdc.
        ..dbbccbccccbbffffbbccccbccbbd..
        ..dbbccbcccdcdbbbbdcdcccbccbbd..
        ...bbcccdcdbbcddddcbbdcdcccbb...
        ....bccccbbcdccbbccdcbbccccb....
        ......ccccccbdccccdbcccccc......
        ........ccbfbddddddbfbcc........
        ............bddbbddb............
        ................................
        ................................
        ................................
        `)
    caveBossAni.addAnimationFrame(img`
        ........ccddcbddddbcddcc........
        ......dddcccbcbddbcbcccddd......
        ....dbbbbddccdcbbcdccddbbbbd....
        ...bccccbbbdccbccbccdbbbccccb...
        ..dccccccbbbdccbbccdbbbccccccd..
        ..ccbbbbccbbbddccddbbbccbbbbcc..
        .ccbdddddccbbbbddbbbbccdddddbcc.
        .cddbbbbbdcccbbbbbbcccdbbbbbddc.
        cdbccccccbdcccbbbbcccdbccccccbdc
        dbccfffffcbdcccbbcccdbcfffffccbd
        cccffff2ffcbcccbbcccbcff2ffffccc
        bbbfff212ffdbccddccbdff212fffbbb
        ccbdfff2fffdbbcbbcbbdfff2fffdbcc
        cbccbdfffbbbdccccccdbbbfffdbccbc
        ccbcccdddccccccbbccccccdddcccbcc
        bccbcccccbccbcbddbcbccbcccccbccb
        ccddddddcccccbddddbcccccddddddcc
        cdbdbdbddccbddbddbddbccddbdbdbdc
        dbdbdbdbddcbdcddddcdbcddbdbdbdbd
        bbcdbdbcbdbcbbccccbbcbdbcbdbdcbb
        bcbcbbcbcbdccccbbccccdbcbcbbcbcb
        bbccccddddbbcbdbbdbcbbddddccccbb
        bccccdbbccbcddddddddcbccbbdccccb
        .bccdbbccbcdbbbbbbbbdcbccbbdccb.
        .ccdbbccbcdbcccbbcccbdcbccbbdcc.
        .cdbbccbccbcffccccffcbccbccbbdc.
        ..dbbccbcccffffffffffcccbccbbd..
        ..dbbccbcccdbbffffbbdcccbccbbd..
        ...bbcccdcdbcdbbbbdcbdcdcccbb...
        ....bccccbbcbcddddcbcbbccccb....
        ......cccccfdccbbccdfccccc......
        ........ccbfbdccccdbfbcc........
        ............bddddddb............
        ............bddbbddb............
        ................................
        ................................
        `)
    caveBossAni.addAnimationFrame(img`
        ........ccddcbddddbcddcc........
        ......dddcccbcbddbcbcccddd......
        ....dbbbbddccdcbbcdccddbbbbd....
        ...bccccbbbdccbccbccdbbbccccb...
        ..dccccccbbbdccbbccdbbbccccccd..
        ..ccbbbbccbbbddccddbbbccbbbbcc..
        .ccbdddddccbbbbddbbbbccdddddbcc.
        .cddbbbbbdcccbbbbbbcccdbbbbbddc.
        cdbccccccbdcccbbbbcccdbccccccbdc
        dbccfffffcbdcccbbcccdbcfffffccbd
        cccffff2ffcbcccbbcccbcff2ffffccc
        bbbfff212ffdbccddccbdff212fffbbb
        ccbdfff2fffdbbcbbcbbdfff2fffdbcc
        cbccbdfffbbbdccccccdbbbfffdbccbc
        ccbcccdddccccccbbccccccdddcccbcc
        bccbcccccbccbcbddbcbccbcccccbccb
        ccddddddcccccbddddbcccccddddddcc
        cdbdbdbddccbddbddbddbccddbdbdbdc
        dbdbdbdbddcbdcddddcdbcddbdbdbdbd
        bbcdbdbcbdbcbbccccbbcbdbcbdbdcbb
        bcbcbbcbcbdccccbbccccdbcbcbbcbcb
        bbccccddddbbcbdbbdbcbbddddccccbb
        bccccdbbccbcddddddddcbccbbdccccb
        .bccdbbccbcdbbbbbbbbdcbccbbdccb.
        .ccdbbccbcdbcccbbcccbdcbccbbdcc.
        .cdbbccbccbcffccccffcbccbccbbdc.
        ..dbbccbcccffffffffffcccbccbbd..
        ..dbbccbccffffffffffffccbccbbd..
        ...bbcccdfddbbffffbbddfdcccbb...
        ....bccccbfbcdbbbbdcbfbccccb....
        ......cccccfbcddddcbfccccc......
        ........ccbfdccbbccdfbcc........
        ...........fbdccccdbf...........
        ............bddddddb............
        ............bddbbddb............
        ................................
        `)
    caveBossAni.addAnimationFrame(img`
        ........ccddcbddddbcddcc........
        ......dddcccbcbddbcbcccddd......
        ....dbbbbddccdcbbcdccddbbbbd....
        ...bccccbbbdccbccbccdbbbccccb...
        ..dccccccbbbdccbbccdbbbccccccd..
        ..ccbbbbccbbbddccddbbbccbbbbcc..
        .ccbdddddccbbbbddbbbbccdddddbcc.
        .cddbbbbbdcccbbbbbbcccdbbbbbddc.
        cdbccccccbdcccbbbbcccdbccccccbdc
        dbccfffffcbdcccbbcccdbcfffffccbd
        cccffff2ffcbcccbbcccbcff2ffffccc
        bbbfff212ffdbccddccbdff212fffbbb
        ccbdfff2fffdbbcbbcbbdfff2fffdbcc
        cbccbdfffbbbdccccccdbbbfffdbccbc
        ccbcccdddccccccbbccccccdddcccbcc
        bccbcccccbccbcbddbcbccbcccccbccb
        ccddddddcccccbddddbcccccddddddcc
        cdbdbdbddccbddbddbddbccddbdbdbdc
        dbdbdbdbddcbdcddddcdbcddbdbdbdbd
        bbcdbdbcbdbcbbccccbbcbdbcbdbdcbb
        bcbcbbcbcbdccccbbccccdbcbcbbcbcb
        bbccccddddbbcbdbbdbcbbddddccccbb
        bccccdbbccbcddddddddcbccbbdccccb
        .bccdbbccbcdbbbbbbbbdcbccbbdccb.
        .ccdbbccbcdbcccbbcccbdcbccbbdcc.
        .cdbbccbccbcffccccffcbccbccbbdc.
        ..dbbccbcccffffffffffcccbccbbd..
        ..dbbccbccffffffffffffccbccbbd..
        ...bbcccdffffffffffffffdcccbb...
        ....bccccbffffffffffffbccccb....
        ......cccccbcdbbbbdcbccccc......
        ........ccbfbcddddcbfbcc........
        ...........fdccbbccdf...........
        ...........fbdccccdbf...........
        ............bddddddb............
        ............bddbbddb............
        `)
    caveBossAni.addAnimationFrame(img`
        ........ccddcbddddbcddcc........
        ......dddcccbcbddbcbcccddd......
        ....dbbbbddccdcbbcdccddbbbbd....
        ...bccccbbbdccbccbccdbbbccccb...
        ..dccccccbbbdccbbccdbbbccccccd..
        ..ccbbbbccbbbddccddbbbccbbbbcc..
        .ccbdddddccbbbbddbbbbccdddddbcc.
        .cddbbbbbdcccbbbbbbcccdbbbbbddc.
        cdbccccccbdcccbbbbcccdbccccccbdc
        dbccfffffcbdcccbbcccdbcfffffccbd
        cccffff21fcbcccbbcccbcf12ffffccc
        bbbfff212ffdbccddccbdff212fffbbb
        ccbdfff2fffdbbcbbcbbdfff2fffdbcc
        cbccbdfffbbbdccccccdbbbfffdbccbc
        ccbcccdddccccccbbccccccdddcccbcc
        bccbcccccbccbcbddbcbccbcccccbccb
        ccddddddcccccbddddbcccccddddddcc
        cdbdbdbddccbddbddbddbccddbdbdbdc
        dbdbdbdbddcbdcddddcdbcddbdbdbdbd
        bbcdbdbcbdbcbbccccbbcbdbcbdbdcbb
        bcbcbbcbcbdccccbbccccdbcbcbbcbcb
        bbccccddddbbcbdbbdbcbbddddccccbb
        bccccdbbccbcddddddddcbccbbdccccb
        .bccdbbccbcdbbbbbbbbdcbccbbdccb.
        .ccdbbccbcdbcccbbcccbdcbccbbdcc.
        .cdbbccbccbcffccccffcbccbccbbdc.
        ..dbbccbcccffffffffffcccbccbbd..
        ..dbbccbccffff2ff2ffffccbccbbd..
        ...bbcccdff2f2f22f2f2ffdcccbb...
        ....bccccbffffffffffffbccccb....
        ......cccccbcdbbbbdcbccccc......
        ........ccbfbcddddcbfbcc........
        ...........fdccbbccdf...........
        ...........fbdccccdbf...........
        ............bddddddb............
        ............bddbbddb............
        `)
    caveBossAni.addAnimationFrame(img`
        ........ccddcbddddbcddcc........
        ......dddcccbcbddbcbcccddd......
        ....dbbbbddccdcbbcdccddbbbbd....
        ...bccccbbbdccbccbccdbbbccccb...
        ..dccccccbbbdccbbccdbbbccccccd..
        ..ccbbbbccbbbddccddbbbccbbbbcc..
        .ccbdddddccbbbbddbbbbccdddddbcc.
        .cddbbbbbdcccbbbbbbcccdbbbbbddc.
        cdbccccccbdcccbbbbcccdbccccccbdc
        dbccfffffcbdcccbbcccdbcfffffccbd
        cccffff2ffcbcccbbcccbcff2ffffccc
        bbbfff212ffdbccddccbdff212fffbbb
        ccbdff12fffdbbcbbcbbdfff21ffdbcc
        cbccbdfffbbbdccccccdbbbfffdbccbc
        ccbcccdddccccccbbccccccdddcccbcc
        bccbcccccbccbcbddbcbccbcccccbccb
        ccddddddcccccbddddbcccccddddddcc
        cdbdbdbddccbddbddbddbccddbdbdbdc
        dbdbdbdbddcbdcddddcdbcddbdbdbdbd
        bbcdbdbcbdbcbbccccbbcbdbcbdbdcbb
        bcbcbbcbcbdccccbbccccdbcbcbbcbcb
        bbccccddddbbcbdbbdbcbbddddccccbb
        bccccdbbccbcddddddddcbccbbdccccb
        .bccdbbccbcdbbbbbbbbdcbccbbdccb.
        .ccdbbccbcdbcccbbcccbdcbccbbdcc.
        .cdbbccbccbcffccccffcbccbccbbdc.
        ..dbbccbcccffffffffffcccbccbbd..
        ..dbbccbccff442ff244ffccbccbbd..
        ...bbcccdff2424224242ffdcccbb...
        ....bccccb4f24244242f4bccccb....
        ......cccccbcdbbbbdcbccccc......
        ........ccbfbcddddcbfbcc........
        ...........fdccbbccdf...........
        ...........fbdccccdbf...........
        ............bddddddb............
        ............bddbbddb............
        `)
    caveBossAni.addAnimationFrame(img`
        ........ccddcbddddbcddcc........
        ......dddcccbcbddbcbcccddd......
        ....dbbbbddccdcbbcdccddbbbbd....
        ...bccccbbbdccbccbccdbbbccccb...
        ..dccccccbbbdccbbccdbbbccccccd..
        ..ccbbbbccbbbddccddbbbccbbbbcc..
        .ccbdddddccbbbbddbbbbccdddddbcc.
        .cddbbbbbdcccbbbbbbcccdbbbbbddc.
        cdbccccccbdcccbbbbcccdbccccccbdc
        dbccfffffcbdcccbbcccdbcfffffccbd
        cccffff21fcbcccbbcccbcf12ffffccc
        bbbfff212ffdbccddccbdff212fffbbb
        ccbdff121ffdbbcbbcbbdff121ffdbcc
        cbccbdfffbbbdccccccdbbbfffdbccbc
        ccbcccdddccccccbbccccccdddcccbcc
        bccbcccccbccbcbddbcbccbcccccbccb
        ccddddddcccccbddddbcccccddddddcc
        cdbdbdbddccbddbddbddbccddbdbdbdc
        dbdbdbdbddcbdcddddcdbcddbdbdbdbd
        bbcdbdbcbdbcbbccccbbcbdbcbdbdcbb
        bcbcbbcbcbdccccbbccccdbcbcbbcbcb
        bbccccddddbbcbdbbdbcbbddddccccbb
        bccccdbbccbcddddddddcbccbbdccccb
        .bccdbbccbcdbbbbbbbbdcbccbbdccb.
        .ccdbbccbcdbcccbbcccbdcbccbbdcc.
        .cdbbccbccbcffccccffcbccbccbbdc.
        ..dbbccbcccfff5ff5fffcccbccbbd..
        ..dbbccbccf5452552545fccbccbbd..
        ...bbcccdf524242242425fdcccbb...
        ....bcccc44224244242244ccccb....
        ......ccc2cbcdbbbbdcbc2ccc......
        ........cc2fbcddddcbf2cc........
        ...........fdccbbccdf...........
        ...........fbdccccdbf...........
        ............bddddddb............
        ............bddbbddb............
        `)
    caveBossAni.addAnimationFrame(img`
        ........ccddcbddddbcddcc........
        ......dddcccbcbddbcbcccddd......
        ....dbbbbddccdcbbcdccddbbbbd....
        ...bccccbbbdccbccbccdbbbccccb...
        ..dccccccbbbdccbbccdbbbccccccd..
        ..ccbbbbccbbbddccddbbbccbbbbcc..
        .ccbdddddccbbbbddbbbbccdddddbcc.
        .cddbbbbbdcccbbbbbbcccdbbbbbddc.
        cdbccccccbdcccbbbbcccdbccccccbdc
        dbccfffffcbdcccbbcccdbcfffffccbd
        cccfff121fcbcccbbcccbcf121fffccc
        bbbfff212ffdbccddccbdff212fffbbb
        ccbdff12fffdbbcbbcbbdfff21ffdbcc
        cbccbdfffbbbdccccccdbbbfffdbccbc
        ccbcccdddccccccbbccccccdddcccbcc
        bccbcccccbccbcbddbcbccbcccccbccb
        ccddddddcccccbddddbcccccddddddcc
        cdbdbdbddccbddbddbddbccddbdbdbdc
        dbdbdbdbddcbdcddddcdbcddbdbdbdbd
        bbcdbdbcbdbcbbccccbbcbdbcbdbdcbb
        bcbcbbcbcbdccccbbccccdbcbcbbcbcb
        bbccccddddbbcbdbbdbcbbddddccccbb
        bccccdbbccbcddddddddcbccbbdccccb
        .bccdbbccbcdbbbbbbbbdcbccbbdccb.
        .ccdbbccbcdbcccbbcccbdcbccbbdcc.
        .cdbbccbccbcffccccffcbccbccbbdc.
        ..dbbccbcccff55ff55ffcccbccbbd..
        ..dbbccbccf5542552455fccbccbbd..
        ...bbcccdf544242242445fdcccbb...
        ....bcccc44224244242244ccccb....
        ......cc52cbcdbbbbdcbc25cc......
        ........c42fbcddddcbf24c........
        ..........2fdccbbccdf2..........
        ..........4fbdccccdbf4..........
        ............bddddddb............
        ............bddbbddb............
        `)
    caveBossAni.addAnimationFrame(img`
        ........ccddcbddddbcddcc........
        ......dddcccbcbddbcbcccddd......
        ....dbbbbddccdcbbcdccddbbbbd....
        ...bccccbbbdccbccbccdbbbccccb...
        ..dccccccbbbdccbbccdbbbccccccd..
        ..ccbbbbccbbbddccddbbbccbbbbcc..
        .ccbdddddccbbbbddbbbbccdddddbcc.
        .cddbbbbbdcccbbbbbbcccdbbbbbddc.
        cdbccccccbdcccbbbbcccdbccccccbdc
        dbccfffffcbdcccbbcccdbcfffffccbd
        cccfff121fcbcccbbcccbcf121fffccc
        bbbfff212ffdbccddccbdff212fffbbb
        ccbdff121ffdbbcbbcbbdff121ffdbcc
        cbccbdfffbbbdccccccdbbbfffdbccbc
        ccbcccdddccccccbbccccccdddcccbcc
        bccbcccccbccbcbddbcbccbcccccbccb
        ccddddddcccccbddddbcccccddddddcc
        cdbdbdbddccbddbddbddbccddbdbdbdc
        dbdbdbdbddcbdcddddcdbcddbdbdbdbd
        bbcdbdbcbdbcbbccccbbcbdbcbdbdcbb
        bcbcbbcbcbdccccbbccccdbcbcbbcbcb
        bbccccddddbbcbdbbdbcbbddddccccbb
        bccccdbbccbcddddddddcbccbbdccccb
        .bccdbbccbcdbbbbbbbbdcbccbbdccb.
        .ccdbbccbcdbcccbbcccbdcbccbbdcc.
        .cdbbccbccbcffccccffcbccbccbbdc.
        ..dbbccbcccf555ff555fcccbccbbd..
        ..dbbccbccf5542552455fccbccbbd..
        ...bbcccd55442422424455dcccbb...
        ....bcccc4ffffffffffff4ccccb....
        ......cc52cbcdbbbbdcbc25cc......
        ........542fbcddddcbf245........
        .........52fdccbbccdf25.........
        .........54fbdccccdbf45.........
        ..........42bddddddb24..........
        ...........4bddbbddb4...........
        `)
    caveBossAni.addAnimationFrame(img`
        ........ccddcbddddbcddcc........
        ......dddcccbcbddbcbcccddd......
        ....dbbbbddccdcbbcdccddbbbbd....
        ...bccccbbbdccbccbccdbbbccccb...
        ..dccccccbbbdccbbccdbbbccccccd..
        ..ccbbbbccbbbddccddbbbccbbbbcc..
        .ccbdddddccbbbbddbbbbccdddddbcc.
        .cddbbbbbdcccbbbbbbcccdbbbbbddc.
        cdbccccccbdcccbbbbcccdbccccccbdc
        dbccfffffcbdcccbbcccdbcfffffccbd
        cccfff121fcbcccbbcccbcf121fffccc
        bbbfff212ffdbccddccbdff212fffbbb
        ccbdff12fffdbbcbbcbbdfff21ffdbcc
        cbccbdfffbbbdccccccdbbbfffdbccbc
        ccbcccdddccccccbbccccccdddcccbcc
        bccbcccccbccbcbddbcbccbcccccbccb
        ccddddddcccccbddddbcccccddddddcc
        cdbdbdbddccbddbddbddbccddbdbdbdc
        dbdbdbdbddcbdcddddcdbcddbdbdbdbd
        bbcdbdbcbdbcbbccccbbcbdbcbdbdcbb
        bcbcbbcbcbdccccbbccccdbcbcbbcbcb
        bbccccddddbbcbdbbdbcbbddddccccbb
        bccccdbbccbcddddddddcbccbbdccccb
        .bccdbbccbcdbbbbbbbbdcbccbbdccb.
        .ccdbbccbcdbcccbbcccbdcbccbbdcc.
        .cdbbccbccbcffccccffcbccbccbbdc.
        ..dbbccbcccff55ff55ffcccbccbbd..
        ..dbbccbccf5542552455fccbccbbd..
        ...bbcccdf544242242445fdcccbb...
        ....bcccc44224244242244ccccb....
        ......cc52cbcdbbbbdcbc25cc......
        ........c42fbcddddcbf24c........
        ..........2fdccbbccdf2..........
        ..........4fbdccccdbf4..........
        ............bddddddb............
        ............bddbbddb............
        `)
    caveBossAni.addAnimationFrame(img`
        ........ccddcbddddbcddcc........
        ......dddcccbcbddbcbcccddd......
        ....dbbbbddccdcbbcdccddbbbbd....
        ...bccccbbbdccbccbccdbbbccccb...
        ..dccccccbbbdccbbccdbbbccccccd..
        ..ccbbbbccbbbddccddbbbccbbbbcc..
        .ccbdddddccbbbbddbbbbccdddddbcc.
        .cddbbbbbdcccbbbbbbcccdbbbbbddc.
        cdbccccccbdcccbbbbcccdbccccccbdc
        dbccfffffcbdcccbbcccdbcfffffccbd
        cccffff21fcbcccbbcccbcf12ffffccc
        bbbfff212ffdbccddccbdff212fffbbb
        ccbdff121ffdbbcbbcbbdff121ffdbcc
        cbccbdfffbbbdccccccdbbbfffdbccbc
        ccbcccdddccccccbbccccccdddcccbcc
        bccbcccccbccbcbddbcbccbcccccbccb
        ccddddddcccccbddddbcccccddddddcc
        cdbdbdbddccbddbddbddbccddbdbdbdc
        dbdbdbdbddcbdcddddcdbcddbdbdbdbd
        bbcdbdbcbdbcbbccccbbcbdbcbdbdcbb
        bcbcbbcbcbdccccbbccccdbcbcbbcbcb
        bbccccddddbbcbdbbdbcbbddddccccbb
        bccccdbbccbcddddddddcbccbbdccccb
        .bccdbbccbcdbbbbbbbbdcbccbbdccb.
        .ccdbbccbcdbcccbbcccbdcbccbbdcc.
        .cdbbccbccbcffccccffcbccbccbbdc.
        ..dbbccbcccfff5ff5fffcccbccbbd..
        ..dbbccbccf5452552545fccbccbbd..
        ...bbcccdf524242242425fdcccbb...
        ....bcccc44224244242244ccccb....
        ......ccc2cbcdbbbbdcbc2ccc......
        ........cc2fbcddddcbf2cc........
        ...........fdccbbccdf...........
        ...........fbdccccdbf...........
        ............bddddddb............
        ............bddbbddb............
        `)
    caveBossAni.addAnimationFrame(img`
        ........ccddcbddddbcddcc........
        ......dddcccbcbddbcbcccddd......
        ....dbbbbddccdcbbcdccddbbbbd....
        ...bccccbbbdccbccbccdbbbccccb...
        ..dccccccbbbdccbbccdbbbccccccd..
        ..ccbbbbccbbbddccddbbbccbbbbcc..
        .ccbdddddccbbbbddbbbbccdddddbcc.
        .cddbbbbbdcccbbbbbbcccdbbbbbddc.
        cdbccccccbdcccbbbbcccdbccccccbdc
        dbccfffffcbdcccbbcccdbcfffffccbd
        cccffff2ffcbcccbbcccbcff2ffffccc
        bbbfff212ffdbccddccbdff212fffbbb
        ccbdff12fffdbbcbbcbbdfff21ffdbcc
        cbccbdfffbbbdccccccdbbbfffdbccbc
        ccbcccdddccccccbbccccccdddcccbcc
        bccbcccccbccbcbddbcbccbcccccbccb
        ccddddddcccccbddddbcccccddddddcc
        cdbdbdbddccbddbddbddbccddbdbdbdc
        dbdbdbdbddcbdcddddcdbcddbdbdbdbd
        bbcdbdbcbdbcbbccccbbcbdbcbdbdcbb
        bcbcbbcbcbdccccbbccccdbcbcbbcbcb
        bbccccddddbbcbdbbdbcbbddddccccbb
        bccccdbbccbcddddddddcbccbbdccccb
        .bccdbbccbcdbbbbbbbbdcbccbbdccb.
        .ccdbbccbcdbcccbbcccbdcbccbbdcc.
        .cdbbccbccbcffccccffcbccbccbbdc.
        ..dbbccbcccffffffffffcccbccbbd..
        ..dbbccbccff442ff244ffccbccbbd..
        ...bbcccdff2424224242ffdcccbb...
        ....bccccb4f24244242f4bccccb....
        ......cccccbcdbbbbdcbccccc......
        ........ccbfbcddddcbfbcc........
        ...........fdccbbccdf...........
        ...........fbdccccdbf...........
        ............bddddddb............
        ............bddbbddb............
        `)
    caveBossAni.addAnimationFrame(img`
        ........ccddcbddddbcddcc........
        ......dddcccbcbddbcbcccddd......
        ....dbbbbddccdcbbcdccddbbbbd....
        ...bccccbbbdccbccbccdbbbccccb...
        ..dccccccbbbdccbbccdbbbccccccd..
        ..ccbbbbccbbbddccddbbbccbbbbcc..
        .ccbdddddccbbbbddbbbbccdddddbcc.
        .cddbbbbbdcccbbbbbbcccdbbbbbddc.
        cdbccccccbdcccbbbbcccdbccccccbdc
        dbccfffffcbdcccbbcccdbcfffffccbd
        cccffff21fcbcccbbcccbcf12ffffccc
        bbbfff212ffdbccddccbdff212fffbbb
        ccbdfff2fffdbbcbbcbbdfff2fffdbcc
        cbccbdfffbbbdccccccdbbbfffdbccbc
        ccbcccdddccccccbbccccccdddcccbcc
        bccbcccccbccbcbddbcbccbcccccbccb
        ccddddddcccccbddddbcccccddddddcc
        cdbdbdbddccbddbddbddbccddbdbdbdc
        dbdbdbdbddcbdcddddcdbcddbdbdbdbd
        bbcdbdbcbdbcbbccccbbcbdbcbdbdcbb
        bcbcbbcbcbdccccbbccccdbcbcbbcbcb
        bbccccddddbbcbdbbdbcbbddddccccbb
        bccccdbbccbcddddddddcbccbbdccccb
        .bccdbbccbcdbbbbbbbbdcbccbbdccb.
        .ccdbbccbcdbcccbbcccbdcbccbbdcc.
        .cdbbccbccbcffccccffcbccbccbbdc.
        ..dbbccbcccffffffffffcccbccbbd..
        ..dbbccbccffff2ff2ffffccbccbbd..
        ...bbcccdff2f2f22f2f2ffdcccbb...
        ....bccccbffffffffffffbccccb....
        ......cccccbcdbbbbdcbccccc......
        ........ccbfbcddddcbfbcc........
        ...........fdccbbccdf...........
        ...........fbdccccdbf...........
        ............bddddddb............
        ............bddbbddb............
        `)
    caveBossAni.addAnimationFrame(img`
        ........ccddcbddddbcddcc........
        ......dddcccbcbddbcbcccddd......
        ....dbbbbddccdcbbcdccddbbbbd....
        ...bccccbbbdccbccbccdbbbccccb...
        ..dccccccbbbdccbbccdbbbccccccd..
        ..ccbbbbccbbbddccddbbbccbbbbcc..
        .ccbdddddccbbbbddbbbbccdddddbcc.
        .cddbbbbbdcccbbbbbbcccdbbbbbddc.
        cdbccccccbdcccbbbbcccdbccccccbdc
        dbccfffffcbdcccbbcccdbcfffffccbd
        cccffff2ffcbcccbbcccbcff2ffffccc
        bbbfff212ffdbccddccbdff212fffbbb
        ccbdfff2fffdbbcbbcbbdfff2fffdbcc
        cbccbdfffbbbdccccccdbbbfffdbccbc
        ccbcccdddccccccbbccccccdddcccbcc
        bccbcccccbccbcbddbcbccbcccccbccb
        ccddddddcccccbddddbcccccddddddcc
        cdbdbdbddccbddbddbddbccddbdbdbdc
        dbdbdbdbddcbdcddddcdbcddbdbdbdbd
        bbcdbdbcbdbcbbccccbbcbdbcbdbdcbb
        bcbcbbcbcbdccccbbccccdbcbcbbcbcb
        bbccccddddbbcbdbbdbcbbddddccccbb
        bccccdbbccbcddddddddcbccbbdccccb
        .bccdbbccbcdbbbbbbbbdcbccbbdccb.
        .ccdbbccbcdbcccbbcccbdcbccbbdcc.
        .cdbbccbccbcffccccffcbccbccbbdc.
        ..dbbccbcccffffffffffcccbccbbd..
        ..dbbccbccffffffffffffccbccbbd..
        ...bbcccdffffffffffffffdcccbb...
        ....bccccbffffffffffffbccccb....
        ......cccccbcdbbbbdcbccccc......
        ........ccbfbcddddcbfbcc........
        ...........fdccbbccdf...........
        ...........fbdccccdbf...........
        ............bddddddb............
        ............bddbbddb............
        `)
    caveBossAni.addAnimationFrame(img`
        ........ccddcbddddbcddcc........
        ......dddcccbcbddbcbcccddd......
        ....dbbbbddccdcbbcdccddbbbbd....
        ...bccccbbbdccbccbccdbbbccccb...
        ..dccccccbbbdccbbccdbbbccccccd..
        ..ccbbbbccbbbddccddbbbccbbbbcc..
        .ccbdddddccbbbbddbbbbccdddddbcc.
        .cddbbbbbdcccbbbbbbcccdbbbbbddc.
        cdbccccccbdcccbbbbcccdbccccccbdc
        dbccfffffcbdcccbbcccdbcfffffccbd
        cccffff2ffcbcccbbcccbcff2ffffccc
        bbbfff212ffdbccddccbdff212fffbbb
        ccbdfff2fffdbbcbbcbbdfff2fffdbcc
        cbccbdfffbbbdccccccdbbbfffdbccbc
        ccbcccdddccccccbbccccccdddcccbcc
        bccbcccccbccbcbddbcbccbcccccbccb
        ccddddddcccccbddddbcccccddddddcc
        cdbdbdbddccbddbddbddbccddbdbdbdc
        dbdbdbdbddcbdcddddcdbcddbdbdbdbd
        bbcdbdbcbdbcbbccccbbcbdbcbdbdcbb
        bcbcbbcbcbdccccbbccccdbcbcbbcbcb
        bbccccddddbbcbdbbdbcbbddddccccbb
        bccccdbbccbcddddddddcbccbbdccccb
        .bccdbbccbcdbbbbbbbbdcbccbbdccb.
        .ccdbbccbcdbcccbbcccbdcbccbbdcc.
        .cdbbccbccbcffccccffcbccbccbbdc.
        ..dbbccbcccffffffffffcccbccbbd..
        ..dbbccbccffffffffffffccbccbbd..
        ...bbcccdfddbbffffbbddfdcccbb...
        ....bccccbfbcdbbbbdcbfbccccb....
        ......cccccfbcddddcbfccccc......
        ........ccbfdccbbccdfbcc........
        ...........fbdccccdbf...........
        ............bddddddb............
        ............bddbbddb............
        ................................
        `)
    caveBossAni.addAnimationFrame(img`
        ........ccddcbddddbcddcc........
        ......dddcccbcbddbcbcccddd......
        ....dbbbbddccdcbbcdccddbbbbd....
        ...bccccbbbdccbccbccdbbbccccb...
        ..dccccccbbbdccbbccdbbbccccccd..
        ..ccbbbbccbbbddccddbbbccbbbbcc..
        .ccbdddddccbbbbddbbbbccdddddbcc.
        .cddbbbbbdcccbbbbbbcccdbbbbbddc.
        cdbccccccbdcccbbbbcccdbccccccbdc
        dbccfffffcbdcccbbcccdbcfffffccbd
        cccffff2ffcbcccbbcccbcff2ffffccc
        bbbfff212ffdbccddccbdff212fffbbb
        ccbdfff2fffdbbcbbcbbdfff2fffdbcc
        cbccbdfffbbbdccccccdbbbfffdbccbc
        ccbcccdddccccccbbccccccdddcccbcc
        bccbcccccbccbcbddbcbccbcccccbccb
        ccddddddcccccbddddbcccccddddddcc
        cdbdbdbddccbddbddbddbccddbdbdbdc
        dbdbdbdbddcbdcddddcdbcddbdbdbdbd
        bbcdbdbcbdbcbbccccbbcbdbcbdbdcbb
        bcbcbbcbcbdccccbbccccdbcbcbbcbcb
        bbccccddddbbcbdbbdbcbbddddccccbb
        bccccdbbccbcddddddddcbccbbdccccb
        .bccdbbccbcdbbbbbbbbdcbccbbdccb.
        .ccdbbccbcdbcccbbcccbdcbccbbdcc.
        .cdbbccbccbcffccccffcbccbccbbdc.
        ..dbbccbcccffffffffffcccbccbbd..
        ..dbbccbcccdbbffffbbdcccbccbbd..
        ...bbcccdcdbcdbbbbdcbdcdcccbb...
        ....bccccbbcbcddddcbcbbccccb....
        ......cccccfdccbbccdfccccc......
        ........ccbfbdccccdbfbcc........
        ............bddddddb............
        ............bddbbddb............
        ................................
        ................................
        `)
    caveBossAni.addAnimationFrame(img`
        ........ccddcbddddbcddcc........
        ......dddcccbcbddbcbcccddd......
        ....dbbbbddccdcbbcdccddbbbbd....
        ...bccccbbbdccbccbccdbbbccccb...
        ..dccccccbbbdccbbccdbbbccccccd..
        ..ccbbbbccbbbddccddbbbccbbbbcc..
        .ccbdddddccbbbbddbbbbccdddddbcc.
        .cddbbbbbdcccbbbbbbcccdbbbbbddc.
        cdbccccccbdcccbbbbcccdbccccccbdc
        dbccfffffcbdcccbbcccdbcfffffccbd
        cccffff2ffcbcccbbcccbcff2ffffccc
        bbbfff212ffdbccddccbdff212fffbbb
        ccbdfff2fffdbbcbbcbbdfff2fffdbcc
        cbccbdfffbbbdccccccdbbbfffdbccbc
        ccbcccdddccccccbbccccccdddcccbcc
        bccbcccccbccbcbddbcbccbcccccbccb
        ccddddddcccccbddddbcccccddddddcc
        cdbdbdbddccbddbddbddbccddbdbdbdc
        dbdbdbdbddcbdcddddcdbcddbdbdbdbd
        bbcdbdbcbdbcbbccccbbcbdbcbdbdcbb
        bcbcbbcbcbdccccbbccccdbcbcbbcbcb
        bbccccddddbbcbdbbdbcbbddddccccbb
        bccccdbbccbcddddddddcbccbbdccccb
        .bccdbbccbcdbbbbbbbbdcbccbbdccb.
        .ccdbbccbcdbcccbbcccbdcbccbbdcc.
        .cdbbccbccbcffccccffcbccbccbbdc.
        ..dbbccbccccbbffffbbccccbccbbd..
        ..dbbccbcccdcdbbbbdcdcccbccbbd..
        ...bbcccdcdbbcddddcbbdcdcccbb...
        ....bccccbbcdccbbccdcbbccccb....
        ......ccccccbdccccdbcccccc......
        ........ccbfbddddddbfbcc........
        ............bddbbddb............
        ................................
        ................................
        ................................
        `)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.key, function (sprite, otherSprite) {
    otherSprite.destroy(effects.trail, 250)
    otherSprite.y += -3
    info.changeScoreBy(5)
    keyCount += -1
})
function initializeLevel (level: number) {
    playerStartLocation = tiles.getTilesByType(assets.tile`tile9`)[0]
    tiles.placeOnTile(hero, playerStartLocation)
    tiles.setTileAt(playerStartLocation, assets.tile`tile0`)
    createEnemies()
    spawnGoals()
    spawnHearts()
    if (currentLevel == 20) {
        createCaveBoss()
    }
}
function goToMenu () {
    if (currentLevel == 2) {
        Sounds2.destroy()
        Difficulty.destroy()
        Language.destroy()
    }
    Back.destroy()
    giveIntroductionEN()
    currentLevel = 0
    setLevelTileMap0(currentLevel)
}
function hasNextLevel () {
    return currentLevel != levelCount
}
function buttonLaguegeEffect () {
    if (currentLanguage == 0) {
        animation.runMovementAnimation(
        EN,
        animation.animationPresets(animation.shake),
        500,
        false
        )
    } else if (currentLanguage == 1) {
        animation.runMovementAnimation(
        SK,
        animation.animationPresets(animation.shake),
        500,
        false
        )
    }
}
function buttonsSK () {
    if (currentLevel == 0) {
        Play.setImage(img`
            f f f f f f f f f f f f f f f f f f f f f f f f f f f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f 5 f 5 5 5 f 5 f f f f 5 5 5 f f f 5 5 5 f 5 f 5 5 f 
            f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 f 5 5 5 f 5 5 5 f 
            f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 f 5 f f f f f 5 f 
            f 5 f f f f f 5 f f f f 5 5 f f f f f 5 5 5 f 5 5 5 f 
            f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 f 5 5 5 f 5 5 5 f 
            f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 f 5 5 5 f 5 5 5 f 
            f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 f 5 5 5 f 5 5 5 f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f f f f f f f f f f f f f f f f f f f f f f f f f f f 
            `)
        HighScore.setImage(img`
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            f555555555555555555555555555555555555555555555555555555555555555555555f
            f5f555f5f555f55fff555fff55f555f5555ff5555fff55f555f5555ff5ffff55fffff5f
            f5f555f5f555f5f555f5f555f5f555f555555555f555f5f555f5555555f555f5f55555f
            f5f555f5f555f5f55555f555f5f55f55fffff555f55555f55f555fff55f555f5f55555f
            f5f555f55f5f555fff55f555f5fff555f55555555fff55fff555f555f5ffff55fff555f
            f55f5f5555f5555555f5f555f5f55f55ff5555555555f5f55f55f555f5f555f5f55555f
            f55f5f5555f555f555f5f555f5f555f5f5555555f555f5f555f5f555f5f555f5f55555f
            f555f55555f5555fff555fff55f555f5fffff5555fff55f555f55fff55f555f5fffff5f
            f555555555555555555555555555555555555555555555555555555555555555555555f
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `)
        Options.setImage(img`
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            f5555555555555555555555555555555555555555555555555555555555555f
            f5f555f55fff555fff55fffff55fff55f555f5fffff5f555f5fffff55fff55f
            f5f555f5f555f5f555f555f555f555f5f555f5f55555f555f555f555f555f5f
            f5ff55f5f555f5f5555555f555f555f5f555f5f55555ff55f555f555f555f5f
            f5f5f5f5fffff55fff5555f555fffff55f5f55fff555f5f5f555f555fffff5f
            f5f5f5f5f555f55555f555f555f555f55f5f55f55555f5f5f555f555f555f5f
            f5f55ff5f555f5f555f555f555f555f55f5f55f55555f55ff555f555f555f5f
            f5f555f5f555f55fff5555f555f555f555f555fffff5f555f5fffff5f555f5f
            f5555555555555555555555555555555555555555555555555555555555555f
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `)
        Credits.setImage(img`
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            f5555555555555555555555555555555555555555555555555555555555555555555f
            f5ffff555fff555f5f555fff55f555f55fff55f555f55fff55f555f5fffff5fffff5f
            f5f555f5f555f555f555f555f5f555f5f555f5f555f5f555f5f555f555f555f55555f
            f5f555f5f555f5ffff55f555f5f55f55f555f5f555f5f555f5ff55f555f555f55555f
            f5ffff55f555f5f555f5fffff5fff555f555f5f555f5fffff5ff55f555f555fff555f
            f5f55555f555f5f555f5f555f5f55f55f555f55f5f55f555f5f5f5f555f555f55555f
            f5f55555f555f5f555f5f555f5f555f5f555f55f5f55f555f5f55ff555f555f55555f
            f5f555555fff55ffff55f555f5f555f55fff5555f555f555f5f555f5fffff5fffff5f
            f5555555555555555555555555555555555555555555555555555555555555555555f
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `)
        Instructions.setImage(img`
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            f5555555555555555555555555555555555555555555555555555555555555f
            f5fffff5f555f55f5f55fffff5ffff55f555f5f555f55fff55fffff5fffff5f
            f555f555f555f555f55555f555f555f5f555f5f555f5f555f555f555f55555f
            f555f555ff55f55ffff555f555f555f5f555f5f55f55f5555555f555f55555f
            f555f555f5f5f5f5555555f555ffff55f555f5fff555f5555555f555fff555f
            f555f555f5f5f55fff5555f555f555f5f555f5f55f55f5555555f555f55555f
            f555f555f55ff55555f555f555f555f5f555f5f555f5f555f555f555f55555f
            f5fffff5f555f5ffff5555f555f555f55fff55f555f55fff55fffff5fffff5f
            f5555555555555555555555555555555555555555555555555555555555555f
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `)
    } else if (currentLevel == 2) {
        Sounds2.setImage(img`
            fffffffffffffffffffffffffffffffff
            f5555555555555555555555555555555f
            f5fffff5f555f5f555f5f555f5f555f5f
            f55555f5f555f5f555f5f555f5f555f5f
            f5555f55f555f5f555f5f55f55f555f5f
            f555f555f555f5f555f5fff5555f5f55f
            f55f55555f5f55f555f5f55f5555f555f
            f5f555555f5f55f555f5f555f555f555f
            f5fffff555f5555fff55f555f555f555f
            f5555555555555555555555555555555f
            fffffffffffffffffffffffffffffffff
            `)
        Difficulty.setImage(img`
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            f5555555555555555555555555555555555555555555555555555555555555f
            f55fff55ffff55fffff5fffff55fff555f5f55f555f55fff555fff555f5f55f
            f5f555f5f555f555f55555f555f555f555f555f555f5f555f5f555f555f555f
            f5f555f5f555f555f55555f555f555f5fffff5ff55f5f555f5f55555fffff5f
            f5f555f5ffff5555f55555f555fffff5555f55f5f5f5f555f55fff5555f555f
            f5f555f5f555f555f55555f555f555f555f555f5f5f5f555f55555f555f555f
            f5f555f5f555f555f55555f555f555f55f5555f55ff5f555f5f555f555f555f
            f55fff55ffff5555f555fffff5f555f5fffff5f555f55fff555fff5555f555f
            f5555555555555555555555555555555555555555555555555555555555555f
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `)
        Language.setImage(img`
            fffffffffffffffffffffffffffffffff
            f5555555555555555555555555555555f
            f5fffff55fff55fffff5f555f5f555f5f
            f55555f5f555f55555f5f555f5f555f5f
            f55555f5f555f5555f55f555f5f55f55f
            f55555f5fffff555f5555f5f55fff555f
            f55555f5f555f55f555555f555f55f55f
            f5f555f5f555f5f5555555f555f555f5f
            f55fff55f555f5fffff555f555f555f5f
            f5555555555555555555555555555555f
            fffffffffffffffffffffffffffffffff
            `)
    }
}
function spawnGoals () {
    for (let value7 of tiles.getTilesByType(assets.tile`tile8`)) {
        key2 = sprites.create(img`
            . . . . . f f f f f f . . . . . 
            . . . . f 4 5 5 5 5 4 f . . . . 
            . . . f 4 5 5 4 4 5 5 4 f . . . 
            . . . f 5 5 4 f f 4 5 5 f . . . 
            . . . f 5 5 f . . f 5 5 f . . . 
            . . . f 5 5 4 f f 4 5 5 f . . . 
            . . . f 4 5 5 4 4 5 5 4 f . . . 
            . . . . f 4 5 5 5 5 4 f . . . . 
            . . . . . f f 5 5 f f . . . . . 
            . . . . . . f 5 5 f . . . . . . 
            . . . . . . f 5 5 f . . . . . . 
            . . . . . f f 5 5 f . . . . . . 
            . . . . f 5 5 4 5 f . . . . . . 
            . . . . . f 4 4 5 f . . . . . . 
            . . . . f 5 5 4 5 f . . . . . . 
            . . . . . f f f f . . . . . . . 
            `, SpriteKind.key)
        tiles.setTileAt(value7, assets.tile`tile0`)
        tiles.placeOnTile(key2, value7)
        animation.attachAnimation(key2, KeyAni)
        animation.setAction(key2, ActionKind.Idle)
    }
}
function showHighScore (text: string) {
    game.showLongText(text, DialogLayout.Center)
}
let heroFacingLeft = false
let key2: Sprite = null
let playerStartLocation: tiles.Location = null
let heart2: Sprite = null
let fire: Sprite = null
let caveBossAni: animation.Animation = null
let boss: Sprite = null
let mainJumpRight: animation.Animation = null
let mainJumpLeft: animation.Animation = null
let Language: Sprite = null
let Difficulty: Sprite = null
let Sounds2: Sprite = null
let mainRunRight: animation.Animation = null
let mainRunLeft: animation.Animation = null
let gravity = 0
let Instructions: Sprite = null
let Back: Sprite = null
let Credits: Sprite = null
let Options: Sprite = null
let HighScore: Sprite = null
let Play: Sprite = null
let playAni: animation.Animation = null
let mainIdleRight: animation.Animation = null
let mainIdleLeft: animation.Animation = null
let currentLife = 0
let currentDifficulty = 0
let doubleJumpSpeed = 0
let canDoubleJump = false
let SK: Sprite = null
let EN: Sprite = null
let Hard: Sprite = null
let Medium: Sprite = null
let Easy: Sprite = null
let mainDrageRight: animation.Animation = null
let mainDrageLeft: animation.Animation = null
let invincibilityPeriod = 0
let currentLanguage = 0
let KeyAni: animation.Animation = null
let currentLevel = 0
let levelCount = 0
let hero: Sprite = null
let Cursor0: Sprite = null
let pixelsToMeters = 0
let keyCount = 0
let isKilled = 0
isKilled = 1
keyCount = 0
pixelsToMeters = 30
Cursor0 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f 1 1 1 1 f f . . . . 
    . . . f 1 1 1 1 1 1 1 1 f . . . 
    . . . f 1 1 f 1 1 f 1 1 f . . . 
    . . f 1 1 1 1 1 1 1 1 1 1 f . . 
    . . f 1 f 1 1 1 1 1 1 f 1 f . . 
    . . f 1 1 f 1 1 1 1 f 1 1 f . . 
    . . f 1 1 1 f f f f 1 1 1 f . . 
    . . . f 1 1 1 1 1 1 1 1 f . . . 
    . . . f 1 1 1 1 1 1 1 1 f . . . 
    . . . . f f 1 1 1 1 f f . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.cursor)
hero = sprites.create(img`
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
    `, SpriteKind.Player)
createCursor(Cursor0)
levelCount = 27
currentLevel = 0
setLevelTileMap0(currentLevel)
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777799999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777799999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777799999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777799999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777799999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777799999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777799999999999999999999999999999999999999999999999
    9999999999999999999999999999fffff99999999999999fffff777777ffffffffffffffffffffff777777ffffff77777777777fffff777779fffff999999999999fffff999999999999999999999999
    9999999999999999999999999999ffffff999999999999ffffff777777ffffffffffffffffffffff777777fffffff7777777777fffff777779fffff999999999999fffff999999999999999999999999
    9999999999999999999999999999fffffff9999999999fffffff777777ffffffffffffffffffffff777777fffffff7777777777fffff777779fffff999999999999fffff999999999999999999999999
    9999999999999999999999999999ffffffff99999999ffffffff777777ffffffffffffffffffffff777777ffffffff777777777fffff777779fffff999999999999fffff999999999999999999999999
    9999999999999999999999999999fffffffff999999fffffffff777777ffffffffffffffffffffff777777fffffffff77777777fffff777779fffff999999999999fffff999999999999999999999999
    9999999999999999999999999999ffffffffff9999ffffffffff777777fffff77777777777777777777777fffffffff77777777fffff777779fffff999999999999fffff999999999999999999999999
    9999999999999999999999999999fffffffffff99fffffffffff777777fffff77777777777777777777777ffffffffff7777777fffff777779fffff999999999999fffff999999999999999999999999
    9999999999999999999999999999ffffffffffffffffffffffff777777fffff77777777777777777777777fffffffffff777777fffff777779fffff999999999999fffff999999999999999999999999
    9999999999999999999999999999ffffffffffffffffffffffff777777fffff77777777777777777777777fffffffffff777777fffff777779fffff999999999999fffff999999999999999999999999
    9999999999999999999999999999ffffffffffffffffffffffff777777fffff77777777777777777777777ffffffffffff77777fffff777779fffff999999999999fffff999999999999999999999999
    9999999999999999999999999999fffff9ffffffffffff9fffff777777fffff77777777777777777777777fffffffffffff7777fffff777779fffff999999999999fffff999999999999999999999999
    9999999999999999999999999999fffff99ffffffffff99fffff777777fffff77777777777777777777777fffff7fffffff7777fffff777779fffff999999999999fffff999999999999999999999999
    9999999999999999999999999999fffff999ffffffff999fffff777777ffffffffffffff77777777777777fffff7ffffffff777fffff777779fffff999999999999fffff999999999999999999999999
    9999999999999999999999999999fffff9999ffffff9999fffff777777ffffffffffffff77777777777777fffff77ffffffff77fffff777779fffff999999999999fffff999999999999999999999999
    9999999999999999999999999999fffff99999fffff9999fffff777777ffffffffffffff77777777777777fffff777ffffffff7fffff777779fffff999999999999fffff999999999999999999999999
    9999999999999999999999999999fffff99999999999999fffff777777ffffffffffffff77777777777777fffff777ffffffff7fffff777779fffff999999999999fffff999999999999999999999999
    7777777777777777777777777777fffff77777777777777fffff777777ffffffffffffff77777777777777fffff7777fffffffffffff777777fffff777777777777fffff777777777777777777777777
    7777777777777777777777777777fffff77777777777777fffff777777fffff77777777777777777777777fffff77777ffffffffffff777777fffff777777777777fffff777777777777777777777777
    7777777777777777777777777777fffff77777777777777fffff777777fffff77777777777777777777777fffff777777fffffffffff777777fffff777777777777fffff777777777777777777777777
    7777777777777777777777777777fffff77777777777777fffff777777fffff77777777777777777777777fffff777777fffffffffff777777fffff777777777777fffff777777777777777777777777
    7777777777777777777777777777fffff77777777777777fffff777777fffff77777777777777777777777fffff7777777ffffffffff777777ffffff7777777777ffffff777777777777777777777777
    7777777777777777777777777777fffff77777777777777fffff777777fffff77777777777777777777777fffff77777777fffffffff777777ffffffff777777ffffffff777777777777777777777777
    7777777777777777777777777777fffff77777777777777fffff777777fffff77777777777777777777777fffff77777777fffffffff777777ffffffffff77ffffffffff777777777777777777777777
    7777777777777777777777777777fffff77777777777777fffff777777ffffffffffffffffffffff777777fffff777777777ffffffff7777777fffffffffffffffffffff777777777777777777777777
    7777777777777777777777777777fffff77777777777777fffff777777ffffffffffffffffffffff777777fffff7777777777fffffff7777777ffffffffffffffffffff7777777777777777777777777
    7777777777777777777777777777fffff77777777777777fffff777777ffffffffffffffffffffff777777fffff7777777777fffffff77777777ffffffffffffffffff77777777777777777777777777
    7777777777777777777777777777fffff77777777777777fffff777777ffffffffffffffffffffff777777fffff77777777777ffffff7777777777ffffffffffffff7777777777777777777777777777
    7777777777777777777777777777fffff77777777777777fffff777777ffffffffffffffffffffff777777fffff777777777777fffff777777777777ffffffffff777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777fffffff777777777777777777777777777777777777777777777777777777777777777777777777fffffff7777777777777777777777777777777777
    7777777777777777777777777777777777777777fffffff777777777777777777777777777777777777777777777777777777777777777777777777fffffff7777777777777777777777777777777777
    7777777777777777777777777777777777777777fffffff777777777777777777777777777777777777777777777777777777777777777777777777fffffff7777777777777777777777777777777777
    7777777777777777777777777777777777777777fffffff777777777777777777777777777777777777777777777777777777777777777777777777fffffff7777777777777777777777777777777777
    7777777777777777777777777777777777777777fffffff777777777777777777777777777777777777777777777777777777777777777777777777fffffff7777777777777777777777777777777777
    7777777777777777777777777777777777777777fffffff777777777777777777777777777777777777777777777777777777777777777777777777fffffff7777777777777777777777777777777777
    7777777777777777777777777777777777777777fffffff777777777777777777777777777777777777777777777777777777777777777777777777fffffff7777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    6666666666666111111111111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777771111111111111111111111111111111116666666666666
    6666666666666111111111111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777771111111111111111111111111111111116666666666666
    6666666666666111111111111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777771111111111111111111111111111111116666666666666
    6666666666666111111111111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777771111111111111111111111111111111116666666666666
    6666666666666111111111111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777771111111111111111111111111111111116666666666666
    6666666666666111111111111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777771111111111111111111111111111111116666666666666
    6666666666666111111111111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777771111111111111111111111111111111116666666666666
    6666666666666111111111111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777771111111111111111111111111111111116666666666666
    6666666666666111111111111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777771111111111111111111111111111111116666666666666
    6666666666666111111111111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777771111111111111111111111111111111116666666666666
    6666666666666111111111111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777771111111111111111111111111111111116666666666666
    6666666666666111111111111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777771111111111111111111111111111111116666666666666
    6666666666666111111111111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777771111111111111111111111111111111116666666666666
    6666666666666111111111111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777771111111111111111111111111111111116666666666666
    6666666666666111111111111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777771111111111111111111111111111111116666666666666
    6666666666666111111111111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777771111111111111111111111111111111116666666666666
    6666666666666111111111111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777771111111111111111111111111111111116666666666666
    6666666666666111111111111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777771111111111111111111111111111111116666666666666
    6666666666666111111111111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777771111111111111111111111111111111116666666666666
    6666666666666111111111111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777771111111111111111111111111111111116666666666666
    6666666666666111111111111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777771111111111111111111111111111111116666666666666
    6666666666666111111111111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777771111111111111111111111111111111116666666666666
    6666666666666111111111111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777771111111111111111111111111111111116666666666666
    6666666666666111111111111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777771111111111111111111111111111111116666666666666
    6666666666666666666666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666
    6666666666666666666666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666
    6666666666666666666666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666
    6666666666666666666666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666
    6666666666666666666666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666
    6666666666666666666666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666
    6666666666666666666666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666
    6666666666666666666666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666
    6666666666666666666666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666
    6666666666666666666666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666
    6666666666666666666666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666
    6666666666666666666666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666
    6666666666666666666666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666
    6666666666666666666666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666
    6666666666666666666666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666
    6666666666666666666666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666
    6666666666666666666666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666
    6666666666666666666666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666
    6666666666666666666666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666
    6666666666666666666666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666
    6666666666666666666666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666
    6666666666666666666666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666
    6666666666666666666666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666
    6666666666666666666666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666
    6666666666666666666666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666
    6666666666666666666666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666
    6666666666666666666666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666
    6666666666666666666666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666
    6666666666666666666666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666
    6666666666666666666666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666
    6666666666666666666666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666
    6666666666666666666666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666
    6666666666666666666666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666
    6666666666666666666666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666
    6666666666666666666666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666
    6666666666666666666666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666
    `)
game.onUpdate(function () {
    if (hero.isHittingTile(CollisionDirection.Bottom)) {
        canDoubleJump = true
    }
})
game.onUpdate(function () {
    for (let value9 of sprites.allOfKind(SpriteKind.Bumper)) {
        if (value9.isHittingTile(CollisionDirection.Left)) {
            value9.vx = Math.randomRange(30, 60)
        } else if (value9.isHittingTile(CollisionDirection.Right)) {
            value9.vx = Math.randomRange(-60, -30)
        }
    }
})
game.onUpdate(function () {
    for (let value11 of sprites.allOfKind(SpriteKind.caveBoss)) {
        if (value11.isHittingTile(CollisionDirection.Top)) {
            value11.ay = Math.randomRange(30, 60)
        } else if (value11.isHittingTile(CollisionDirection.Bottom)) {
            value11.ay = Math.randomRange(-60, -30)
        }
    }
})
game.onUpdate(function () {
    if (hero.vx < 0) {
        heroFacingLeft = true
    } else if (hero.vx > 0) {
        heroFacingLeft = false
    }
    if (hero.isHittingTile(CollisionDirection.Top)) {
        hero.vy = 0
    }
    if (controller.down.isPressed()) {
        if (heroFacingLeft) {
            animation.setAction(hero, ActionKind.CrouchLeft)
        } else {
            animation.setAction(hero, ActionKind.CrouchRight)
        }
    } else if (hero.vy < 20 && !(hero.isHittingTile(CollisionDirection.Bottom))) {
        if (heroFacingLeft) {
            animation.setAction(hero, ActionKind.JumpingLeft)
        } else {
            animation.setAction(hero, ActionKind.JumpingRight)
        }
    } else if (hero.vx < 0) {
        animation.setAction(hero, ActionKind.RunningLeft)
    } else if (hero.vx > 0) {
        animation.setAction(hero, ActionKind.RunningRight)
    } else {
        if (heroFacingLeft) {
            animation.setAction(hero, ActionKind.IdleLeft)
        } else {
            animation.setAction(hero, ActionKind.IdleRight)
        }
    }
})
forever(function () {
    music.setVolume(80)
    if (currentLevel < 10) {
        music.playMelody("G B A G C5 B A B ", 250)
    } else {
        music.stopAllSounds()
    }
    if (currentLevel < 10) {
        music.playMelody("A F E F D G E F ", 250)
    } else {
        music.stopAllSounds()
    }
    if (currentLevel < 10) {
        music.playMelody("G F G A - F E D ", 250)
    } else {
        music.stopAllSounds()
    }
    if (currentLevel < 10) {
        music.playMelody("E B C5 A B G A F ", 250)
    } else {
        music.stopAllSounds()
    }
    if (currentLevel >= 10) {
        music.setVolume(60)
        music.playMelody("E B C5 A B G A F ", 250)
    } else {
        music.stopAllSounds()
    }
})
