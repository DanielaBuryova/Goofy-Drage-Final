class ActionKind(Enum):
    RunningLeft = 0
    RunningRight = 1
    Idle = 2
    IdleLeft = 3
    IdleRight = 4
    JumpingLeft = 5
    JumpingRight = 6
    CrouchLeft = 7
    CrouchRight = 8
    Flying = 9
    Walking = 10
    Jumping = 11
@namespace
class SpriteKind:
    Bumper = SpriteKind.create()
    Goal = SpriteKind.create()
    Coin = SpriteKind.create()
    Flier = SpriteKind.create()
    key = SpriteKind.create()
def initializeKeyAni():
    global KeyAni
    KeyAni = animation.create_animation(ActionKind.Idle, 225)
    KeyAni.add_animation_frame(img("""
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
    """))
    KeyAni.add_animation_frame(img("""
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
    """))
    KeyAni.add_animation_frame(img("""
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
    """))
    KeyAni.add_animation_frame(img("""
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
    """))
    KeyAni.add_animation_frame(img("""
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
    """))
    KeyAni.add_animation_frame(img("""
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
    """))
    KeyAni.add_animation_frame(img("""
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
    """))
    KeyAni.add_animation_frame(img("""
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
    """))

def on_on_overlap(sprite, otherSprite):
    if sprite.vy > 0 and not (sprite.is_hitting_tile(CollisionDirection.BOTTOM)) or sprite.y < otherSprite.top:
        otherSprite.destroy(effects.ashes, 250)
        otherSprite.vy = -50
        sprite.vy = -2 * pixelsToMeters
        info.change_score_by(3)
    else:
        info.change_life_by(-1)
        sprite.say("Ow!", invincibilityPeriod)
    pause(invincibilityPeriod)
sprites.on_overlap(SpriteKind.player, SpriteKind.Bumper, on_on_overlap)

def initializeAnimations():
    initializeHeroAnimations()
    initializeKeyAni()
def giveIntroduction():
    game.set_dialog_frame(img("""
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
    """))
    game.set_dialog_cursor(img("""
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
    """))
    showInstruction("Move with the ←/A and →/D buttons.")
    showInstruction("Jump with the ↑/W or A button.")
    showInstruction("Double jump by pressing jump again.")
    showInstruction("Don't get your face burnt or you'll lose lifes.")
    showInstruction("Play with friends, gain as much points as possible, beat your friends and become the best GOOFY DRAGON in the whole universe! Good luck!")

def on_up_pressed():
    attemptJump()
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def animateDrage():
    global mainDrageLeft, mainDrageRight
    mainDrageLeft = animation.create_animation(ActionKind.CrouchLeft, 100)
    animation.attach_animation(hero, mainDrageLeft)
    mainDrageLeft.add_animation_frame(img("""
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
    """))
    mainDrageRight = animation.create_animation(ActionKind.CrouchRight, 100)
    animation.attach_animation(hero, mainDrageRight)
    mainDrageRight.add_animation_frame(img("""
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
    """))
def attemptJump():
    global doubleJumpSpeed, canDoubleJump
    # else if: either fell off a ledge, or double jumping
    if hero.is_hitting_tile(CollisionDirection.BOTTOM):
        hero.vy = -4 * pixelsToMeters
    elif canDoubleJump:
        doubleJumpSpeed = -3 * pixelsToMeters
        # Good double jump
        if hero.vy >= -40:
            doubleJumpSpeed = -4.5 * pixelsToMeters
            hero.start_effect(effects.trail, 500)
            scene.camera_shake(2, 150)
        hero.vy = doubleJumpSpeed
        canDoubleJump = False
def animateIdle():
    global mainIdleLeft, mainIdleRight
    mainIdleLeft = animation.create_animation(ActionKind.IdleLeft, 100)
    animation.attach_animation(hero, mainIdleLeft)
    mainIdleLeft.add_animation_frame(img("""
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
    """))
    mainIdleRight = animation.create_animation(ActionKind.IdleRight, 100)
    animation.attach_animation(hero, mainIdleRight)
    mainIdleRight.add_animation_frame(img("""
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
    """))
def setLevelTileMap(level: number):
    clearGame()
    if level == 0:
        tiles.set_tilemap(tilemap("""
            level
        """))
    elif level == 1:
        tiles.set_tilemap(tilemap("""
            level_0
        """))
    initializeLevel(level)

def on_a_pressed():
    attemptJump()
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def animateRun():
    global mainRunLeft, mainRunRight
    mainRunLeft = animation.create_animation(ActionKind.RunningLeft, 100)
    animation.attach_animation(hero, mainRunLeft)
    mainRunLeft.add_animation_frame(img("""
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
    """))
    mainRunLeft.add_animation_frame(img("""
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
    """))
    mainRunLeft.add_animation_frame(img("""
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
    """))
    mainRunLeft.add_animation_frame(img("""
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
    """))
    mainRunRight = animation.create_animation(ActionKind.RunningRight, 100)
    animation.attach_animation(hero, mainRunRight)
    mainRunRight.add_animation_frame(img("""
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
    """))
    mainRunRight.add_animation_frame(img("""
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
    """))
    mainRunRight.add_animation_frame(img("""
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
    """))
    mainRunRight.add_animation_frame(img("""
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
    """))
def animateJumps():
    global mainJumpLeft, mainJumpRight
    # Because there isn't currently an easy way to say "play this animation a single time
    # and stop at the end", this just adds a bunch of the same frame at the end to accomplish
    # the same behavior
    mainJumpLeft = animation.create_animation(ActionKind.JumpingLeft, 100)
    animation.attach_animation(hero, mainJumpLeft)
    mainJumpLeft.add_animation_frame(img("""
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
    """))
    mainJumpLeft.add_animation_frame(img("""
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
    """))
    for index in range(30):
        mainJumpLeft.add_animation_frame(img("""
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
        """))
    mainJumpRight = animation.create_animation(ActionKind.JumpingRight, 100)
    animation.attach_animation(hero, mainJumpRight)
    mainJumpRight.add_animation_frame(img("""
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
    """))
    mainJumpRight.add_animation_frame(img("""
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
    """))
    for index2 in range(30):
        mainJumpRight.add_animation_frame(img("""
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
        """))
def clearGame():
    for value in sprites.all_of_kind(SpriteKind.Bumper):
        value.destroy()
    for value2 in sprites.all_of_kind(SpriteKind.key):
        value2.destroy()
    for value3 in sprites.all_of_kind(SpriteKind.Goal):
        value3.destroy()

def on_overlap_tile(sprite, location):
    global currentLevel
    info.change_life_by(1)
    currentLevel += 1
    if hasNextLevel():
        game.splash("Next level unlocked!")
        setLevelTileMap(currentLevel)
    else:
        game.over(True, effects.confetti)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        tile11
    """),
    on_overlap_tile)

def createEnemies():
    global fire
    # enemy that moves back and forth
    for value5 in tiles.get_tiles_by_type(assets.tile("""
        tile10
    """)):
        fire = sprites.create(img("""
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
            """),
            SpriteKind.Bumper)
        tiles.place_on_tile(fire, value5)
        tiles.set_tile_at(value5, assets.tile("""
            tile0
        """))
        fire.ay = gravity
        if Math.percent_chance(50):
            fire.vx = Math.random_range(30, 60)
        else:
            fire.vx = Math.random_range(-60, -30)

def on_down_pressed():
    if not (hero.is_hitting_tile(CollisionDirection.BOTTOM)):
        hero.vy += 80
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

def showInstruction(text: str):
    game.show_long_text(text, DialogLayout.BOTTOM)
    info.change_score_by(1)
def initializeHeroAnimations():
    animateRun()
    animateIdle()
    animateDrage()
    animateJumps()
def createPlayer(player2: Sprite):
    player2.ay = gravity
    scene.camera_follow_sprite(player2)
    controller.move_sprite(player2, 100, 0)
    player2.z = 5
    info.set_life(3)
    info.set_score(0)

def on_on_overlap2(sprite, otherSprite):
    otherSprite.destroy(effects.trail, 250)
    otherSprite.y += -3
    info.change_score_by(5)
sprites.on_overlap(SpriteKind.player, SpriteKind.key, on_on_overlap2)

def initializeLevel(level: number):
    global playerStartLocation
    effects.clouds.start_screen_effect()
    playerStartLocation = tiles.get_tiles_by_type(assets.tile("""
        tile9
    """))[0]
    tiles.place_on_tile(hero, playerStartLocation)
    tiles.set_tile_at(playerStartLocation, assets.tile("""
        tile0
    """))
    createEnemies()
    spawnGoals()
def hasNextLevel():
    return currentLevel != levelCount
def spawnGoals():
    global key2
    for value7 in tiles.get_tiles_by_type(assets.tile("""
        tile8
    """)):
        key2 = sprites.create(img("""
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
            """),
            SpriteKind.key)
        tiles.set_tile_at(value7, assets.tile("""
            tile0
        """))
        tiles.place_on_tile(key2, value7)
        animation.attach_animation(key2, KeyAni)
        animation.set_action(key2, ActionKind.Idle)
heroFacingLeft = False
key2: Sprite = None
playerStartLocation: tiles.Location = None
fire: Sprite = None
mainJumpRight: animation.Animation = None
mainJumpLeft: animation.Animation = None
mainRunRight: animation.Animation = None
mainRunLeft: animation.Animation = None
mainIdleRight: animation.Animation = None
mainIdleLeft: animation.Animation = None
doubleJumpSpeed = 0
canDoubleJump = False
mainDrageRight: animation.Animation = None
mainDrageLeft: animation.Animation = None
KeyAni: animation.Animation = None
currentLevel = 0
levelCount = 0
gravity = 0
pixelsToMeters = 0
invincibilityPeriod = 0
hero: Sprite = None
hero = sprites.create(img("""
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
    """),
    SpriteKind.player)
# how long to pause between each contact with a
# single enemy
invincibilityPeriod = 600
pixelsToMeters = 30
gravity = 9.81 * pixelsToMeters
scene.set_background_image(img("""
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
"""))
initializeAnimations()
createPlayer(hero)
levelCount = 8
currentLevel = 0
setLevelTileMap(currentLevel)
giveIntroduction()
# set up hero animations

def on_on_update():
    global heroFacingLeft
    if hero.vx < 0:
        heroFacingLeft = True
    elif hero.vx > 0:
        heroFacingLeft = False
    if hero.is_hitting_tile(CollisionDirection.TOP):
        hero.vy = 0
    if controller.down.is_pressed():
        if heroFacingLeft:
            animation.set_action(hero, ActionKind.CrouchLeft)
        else:
            animation.set_action(hero, ActionKind.CrouchRight)
    elif hero.vy < 20 and not (hero.is_hitting_tile(CollisionDirection.BOTTOM)):
        if heroFacingLeft:
            animation.set_action(hero, ActionKind.JumpingLeft)
        else:
            animation.set_action(hero, ActionKind.JumpingRight)
    elif hero.vx < 0:
        animation.set_action(hero, ActionKind.RunningLeft)
    elif hero.vx > 0:
        animation.set_action(hero, ActionKind.RunningRight)
    else:
        if heroFacingLeft:
            animation.set_action(hero, ActionKind.IdleLeft)
        else:
            animation.set_action(hero, ActionKind.IdleRight)
game.on_update(on_on_update)

# Reset double jump when standing on wall

def on_on_update2():
    global canDoubleJump
    if hero.is_hitting_tile(CollisionDirection.BOTTOM):
        canDoubleJump = True
game.on_update(on_on_update2)

# bumper movement

def on_on_update3():
    for value9 in sprites.all_of_kind(SpriteKind.Bumper):
        if value9.is_hitting_tile(CollisionDirection.LEFT):
            value9.vx = Math.random_range(30, 60)
        elif value9.is_hitting_tile(CollisionDirection.RIGHT):
            value9.vx = Math.random_range(-60, -30)
game.on_update(on_on_update3)
