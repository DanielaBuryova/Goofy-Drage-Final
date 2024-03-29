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
    key = SpriteKind.create()
    heart = SpriteKind.create()
    caveBoss = SpriteKind.create()
    button = SpriteKind.create()
    cursor = SpriteKind.create()
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
    initializecaveBossAni()
def giveIntroduction():
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
    if currentLevel == 10:
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
        showInstruction("Use ARROWS to move and A to jump. Jump in the air to DOUBLE JUMP!")
        game.set_dialog_cursor(img("""
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
        """))
        showInstruction("Don't get your face burnt or you'll lose your lifes.")
        game.set_dialog_frame(img("""
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
        """))
        game.set_dialog_cursor(img("""
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
        """))
        showInstruction("Play with friends, gain as much points as possible, beat your friends and become the best GOOFY DRAGON in the entire universe! Good luck!")
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
    if currentLevel == 11:
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
        """))
        showInstruction("You can destroy your enemies by jumping on their heads.")
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
    if currentLevel == 12:
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
            b c c c c c c b d c c c b b b b c c c d b c c c c c c b 
                        c c f f f f f c b d c c c b b c c c d b c f f f f f c c 
                        c f f f f 2 f f c b c c c b b c c c b c f f 2 f f f f c 
                        b f f f 2 1 2 f f d b c c d d c c b d f f 2 1 2 f f f b 
                        b d f f f 2 f f f d b b c b b c b b d f f f 2 f f f d b 
                        c c b d f f f b b b d c c c c c c d b b b f f f d b c c 
                        b c c c d d d c c c c c c b b c c c c c c d d d c c c b
        """))
        showInstruction("Beware, the cave statue is more harmful, than the fire of it's anger you've already met. You need to kill this monster and escape in 10s to enter the next level.")
        game.set_dialog_cursor(img("""
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
        showInstruction("You need to collect at least 5 keys in this level to escape.")
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
    if currentLevel == 26 or currentLevel == 17:
        game.set_dialog_cursor(img("""
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
        showInstruction("You need to collect at least 5 keys in this level to escape.")
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

def on_on_overlap2(sprite2, otherSprite2):
    otherSprite2.destroy(effects.halo, 250)
    otherSprite2.y += 3
    info.change_life_by(1)
sprites.on_overlap(SpriteKind.player, SpriteKind.heart, on_on_overlap2)

def setLevelTileMap0(level: number):
    global Cursor0, Play, Score, Options, Credits, back, exit2, gravity, invincibilityPeriod, isKilled, keyCount
    clearGame()
    if level == 0:
        scene.set_background_image(img("""
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
        """))
        Cursor0 = sprites.create(img("""
                . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . f f f f . . . . . . 
                            . . . . . . f 2 2 f . . . . . . 
                            . . . . . . f 2 2 f . . . . . . 
                            . . . . . . f f f f . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . .
            """),
            SpriteKind.cursor)
        Play = sprites.create(img("""
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
            """),
            SpriteKind.button)
        Score = sprites.create(img("""
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
            """),
            SpriteKind.button)
        Options = sprites.create(img("""
                fffffffffffffffffffffffffffffffffffffffffffff
                            f5555555555555555555555555555555555555555555f
                            f55fff55ffff55fffff5fffff55fff55f555f55fff55f
                            f5f555f5f555f555f55555f555f555f5f555f5f555f5f
                            f5f555f5f555f555f55555f555f555f5ff55f5f55555f
                            f5f555f5ffff5555f55555f555f555f5f5f5f55fff55f
                            f5f555f5f5555555f55555f555f555f5f5f5f55555f5f
                            f5f555f5f5555555f55555f555f555f5f55ff5f555f5f
                            f55fff55f5555555f555fffff55fff55f555f55fff55f
                            f5555555555555555555555555555555555555555555f
                            fffffffffffffffffffffffffffffffffffffffffffff
            """),
            SpriteKind.button)
        Credits = sprites.create(img("""
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
            """),
            SpriteKind.button)
        back = sprites.create(img("""
                f f f f f f f f f f f f f f f f f f f f f f f f f f f 
                            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
                            f 5 f f f f 5 5 5 f f f 5 5 5 f f f 5 5 f 5 5 5 f 5 f 
                            f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 f 5 5 f 
                            f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 5 5 f 5 f 5 5 5 f 
                            f 5 f f f f 5 5 f 5 5 5 f 5 f 5 5 5 5 5 f f 5 5 5 5 f 
                            f 5 f 5 5 5 f 5 f f f f f 5 f 5 5 5 5 5 f 5 f 5 5 5 f 
                            f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 5 f 5 f 5 5 f 5 5 f 
                            f 5 f f f f 5 5 f 5 5 5 f 5 5 f f f 5 5 f 5 5 5 f 5 f 
                            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
                            f f f f f f f f f f f f f f f f f f f f f f f f f f f
            """),
            SpriteKind.button)
        exit2 = sprites.create(img("""
                f f f f f f f f f f f f f f f f f f f f f f f f f f f 
                            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
                            f 5 f f f f f 5 f 5 5 5 f 5 f f f f f 5 f f f f f 5 f 
                            f 5 f 5 5 5 5 5 f 5 5 5 f 5 5 5 f 5 5 5 5 5 f 5 5 5 f 
                            f 5 f 5 5 5 5 5 5 f 5 f 5 5 5 5 f 5 5 5 5 5 f 5 5 5 f 
                            f 5 f f f 5 5 5 5 5 f 5 5 5 5 5 f 5 5 5 5 5 f 5 5 5 f 
                            f 5 f 5 5 5 5 5 5 f 5 f 5 5 5 5 f 5 5 5 5 5 f 5 5 5 f 
                            f 5 f 5 5 5 5 5 f 5 5 5 f 5 5 5 f 5 5 5 5 5 f 5 5 5 f 
                            f 5 f f f f f 5 f 5 5 5 f 5 f f f f f 5 5 5 f 5 5 5 f 
                            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
                            f f f f f f f f f f f f f f f f f f f f f f f f f f f
            """),
            SpriteKind.button)
        Cursor0.set_position(80, 50)
        Play.set_position(80, 50)
        Score.set_position(80, 65)
        Options.set_position(80, 80)
        Credits.set_position(80, 95)
        exit2.set_position(80, 110)
        back.set_position(80, 110)
        controller.move_sprite(Cursor0, 0, controller.dy())
    if level != 0:
        Play.destroy()
        Score.destroy()
        Options.destroy()
        Credits.destroy()
    if level == 10:
        gravity = 9.81 * pixelsToMeters
        invincibilityPeriod = 600
        giveIntroduction()
        scene.set_background_image(img("""
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
        """))
        tiles.set_tilemap(tilemap("""
            level_1
        """))
        info.set_score(0)
    elif level == 11:
        tiles.set_tilemap(tilemap("""
            level2
        """))
    elif level == 12:
        scene.set_background_image(img("""
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
        """))
        tiles.set_tilemap(tilemap("""
            level3
        """))
    elif level == 13:
        scene.set_background_image(img("""
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
        """))
        tiles.set_tilemap(tilemap("""
            level16
        """))
    elif level == 14:
        tiles.set_tilemap(tilemap("""
            level15
        """))
    elif level == 15:
        scene.set_background_image(img("""
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
        """))
        tiles.set_tilemap(tilemap("""
            level17
        """))
    elif level == 16:
        tiles.set_tilemap(tilemap("""
            level21
        """))
    elif level == 17:
        scene.set_background_image(img("""
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
        """))
        tiles.set_tilemap(tilemap("""
            level18
        """))
    elif level == 18:
        scene.set_background_image(img("""
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
        """))
        tiles.set_tilemap(tilemap("""
            level20
        """))
    elif level == 19:
        scene.set_background_image(img("""
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
        """))
        tiles.set_tilemap(tilemap("""
            level19
        """))
    elif level == 20:
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
        tiles.set_tilemap(tilemap("""
            level
        """))
        isKilled = 0
        keyCount = 5
    elif level == 21:
        tiles.set_tilemap(tilemap("""
            level_0
        """))
    elif level == 22:
        tiles.set_tilemap(tilemap("""
            level5
        """))
    elif level == 23:
        tiles.set_tilemap(tilemap("""
            level32
        """))
    elif level == 24:
        tiles.set_tilemap(tilemap("""
            level4
        """))
    elif level == 25:
        tiles.set_tilemap(tilemap("""
            level33
        """))
    elif level == 26:
        tiles.set_tilemap(tilemap("""
            level34
        """))
        keyCount = 5
    elif level == 27:
        tiles.set_tilemap(tilemap("""
            level35
        """))
        keyCount = 5
    elif False:
        pass
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

def on_on_overlap3(sprite3, otherSprite3):
    global currentLevel, menu, isChangedMenu
    if Cursor0.overlaps_with(Play) and controller.B.is_pressed():
        currentLevel = 10
        setLevelTileMap0(currentLevel)
        setLevelTileMap0(currentLevel)
    elif hero == 0 and controller.B.is_pressed():
        menu = 2
        isChangedMenu = True
    elif hero == 0 and controller.B.is_pressed():
        menu = 3
        isChangedMenu = True
    elif hero == 0 and controller.B.is_pressed():
        menu = 4
        isChangedMenu = True
sprites.on_overlap(SpriteKind.cursor, SpriteKind.button, on_on_overlap3)

def createCaveBoss():
    global boss
    for value0 in tiles.get_tiles_by_type(assets.tile("""
        boss
    """)):
        boss = sprites.create(img("""
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
            """),
            SpriteKind.caveBoss)
        tiles.place_on_tile(boss, value0)
        tiles.set_tile_at(value0, assets.tile("""
            tile0
        """))
        boss.ay = gravity
        if Math.percent_chance(50):
            boss.ay = Math.random_range(30, 60)
        else:
            boss.ay = Math.random_range(-60, -30)
        animation.attach_animation(boss, caveBossAni)
        animation.set_action(boss, ActionKind.Idle)
def clearGame():
    for value in sprites.all_of_kind(SpriteKind.Bumper):
        value.destroy()
    for value2 in sprites.all_of_kind(SpriteKind.key):
        value2.destroy()
    for value3 in sprites.all_of_kind(SpriteKind.Goal):
        value3.destroy()
    for value4 in sprites.all_of_kind(SpriteKind.heart):
        value4.destroy()

def on_overlap_tile(sprite4, location):
    global currentLevel
    if isKilled == 1 and keyCount <= 0:
        info.stop_countdown()
        if currentLevel < 10:
            info.change_life_by(1)
        currentLevel += 1
        if hasNextLevel():
            game.splash("Next level unlocked!")
            setLevelTileMap0(currentLevel)
        else:
            game.over(True, effects.confetti)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        tile11
    """),
    on_overlap_tile)

def createEnemies():
    global fire
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

def spawnHearts():
    global heart2
    for value10 in tiles.get_tiles_by_type(assets.tile("""
        myTile3
    """)):
        heart2 = sprites.create(img("""
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
            """),
            SpriteKind.heart)
        tiles.set_tile_at(value10, assets.tile("""
            tile0
        """))
        tiles.place_on_tile(heart2, value10)
def showInstruction(text: str):
    game.show_long_text(text, DialogLayout.BOTTOM)
def initializeHeroAnimations():
    animateRun()
    animateIdle()
    animateDrage()
    animateJumps()

def on_on_overlap4(sprite5, otherSprite4):
    global isKilled
    if sprite5.vy > 0 and not (sprite5.is_hitting_tile(CollisionDirection.TOP)) or sprite5.y < otherSprite4.top:
        otherSprite4.destroy(effects.blizzard, 250)
        otherSprite4.vy = -50
        sprite5.vy = -2 * pixelsToMeters
        info.change_score_by(25)
        info.start_countdown(10)
        pause(invincibilityPeriod)
        isKilled = 1
    else:
        info.change_life_by(-2)
        sprite5.say("Ow!", invincibilityPeriod)
sprites.on_overlap(SpriteKind.player, SpriteKind.caveBoss, on_on_overlap4)

def initializecaveBossAni():
    global caveBossAni
    caveBossAni = animation.create_animation(ActionKind.Idle, 150)
    caveBossAni.add_animation_frame(img("""
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
    """))
    caveBossAni.add_animation_frame(img("""
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
    """))
    caveBossAni.add_animation_frame(img("""
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
    """))
    caveBossAni.add_animation_frame(img("""
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
    """))
    caveBossAni.add_animation_frame(img("""
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
    """))
    caveBossAni.add_animation_frame(img("""
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
    """))
    caveBossAni.add_animation_frame(img("""
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
    """))
    caveBossAni.add_animation_frame(img("""
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
    """))
    caveBossAni.add_animation_frame(img("""
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
    """))
    caveBossAni.add_animation_frame(img("""
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
    """))
    caveBossAni.add_animation_frame(img("""
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
    """))
    caveBossAni.add_animation_frame(img("""
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
    """))
    caveBossAni.add_animation_frame(img("""
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
    """))
    caveBossAni.add_animation_frame(img("""
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
    """))
    caveBossAni.add_animation_frame(img("""
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
    """))
    caveBossAni.add_animation_frame(img("""
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
    """))
    caveBossAni.add_animation_frame(img("""
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
    """))
    caveBossAni.add_animation_frame(img("""
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
    """))
def createPlayer(player2: Sprite):
    controller.move_sprite(player2, 50, 50)
    player2.z = 5
    Cursor0.set_stay_in_screen(True)

def on_on_overlap5(sprite6, otherSprite5):
    global keyCount
    otherSprite5.destroy(effects.trail, 250)
    otherSprite5.y += -3
    info.change_score_by(5)
    keyCount += -1
sprites.on_overlap(SpriteKind.player, SpriteKind.key, on_on_overlap5)

def initializeLevel(level2: number):
    global playerStartLocation
    playerStartLocation = tiles.get_tiles_by_type(assets.tile("""
        tile9
    """))[0]
    tiles.place_on_tile(hero, playerStartLocation)
    tiles.set_tile_at(playerStartLocation, assets.tile("""
        tile0
    """))
    giveIntroduction()
    createEnemies()
    spawnGoals()
    createCaveBoss()
    spawnHearts()
    createCaveBoss()
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
heart2: Sprite = None
fire: Sprite = None
caveBossAni: animation.Animation = None
boss: Sprite = None
isChangedMenu = False
menu = 0
mainJumpRight: animation.Animation = None
mainJumpLeft: animation.Animation = None
mainRunRight: animation.Animation = None
mainRunLeft: animation.Animation = None
gravity = 0
exit2: Sprite = None
back: Sprite = None
Credits: Sprite = None
Options: Sprite = None
Score: Sprite = None
Play: Sprite = None
mainIdleRight: animation.Animation = None
mainIdleLeft: animation.Animation = None
doubleJumpSpeed = 0
canDoubleJump = False
mainDrageRight: animation.Animation = None
mainDrageLeft: animation.Animation = None
invincibilityPeriod = 0
KeyAni: animation.Animation = None
currentLevel = 0
levelCount = 0
hero: Sprite = None
Cursor0: Sprite = None
pixelsToMeters = 0
keyCount = 0
isKilled = 0
isKilled = 1
keyCount = 0
pixelsToMeters = 30
Cursor0 = sprites.create(img("""
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
    """),
    SpriteKind.cursor)
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
createPlayer(Cursor0)
levelCount = 17
currentLevel = 0
setLevelTileMap0(currentLevel)
scene.set_background_image(img("""
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
"""))

def on_on_update():
    global canDoubleJump
    if hero.is_hitting_tile(CollisionDirection.BOTTOM):
        canDoubleJump = True
game.on_update(on_on_update)

def on_on_update2():
    for value9 in sprites.all_of_kind(SpriteKind.Bumper):
        if value9.is_hitting_tile(CollisionDirection.LEFT):
            value9.vx = Math.random_range(30, 60)
        elif value9.is_hitting_tile(CollisionDirection.RIGHT):
            value9.vx = Math.random_range(-60, -30)
game.on_update(on_on_update2)

def on_on_update3():
    for value11 in sprites.all_of_kind(SpriteKind.caveBoss):
        if value11.is_hitting_tile(CollisionDirection.TOP):
            value11.ay = Math.random_range(30, 60)
        elif value11.is_hitting_tile(CollisionDirection.BOTTOM):
            value11.ay = Math.random_range(-60, -30)
game.on_update(on_on_update3)

def on_on_update4():
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
game.on_update(on_on_update4)
