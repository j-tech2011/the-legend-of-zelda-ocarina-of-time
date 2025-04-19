namespace SpriteKind {
    export const dekutree = SpriteKind.create()
    export const NPC_DONE = SpriteKind.create()
    export const heartman = SpriteKind.create()
    export const map = SpriteKind.create()
    export const dot = SpriteKind.create()
    export const bowman = SpriteKind.create()
    export const arrow = SpriteKind.create()
    export const bigprojectile = SpriteKind.create()
    export const Enemy2 = SpriteKind.create()
    export const Enemy3 = SpriteKind.create()
    export const Enemy4 = SpriteKind.create()
    export const spotter = SpriteKind.create()
    export const zoraman = SpriteKind.create()
    export const gerudo = SpriteKind.create()
    export const malon = SpriteKind.create()
    export const impa = SpriteKind.create()
    export const boss = SpriteKind.create()
    export const ball = SpriteKind.create()
    export const goodball = SpriteKind.create()
    export const princess = SpriteKind.create()
}
namespace StatusBarKind {
    export const EnemyHealth2 = StatusBarKind.create()
    export const EnemyHealth3 = StatusBarKind.create()
    export const EnemyHealth4 = StatusBarKind.create()
    export const EnemyHealth5 = StatusBarKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile8`)
    prize = randint(1, 5)
    if (prize == 2) {
        game.setDialogTextColor(13)
        game.setDialogFrame(img`
            ..bbbbbbbbbbbbbbbbbbbb..
            .bd111111111111111111db.
            bd1dbbbbbbbbbbbbbbbbd1db
            b1dbbbbbbbbbbbbbbbbbbd1b
            b1bdffffffffffffffffdb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bdffffffffffffffffdb1b
            bd1bbbbbbbbbbbbbbbbbb1db
            bbd111111111111111111dbb
            .bbbbbbbbbbbbbbbbbbbbbb.
            ..bbbbbbbbbbbbbbbbbbbb..
            `)
        game.showLongText("You got 10 Rupees!", DialogLayout.Bottom)
        info.changeScoreBy(10)
    } else if (prize == 3) {
        game.setDialogTextColor(13)
        game.setDialogFrame(img`
            ..bbbbbbbbbbbbbbbbbbbb..
            .bd111111111111111111db.
            bd1dbbbbbbbbbbbbbbbbd1db
            b1dbbbbbbbbbbbbbbbbbbd1b
            b1bdffffffffffffffffdb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bdffffffffffffffffdb1b
            bd1bbbbbbbbbbbbbbbbbb1db
            bbd111111111111111111dbb
            .bbbbbbbbbbbbbbbbbbbbbb.
            ..bbbbbbbbbbbbbbbbbbbb..
            `)
        if (quiverstatus == true) {
            game.showLongText("You got 1 Arrow!", DialogLayout.Bottom)
            if (quiver.value <= 29) {
                quiver.value += 1
            } else {
                quiver.value += 0
            }
        } else {
            game.showLongText("You got nothing!", DialogLayout.Bottom)
        }
    } else if (prize == 4) {
        game.setDialogTextColor(13)
        game.setDialogFrame(img`
            ..bbbbbbbbbbbbbbbbbbbb..
            .bd111111111111111111db.
            bd1dbbbbbbbbbbbbbbbbd1db
            b1dbbbbbbbbbbbbbbbbbbd1b
            b1bdffffffffffffffffdb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bdffffffffffffffffdb1b
            bd1bbbbbbbbbbbbbbbbbb1db
            bbd111111111111111111dbb
            .bbbbbbbbbbbbbbbbbbbbbb.
            ..bbbbbbbbbbbbbbbbbbbb..
            `)
        if (quiverstatus == true) {
            game.showLongText("You got 3 Arrows!", DialogLayout.Bottom)
            if (quiver.value <= 27) {
                quiver.value += 3
            } else {
                quiver.value += 0
            }
        } else {
            game.showLongText("You got nothing!", DialogLayout.Bottom)
        }
    } else if (prize == 5) {
        game.setDialogTextColor(13)
        game.setDialogFrame(img`
            ..bbbbbbbbbbbbbbbbbbbb..
            .bd111111111111111111db.
            bd1dbbbbbbbbbbbbbbbbd1db
            b1dbbbbbbbbbbbbbbbbbbd1b
            b1bdffffffffffffffffdb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bdffffffffffffffffdb1b
            bd1bbbbbbbbbbbbbbbbbb1db
            bbd111111111111111111dbb
            .bbbbbbbbbbbbbbbbbbbbbb.
            ..bbbbbbbbbbbbbbbbbbbb..
            `)
        if (quiverstatus == true) {
            game.showLongText("You got 5 Arrows!", DialogLayout.Bottom)
            if (quiver.value <= 25) {
                quiver.value += 5
            } else {
                quiver.value += 0
            }
        } else {
            game.showLongText("You got nothing!", DialogLayout.Bottom)
        }
    } else {
        game.setDialogTextColor(13)
        game.setDialogFrame(img`
            ..bbbbbbbbbbbbbbbbbbbb..
            .bd111111111111111111db.
            bd1dbbbbbbbbbbbbbbbbd1db
            b1dbbbbbbbbbbbbbbbbbbd1b
            b1bdffffffffffffffffdb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bdffffffffffffffffdb1b
            bd1bbbbbbbbbbbbbbbbbb1db
            bbd111111111111111111dbb
            .bbbbbbbbbbbbbbbbbbbbbb.
            ..bbbbbbbbbbbbbbbbbbbb..
            `)
        game.showLongText("You got 1 Heart Piece!", DialogLayout.Bottom)
        heartcontainer += 1
    }
})
sprites.onOverlap(SpriteKind.arrow, SpriteKind.boss, function (sprite, otherSprite) {
    if (vulnerable == true) {
        sprite.destroy()
        statusbar5.value += -2.5
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileDarkGrass3, function (sprite, location) {
    info.startCountdown(5)
    for (let value of tiles.getTilesByType(sprites.castle.tileDarkGrass3)) {
        tiles.setTileAt(value, assets.tile`myTile0`)
    }
    timer.after(1000, function () {
        tiles.setTileAt(location, sprites.castle.tileDarkGrass3)
    })
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorLight0, function (sprite, location) {
    field = false
    kokiri = false
    zora = false
    kakakiro = false
    castle = true
    gerudo = false
    lake = false
    ranch = false
    volcano = false
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    controller.moveSprite(link, 100, 100)
    shieldup = false
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile3`)
    prize = randint(1, 5)
    if (prize == 2) {
        game.setDialogTextColor(13)
        game.setDialogFrame(img`
            ..bbbbbbbbbbbbbbbbbbbb..
            .bd111111111111111111db.
            bd1dbbbbbbbbbbbbbbbbd1db
            b1dbbbbbbbbbbbbbbbbbbd1b
            b1bdffffffffffffffffdb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bdffffffffffffffffdb1b
            bd1bbbbbbbbbbbbbbbbbb1db
            bbd111111111111111111dbb
            .bbbbbbbbbbbbbbbbbbbbbb.
            ..bbbbbbbbbbbbbbbbbbbb..
            `)
        game.showLongText("You got 10 Rupees!", DialogLayout.Bottom)
        info.changeScoreBy(10)
    } else if (prize == 3) {
        game.setDialogTextColor(13)
        game.setDialogFrame(img`
            ..bbbbbbbbbbbbbbbbbbbb..
            .bd111111111111111111db.
            bd1dbbbbbbbbbbbbbbbbd1db
            b1dbbbbbbbbbbbbbbbbbbd1b
            b1bdffffffffffffffffdb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bdffffffffffffffffdb1b
            bd1bbbbbbbbbbbbbbbbbb1db
            bbd111111111111111111dbb
            .bbbbbbbbbbbbbbbbbbbbbb.
            ..bbbbbbbbbbbbbbbbbbbb..
            `)
        if (quiverstatus == true) {
            game.showLongText("You got 1 Arrow!", DialogLayout.Bottom)
            if (quiver.value <= 29) {
                quiver.value += 1
            } else {
                quiver.value += 0
            }
        } else {
            game.showLongText("You got nothing!", DialogLayout.Bottom)
        }
    } else if (prize == 4) {
        game.setDialogTextColor(13)
        game.setDialogFrame(img`
            ..bbbbbbbbbbbbbbbbbbbb..
            .bd111111111111111111db.
            bd1dbbbbbbbbbbbbbbbbd1db
            b1dbbbbbbbbbbbbbbbbbbd1b
            b1bdffffffffffffffffdb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bdffffffffffffffffdb1b
            bd1bbbbbbbbbbbbbbbbbb1db
            bbd111111111111111111dbb
            .bbbbbbbbbbbbbbbbbbbbbb.
            ..bbbbbbbbbbbbbbbbbbbb..
            `)
        if (quiverstatus == true) {
            game.showLongText("You got 3 Arrows!", DialogLayout.Bottom)
            if (quiver.value <= 27) {
                quiver.value += 3
            } else {
                quiver.value += 0
            }
        } else {
            game.showLongText("You got nothing!", DialogLayout.Bottom)
        }
    } else if (prize == 5) {
        game.setDialogTextColor(13)
        game.setDialogFrame(img`
            ..bbbbbbbbbbbbbbbbbbbb..
            .bd111111111111111111db.
            bd1dbbbbbbbbbbbbbbbbd1db
            b1dbbbbbbbbbbbbbbbbbbd1b
            b1bdffffffffffffffffdb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bdffffffffffffffffdb1b
            bd1bbbbbbbbbbbbbbbbbb1db
            bbd111111111111111111dbb
            .bbbbbbbbbbbbbbbbbbbbbb.
            ..bbbbbbbbbbbbbbbbbbbb..
            `)
        if (quiverstatus == true) {
            game.showLongText("You got 5 Arrows!", DialogLayout.Bottom)
            if (quiver.value <= 25) {
                quiver.value += 5
            } else {
                quiver.value += 0
            }
        } else {
            game.showLongText("You got nothing!", DialogLayout.Bottom)
        }
    } else {
        game.setDialogTextColor(13)
        game.setDialogFrame(img`
            ..bbbbbbbbbbbbbbbbbbbb..
            .bd111111111111111111db.
            bd1dbbbbbbbbbbbbbbbbd1db
            b1dbbbbbbbbbbbbbbbbbbd1b
            b1bdffffffffffffffffdb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bdffffffffffffffffdb1b
            bd1bbbbbbbbbbbbbbbbbb1db
            bbd111111111111111111dbb
            .bbbbbbbbbbbbbbbbbbbbbb.
            ..bbbbbbbbbbbbbbbbbbbb..
            `)
        game.showLongText("You got 1 Heart Piece!", DialogLayout.Bottom)
        heartcontainer += 1
    }
})
sprites.onOverlap(SpriteKind.ball, SpriteKind.Player, function (sprite, otherSprite) {
    deadmanvolley = false
    if (shieldup == false) {
        sprite.destroy()
        info.changeLifeBy(-1)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    field = false
    kokiri = true
    zora = false
    kakakiro = false
    castle = false
    gerudo = false
    lake = false
    ranch = false
    volcano = false
})
sprites.onOverlap(SpriteKind.goodball, SpriteKind.boss, function (sprite, otherSprite) {
    tiles.destroySpritesOfKind(SpriteKind.goodball)
    damagedraw = randint(1, 8)
    if (damagedraw <= 3) {
        statusbar5.value += -5
        vulnerable = true
        deadmanvolley = false
        timer.after(3000, function () {
            vulnerable = false
            tiles.destroySpritesOfKind(SpriteKind.ball)
        })
    } else if (damagedraw >= 4) {
        deadmanvolley = true
        for (let value of sprites.allOfKind(SpriteKind.boss)) {
            orb = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . 2 4 4 4 4 2 . . . . . 
                . . . . 2 4 5 5 5 5 4 2 . . . . 
                . . . . 4 5 1 1 1 1 5 4 . . . . 
                . . . . 4 5 1 1 1 1 5 4 . . . . 
                . . . . 4 5 1 1 1 1 5 4 . . . . 
                . . . . 4 5 1 1 1 1 5 4 . . . . 
                . . . . 2 4 5 5 5 5 4 2 . . . . 
                . . . . . 2 4 4 4 4 2 . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, value, 0, 70)
            orb.follow(link, 70)
            orb.setKind(SpriteKind.ball)
            timer.after(1500, function () {
                orb.follow(link, 0)
                orb.setVelocity(0, 70)
            })
        }
    }
})
function spawnDetector () {
    scream = true
    for (let value of sprites.allOfKind(SpriteKind.Enemy4)) {
        detector = sprites.create(img`
            ..........................................................................................
            ..........................................................................................
            ....................................fffffffffffffffffff...................................
            .................................fff...................fff................................
            ..............................fff.........................fff.............................
            ...........................fff...............................fff..........................
            .........................ff.....................................ff........................
            ........................f.........................................f.......................
            ......................ff...........................................ff.....................
            .....................f...............................................f....................
            ...................ff.................................................ff..................
            ..................f.....................................................f.................
            .................f.......................................................f................
            ................f.........................................................f...............
            ...............f...........................................................f..............
            ..............f.............................................................f.............
            .............f...............................................................f............
            ............f.................................................................f...........
            ...........f...................................................................f..........
            ...........f...................................................................f..........
            ..........f.....................................................................f.........
            .........f.......................................................................f........
            .........f.......................................................................f........
            ........f.........................................................................f.......
            .......f...........................................................................f......
            .......f...........................................................................f......
            ......f.............................................................................f.....
            ......f.............................................................................f.....
            ......f.............................................................................f.....
            .....f...............................................................................f....
            .....f...............................................................................f....
            .....f...............................................................................f....
            ....f.................................................................................f...
            ....f.................................................................................f...
            ....f.................................................................................f...
            ...f...................................................................................f..
            ...f...................................................................................f..
            ...f...................................................................................f..
            ...f...................................................................................f..
            ...f...................................................................................f..
            ...f...................................................................................f..
            ...f...................................................................................f..
            ...f...................................................................................f..
            ...f...................................................................................f..
            ...f...................................................................................f..
            ...f...................................................................................f..
            ...f...................................................................................f..
            ...f...................................................................................f..
            ...f...................................................................................f..
            ...f...................................................................................f..
            ...f...................................................................................f..
            ...f...................................................................................f..
            ...f...................................................................................f..
            ...f...................................................................................f..
            ....f.................................................................................f...
            ....f.................................................................................f...
            ....f.................................................................................f...
            .....f...............................................................................f....
            .....f...............................................................................f....
            .....f...............................................................................f....
            ......f.............................................................................f.....
            ......f.............................................................................f.....
            ......f.............................................................................f.....
            .......f...........................................................................f......
            .......f...........................................................................f......
            ........f.........................................................................f.......
            .........f.......................................................................f........
            .........f.......................................................................f........
            ..........f.....................................................................f.........
            ...........f...................................................................f..........
            ...........f...................................................................f..........
            ............f.................................................................f...........
            .............f...............................................................f............
            ..............f.............................................................f.............
            ...............f...........................................................f..............
            ................f.........................................................f...............
            .................f.......................................................f................
            ..................f.....................................................f.................
            ...................ff.................................................ff..................
            .....................f...............................................f....................
            ......................ff...........................................ff.....................
            ........................f.........................................f.......................
            .........................ff.....................................ff........................
            ...........................fff...............................fff..........................
            ..............................fff.........................fff.............................
            .................................fff...................fff................................
            ....................................fffffffffffffffffff...................................
            ..........................................................................................
            ..........................................................................................
            ..........................................................................................
            `, SpriteKind.spotter)
        detector.setPosition(value.x, value.y)
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorMixed, function (sprite, location) {
    field = false
    kokiri = false
    zora = true
    kakakiro = false
    castle = false
    gerudo = false
    lake = false
    ranch = false
    volcano = false
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (canhit == true) {
        canhit = false
        if (characterAnimations.matchesRule(link, characterAnimations.rule(Predicate.MovingUp))) {
            animation.runImageAnimation(
            link,
            [img`
                ...........................
                ...........................
                ...........................
                ...........................
                ...........................
                ...........................
                ...........................
                ...........................
                ...........................
                ...........................
                ...........................
                ......ffff.................
                ....fff77fff...............
                ...fff7777fff..............
                ..fff777777fff.............
                ..ff777777777f........11...
                ..f7777777777f.......111...
                ..f7777777777f......111....
                .ff7777777777ff....111.....
                .ff7777777777ff8..111......
                .fdd77777777ddf8.111.......
                fbfd77777777dff8851........
                f8ffd777777dbfdd88.........
                f2fcf77777ef1cddc888.......
                f2f7f667766fbbcc...........
                .ff.fee6666f...............
                ....ffffffff...............
                .....ff..ff................
                `,img`
                ...........................
                ...........................
                ...........................
                ...........................
                ............1..............
                ...........111.............
                ...........111.............
                ...........111.............
                ...........111.............
                ...........111.............
                .........8.111.8...........
                ..........8.1.8............
                ...........858.............
                .......ff...8..............
                .....ff77ffcc..............
                ...fff7777fff..............
                ..fff777777fff.............
                ..fff777777fff.............
                ..f7777777777ff............
                .ff7777777777ff............
                .fff77777777fff............
                fbfd77777777dff............
                f8fd77777777df.............
                f2ffd777777df..............
                f2fcf677776f...............
                .ff7f666666f...............
                ....ffffffff...............
                .....fff...................
                `],
            100,
            false
            )
            airslash = sprites.createProjectileFromSprite(img`
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
                `, link, 0, -110)
            animation.runImageAnimation(
            airslash,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 1 . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . 1 1 . . 
                . . . . . . . . . . . . . 1 1 . 
                . . . . . . . . . . . . . . 1 . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . 1 1 . . . . 
                . . . . . . . . . . . 1 1 . . . 
                . . . . . . . . . . . . 1 1 . . 
                . . . . . . . . . . . . . 1 1 . 
                . . . . . . . . . . . . . . 1 . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . 1 1 . . . . . . 
                . . . . . . . . 1 1 1 1 . . . . 
                . . . . . . . . . . . 1 1 . . . 
                . . . . . . . . . . . . 1 1 . . 
                . . . . . . . . . . . . . 1 1 . 
                . . . . . . . . . . . . . . 1 . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . 1 1 1 1 . . . . . . 
                . . . . . . 1 1 1 1 1 1 . . . . 
                . . . . . . . . . . . 1 1 . . . 
                . . . . . . . . . . . . 1 1 . . 
                . . . . . . . . . . . . . 1 1 . 
                . . . . . . . . . . . . . . 1 . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . 1 1 1 1 1 . . . . . . 
                . . . . 1 1 1 1 1 1 1 1 . . . . 
                . . . . 1 1 1 . . . . 1 1 . . . 
                . . . . . . . . . . . . 1 1 . . 
                . . . . . . . . . . . . . 1 1 . 
                . . . . . . . . . . . . . . 1 . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . 1 1 1 1 1 . . . . . . 
                . . . 1 1 1 1 1 1 1 1 1 . . . . 
                . . 1 1 1 1 1 . . . . 1 1 . . . 
                . . 1 1 1 . . . . . . . 1 1 . . 
                . . 1 . . . . . . . . . . 1 1 . 
                . . . . . . . . . . . . . . 1 . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `],
            50,
            false
            )
            timer.after(400, function () {
                airslash.destroy()
            })
        } else if (characterAnimations.matchesRule(link, characterAnimations.rule(Predicate.MovingRight))) {
            animation.runImageAnimation(
            link,
            [img`
                ........................
                .......fff..............
                ....fffff7f.............
                ..ff6666677ff...........
                .ff666666777ff.......11.
                .f6666fff6666f......111.
                .fffff66677776f....111..
                fff6777f44ff47f...111...
                ff67fff45ddd558..111....
                f67ffd45ffddf58.111.....
                .ffddd45dddddf8851......
                ..fddd4ddddcfcc88.......
                ...f7777eeeccddc888.....
                ...feeee66c77ddc........
                ...ffffffffcccc.........
                ...fff...ff.............
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                `,img`
                ....ffffff..............
                ..ff6666f7f.............
                .ff6666f777f............
                .f666ff6666f............
                .ffff6677776f...........
                .f677744ff47f...........
                ff67f45ddd55f...........
                ffff45ffddf5f...........
                fddd45dddddf............
                .fdc4ddddcf.............
                ..fddc66ecf888..........
                ..fddc7ecc88............
                ...ccfe7c8851...........
                ...fee66c8.111..........
                ....fffff8..111.........
                .....fff.....111........
                ..............111.......
                ...............111......
                ................11......
                ........................
                ........................
                ........................
                ........................
                ........................
                `],
            100,
            false
            )
            airslash = sprites.createProjectileFromSprite(img`
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
                `, link, 110, 0)
            animation.runImageAnimation(
            airslash,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . 1 . . . . . . . . 
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
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . . . 1 1 . . . . . . 
                . . . . . . . . . 1 . . . . . . 
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
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . . . 1 1 . . . . . . 
                . . . . . . . . . 1 1 . . . . . 
                . . . . . . . . . . 1 1 . . . . 
                . . . . . . . . . . . 1 . . . . 
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
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . . . 1 1 . . . . . . 
                . . . . . . . . . 1 1 . . . . . 
                . . . . . . . . . . 1 1 . . . . 
                . . . . . . . . . . . 1 . . . . 
                . . . . . . . . . . . 1 1 . . . 
                . . . . . . . . . . . 1 1 . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . . . 1 1 . . . . . . 
                . . . . . . . . . 1 1 . . . . . 
                . . . . . . . . . . 1 1 . . . . 
                . . . . . . . . . . . 1 . . . . 
                . . . . . . . . . . . 1 1 . . . 
                . . . . . . . . . . . 1 1 . . . 
                . . . . . . . . . . . 1 1 . . . 
                . . . . . . . . . . . 1 1 . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . . . 1 1 . . . . . . 
                . . . . . . . . . 1 1 . . . . . 
                . . . . . . . . . . 1 1 . . . . 
                . . . . . . . . . . . 1 . . . . 
                . . . . . . . . . . . 1 1 . . . 
                . . . . . . . . . . . 1 1 . . . 
                . . . . . . . . . . . 1 1 . . . 
                . . . . . . . . . . 1 1 1 . . . 
                . . . . . . . . . . 1 1 1 . . . 
                . . . . . . . . . . 1 1 . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . . . 1 1 . . . . . . 
                . . . . . . . . . 1 1 . . . . . 
                . . . . . . . . . . 1 1 . . . . 
                . . . . . . . . . . . 1 . . . . 
                . . . . . . . . . . . 1 1 . . . 
                . . . . . . . . . . . 1 1 . . . 
                . . . . . . . . . . . 1 1 . . . 
                . . . . . . . . . . 1 1 1 . . . 
                . . . . . . . . . . 1 1 1 . . . 
                . . . . . . . . . 1 1 1 . . . . 
                . . . . . . . . . 1 1 1 . . . . 
                . . . . . . . . 1 1 1 . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `],
            50,
            false
            )
            timer.after(400, function () {
                airslash.destroy()
            })
        } else if (characterAnimations.matchesRule(link, characterAnimations.rule(Predicate.MovingDown))) {
            animation.runImageAnimation(
            link,
            [img`
                ......ffff...............
                ....fff77fff.............
                ...fff7777fff............
                ..fff666666fff...........
                ..ff677777766f........11.
                ..f67ffffff76f.......111.
                ..fff44ff45fff......111..
                .fff45555555fff....111...
                .ff455dddd555ff8..111....
                .fd45ffddff55df8.111.....
                fbf4dddddddd5ff8851......
                f8ffdddddcddbfdd88.......
                f2f4f7777eef1cddc888.....
                f2f.f77ee77fbbcc.........
                .ff.fee6666f.............
                ....ffffffff.............
                .....ff..ff..............
                .........................
                .........................
                .........................
                .........................
                .........................
                .........................
                .........................
                .........................
                .........................
                .........................
                .........................
                `,img`
                .........................
                .........................
                .......ff................
                .....ff77ff..............
                ...fff7777fff............
                ..fff777777fff...........
                ..fff777777fff...........
                ..f6666666666ff..........
                .ff6744ff4576ff..........
                .fff45dddd55fff..........
                fbf45ffddff55ff..........
                f8f4ddddddd55f...........
                f2ffdddddcdd5c...........
                f2fcf77777f7c............
                .ff7f66666f7c............
                ....ffffffddc............
                .....ffffcddc............
                ..........cc.............
                ..........8..............
                .........858.............
                ........8.1.8............
                .......8.111.8...........
                .........111.............
                .........111.............
                .........111.............
                .........111.............
                .........111.............
                ..........1..............
                `],
            100,
            false
            )
            airslash = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 1 1 1 1 1 . . . . 
                . . . . . 1 1 1 1 1 1 1 1 1 . . 
                . . . . 1 1 . . . . 1 1 1 1 1 . 
                . . . 1 1 . . . . . . . 1 1 1 . 
                . . 1 1 . . . . . . . . . . 1 . 
                . . 1 . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, link, 0, 110)
            animation.runImageAnimation(
            airslash,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 1 . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 1 . 
                . . . . . . . . . . . . . 1 1 . 
                . . . . . . . . . . . . 1 1 . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 1 . 
                . . . . . . . . . . . . . 1 1 . 
                . . . . . . . . . . . . 1 1 . . 
                . . . . . . . . . . . 1 1 . . . 
                . . . . . . . . . . 1 1 . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 1 . 
                . . . . . . . . . . . . . 1 1 . 
                . . . . . . . . . . . . 1 1 . . 
                . . . . . . . . . . . 1 1 . . . 
                . . . . . . . . 1 1 1 1 . . . . 
                . . . . . . . . 1 1 . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 1 . 
                . . . . . . . . . . . . . 1 1 . 
                . . . . . . . . . . . . 1 1 . . 
                . . . . . . . . . . . 1 1 . . . 
                . . . . . . 1 1 1 1 1 1 . . . . 
                . . . . . . 1 1 1 1 . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 1 . 
                . . . . . . . . . . . . . 1 1 . 
                . . . . . . . . . . . . 1 1 . . 
                . . . . 1 1 1 . . . . 1 1 . . . 
                . . . . 1 1 1 1 1 1 1 1 . . . . 
                . . . . . 1 1 1 1 1 . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 1 . 
                . . 1 . . . . . . . . . . 1 1 . 
                . . 1 1 1 . . . . . . . 1 1 . . 
                . . 1 1 1 1 1 . . . . 1 1 . . . 
                . . . 1 1 1 1 1 1 1 1 1 . . . . 
                . . . . . 1 1 1 1 1 . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `],
            50,
            false
            )
            timer.after(400, function () {
                airslash.destroy()
            })
        } else if (characterAnimations.matchesRule(link, characterAnimations.rule(Predicate.MovingLeft))) {
            animation.runImageAnimation(
            link,
            [img`
                ........................
                ..............fff.......
                .............f7fffff....
                ...........ff7766666ff..
                .11.......ff777666666ff.
                .111......f6666fff6666f.
                ..111....f67777666fffff.
                ...111...f74ff44f7776fff
                ....111..855ddd54fff76ff
                .....111.85fddff54dff76f
                ......1588fddddd54dddff.
                .......88ccfcdddd4dddf..
                .....888cddcceee7777f...
                ........cdd77c66eeeef...
                .........ccccffffffff...
                .............ff...fff...
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                `,img`
                ..............ffffff....
                .............f7f6666ff..
                ............f777f6666ff.
                ............f6666ff666f.
                ...........f6777766ffff.
                ...........f74ff447776f.
                ...........f55ddd54f76ff
                ...........f5fddff54ffff
                ............fddddd54dddf
                .............fcdddd4cdf.
                ..........888fce66cddf..
                ............88cce7cddf..
                ...........1588c7efcc...
                ..........111.8c66eef...
                .........111..8fffff....
                ........111.....fff.....
                .......111..............
                ......111...............
                ......11................
                ........................
                ........................
                ........................
                ........................
                ........................
                `],
            100,
            false
            )
            airslash = sprites.createProjectileFromSprite(img`
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
                `, link, -110, 0)
            animation.runImageAnimation(
            airslash,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . 1 . . . . . . . 
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
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . 1 1 . . . . . . . . 
                . . . . . . 1 . . . . . . . . . 
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
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . 1 1 . . . . . . . . 
                . . . . . 1 1 . . . . . . . . . 
                . . . . 1 1 . . . . . . . . . . 
                . . . . 1 . . . . . . . . . . . 
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
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . 1 1 . . . . . . . . 
                . . . . . 1 1 . . . . . . . . . 
                . . . . 1 1 . . . . . . . . . . 
                . . . . 1 . . . . . . . . . . . 
                . . . 1 1 . . . . . . . . . . . 
                . . . 1 1 . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . 1 1 . . . . . . . . 
                . . . . . 1 1 . . . . . . . . . 
                . . . . 1 1 . . . . . . . . . . 
                . . . . 1 . . . . . . . . . . . 
                . . . 1 1 . . . . . . . . . . . 
                . . . 1 1 . . . . . . . . . . . 
                . . . 1 1 . . . . . . . . . . . 
                . . . 1 1 . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . 1 1 . . . . . . . . 
                . . . . . 1 1 . . . . . . . . . 
                . . . . 1 1 . . . . . . . . . . 
                . . . . 1 . . . . . . . . . . . 
                . . . 1 1 . . . . . . . . . . . 
                . . . 1 1 . . . . . . . . . . . 
                . . . 1 1 . . . . . . . . . . . 
                . . . 1 1 1 . . . . . . . . . . 
                . . . 1 1 1 . . . . . . . . . . 
                . . . . 1 1 . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . 1 1 . . . . . . . . 
                . . . . . 1 1 . . . . . . . . . 
                . . . . 1 1 . . . . . . . . . . 
                . . . . 1 . . . . . . . . . . . 
                . . . 1 1 . . . . . . . . . . . 
                . . . 1 1 . . . . . . . . . . . 
                . . . 1 1 . . . . . . . . . . . 
                . . . 1 1 1 . . . . . . . . . . 
                . . . 1 1 1 . . . . . . . . . . 
                . . . . 1 1 1 . . . . . . . . . 
                . . . . 1 1 1 . . . . . . . . . 
                . . . . . 1 1 1 . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `],
            50,
            false
            )
            timer.after(400, function () {
                airslash.destroy()
            })
        } else if (characterAnimations.matchesRule(link, characterAnimations.rule(Predicate.FacingUp))) {
            animation.runImageAnimation(
            link,
            [img`
                ...........................
                ...........................
                ...........................
                ...........................
                ...........................
                ...........................
                ...........................
                ...........................
                ...........................
                ...........................
                ...........................
                ......ffff.................
                ....fff77fff...............
                ...fff7777fff..............
                ..fff777777fff.............
                ..ff777777777f........11...
                ..f7777777777f.......111...
                ..f7777777777f......111....
                .ff7777777777ff....111.....
                .ff7777777777ff8..111......
                .fdd77777777ddf8.111.......
                fbfd77777777dff8851........
                f8ffd777777dbfdd88.........
                f2fcf77777ef1cddc888.......
                f2f7f667766fbbcc...........
                .ff.fee6666f...............
                ....ffffffff...............
                .....ff..ff................
                `,img`
                ...........................
                ...........................
                ...........................
                ...........................
                ............1..............
                ...........111.............
                ...........111.............
                ...........111.............
                ...........111.............
                ...........111.............
                .........8.111.8...........
                ..........8.1.8............
                ...........858.............
                .......ff...8..............
                .....ff77ffcc..............
                ...fff7777fff..............
                ..fff777777fff.............
                ..fff777777fff.............
                ..f7777777777ff............
                .ff7777777777ff............
                .fff77777777fff............
                fbfd77777777dff............
                f8fd77777777df.............
                f2ffd777777df..............
                f2fcf677776f...............
                .ff7f666666f...............
                ....ffffffff...............
                .....fff...................
                `],
            100,
            false
            )
            airslash = sprites.createProjectileFromSprite(img`
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
                `, link, 0, -110)
            animation.runImageAnimation(
            airslash,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 1 . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . 1 1 . . 
                . . . . . . . . . . . . . 1 1 . 
                . . . . . . . . . . . . . . 1 . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . 1 1 . . . . 
                . . . . . . . . . . . 1 1 . . . 
                . . . . . . . . . . . . 1 1 . . 
                . . . . . . . . . . . . . 1 1 . 
                . . . . . . . . . . . . . . 1 . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . 1 1 . . . . . . 
                . . . . . . . . 1 1 1 1 . . . . 
                . . . . . . . . . . . 1 1 . . . 
                . . . . . . . . . . . . 1 1 . . 
                . . . . . . . . . . . . . 1 1 . 
                . . . . . . . . . . . . . . 1 . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . 1 1 1 1 . . . . . . 
                . . . . . . 1 1 1 1 1 1 . . . . 
                . . . . . . . . . . . 1 1 . . . 
                . . . . . . . . . . . . 1 1 . . 
                . . . . . . . . . . . . . 1 1 . 
                . . . . . . . . . . . . . . 1 . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . 1 1 1 1 1 . . . . . . 
                . . . . 1 1 1 1 1 1 1 1 . . . . 
                . . . . 1 1 1 . . . . 1 1 . . . 
                . . . . . . . . . . . . 1 1 . . 
                . . . . . . . . . . . . . 1 1 . 
                . . . . . . . . . . . . . . 1 . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . 1 1 1 1 1 . . . . . . 
                . . . 1 1 1 1 1 1 1 1 1 . . . . 
                . . 1 1 1 1 1 . . . . 1 1 . . . 
                . . 1 1 1 . . . . . . . 1 1 . . 
                . . 1 . . . . . . . . . . 1 1 . 
                . . . . . . . . . . . . . . 1 . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `],
            50,
            false
            )
            timer.after(400, function () {
                airslash.destroy()
            })
        } else if (characterAnimations.matchesRule(link, characterAnimations.rule(Predicate.FacingRight))) {
            animation.runImageAnimation(
            link,
            [img`
                ........................
                .......fff..............
                ....fffff7f.............
                ..ff6666677ff...........
                .ff666666777ff.......11.
                .f6666fff6666f......111.
                .fffff66677776f....111..
                fff6777f44ff47f...111...
                ff67fff45ddd558..111....
                f67ffd45ffddf58.111.....
                .ffddd45dddddf8851......
                ..fddd4ddddcfcc88.......
                ...f7777eeeccddc888.....
                ...feeee66c77ddc........
                ...ffffffffcccc.........
                ...fff...ff.............
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                `,img`
                ....ffffff..............
                ..ff6666f7f.............
                .ff6666f777f............
                .f666ff6666f............
                .ffff6677776f...........
                .f677744ff47f...........
                ff67f45ddd55f...........
                ffff45ffddf5f...........
                fddd45dddddf............
                .fdc4ddddcf.............
                ..fddc66ecf888..........
                ..fddc7ecc88............
                ...ccfe7c8851...........
                ...fee66c8.111..........
                ....fffff8..111.........
                .....fff.....111........
                ..............111.......
                ...............111......
                ................11......
                ........................
                ........................
                ........................
                ........................
                ........................
                `],
            100,
            false
            )
            airslash = sprites.createProjectileFromSprite(img`
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
                `, link, 110, 0)
            animation.runImageAnimation(
            airslash,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . 1 . . . . . . . . 
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
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . . . 1 1 . . . . . . 
                . . . . . . . . . 1 . . . . . . 
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
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . . . 1 1 . . . . . . 
                . . . . . . . . . 1 1 . . . . . 
                . . . . . . . . . . 1 1 . . . . 
                . . . . . . . . . . . 1 . . . . 
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
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . . . 1 1 . . . . . . 
                . . . . . . . . . 1 1 . . . . . 
                . . . . . . . . . . 1 1 . . . . 
                . . . . . . . . . . . 1 . . . . 
                . . . . . . . . . . . 1 1 . . . 
                . . . . . . . . . . . 1 1 . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . . . 1 1 . . . . . . 
                . . . . . . . . . 1 1 . . . . . 
                . . . . . . . . . . 1 1 . . . . 
                . . . . . . . . . . . 1 . . . . 
                . . . . . . . . . . . 1 1 . . . 
                . . . . . . . . . . . 1 1 . . . 
                . . . . . . . . . . . 1 1 . . . 
                . . . . . . . . . . . 1 1 . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . . . 1 1 . . . . . . 
                . . . . . . . . . 1 1 . . . . . 
                . . . . . . . . . . 1 1 . . . . 
                . . . . . . . . . . . 1 . . . . 
                . . . . . . . . . . . 1 1 . . . 
                . . . . . . . . . . . 1 1 . . . 
                . . . . . . . . . . . 1 1 . . . 
                . . . . . . . . . . 1 1 1 . . . 
                . . . . . . . . . . 1 1 1 . . . 
                . . . . . . . . . . 1 1 . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . . . 1 1 . . . . . . 
                . . . . . . . . . 1 1 . . . . . 
                . . . . . . . . . . 1 1 . . . . 
                . . . . . . . . . . . 1 . . . . 
                . . . . . . . . . . . 1 1 . . . 
                . . . . . . . . . . . 1 1 . . . 
                . . . . . . . . . . . 1 1 . . . 
                . . . . . . . . . . 1 1 1 . . . 
                . . . . . . . . . . 1 1 1 . . . 
                . . . . . . . . . 1 1 1 . . . . 
                . . . . . . . . . 1 1 1 . . . . 
                . . . . . . . . 1 1 1 . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `],
            50,
            false
            )
            timer.after(400, function () {
                airslash.destroy()
            })
        } else if (characterAnimations.matchesRule(link, characterAnimations.rule(Predicate.FacingDown))) {
            animation.runImageAnimation(
            link,
            [img`
                ......ffff...............
                ....fff77fff.............
                ...fff7777fff............
                ..fff666666fff...........
                ..ff677777766f........11.
                ..f67ffffff76f.......111.
                ..fff44ff45fff......111..
                .fff45555555fff....111...
                .ff455dddd555ff8..111....
                .fd45ffddff55df8.111.....
                fbf4dddddddd5ff8851......
                f8ffdddddcddbfdd88.......
                f2f4f7777eef1cddc888.....
                f2f.f77ee77fbbcc.........
                .ff.fee6666f.............
                ....ffffffff.............
                .....ff..ff..............
                .........................
                .........................
                .........................
                .........................
                .........................
                .........................
                .........................
                .........................
                .........................
                .........................
                .........................
                `,img`
                .........................
                .........................
                .......ff................
                .....ff77ff..............
                ...fff7777fff............
                ..fff777777fff...........
                ..fff777777fff...........
                ..f6666666666ff..........
                .ff6744ff4576ff..........
                .fff45dddd55fff..........
                fbf45ffddff55ff..........
                f8f4ddddddd55f...........
                f2ffdddddcdd5c...........
                f2fcf77777f7c............
                .ff7f66666f7c............
                ....ffffffddc............
                .....ffffcddc............
                ..........cc.............
                ..........8..............
                .........858.............
                ........8.1.8............
                .......8.111.8...........
                .........111.............
                .........111.............
                .........111.............
                .........111.............
                .........111.............
                ..........1..............
                `],
            100,
            false
            )
            airslash = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 1 1 1 1 1 . . . . 
                . . . . . 1 1 1 1 1 1 1 1 1 . . 
                . . . . 1 1 . . . . 1 1 1 1 1 . 
                . . . 1 1 . . . . . . . 1 1 1 . 
                . . 1 1 . . . . . . . . . . 1 . 
                . . 1 . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, link, 0, 110)
            animation.runImageAnimation(
            airslash,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 1 . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 1 . 
                . . . . . . . . . . . . . 1 1 . 
                . . . . . . . . . . . . 1 1 . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 1 . 
                . . . . . . . . . . . . . 1 1 . 
                . . . . . . . . . . . . 1 1 . . 
                . . . . . . . . . . . 1 1 . . . 
                . . . . . . . . . . 1 1 . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 1 . 
                . . . . . . . . . . . . . 1 1 . 
                . . . . . . . . . . . . 1 1 . . 
                . . . . . . . . . . . 1 1 . . . 
                . . . . . . . . 1 1 1 1 . . . . 
                . . . . . . . . 1 1 . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 1 . 
                . . . . . . . . . . . . . 1 1 . 
                . . . . . . . . . . . . 1 1 . . 
                . . . . . . . . . . . 1 1 . . . 
                . . . . . . 1 1 1 1 1 1 . . . . 
                . . . . . . 1 1 1 1 . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 1 . 
                . . . . . . . . . . . . . 1 1 . 
                . . . . . . . . . . . . 1 1 . . 
                . . . . 1 1 1 . . . . 1 1 . . . 
                . . . . 1 1 1 1 1 1 1 1 . . . . 
                . . . . . 1 1 1 1 1 . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 1 . 
                . . 1 . . . . . . . . . . 1 1 . 
                . . 1 1 1 . . . . . . . 1 1 . . 
                . . 1 1 1 1 1 . . . . 1 1 . . . 
                . . . 1 1 1 1 1 1 1 1 1 . . . . 
                . . . . . 1 1 1 1 1 . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `],
            50,
            false
            )
            timer.after(400, function () {
                airslash.destroy()
            })
        } else if (characterAnimations.matchesRule(link, characterAnimations.rule(Predicate.FacingLeft))) {
            animation.runImageAnimation(
            link,
            [img`
                ........................
                ..............fff.......
                .............f7fffff....
                ...........ff7766666ff..
                .11.......ff777666666ff.
                .111......f6666fff6666f.
                ..111....f67777666fffff.
                ...111...f74ff44f7776fff
                ....111..855ddd54fff76ff
                .....111.85fddff54dff76f
                ......1588fddddd54dddff.
                .......88ccfcdddd4dddf..
                .....888cddcceee7777f...
                ........cdd77c66eeeef...
                .........ccccffffffff...
                .............ff...fff...
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                `,img`
                ..............ffffff....
                .............f7f6666ff..
                ............f777f6666ff.
                ............f6666ff666f.
                ...........f6777766ffff.
                ...........f74ff447776f.
                ...........f55ddd54f76ff
                ...........f5fddff54ffff
                ............fddddd54dddf
                .............fcdddd4cdf.
                ..........888fce66cddf..
                ............88cce7cddf..
                ...........1588c7efcc...
                ..........111.8c66eef...
                .........111..8fffff....
                ........111.....fff.....
                .......111..............
                ......111...............
                ......11................
                ........................
                ........................
                ........................
                ........................
                ........................
                `],
            100,
            false
            )
            airslash = sprites.createProjectileFromSprite(img`
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
                `, link, -110, 0)
            animation.runImageAnimation(
            airslash,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . 1 . . . . . . . 
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
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . 1 1 . . . . . . . . 
                . . . . . . 1 . . . . . . . . . 
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
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . 1 1 . . . . . . . . 
                . . . . . 1 1 . . . . . . . . . 
                . . . . 1 1 . . . . . . . . . . 
                . . . . 1 . . . . . . . . . . . 
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
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . 1 1 . . . . . . . . 
                . . . . . 1 1 . . . . . . . . . 
                . . . . 1 1 . . . . . . . . . . 
                . . . . 1 . . . . . . . . . . . 
                . . . 1 1 . . . . . . . . . . . 
                . . . 1 1 . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . 1 1 . . . . . . . . 
                . . . . . 1 1 . . . . . . . . . 
                . . . . 1 1 . . . . . . . . . . 
                . . . . 1 . . . . . . . . . . . 
                . . . 1 1 . . . . . . . . . . . 
                . . . 1 1 . . . . . . . . . . . 
                . . . 1 1 . . . . . . . . . . . 
                . . . 1 1 . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . 1 1 . . . . . . . . 
                . . . . . 1 1 . . . . . . . . . 
                . . . . 1 1 . . . . . . . . . . 
                . . . . 1 . . . . . . . . . . . 
                . . . 1 1 . . . . . . . . . . . 
                . . . 1 1 . . . . . . . . . . . 
                . . . 1 1 . . . . . . . . . . . 
                . . . 1 1 1 . . . . . . . . . . 
                . . . 1 1 1 . . . . . . . . . . 
                . . . . 1 1 . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . 1 1 . . . . . . . . 
                . . . . . 1 1 . . . . . . . . . 
                . . . . 1 1 . . . . . . . . . . 
                . . . . 1 . . . . . . . . . . . 
                . . . 1 1 . . . . . . . . . . . 
                . . . 1 1 . . . . . . . . . . . 
                . . . 1 1 . . . . . . . . . . . 
                . . . 1 1 1 . . . . . . . . . . 
                . . . 1 1 1 . . . . . . . . . . 
                . . . . 1 1 1 . . . . . . . . . 
                . . . . 1 1 1 . . . . . . . . . 
                . . . . . 1 1 1 . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `],
            50,
            false
            )
            timer.after(400, function () {
                airslash.destroy()
            })
        }
        timer.after(cooldown, function () {
            canhit = true
        })
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy4, function (sprite, otherSprite) {
    sprite.destroy()
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth4, otherSprite).value += -35
    if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.MovingRight))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 150)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.MovingLeft))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 150)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.MovingDown))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 150)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.MovingUp))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 150)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.FacingRight))) {
        spriteutils.setVelocityAtAngle(link, spriteutils.angleFrom(link, otherSprite), 150)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.FacingLeft))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 150)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.FacingDown))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 150)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.FacingUp))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 150)
    }
})
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    if (bow == true) {
        if (canshoot == true) {
            if (quiver.value > 0) {
                canshoot = false
                quiver.value += -1
                if (characterAnimations.matchesRule(link, characterAnimations.rule(Predicate.MovingUp))) {
                    animation.runImageAnimation(
                    link,
                    [img`
                        . . . . . . f f f f . . . . . . . 
                        . . . . f f f 7 7 f f f . . . . . 
                        . . . f f f 7 7 7 7 f f f . . . . 
                        . . f f f 7 7 7 7 7 7 f f f . . . 
                        . . f f 7 7 7 7 7 7 7 7 7 f . . . 
                        . . f 7 7 7 7 7 7 7 7 7 7 f . . . 
                        . . f 7 7 7 7 7 7 7 7 7 7 f . e . 
                        . f f 7 7 7 7 7 7 7 7 7 7 f f d . 
                        . f f 7 7 7 7 7 7 7 7 7 7 f f b . 
                        . f d d 7 7 7 7 7 7 7 7 d d f c . 
                        f b f d 7 7 7 7 7 7 7 7 d f f c . 
                        f 8 f f d 7 7 7 7 7 7 d b f d d c 
                        f 2 f c f 7 7 7 7 7 e f 1 c d d c 
                        f 2 f 7 f 6 6 7 7 6 6 f b b c c . 
                        . f f . f e e 6 6 6 6 f . . . b . 
                        . . . . f f f f f f f f . . . d . 
                        . . . . . f f . . f f . . . . e . 
                        `,img`
                        . . . . . . . . . . . . . e . . . 
                        . . . . . . . . . . . . . d . . . 
                        . . . . . . . f f . . . . b . . . 
                        . . . . . f f 7 7 f f c c c . . . 
                        . . . f f f 7 7 7 7 f f f c . . . 
                        . . f f f 7 7 7 7 7 7 f f f . . . 
                        . . f f f 7 7 7 7 7 7 f f f . . . 
                        . . f 7 7 7 7 7 7 7 7 7 7 f f . . 
                        . f f 7 7 7 7 7 7 7 7 7 7 f f . . 
                        . f f f 7 7 7 7 7 7 7 7 f f f . . 
                        f b f d 7 7 7 7 7 7 7 7 d f f . . 
                        f 8 f d 7 7 7 7 7 7 7 7 d f . . . 
                        f 2 f f d 7 7 7 7 7 7 d f . . . . 
                        f 2 f c f 6 7 7 7 7 6 f . . . . . 
                        . f f 7 f 6 6 6 6 6 6 f . . . . . 
                        . . . . f f f f f f f f . . . . . 
                        . . . . . f f f . . . . . . . . . 
                        `],
                    200,
                    false
                    )
                    arrowproj = sprites.createProjectileFromSprite(img`
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
                        `, link, 0, -110)
                    arrowproj.setKind(SpriteKind.arrow)
                    animation.runImageAnimation(
                    arrowproj,
                    [img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . 1 . . . . . . . . 
                        . . . . . . . 1 . . . . . . . . 
                        . . . . . . . e . . . . . . . . 
                        . . . . . . . e . . . . . . . . 
                        . . . . . . . e . . . . . . . . 
                        . . . . . . . e . . . . . . . . 
                        . . . . . . . e . . . . . . . . 
                        . . . . . . . e . . . . . . . . 
                        . . . . . . 6 e 6 . . . . . . . 
                        . . . . . . 8 . 8 . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `],
                    50,
                    false
                    )
                } else if (characterAnimations.matchesRule(link, characterAnimations.rule(Predicate.MovingRight))) {
                    animation.runImageAnimation(
                    link,
                    [img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . f f f . . . . . . 
                        . . . . f f f f f 7 f . . . . . 
                        . . f f 6 6 6 6 6 7 7 f f . . . 
                        . f f 6 6 6 6 6 6 7 7 7 f f . . 
                        . f 6 6 6 6 f f f 6 6 6 6 f . . 
                        . f f f f f 6 6 6 7 7 7 7 6 f . 
                        f f f 6 7 7 7 f 4 4 f f 4 7 f . 
                        f f 6 7 f f f 4 5 d d d 5 5 f . 
                        f 6 7 f f d 4 5 f f d d f 5 f e 
                        . f f d d d 4 5 d d d d d f . e 
                        . . f d d d 4 d d d d c f c c e 
                        . . . f 7 7 7 7 e e e c c d d c 
                        . . . f e e e e 6 6 c 7 7 d d c 
                        . . . f f f f f f f f c c c c e 
                        . . . f f f . . . f f . d . e . 
                        . . . . . . . . . . . . . e . . 
                        `,img`
                        . . . . f f f f f f . . . . . . 
                        . . f f 6 6 6 6 f 7 f . . . . . 
                        . f f 6 6 6 6 f 7 7 7 f . . . . 
                        . f 6 6 6 f f 6 6 6 6 f . . . . 
                        . f f f f 6 6 7 7 7 7 6 f . . . 
                        . f 6 7 7 7 4 4 f f 4 7 f . . . 
                        f f 6 7 f 4 5 d d d 5 5 f . . . 
                        f f f f 4 5 f f d d f 5 f . . . 
                        f d d d 4 5 d d d d d f . . . . 
                        . f d c 4 d d d d c f e . . . . 
                        . . f d d c 6 6 e c f e . . . . 
                        . . f d d c 7 e c c . e . . . . 
                        . . . c c f e 7 c . . e . . . . 
                        . . . f e e 6 6 c . e . . . . . 
                        . . . . f f f f f e . . . . . . 
                        . . . . . f f f . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `],
                    100,
                    false
                    )
                    arrowproj = sprites.createProjectileFromSprite(img`
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
                        `, link, 110, 0)
                    arrowproj.setKind(SpriteKind.arrow)
                    animation.runImageAnimation(
                    arrowproj,
                    [img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . 8 6 . . . . . . . . . . . 
                        . . . . e e e e e e e 1 1 . . . 
                        . . . 8 6 . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `],
                    50,
                    false
                    )
                } else if (characterAnimations.matchesRule(link, characterAnimations.rule(Predicate.MovingDown))) {
                    animation.runImageAnimation(
                    link,
                    [img`
                        ......ffff.......
                        ....fff77fff.....
                        ...fff7777fff....
                        ..fff666666fff...
                        ..ff677777766f...
                        ..f67ffffff76f...
                        ..fff44ff45fff...
                        .fff45555555fff.e
                        .ff455dddd555ff.e
                        .fd45ffddff55df.e
                        fbf4dddddddd5ffce
                        f8ffdddddcddbfddc
                        f2f4f7777eef1cddc
                        f2f.f77ee77fbbcce
                        .ff.fee6666f....e
                        ....ffffffff.....
                        .....ff..ff......
                        .................
                        .................
                        .................
                        `,img`
                        .................
                        .................
                        .......ff........
                        .....ff77ff......
                        ...fff7777fff....
                        ..fff777777fff...
                        ..fff777777fff...
                        ..f6666666666ff..
                        .ff6744ff4576ff..
                        .fff45dddd55fff..
                        fbf45ffddff55ff..
                        f8f4ddddddd55f...
                        f2ffdddddcdd5c...
                        f2fcf77777f7e....
                        .ff7f66666f7e....
                        ....ffffffdde....
                        .....ffffcdde....
                        ..........cce....
                        ............e....
                        ............e....
                        `],
                    100,
                    false
                    )
                    arrowproj = sprites.createProjectileFromSprite(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . 1 1 1 1 1 . . . . 
                        . . . . . 1 1 1 1 1 1 1 1 1 . . 
                        . . . . 1 1 . . . . 1 1 1 1 1 . 
                        . . . 1 1 . . . . . . . 1 1 1 . 
                        . . 1 1 . . . . . . . . . . 1 . 
                        . . 1 . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, link, 0, 110)
                    arrowproj.setKind(SpriteKind.arrow)
                    animation.runImageAnimation(
                    arrowproj,
                    [img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . 8 . 8 . . . . . . 
                        . . . . . . . 6 e 6 . . . . . . 
                        . . . . . . . . e . . . . . . . 
                        . . . . . . . . e . . . . . . . 
                        . . . . . . . . e . . . . . . . 
                        . . . . . . . . e . . . . . . . 
                        . . . . . . . . e . . . . . . . 
                        . . . . . . . . e . . . . . . . 
                        . . . . . . . . 1 . . . . . . . 
                        . . . . . . . . 1 . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `],
                    50,
                    false
                    )
                } else if (characterAnimations.matchesRule(link, characterAnimations.rule(Predicate.MovingLeft))) {
                    animation.runImageAnimation(
                    link,
                    [img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . f f f . . . . . . . 
                        . . . . . f 7 f f f f f . . . . 
                        . . . f f 7 7 6 6 6 6 6 f f . . 
                        . . f f 7 7 7 6 6 6 6 6 6 f f . 
                        . . f 6 6 6 6 f f f 6 6 6 6 f . 
                        . f 6 7 7 7 7 6 6 6 f f f f f . 
                        . f 7 4 f f 4 4 f 7 7 7 6 f f f 
                        . f 5 5 d d d 5 4 f f f 7 6 f f 
                        e f 5 f d d f f 5 4 d f f 7 6 f 
                        e . f d d d d d 5 4 d d d f f . 
                        e c c f c d d d d 4 d d d f . . 
                        c d d c c e e e 7 7 7 7 f . . . 
                        c d d 7 7 c 6 6 e e e e f . . . 
                        e c c c c f f f f f f f f . . . 
                        . e . d . f f . . . f f f . . . 
                        . . e . . . . . . . . . . . . . 
                        `,img`
                        . . . . . . f f f f f f . . . . 
                        . . . . . f 7 f 6 6 6 6 f f . . 
                        . . . . f 7 7 7 f 6 6 6 6 f f . 
                        . . . . f 6 6 6 6 f f 6 6 6 f . 
                        . . . f 6 7 7 7 7 6 6 f f f f . 
                        . . . f 7 4 f f 4 4 7 7 7 6 f . 
                        . . . f 5 5 d d d 5 4 f 7 6 f f 
                        . . . f 5 f d d f f 5 4 f f f f 
                        . . . . f d d d d d 5 4 d d d f 
                        . . . . e f c d d d d 4 c d f . 
                        . . . . e f c e 6 6 c d d f . . 
                        . . . . e . c c e 7 c d d f . . 
                        . . . . e . . c 7 e f c c . . . 
                        . . . . . e . c 6 6 e e f . . . 
                        . . . . . . e f f f f f . . . . 
                        . . . . . . . . f f f . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `],
                    100,
                    false
                    )
                    arrowproj = sprites.createProjectileFromSprite(img`
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
                        `, link, -110, 0)
                    arrowproj.setKind(SpriteKind.arrow)
                    animation.runImageAnimation(
                    arrowproj,
                    [img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . 6 8 . . . 
                        . . . 1 1 e e e e e e e . . . . 
                        . . . . . . . . . . . 6 8 . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `],
                    50,
                    false
                    )
                } else if (characterAnimations.matchesRule(link, characterAnimations.rule(Predicate.FacingUp))) {
                    animation.runImageAnimation(
                    link,
                    [img`
                        . . . . . . f f f f . . . . . . . 
                        . . . . f f f 7 7 f f f . . . . . 
                        . . . f f f 7 7 7 7 f f f . . . . 
                        . . f f f 7 7 7 7 7 7 f f f . . . 
                        . . f f 7 7 7 7 7 7 7 7 7 f . . . 
                        . . f 7 7 7 7 7 7 7 7 7 7 f . . . 
                        . . f 7 7 7 7 7 7 7 7 7 7 f . e . 
                        . f f 7 7 7 7 7 7 7 7 7 7 f f d . 
                        . f f 7 7 7 7 7 7 7 7 7 7 f f b . 
                        . f d d 7 7 7 7 7 7 7 7 d d f c . 
                        f b f d 7 7 7 7 7 7 7 7 d f f c . 
                        f 8 f f d 7 7 7 7 7 7 d b f d d c 
                        f 2 f c f 7 7 7 7 7 e f 1 c d d c 
                        f 2 f 7 f 6 6 7 7 6 6 f b b c c . 
                        . f f . f e e 6 6 6 6 f . . . b . 
                        . . . . f f f f f f f f . . . d . 
                        . . . . . f f . . f f . . . . e . 
                        `,img`
                        . . . . . . . . . . . . . e . . . 
                        . . . . . . . . . . . . . d . . . 
                        . . . . . . . f f . . . . b . . . 
                        . . . . . f f 7 7 f f c c c . . . 
                        . . . f f f 7 7 7 7 f f f c . . . 
                        . . f f f 7 7 7 7 7 7 f f f . . . 
                        . . f f f 7 7 7 7 7 7 f f f . . . 
                        . . f 7 7 7 7 7 7 7 7 7 7 f f . . 
                        . f f 7 7 7 7 7 7 7 7 7 7 f f . . 
                        . f f f 7 7 7 7 7 7 7 7 f f f . . 
                        f b f d 7 7 7 7 7 7 7 7 d f f . . 
                        f 8 f d 7 7 7 7 7 7 7 7 d f . . . 
                        f 2 f f d 7 7 7 7 7 7 d f . . . . 
                        f 2 f c f 6 7 7 7 7 6 f . . . . . 
                        . f f 7 f 6 6 6 6 6 6 f . . . . . 
                        . . . . f f f f f f f f . . . . . 
                        . . . . . f f f . . . . . . . . . 
                        `],
                    200,
                    false
                    )
                    arrowproj = sprites.createProjectileFromSprite(img`
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
                        `, link, 0, -110)
                    arrowproj.setKind(SpriteKind.arrow)
                    animation.runImageAnimation(
                    arrowproj,
                    [img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . 1 . . . . . . . . 
                        . . . . . . . 1 . . . . . . . . 
                        . . . . . . . e . . . . . . . . 
                        . . . . . . . e . . . . . . . . 
                        . . . . . . . e . . . . . . . . 
                        . . . . . . . e . . . . . . . . 
                        . . . . . . . e . . . . . . . . 
                        . . . . . . . e . . . . . . . . 
                        . . . . . . 6 e 6 . . . . . . . 
                        . . . . . . 8 . 8 . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `],
                    50,
                    false
                    )
                } else if (characterAnimations.matchesRule(link, characterAnimations.rule(Predicate.FacingRight))) {
                    animation.runImageAnimation(
                    link,
                    [img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . f f f . . . . . . 
                        . . . . f f f f f 7 f . . . . . 
                        . . f f 6 6 6 6 6 7 7 f f . . . 
                        . f f 6 6 6 6 6 6 7 7 7 f f . . 
                        . f 6 6 6 6 f f f 6 6 6 6 f . . 
                        . f f f f f 6 6 6 7 7 7 7 6 f . 
                        f f f 6 7 7 7 f 4 4 f f 4 7 f . 
                        f f 6 7 f f f 4 5 d d d 5 5 f . 
                        f 6 7 f f d 4 5 f f d d f 5 f e 
                        . f f d d d 4 5 d d d d d f . e 
                        . . f d d d 4 d d d d c f c c e 
                        . . . f 7 7 7 7 e e e c c d d c 
                        . . . f e e e e 6 6 c 7 7 d d c 
                        . . . f f f f f f f f c c c c e 
                        . . . f f f . . . f f . d . e . 
                        . . . . . . . . . . . . . e . . 
                        `,img`
                        . . . . f f f f f f . . . . . . 
                        . . f f 6 6 6 6 f 7 f . . . . . 
                        . f f 6 6 6 6 f 7 7 7 f . . . . 
                        . f 6 6 6 f f 6 6 6 6 f . . . . 
                        . f f f f 6 6 7 7 7 7 6 f . . . 
                        . f 6 7 7 7 4 4 f f 4 7 f . . . 
                        f f 6 7 f 4 5 d d d 5 5 f . . . 
                        f f f f 4 5 f f d d f 5 f . . . 
                        f d d d 4 5 d d d d d f . . . . 
                        . f d c 4 d d d d c f e . . . . 
                        . . f d d c 6 6 e c f e . . . . 
                        . . f d d c 7 e c c . e . . . . 
                        . . . c c f e 7 c . . e . . . . 
                        . . . f e e 6 6 c . e . . . . . 
                        . . . . f f f f f e . . . . . . 
                        . . . . . f f f . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `],
                    100,
                    false
                    )
                    arrowproj = sprites.createProjectileFromSprite(img`
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
                        `, link, 110, 0)
                    arrowproj.setKind(SpriteKind.arrow)
                    animation.runImageAnimation(
                    arrowproj,
                    [img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . 8 6 . . . . . . . . . . . 
                        . . . . e e e e e e e 1 1 . . . 
                        . . . 8 6 . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `],
                    50,
                    false
                    )
                } else if (characterAnimations.matchesRule(link, characterAnimations.rule(Predicate.FacingDown))) {
                    animation.runImageAnimation(
                    link,
                    [img`
                        ......ffff.......
                        ....fff77fff.....
                        ...fff7777fff....
                        ..fff666666fff...
                        ..ff677777766f...
                        ..f67ffffff76f...
                        ..fff44ff45fff...
                        .fff45555555fff.e
                        .ff455dddd555ff.e
                        .fd45ffddff55df.e
                        fbf4dddddddd5ffce
                        f8ffdddddcddbfddc
                        f2f4f7777eef1cddc
                        f2f.f77ee77fbbcce
                        .ff.fee6666f....e
                        ....ffffffff.....
                        .....ff..ff......
                        .................
                        .................
                        .................
                        `,img`
                        .................
                        .................
                        .......ff........
                        .....ff77ff......
                        ...fff7777fff....
                        ..fff777777fff...
                        ..fff777777fff...
                        ..f6666666666ff..
                        .ff6744ff4576ff..
                        .fff45dddd55fff..
                        fbf45ffddff55ff..
                        f8f4ddddddd55f...
                        f2ffdddddcdd5c...
                        f2fcf77777f7e....
                        .ff7f66666f7e....
                        ....ffffffdde....
                        .....ffffcdde....
                        ..........cce....
                        ............e....
                        ............e....
                        `],
                    100,
                    false
                    )
                    arrowproj = sprites.createProjectileFromSprite(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . 1 1 1 1 1 . . . . 
                        . . . . . 1 1 1 1 1 1 1 1 1 . . 
                        . . . . 1 1 . . . . 1 1 1 1 1 . 
                        . . . 1 1 . . . . . . . 1 1 1 . 
                        . . 1 1 . . . . . . . . . . 1 . 
                        . . 1 . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, link, 0, 110)
                    arrowproj.setKind(SpriteKind.arrow)
                    animation.runImageAnimation(
                    arrowproj,
                    [img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . 8 . 8 . . . . . . 
                        . . . . . . . 6 e 6 . . . . . . 
                        . . . . . . . . e . . . . . . . 
                        . . . . . . . . e . . . . . . . 
                        . . . . . . . . e . . . . . . . 
                        . . . . . . . . e . . . . . . . 
                        . . . . . . . . e . . . . . . . 
                        . . . . . . . . e . . . . . . . 
                        . . . . . . . . 1 . . . . . . . 
                        . . . . . . . . 1 . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `],
                    50,
                    false
                    )
                } else if (characterAnimations.matchesRule(link, characterAnimations.rule(Predicate.FacingLeft))) {
                    animation.runImageAnimation(
                    link,
                    [img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . f f f . . . . . . . 
                        . . . . . f 7 f f f f f . . . . 
                        . . . f f 7 7 6 6 6 6 6 f f . . 
                        . . f f 7 7 7 6 6 6 6 6 6 f f . 
                        . . f 6 6 6 6 f f f 6 6 6 6 f . 
                        . f 6 7 7 7 7 6 6 6 f f f f f . 
                        . f 7 4 f f 4 4 f 7 7 7 6 f f f 
                        . f 5 5 d d d 5 4 f f f 7 6 f f 
                        e f 5 f d d f f 5 4 d f f 7 6 f 
                        e . f d d d d d 5 4 d d d f f . 
                        e c c f c d d d d 4 d d d f . . 
                        c d d c c e e e 7 7 7 7 f . . . 
                        c d d 7 7 c 6 6 e e e e f . . . 
                        e c c c c f f f f f f f f . . . 
                        . e . d . f f . . . f f f . . . 
                        . . e . . . . . . . . . . . . . 
                        `,img`
                        . . . . . . f f f f f f . . . . 
                        . . . . . f 7 f 6 6 6 6 f f . . 
                        . . . . f 7 7 7 f 6 6 6 6 f f . 
                        . . . . f 6 6 6 6 f f 6 6 6 f . 
                        . . . f 6 7 7 7 7 6 6 f f f f . 
                        . . . f 7 4 f f 4 4 7 7 7 6 f . 
                        . . . f 5 5 d d d 5 4 f 7 6 f f 
                        . . . f 5 f d d f f 5 4 f f f f 
                        . . . . f d d d d d 5 4 d d d f 
                        . . . . e f c d d d d 4 c d f . 
                        . . . . e f c e 6 6 c d d f . . 
                        . . . . e . c c e 7 c d d f . . 
                        . . . . e . . c 7 e f c c . . . 
                        . . . . . e . c 6 6 e e f . . . 
                        . . . . . . e f f f f f . . . . 
                        . . . . . . . . f f f . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `],
                    100,
                    false
                    )
                    arrowproj = sprites.createProjectileFromSprite(img`
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
                        `, link, -110, 0)
                    arrowproj.setKind(SpriteKind.arrow)
                    animation.runImageAnimation(
                    arrowproj,
                    [img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . 6 8 . . . 
                        . . . 1 1 e e e e e e e . . . . 
                        . . . . . . . . . . . 6 8 . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `],
                    50,
                    false
                    )
                }
                timer.after(cooldown3, function () {
                    canshoot = true
                })
            }
        }
    }
})
function spawnPhantomGanon (col: number, row: number) {
    phantomganon = sprites.create(img`
        . . 1 . . . f f f f . . . 1 . . 
        . . 1 . f f f 2 2 f f f . 1 . . 
        . . . d f f 2 2 2 2 f f d . . . 
        . . f d f 2 2 2 2 2 2 f d f . . 
        . . f f b 2 2 2 2 2 2 b 2 f . . 
        . . f 2 b f f f f f f b 2 f . . 
        . . f f f f b b b b f f f f . . 
        . f f b f 5 5 1 1 5 5 f b f f . 
        . f e b d 1 5 1 1 5 1 d b e f . 
        . . f e b d 1 1 1 1 d b e f . . 
        . . . f e b b b b b b e f . . . 
        . . c b f c 6 d d 6 c f b c . . 
        . . b e f c c c c c c f e b . . 
        . . b b f e e b b e e f b b . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.boss)
    tiles.placeOnTile(phantomganon, tiles.getTileLocation(col, row))
    phantomganon.setVelocity(75, 0)
    statusbar5 = statusbars.create(50, 4, StatusBarKind.EnemyHealth5)
    statusbar5.setBarBorder(1, 15)
    statusbar5.positionDirection(CollisionDirection.Top)
    statusbar5.setOffsetPadding(0, 2.5)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile14`, function (sprite, location) {
    field = false
    kokiri = false
    zora = false
    kakakiro = true
    castle = false
    gerudo = false
    lake = false
    ranch = false
    volcano = false
})
sprites.onOverlap(SpriteKind.Enemy2, SpriteKind.Player, function (sprite, otherSprite) {
    if (shieldup == false) {
        controller.moveSprite(otherSprite, 0, 0)
        sprite.setKind(SpriteKind.NPC_DONE)
        info.changeLifeBy(-1)
        if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.MovingRight))) {
            spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(sprite, otherSprite), 150)
        } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.MovingLeft))) {
            spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(sprite, otherSprite), 150)
        } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.MovingDown))) {
            spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(sprite, otherSprite), 150)
        } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.MovingUp))) {
            spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(sprite, otherSprite), 150)
        } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.FacingRight))) {
            spriteutils.setVelocityAtAngle(link, spriteutils.angleFrom(sprite, otherSprite), 150)
        } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.FacingLeft))) {
            spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(sprite, otherSprite), 150)
        } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.FacingDown))) {
            spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(sprite, otherSprite), 150)
        } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.FacingUp))) {
            spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(sprite, otherSprite), 150)
        }
        timer.after(300, function () {
            sprite.setKind(SpriteKind.Enemy2)
            controller.moveSprite(otherSprite, 100, 100)
            otherSprite.setVelocity(0, 0)
        })
    }
})
function spawnStalchild (col: number, row: number) {
    stalchild = sprites.create(img`
        . . . . f f f f f . . . . 
        . . . f 1 1 1 1 1 f f . . 
        . . f b 1 1 1 1 1 1 b f . 
        . . f 1 1 1 1 1 1 1 d b f 
        . f d 1 1 1 1 1 1 d d d f 
        . f d 1 1 1 1 1 d d d d f 
        . f d 1 1 d d d d d d d f 
        . f 1 1 1 d d d d d d d f 
        . f 1 1 2 c d d d d d d f 
        f b 1 1 1 1 b d d d b f f 
        f 1 b 1 b d f c f f f . . 
        f b f b f f f f f f f . . 
        . f f f f f f f f f f . . 
        . . . f 1 1 d d c c f . . 
        . . . f b c b c b b c . . 
        . . . f 1 1 d c b b c . . 
        . . . . f f f f c c . . . 
        . . . . . . f f f . . . . 
        `, SpriteKind.Enemy3)
    tiles.placeOnTile(stalchild, tiles.getTileLocation(col, row))
    statusbar3 = statusbars.create(20, 4, StatusBarKind.EnemyHealth3)
    statusbar3.setColor(2, 15, 4)
    statusbar3.setBarBorder(1, 12)
    statusbar3.attachToSprite(stalchild)
}
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    if (menu == true) {
        menu = false
    } else {
        menu = true
    }
    if (menu == false) {
        mySprite.setFlag(SpriteFlag.Invisible, true)
        mySprite2.setFlag(SpriteFlag.Invisible, true)
        scene.cameraFollowSprite(link)
    }
    if (menu == true) {
        myMinimap = minimap.minimap(MinimapScale.Sixteenth, 1, 15)
        mySprite = sprites.create(minimap.getImage(myMinimap), SpriteKind.Player)
        mySprite.setFlag(SpriteFlag.RelativeToCamera, true)
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Player)
        mySprite2.setFlag(SpriteFlag.RelativeToCamera, true)
        minimap.includeSprite(myMinimap, mySprite2, MinimapSpriteScale.MinimapScale)
        if (field == true) {
            mySprite2.setPosition(78, 57)
        } else if (kokiri == true) {
            mySprite2.setPosition(140, 83)
        } else if (zora == true) {
            mySprite2.setPosition(129, 35)
        } else if (kakakiro == true) {
            mySprite2.setPosition(125, 19)
        } else if (castle == true) {
            mySprite2.setPosition(75, 13)
        } else if (gerudo == true) {
            mySprite2.setPosition(13, 41)
        } else if (lake == true) {
            mySprite2.setPosition(18, 94)
        } else if (ranch == true) {
            mySprite2.setPosition(50, 47)
        } else if (volcano == true) {
            mySprite2.setPosition(114, 5)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorLockedNorth, function (sprite, location) {
    tiles.setTilemap(tilemap`level6`)
    tiles.placeOnTile(link, tiles.getTileLocation(4, 5))
    if (game.runtime() <= 300000) {
        zelda = sprites.create(img`
            . . . . . f f f f f f . . . . . 
            . . . . f 5 5 5 5 5 5 f . . . . 
            . . . f 5 5 5 5 5 5 5 5 f . . . 
            . . f 4 5 5 5 5 5 5 5 5 4 f . . 
            . . f 5 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 5 c b 5 b b 5 b c 5 5 f . 
            . f 5 5 f f b b b b f f 5 5 f . 
            . f 4 4 f b f b b f b f 4 4 f . 
            . f 4 4 c 1 f d d f 1 c 4 4 f . 
            f f 4 4 f d d d d d d f 4 4 f f 
            f 4 4 f f f e e e e f f f 4 4 f 
            . f c c f b d d d d b f c c f . 
            . . c d c d d d d d d c d c . . 
            . . c f b d b d b d b b f c . . 
            . . . f f 1 d 1 d 1 d f f . . . 
            . . . . . f f b b f f . . . . . 
            `, SpriteKind.princess)
        tiles.placeOnTile(zelda, tiles.getTileLocation(4, 1))
        story.startCutscene(function () {
            story.printCharacterText("You weren't too late! You made it just in time to save Princess Zelda!")
            pause(2000)
            game.setDialogCursor(assets.image`b`)
            game.setDialogFrame(img`
                ..bbbbbbbbbbbbbbbbbbbb..
                .bdccccccccccccccccccdb.
                bdcdbbbbbbbbbbbbbbbbdcdb
                bcdbbbbbbbbbbbbbbbbbbdcb
                bcbdccccccccccccccccdbcb
                bcbccccccccccccccccccbcb
                bcbccccccccccccccccccbcb
                bcbccccccccccccccccccbcb
                bcbccccccccccccccccccbcb
                bcbccccccccccccccccccbcb
                bcbccccccccccccccccccbcb
                bcbccccccccccccccccccbcb
                bcbccccccccccccccccccbcb
                bcbccccccccccccccccccbcb
                bcbccccccccccccccccccbcb
                bcbccccccccccccccccccbcb
                bcbccccccccccccccccccbcb
                bcbccccccccccccccccccbcb
                bcbccccccccccccccccccbcb
                bcbdccccccccccccccccdbcb
                bdcbbbbbbbbbbbbbbbbbbcdb
                bbdccccccccccccccccccdbb
                .bbbbbbbbbbbbbbbbbbbbbb.
                ..bbbbbbbbbbbbbbbbbbbb..
                `)
            game.showLongText("By personal_note", DialogLayout.Bottom)
            tiles.setTilemap(tilemap`level1`)
            tiles.placeOnTile(link, tiles.getTileLocation(118, 40))
            tiles.destroySpritesOfKind(SpriteKind.princess)
            tiles.destroySpritesOfKind(SpriteKind.boss)
        })
    } else if (game.runtime() > 300000) {
        zelda = sprites.create(img`
            . . . . . f f . . . . . . . . . 
            . . . . f 4 f f f f f . . . . . 
            . . c c c 4 4 4 4 5 5 f f . . . 
            . f f d c f 4 4 4 5 5 5 4 f . . 
            . f b c f f f c f f c 5 5 5 f . 
            f 1 d d b f d f b f b 5 5 5 5 f 
            f d b d d e d f b b 5 5 5 5 5 f 
            b 1 d f d e d d b b b 5 5 5 5 f 
            b d f f d e d d b b b 5 5 5 5 f 
            f 1 f f d e d f b b 5 5 5 5 5 f 
            f d b d b f d f b f b 5 5 5 5 f 
            . f b c f f f c f f c 5 5 5 f . 
            . f f d c f 4 4 4 5 5 5 4 f . . 
            . . c c c 4 4 4 4 5 5 f f . . . 
            . . . . f 4 f f f f f . . . . . 
            . . . . . f f . . . . . . . . . 
            `, SpriteKind.princess)
        tiles.placeOnTile(zelda, tiles.getTileLocation(4, 40))
        story.startCutscene(function () {
            story.printCharacterText("Oh no! You were too late... Well, at least Phantom Ganon is defeated, right?")
            pause(2000)
            game.setDialogCursor(assets.image`b`)
            game.setDialogFrame(img`
                ..bbbbbbbbbbbbbbbbbbbb..
                .bdccccccccccccccccccdb.
                bdcdbbbbbbbbbbbbbbbbdcdb
                bcdbbbbbbbbbbbbbbbbbbdcb
                bcbdccccccccccccccccdbcb
                bcbccccccccccccccccccbcb
                bcbccccccccccccccccccbcb
                bcbccccccccccccccccccbcb
                bcbccccccccccccccccccbcb
                bcbccccccccccccccccccbcb
                bcbccccccccccccccccccbcb
                bcbccccccccccccccccccbcb
                bcbccccccccccccccccccbcb
                bcbccccccccccccccccccbcb
                bcbccccccccccccccccccbcb
                bcbccccccccccccccccccbcb
                bcbccccccccccccccccccbcb
                bcbccccccccccccccccccbcb
                bcbccccccccccccccccccbcb
                bcbdccccccccccccccccdbcb
                bdcbbbbbbbbbbbbbbbbbbcdb
                bbdccccccccccccccccccdbb
                .bbbbbbbbbbbbbbbbbbbbbb.
                ..bbbbbbbbbbbbbbbbbbbb..
                `)
            game.showLongText("By personal_note", DialogLayout.Bottom)
            tiles.setTilemap(tilemap`level1`)
            tiles.placeOnTile(link, tiles.getTileLocation(118, 36))
            tiles.destroySpritesOfKind(SpriteKind.princess)
            tiles.destroySpritesOfKind(SpriteKind.boss)
        })
    }
})
function spawnLizalfos (col: number, row: number) {
    lizalfos = sprites.create(img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f f f . 
        c c . . . f 6 6 6 6 6 6 6 6 f 
        c 1 c . f 6 7 7 7 7 7 7 7 6 f 
        c 1 1 c f f 7 7 7 f b 7 7 6 f 
        . c 1 1 c f 7 7 7 f 1 7 7 6 f 
        . . c 1 1 c 7 7 7 7 7 7 7 6 f 
        . . . c 1 c 6 7 7 7 7 7 7 6 f 
        . . . c c c 7 6 7 7 7 7 e e f 
        . . . . 6 7 7 2 6 7 7 e e f . 
        . . . . . 6 6 2 2 7 e 7 7 f . 
        . . . . . . f e e e 7 7 7 f . 
        . . . . . . f b b b b b b f . 
        . . . . . . . f f f f f f . . 
        . . . . . . . . . f f f . . . 
        `, SpriteKind.Enemy2)
    tiles.placeOnTile(lizalfos, tiles.getTileLocation(col, row))
    statusbar2 = statusbars.create(20, 4, StatusBarKind.EnemyHealth2)
    statusbar2.setColor(2, 15, 4)
    statusbar2.setBarBorder(1, 12)
    statusbar2.attachToSprite(lizalfos)
}
sprites.onOverlap(SpriteKind.bigprojectile, SpriteKind.boss, function (sprite, otherSprite) {
    if (vulnerable == true) {
        sprite.destroy()
        statusbar5.value += -10
    }
})
statusbars.onZero(StatusBarKind.EnemyHealth5, function (status) {
    deadmanvolley = true
    phantomganon.setVelocity(0, 0)
    animation.runImageAnimation(
    phantomganon,
    [img`
        . . 1 . . . f f f f . . . 1 . . 
        . . 1 . f f f 2 2 f f f . 1 . . 
        . . . d f f 2 2 2 2 f f d . . . 
        . . f d f 2 2 2 2 2 2 f d f . . 
        . . f f b 2 2 2 2 2 2 b 2 f . . 
        . . f 2 b f f f f f f b 2 f . . 
        . . f f f f b b b b f f f f . . 
        . f f b f 5 5 1 1 5 5 f b f f . 
        . f e b d 1 5 1 1 5 1 d b e f . 
        . . f e b d 1 1 1 1 d b e f . . 
        . . . f e b b b b b b e f . . . 
        . . c b f c 6 d d 6 c f b c . . 
        . . b e f c c c c c c f e b . . 
        . . b b f e e b b e e f b b . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . 1 . . . f f f f . . . 1 . . 
        . . 1 . f f f 2 2 f f f . 1 . . 
        . . . d f f 2 2 2 2 f f d . . . 
        . . f d f 2 2 2 . 2 2 f d f . . 
        . . f f b . . . . . . b . f . . 
        . . f 2 b f f f f f f b . . . . 
        . . . . f f b b b b f f f . . . 
        . f . b f 5 5 1 1 5 5 f b f . . 
        . f . b d 1 5 1 1 5 1 d b e . . 
        . . f e b d 1 1 1 1 d b e f . . 
        . . . f e b b b b b b e . . . . 
        . . c b . . . . . . . f b c . . 
        . . b e . c c c c c c f e b . . 
        . . b b . e e b b e e f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . 1 . . . f f f f . . . 1 . . 
        . . 1 . f f . . . . . f . 1 . . 
        . . . d f . 2 2 2 2 f . d . . . 
        . . f d . 2 2 2 . 2 2 f d f . . 
        . . . . b . . . . . . b . f . . 
        . . f 2 b f f f f f f b . . . . 
        . . . . f f b b b b f f . . . . 
        . f . b f 5 5 1 1 5 5 f b f . . 
        . f . b d 1 5 1 1 5 1 d b . . . 
        . . . e b d 1 1 1 1 d b . . . . 
        . . . . e b b b b b b . . . . . 
        . . c . . . . . . . . . b . . . 
        . . b e . c c c c . . f . b . . 
        . . b b . . e b . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f . . . f . . . . . 
        `,img`
        . . 1 . . . . . . . . . . 1 . . 
        . . 1 . f . . . . . . . . 1 . . 
        . . . d f . . 2 2 2 . . d . . . 
        . . f d . 2 . . . . 2 . d . . . 
        . . . . b . . . . . . b . . . . 
        . . f 2 b f f f f f f b . . . . 
        . . . . f f b b b b f f . . . . 
        . f . b f 5 5 1 1 5 5 f b . . . 
        . f . b d 1 5 1 1 5 1 d b . . . 
        . . . e b d 1 1 1 1 d b . . . . 
        . . . . e b b b b b b . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . e . c c . . . . f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . f . . . . . 
        `,img`
        . . 1 . . . . . . . . . . 1 . . 
        . . 1 . . . . . . . . . . 1 . . 
        . . . d . . . . . . . . d . . . 
        . . . d . . . . . . . . d . . . 
        . . . . b . . . . . . b . . . . 
        . . . . b f f f f f f b . . . . 
        . . . . f f b b b b f f . . . . 
        . . . b f 5 5 1 1 5 5 f b . . . 
        . . . b d 1 5 1 1 5 1 d b . . . 
        . . . . b d 1 1 1 1 d b . . . . 
        . . . . . b b b b b b . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . 1 . . . . . . . . . . 1 . . 
        . . 1 . . . . . . . . . . 1 . . 
        . . . d . . . . . . . . d . . . 
        . . . d . . . . . . . . d . . . 
        . . . . b . . . . . . b . . . . 
        . . . . b f f f f f f b . . . . 
        . . . . f f b b b b f f . . . . 
        . . . b f 4 4 1 1 4 4 f b . . . 
        . . . b d 1 4 1 1 4 1 d b . . . 
        . . . . b d 1 1 1 1 d b . . . . 
        . . . . . b b b b b b . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . 1 . . . . . . . . . . 1 . . 
        . . 1 . . . . . . . . . . 1 . . 
        . . . d . . . . . . . . d . . . 
        . . . d . . . . . . . . d . . . 
        . . . . b . . . . . . b . . . . 
        . . . . b f f f f f f b . . . . 
        . . . . f f b b b b f f . . . . 
        . . . b f c c 1 1 c c f b . . . 
        . . . b d 1 c 1 1 c 1 d b . . . 
        . . . . b d 1 1 1 1 d b . . . . 
        . . . . . b b b b b b . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . 1 . . . . . . . . . . 1 . . 
        . . 1 . . . . . . . . . . 1 . . 
        . . . . . . . . . . . . d . . . 
        . . . . . . . . . . . . d . . . 
        . . . . b . . . . . . b . . . . 
        . . . . . f f f f . f b . . . . 
        . . . . . f b b b . . f . . . . 
        . . . b . c c 1 1 c c . b . . . 
        . . . b . 1 c 1 1 c 1 . b . . . 
        . . . . b . . . . . . b . . . . 
        . . . . . b b b b b b . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . 1 . . . . . . . . . . 1 . . 
        . . 1 . . . . . . . . . . 1 . . 
        . . . . . . . . . . . . d . . . 
        . . . . . . . . . . . . d . . . 
        . . . . b . . . . . . b . . . . 
        . . . . . . . f f . f b . . . . 
        . . . . . f . b . . . . . . . . 
        . . . b . c . . 1 c c . . . . . 
        . . . . . . c . . . . . b . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . b b b b b b . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . 1 . . . . . . . . . . 1 . . 
        . . 1 . . . . . . . . . . 1 . . 
        . . . . . . . . . . . . d . . . 
        . . . . . . . . . . . . d . . . 
        . . . . b . . . . . . b . . . . 
        . . . . . . . f f . f b . . . . 
        . . . . . f . b . . . . . . . . 
        . . . b . c . . . . . . . . . . 
        . . . . . . c . . . . . b . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . b . . b b . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . d . . . 
        . . . . . . . . . . . . d . . . 
        . . . . . . . . . . . b . . . . 
        . . . . . . . f f . . b . . . . 
        . . . . . . . b . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . b . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
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
        `],
    100,
    false
    )
    pause(3000)
    tiles.destroySpritesOfKind(SpriteKind.boss)
    status.destroy()
    tiles.setTilemap(tilemap`level5`)
    tiles.placeOnTile(link, tiles.getTileLocation(4, 6))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.malon, function (sprite, otherSprite) {
    controller.moveSprite(sprite, 0, 0)
    story.startCutscene(function () {
        story.spriteSayText(otherSprite, "Sorry but Epona died a few years ago. That's what you were looking for, right?", 15, 1, story.TextSpeed.Normal)
    })
    otherSprite.setKind(SpriteKind.NPC_DONE)
    timer.after(5000, function () {
        controller.moveSprite(sprite, 100, 100)
    })
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
    field = false
    kokiri = false
    zora = false
    kakakiro = false
    castle = false
    gerudo = true
    lake = false
    ranch = false
    volcano = false
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile12`, function (sprite, location) {
    field = false
    kokiri = false
    zora = false
    kakakiro = false
    castle = false
    gerudo = false
    lake = true
    ranch = false
    volcano = false
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.gerudo, function (sprite, otherSprite) {
    controller.moveSprite(sprite, 0, 0)
    story.startCutscene(function () {
        story.spriteSayText(otherSprite, "Only the Master Sword cnan hit back the enemy projectiles. Be careful!", 15, 1, story.TextSpeed.Normal)
    })
    otherSprite.setKind(SpriteKind.NPC_DONE)
    timer.after(3000, function () {
        controller.moveSprite(sprite, 100, 100)
    })
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.spotter, function (sprite, otherSprite) {
    scream = false
    otherSprite.destroy()
    controller.moveSprite(sprite, 0, 0)
    for (let value of sprites.allOfKind(SpriteKind.Enemy4)) {
        value.follow(sprite, 0)
    }
    music.siren.loop()
    timer.after(1000, function () {
        music.siren.stop()
        scream = true
        timer.after(2000, function () {
            controller.moveSprite(sprite, 100, 100)
            timer.after(2000, function () {
                spawnDetector()
            })
        })
    })
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    field = false
    kokiri = false
    zora = false
    kakakiro = false
    castle = false
    gerudo = false
    lake = false
    ranch = true
    volcano = false
})
statusbars.onZero(StatusBarKind.EnemyHealth2, function (status) {
    status.spriteAttachedTo().setKind(SpriteKind.NPC_DONE)
    status.spriteAttachedTo().follow(link, 0)
    animation.runImageAnimation(
    status.spriteAttachedTo(),
    [img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f f f . 
        c c . . . f 6 6 6 6 6 6 6 6 f 
        c 1 c . f 6 7 7 7 7 7 7 7 6 f 
        c 1 1 c f f 7 7 7 f b 7 7 6 f 
        . c 1 1 c f 7 7 7 f 1 7 7 6 f 
        . . c 1 1 c 7 7 7 7 7 7 7 6 f 
        . . . c 1 c 6 7 7 7 7 7 7 6 f 
        . . . c c c 7 6 7 7 7 7 e e f 
        . . . . 6 7 7 2 6 7 7 e e f . 
        . . . . . 6 6 2 2 7 e 7 7 f . 
        . . . . . . f e e e 7 7 7 f . 
        . . . . . . f b b b b b b f . 
        . . . . . . . f f f f f f . . 
        . . . . . . . . . f f f . . . 
        `,img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f f f . 
        . . . . . f 6 6 6 6 6 6 6 6 f 
        . . . . f 6 7 7 7 7 7 7 7 6 f 
        . . . . f f 7 7 7 f b 7 7 6 f 
        . . . . f f 7 7 7 f 1 7 7 6 f 
        . . . . f 6 7 7 7 7 7 7 7 6 f 
        . . . . f 6 6 7 7 7 7 7 7 6 f 
        . . . . 6 7 7 6 7 7 7 7 e e f 
        . . . . 6 7 7 2 6 7 7 e e f . 
        . . . . . 6 6 2 2 7 e 7 7 f . 
        . . . . . . f e e e 7 7 7 f . 
        . . . . . . f b b b b b b f . 
        . . . . . . . f f f f f f . . 
        . . . . . . . . . f f f . . . 
        `,img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f f f . 
        . . . . . f 6 6 6 6 6 6 6 6 f 
        . . . . f 6 7 7 7 7 7 7 7 6 f 
        . . . . f f 7 7 7 f b 7 7 6 f 
        . . . . f f 7 7 7 f 1 7 7 6 f 
        . . . . f 6 7 7 7 7 7 7 7 6 f 
        . . . . f 6 7 7 7 7 7 7 7 6 f 
        . . . . . f 7 7 7 7 7 7 e e f 
        . . . . . f 7 7 7 7 7 e e f . 
        . . . . . f 6 2 2 7 e 7 7 f . 
        . . . . . . f e e e 7 7 7 f . 
        . . . . . . f b b b b b b f . 
        . . . . . . . f f f f f f . . 
        . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f f f . 
        . . . . . f 6 6 6 6 6 6 6 6 f 
        . . . . f 6 7 7 7 7 7 7 7 6 f 
        . . . . f f 7 7 7 f b 7 7 6 f 
        . . . . f f 7 7 7 f 1 7 7 6 f 
        . . . . f 6 7 7 7 7 7 7 7 6 f 
        . . . . f 6 7 7 7 7 7 7 7 6 f 
        . . . . . f 7 7 7 7 7 7 e e f 
        . . . . . f 7 7 7 7 7 e e f . 
        . . . . . f 6 2 2 7 e 7 7 f . 
        . . . . . . f e e e 7 7 7 f . 
        . . . . . . f b b b b b b f . 
        . . . . . . . f f f f f f . . 
        . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . f f f f f f f . . . . . 
        . . f 6 6 6 6 6 6 e f f f f . 
        . . f 6 7 7 7 7 7 e e 7 7 b f 
        . . f 6 7 7 7 7 7 7 e 7 7 b f 
        . . f 6 7 b 1 7 7 7 7 e 7 b f 
        . . f 6 7 f f 7 7 7 7 7 e b f 
        . . f 6 7 7 7 7 7 7 7 2 e b f 
        . . f 6 7 7 7 7 7 7 7 2 e b f 
        . . f 6 7 7 7 7 7 7 7 6 f f . 
        . . . f 6 f f 6 6 f f f . . . 
        . . . . f f f f f . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . f f f f f f f . . . . . 
        . . f 6 6 6 6 6 6 e f f f f . 
        . . f 6 7 7 7 7 7 e e 7 7 b f 
        . . f 6 7 7 7 7 7 7 e 7 7 b f 
        . . f 6 7 b 1 7 7 7 7 e 7 b f 
        . . f 6 7 f f 7 7 7 7 7 e b f 
        . . f 6 7 7 7 7 7 7 7 2 e b f 
        . . f 6 7 7 7 7 7 7 7 2 e b f 
        . . f 6 7 7 7 7 7 7 7 6 f f . 
        . . . f 6 f f 6 6 f f f . . . 
        . . . . f f f f f . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . f f f f f f f . . . . . 
        . . f 6 6 6 6 6 6 e f f f f . 
        . . f 6 7 7 7 7 7 e e 7 7 b f 
        . . f 6 7 7 7 7 7 7 e 7 7 b f 
        . . f 6 7 b 1 7 7 7 7 e 7 b f 
        . . f 6 7 f f 7 7 7 7 7 e b f 
        . . f 6 7 7 7 7 7 7 7 2 e b f 
        . . f 6 7 7 7 7 7 7 7 2 e b f 
        . . f 6 7 7 7 7 7 7 7 6 f f . 
        . . . f 6 f f 6 6 f f f . . . 
        . . . . f f f f f . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `],
    200,
    false
    )
    pause(2000)
    status.spriteAttachedTo().destroy()
    reward2 = randint(1, 4)
    if (reward2 == 2) {
        pause(50)
    } else if (reward2 == 3) {
        game.setDialogTextColor(13)
        game.setDialogFrame(img`
            ..bbbbbbbbbbbbbbbbbbbb..
            .bd111111111111111111db.
            bd1dbbbbbbbbbbbbbbbbd1db
            b1dbbbbbbbbbbbbbbbbbbd1b
            b1bdffffffffffffffffdb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bdffffffffffffffffdb1b
            bd1bbbbbbbbbbbbbbbbbb1db
            bbd111111111111111111dbb
            .bbbbbbbbbbbbbbbbbbbbbb.
            ..bbbbbbbbbbbbbbbbbbbb..
            `)
        game.showLongText("You got 2 Rupees!", DialogLayout.Bottom)
        info.changeScoreBy(2)
    } else if (reward2 == 4) {
        game.setDialogTextColor(13)
        game.setDialogFrame(img`
            ..bbbbbbbbbbbbbbbbbbbb..
            .bd111111111111111111db.
            bd1dbbbbbbbbbbbbbbbbd1db
            b1dbbbbbbbbbbbbbbbbbbd1b
            b1bdffffffffffffffffdb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bdffffffffffffffffdb1b
            bd1bbbbbbbbbbbbbbbbbb1db
            bbd111111111111111111dbb
            .bbbbbbbbbbbbbbbbbbbbbb.
            ..bbbbbbbbbbbbbbbbbbbb..
            `)
        if (quiverstatus == true) {
            game.showLongText("You got 3 Arrows", DialogLayout.Bottom)
            if (quiver.value <= 27) {
                quiver.value += 3
            } else {
                quiver.value += 0
            }
        } else {
            pause(50)
        }
    } else {
        game.setDialogTextColor(13)
        game.setDialogFrame(img`
            ..bbbbbbbbbbbbbbbbbbbb..
            .bd111111111111111111db.
            bd1dbbbbbbbbbbbbbbbbd1db
            b1dbbbbbbbbbbbbbbbbbbd1b
            b1bdffffffffffffffffdb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bdffffffffffffffffdb1b
            bd1bbbbbbbbbbbbbbbbbb1db
            bbd111111111111111111dbb
            .bbbbbbbbbbbbbbbbbbbbbb.
            ..bbbbbbbbbbbbbbbbbbbb..
            `)
        game.showLongText("You got 1 Heart Piece!", DialogLayout.Bottom)
        heartcontainer += 1
    }
})
info.onCountdownEnd(function () {
    if (leave == false) {
        tiles.placeOnTile(link, tiles.getTileLocation(184, 92))
    } else {
        tiles.placeOnTile(link, tiles.getTileLocation(151, 71))
    }
})
sprites.onOverlap(SpriteKind.arrow, SpriteKind.Enemy4, function (sprite, otherSprite) {
    sprite.destroy()
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth4, otherSprite).value += -35
    if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.MovingRight))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 150)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.MovingLeft))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 150)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.MovingDown))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 150)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.MovingUp))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 150)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.FacingRight))) {
        spriteutils.setVelocityAtAngle(link, spriteutils.angleFrom(link, otherSprite), 150)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.FacingLeft))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 150)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.FacingDown))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 150)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.FacingUp))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 150)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy3, function (sprite, otherSprite) {
    sprite.destroy()
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth3, otherSprite).value += -50
    if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.MovingRight))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 150)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.MovingLeft))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 150)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.MovingDown))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 150)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.MovingUp))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 150)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.FacingRight))) {
        spriteutils.setVelocityAtAngle(link, spriteutils.angleFrom(link, otherSprite), 150)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.FacingLeft))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 150)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.FacingDown))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 150)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.FacingUp))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 150)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    field = false
    kokiri = false
    zora = false
    kakakiro = false
    castle = false
    gerudo = false
    lake = false
    ranch = false
    volcano = true
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.zoraman, function (sprite, otherSprite) {
    controller.moveSprite(sprite, 0, 0)
    story.startCutscene(function () {
        story.spriteSayText(otherSprite, "Hey, did you know the Biggoron Sword can kill almost any enemy in one shot?", 15, 1, story.TextSpeed.Normal)
    })
    otherSprite.setKind(SpriteKind.NPC_DONE)
    timer.after(3000, function () {
        controller.moveSprite(sprite, 100, 100)
    })
})
statusbars.onZero(StatusBarKind.EnemyHealth4, function (status) {
    status.spriteAttachedTo().setKind(SpriteKind.NPC_DONE)
    status.spriteAttachedTo().follow(link, 0)
    animation.runImageAnimation(
    status.spriteAttachedTo(),
    [img`
        . . f f f f f f f f . 
        . f e e e e e c c c f 
        f e e e e e e e b c f 
        f f e e e f f e b c f 
        f f e e e f f e b c f 
        f e e e e e e e b c f 
        f e e d e e e b d c f 
        . f b c b b c c b b f 
        . . f f f c d d c f . 
        . . f b b c d d c f . 
        . . f b b b c c d f . 
        . . f c c c c c c f . 
        . . . f f f f f f . . 
        . . . . . f f f . . . 
        `,img`
        . . f f f f f f f f . 
        . f e . e e e c c c f 
        f e e e e e e e b c f 
        f f e . e f f . b c f 
        f f e e e f f e b c f 
        f e e e e e e e b c f 
        f . e d e e e b d c f 
        . f b c b b c c b . f 
        . . f f f c d . c f . 
        . . f b b c d d c f . 
        . . f b b b c c d f . 
        . . f . c c c c c f . 
        . . . f f f f . f . . 
        . . . . . f f f . . . 
        `,img`
        . . f . f . f . f f . 
        . f e . e e e c . c f 
        f e e e e e e e b c f 
        f . e . e f f . b c f 
        f f e e e f f e b c . 
        f e e e . e e . b c f 
        f . e d e e e b d c f 
        . f b c b b c c b . . 
        . . . f f c d . c f . 
        . . f . b c d d c f . 
        . . f b b b c c d f . 
        . . f . c c c c . f . 
        . . . f . f f . f . . 
        . . . . . f f f . . . 
        `,img`
        . . f . f . f . f f . 
        . f e . e e e c . c f 
        f e e e e e e e b c f 
        . . e . e f . . . . f 
        f . e . e . f e b c . 
        . e e e . . e . . c f 
        f . e d e . e b d . f 
        . f b c . b c . b . . 
        . . . f f c d . c . . 
        . . f . b . d . . f . 
        . . f b . b c c d . . 
        . . f . c . c . . f . 
        . . . f . . f . f . . 
        . . . . . f . . . . . 
        `,img`
        . . f . f . . . . . . 
        . f e . e . . . . c f 
        f e . . . e e . b c f 
        . . . . e f . . . . f 
        f . . . e . f e b c . 
        . . . e . . e . . c . 
        f . . . e . e b d . . 
        . f b . . b c . . . . 
        . . . f f . d . . . . 
        . . . . b . d . . . . 
        . . . b . b c c d . . 
        . . f . c . . . . f . 
        . . . . . . . . f . . 
        . . . . . . . . . . . 
        `,img`
        . . f . f . . . . . . 
        . f e . e . . . . c f 
        . . . . . e e . b c f 
        . . . . e . . . . . f 
        . . . . . . . e . c . 
        . . . e . . . . . c . 
        . . . . e . . b d . . 
        . f b . . b c . . . . 
        . . . f f . d . . . . 
        . . . . b . d . . . . 
        . . . b . b . . . . . 
        . . f . c . . . . . . 
        . . . . . . . . . . . 
        . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . 
        . . e . e . . . . . . 
        . . . . . e . . b c . 
        . . . . e . . . . . . 
        . . . . . . . e . . . 
        . . . e . . . . . c . 
        . . . . . . . b d . . 
        . f . . . . c . . . . 
        . . . f . . d . . . . 
        . . . . . . d . . . . 
        . . . b . b . . . . . 
        . . . . . . . . . . . 
        . . . . . . . . . . . 
        . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . 
        . . . . . . . . . . . 
        . . . . . . . . . . . 
        . . . . . . . . . . . 
        . . . . . . . . . . . 
        . . . . . . . . . . . 
        . . . . . . . . . . . 
        . . . . . . . . . . . 
        . . . . . . . . . . . 
        . . . . . . . . . . . 
        . . . . . . . . . . . 
        . . . . . . . . . . . 
        . . . . . . . . . . . 
        . . . . . . . . . . . 
        `],
    100,
    false
    )
    pause(2000)
    status.spriteAttachedTo().destroy()
    reward2 = randint(1, 4)
    if (reward2 == 2) {
        pause(50)
    } else if (reward2 == 3) {
        game.setDialogTextColor(13)
        game.setDialogFrame(img`
            ..bbbbbbbbbbbbbbbbbbbb..
            .bd111111111111111111db.
            bd1dbbbbbbbbbbbbbbbbd1db
            b1dbbbbbbbbbbbbbbbbbbd1b
            b1bdffffffffffffffffdb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bdffffffffffffffffdb1b
            bd1bbbbbbbbbbbbbbbbbb1db
            bbd111111111111111111dbb
            .bbbbbbbbbbbbbbbbbbbbbb.
            ..bbbbbbbbbbbbbbbbbbbb..
            `)
        game.showLongText("You got 2 Rupees!", DialogLayout.Bottom)
        info.changeScoreBy(2)
    } else if (reward2 == 4) {
        if (quiverstatus == true) {
            game.showLongText("You got 3 Arrows", DialogLayout.Bottom)
            if (quiver.value <= 27) {
                quiver.value += 3
            } else {
                quiver.value += 0
            }
        } else {
            pause(50)
        }
        game.setDialogTextColor(13)
        game.setDialogFrame(img`
            ..bbbbbbbbbbbbbbbbbbbb..
            .bd111111111111111111db.
            bd1dbbbbbbbbbbbbbbbbd1db
            b1dbbbbbbbbbbbbbbbbbbd1b
            b1bdffffffffffffffffdb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bdffffffffffffffffdb1b
            bd1bbbbbbbbbbbbbbbbbb1db
            bbd111111111111111111dbb
            .bbbbbbbbbbbbbbbbbbbbbb.
            ..bbbbbbbbbbbbbbbbbbbb..
            `)
    } else {
        game.setDialogTextColor(13)
        game.setDialogFrame(img`
            ..bbbbbbbbbbbbbbbbbbbb..
            .bd111111111111111111db.
            bd1dbbbbbbbbbbbbbbbbd1db
            b1dbbbbbbbbbbbbbbbbbbd1b
            b1bdffffffffffffffffdb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bdffffffffffffffffdb1b
            bd1bbbbbbbbbbbbbbbbbb1db
            bbd111111111111111111dbb
            .bbbbbbbbbbbbbbbbbbbbbb.
            ..bbbbbbbbbbbbbbbbbbbb..
            `)
        game.showLongText("You got 1 Heart Piece!", DialogLayout.Bottom)
        heartcontainer += 1
    }
})
function spawnRedead (col: number, row: number) {
    redead = sprites.create(img`
        . . f f f f f f f f . 
        . f e e e e e c c c f 
        f e e e e e e e b c f 
        f f e e e f f e b c f 
        f f e e e f f e b c f 
        f e e e e e e e b c f 
        f e e d e e e b d c f 
        . f b c b b c c b b f 
        . . f f f c d d c f . 
        . . f b b c d d c f . 
        . . f b b b c c d f . 
        . . f c c c c c c f . 
        . . . f f f f f f . . 
        . . . . . f f f . . . 
        `, SpriteKind.Enemy4)
    tiles.placeOnTile(redead, tiles.getTileLocation(col, row))
    statusbar4 = statusbars.create(20, 4, StatusBarKind.EnemyHealth4)
    statusbar4.setColor(2, 15, 4)
    statusbar4.setBarBorder(1, 12)
    statusbar4.attachToSprite(redead)
    spawnDetector()
}
sprites.onOverlap(SpriteKind.bigprojectile, SpriteKind.Enemy3, function (sprite, otherSprite) {
    sprite.destroy()
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth3, otherSprite).value += -100
    if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.MovingRight))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 200)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.MovingLeft))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 200)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.MovingDown))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 200)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.MovingUp))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 200)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.FacingRight))) {
        spriteutils.setVelocityAtAngle(link, spriteutils.angleFrom(link, otherSprite), 200)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.FacingLeft))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 200)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.FacingDown))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 200)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.FacingUp))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 200)
    }
})
sprites.onOverlap(SpriteKind.arrow, SpriteKind.Enemy2, function (sprite, otherSprite) {
    sprite.destroy()
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth2, otherSprite).value += -20
    if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.MovingRight))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 150)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.MovingLeft))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 150)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.MovingDown))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 150)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.MovingUp))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 150)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.FacingRight))) {
        spriteutils.setVelocityAtAngle(link, spriteutils.angleFrom(link, otherSprite), 150)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.FacingLeft))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 150)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.FacingDown))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 150)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.FacingUp))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 150)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(link, 40, 40)
    shieldup = true
})
sprites.onOverlap(SpriteKind.Enemy4, SpriteKind.Player, function (sprite, otherSprite) {
    if (shieldup == false) {
        controller.moveSprite(otherSprite, 0, 0)
        sprite.setKind(SpriteKind.NPC_DONE)
        info.changeLifeBy(-1)
        if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.MovingRight))) {
            spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(sprite, otherSprite), 150)
        } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.MovingLeft))) {
            spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(sprite, otherSprite), 150)
        } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.MovingDown))) {
            spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(sprite, otherSprite), 150)
        } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.MovingUp))) {
            spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(sprite, otherSprite), 150)
        } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.FacingRight))) {
            spriteutils.setVelocityAtAngle(link, spriteutils.angleFrom(sprite, otherSprite), 150)
        } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.FacingLeft))) {
            spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(sprite, otherSprite), 150)
        } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.FacingDown))) {
            spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(sprite, otherSprite), 150)
        } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.FacingUp))) {
            spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(sprite, otherSprite), 150)
        }
        timer.after(300, function () {
            sprite.setKind(SpriteKind.Enemy4)
            controller.moveSprite(otherSprite, 100, 100)
            otherSprite.setVelocity(0, 0)
        })
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.purpleSwitchUp, function (sprite, location) {
    for (let value of tiles.getTilesByType(sprites.dungeon.doorClosedNorth)) {
        tiles.setTileAt(value, sprites.dungeon.floorDark0)
        tiles.setWallAt(value, false)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.impa, function (sprite, otherSprite) {
    controller.moveSprite(sprite, 0, 0)
    story.startCutscene(function () {
        story.spriteSayText(otherSprite, "Phantom Ganon has control over Hyrule. Follow your destiny and save Hyrule.", 15, 1, story.TextSpeed.Normal)
    })
    otherSprite.setKind(SpriteKind.NPC_DONE)
    timer.after(4500, function () {
        controller.moveSprite(sprite, 100, 100)
    })
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.bowman, function (sprite, otherSprite) {
    otherSprite.setKind(SpriteKind.NPC_DONE)
    story.startCutscene(function () {
        controller.moveSprite(sprite, 0, 0)
        story.spriteSayText(otherSprite, "You want to buy something?", 15, 1, story.TextSpeed.Normal)
        story.showPlayerChoices("Yes", "No")
        if (story.checkLastAnswer("Yes")) {
            if (bow == false && biggoron == false) {
                story.showPlayerChoices("Fairy Bow", "Biggoron Sword")
            } else if (bow == true && biggoron == false) {
                story.showPlayerChoices("", "Biggoron Sword")
            } else if (bow == false && biggoron == true) {
                story.showPlayerChoices("Fairy Bow", "")
            } else {
                story.showPlayerChoices("", "")
            }
            if (story.checkLastAnswer("Fairy Bow")) {
                if (canbuybow == false) {
                    game.setDialogTextColor(13)
                    game.setDialogFrame(img`
                        ..bbbbbbbbbbbbbbbbbbbb..
                        .bd111111111111111111db.
                        bd1dbbbbbbbbbbbbbbbbd1db
                        b1dbbbbbbbbbbbbbbbbbbd1b
                        b1bdffffffffffffffffdb1b
                        b1bffffffffffffffffffb1b
                        b1bffffffffffffffffffb1b
                        b1bffffffffffffffffffb1b
                        b1bffffffffffffffffffb1b
                        b1bffffffffffffffffffb1b
                        b1bffffffffffffffffffb1b
                        b1bffffffffffffffffffb1b
                        b1bffffffffffffffffffb1b
                        b1bffffffffffffffffffb1b
                        b1bffffffffffffffffffb1b
                        b1bffffffffffffffffffb1b
                        b1bffffffffffffffffffb1b
                        b1bffffffffffffffffffb1b
                        b1bffffffffffffffffffb1b
                        b1bdffffffffffffffffdb1b
                        bd1bbbbbbbbbbbbbbbbbb1db
                        bbd111111111111111111dbb
                        .bbbbbbbbbbbbbbbbbbbbbb.
                        ..bbbbbbbbbbbbbbbbbbbb..
                        `)
                    game.showLongText("You don't have enough Rupees!", DialogLayout.Bottom)
                } else {
                    info.changeScoreBy(-50)
                    game.setDialogTextColor(13)
                    game.setDialogFrame(img`
                        ..bbbbbbbbbbbbbbbbbbbb..
                        .bd111111111111111111db.
                        bd1dbbbbbbbbbbbbbbbbd1db
                        b1dbbbbbbbbbbbbbbbbbbd1b
                        b1bdffffffffffffffffdb1b
                        b1bffffffffffffffffffb1b
                        b1bffffffffffffffffffb1b
                        b1bffffffffffffffffffb1b
                        b1bffffffffffffffffffb1b
                        b1bffffffffffffffffffb1b
                        b1bffffffffffffffffffb1b
                        b1bffffffffffffffffffb1b
                        b1bffffffffffffffffffb1b
                        b1bffffffffffffffffffb1b
                        b1bffffffffffffffffffb1b
                        b1bffffffffffffffffffb1b
                        b1bffffffffffffffffffb1b
                        b1bffffffffffffffffffb1b
                        b1bffffffffffffffffffb1b
                        b1bdffffffffffffffffdb1b
                        bd1bbbbbbbbbbbbbbbbbb1db
                        bbd111111111111111111dbb
                        .bbbbbbbbbbbbbbbbbbbbbb.
                        ..bbbbbbbbbbbbbbbbbbbb..
                        `)
                    game.showLongText("You got the Fairy Bow!", DialogLayout.Bottom)
                    game.showLongText("Press L to use it!", DialogLayout.Bottom)
                    bow = true
                    quiverstatus = true
                }
            } else if (story.checkLastAnswer("Biggoron Sword")) {
                if (canbuybig == false) {
                    game.setDialogTextColor(13)
                    game.setDialogFrame(img`
                        ..bbbbbbbbbbbbbbbbbbbb..
                        .bd111111111111111111db.
                        bd1dbbbbbbbbbbbbbbbbd1db
                        b1dbbbbbbbbbbbbbbbbbbd1b
                        b1bdffffffffffffffffdb1b
                        b1bffffffffffffffffffb1b
                        b1bffffffffffffffffffb1b
                        b1bffffffffffffffffffb1b
                        b1bffffffffffffffffffb1b
                        b1bffffffffffffffffffb1b
                        b1bffffffffffffffffffb1b
                        b1bffffffffffffffffffb1b
                        b1bffffffffffffffffffb1b
                        b1bffffffffffffffffffb1b
                        b1bffffffffffffffffffb1b
                        b1bffffffffffffffffffb1b
                        b1bffffffffffffffffffb1b
                        b1bffffffffffffffffffb1b
                        b1bffffffffffffffffffb1b
                        b1bdffffffffffffffffdb1b
                        bd1bbbbbbbbbbbbbbbbbb1db
                        bbd111111111111111111dbb
                        .bbbbbbbbbbbbbbbbbbbbbb.
                        ..bbbbbbbbbbbbbbbbbbbb..
                        `)
                    game.showLongText("You don't have enough Rupees!", DialogLayout.Bottom)
                } else {
                    info.changeScoreBy(-100)
                    game.setDialogTextColor(13)
                    game.setDialogFrame(img`
                        ..bbbbbbbbbbbbbbbbbbbb..
                        .bd111111111111111111db.
                        bd1dbbbbbbbbbbbbbbbbd1db
                        b1dbbbbbbbbbbbbbbbbbbd1b
                        b1bdffffffffffffffffdb1b
                        b1bffffffffffffffffffb1b
                        b1bffffffffffffffffffb1b
                        b1bffffffffffffffffffb1b
                        b1bffffffffffffffffffb1b
                        b1bffffffffffffffffffb1b
                        b1bffffffffffffffffffb1b
                        b1bffffffffffffffffffb1b
                        b1bffffffffffffffffffb1b
                        b1bffffffffffffffffffb1b
                        b1bffffffffffffffffffb1b
                        b1bffffffffffffffffffb1b
                        b1bffffffffffffffffffb1b
                        b1bffffffffffffffffffb1b
                        b1bffffffffffffffffffb1b
                        b1bdffffffffffffffffdb1b
                        bd1bbbbbbbbbbbbbbbbbb1db
                        bbd111111111111111111dbb
                        .bbbbbbbbbbbbbbbbbbbbbb.
                        ..bbbbbbbbbbbbbbbbbbbb..
                        `)
                    game.showLongText("You got the Biggoron Sword!", DialogLayout.Bottom)
                    game.showLongText("Press K to use it!", DialogLayout.Bottom)
                    biggoron = true
                }
            }
        } else {
            story.cancelCurrentCutscene()
        }
    })
    timer.after(10000, function () {
        controller.moveSprite(sprite, 100, 100)
        otherSprite.setKind(SpriteKind.bowman)
    })
})
sprites.onOverlap(SpriteKind.bigprojectile, SpriteKind.Enemy4, function (sprite, otherSprite) {
    sprite.destroy()
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth4, otherSprite).value += -100
    if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.MovingRight))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 200)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.MovingLeft))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 200)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.MovingDown))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 200)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.MovingUp))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 200)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.FacingRight))) {
        spriteutils.setVelocityAtAngle(link, spriteutils.angleFrom(link, otherSprite), 200)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.FacingLeft))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 200)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.FacingDown))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 200)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.FacingUp))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 200)
    }
})
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    status.spriteAttachedTo().setKind(SpriteKind.NPC_DONE)
    status.spriteAttachedTo().follow(link, 0)
    animation.runImageAnimation(
    status.spriteAttachedTo(),
    [img`
        ..............ffffff....
        ....cc.......fcfbbbbff..
        ....cdc.....fcccfbbbbff.
        .....cdc....fbbbbffbbbf.
        ......cd2..fbccccbbffff.
        .......2f..fcbffffcccbf.
        ......2..f..ffeeefffffff
        ......2...f.4eee4beeeeff
        ...........f4eee41eeeeef
        ...........efdedeeeeeef.
        ...........eddfdeeccff..
        ............eefccceef...
        .............fefeeeef...
        .............fbbfbbbf...
        ..............ffffff....
        ................fff.....
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ..............ffffff....
        .............fcfbbbbff..
        ............fcccfbbbbff.
        ............fbbbbffbbbf.
        ...........fbccccbbffff.
        ...........fcbffffcccbf.
        ............ffeeefffffff
        ............4eee4beeeeff
        ............4eee41eeeeef
        ...........eddedeeeeeef.
        ...........eddfdeeccff..
        ............eecccceef...
        .............feeeeeef...
        .............fbbbbbbf...
        ..............ffffff....
        ................fff.....
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ..............ffffff....
        .............fcfbbbbff..
        ............fcccfbbbbff.
        ............fbbbbffbbbf.
        ...........fbccccbbffff.
        ...........fcbffffcccbf.
        ............ffeeefffffff
        ............4eee4beeeeff
        ............4eee41eeeeef
        ............fdedeeeeeef.
        ............fdfdeeecff..
        .............fcceddef...
        .............feeeddef...
        .............fbbbeebf...
        ..............ffffff....
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        ........................
        ..............fff.......
        ..........ffffffef......
        .........ffbfbfeeef.....
        .........fbbfcfeeeffff..
        ........fbbbfcfeeeceebf.
        ........fbbfbcfeeeeddef.
        ........fbbfbffb1eeddef.
        ........fbfbcfe44eeeebf.
        ........ffcbcfeeeddcebf.
        ........fccbcfeeeefcebf.
        .........fcbcbfeeddfff..
        ..........ffbcf44ff.....
        ............ff..........
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        ........................
        ..............fff.......
        ..........ffffffef......
        .........ffbfbfeeef.....
        .........fbbfcfeeeffff..
        ........fbbbfcfeeeceebf.
        ........fbbfbcfeeeeddef.
        ........fbbfbffb1eeddef.
        ........fbfbcfe44eeeebf.
        ........ffcbcfeeeddcebf.
        ........fccbcfeeeefcebf.
        .........fcbcbfeeddfff..
        ..........ffbcf44ff.....
        ............ff..........
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        ........................
        ..............fff.......
        ..........ffffffef......
        .........ffbfbfeeef.....
        .........fbbfcfeeeffff..
        ........fbbbfcfeeeceebf.
        ........fbbfbcfeeeeddef.
        ........fbbfbffb1eeddef.
        ........fbfbcfe44eeeebf.
        ........ffcbcfeeeddcebf.
        ........fccbcfeeeefcebf.
        .........fcbcbfeeddfff..
        ..........ffbcf44ff.....
        ............ff..........
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `],
    200,
    false
    )
    pause(2000)
    status.spriteAttachedTo().destroy()
    reward = randint(1, 4)
    if (reward == 2) {
        pause(50)
    } else if (reward == 3) {
        game.setDialogTextColor(13)
        game.setDialogFrame(img`
            ..bbbbbbbbbbbbbbbbbbbb..
            .bd111111111111111111db.
            bd1dbbbbbbbbbbbbbbbbd1db
            b1dbbbbbbbbbbbbbbbbbbd1b
            b1bdffffffffffffffffdb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bdffffffffffffffffdb1b
            bd1bbbbbbbbbbbbbbbbbb1db
            bbd111111111111111111dbb
            .bbbbbbbbbbbbbbbbbbbbbb.
            ..bbbbbbbbbbbbbbbbbbbb..
            `)
        game.showLongText("You got 3 Rupees!", DialogLayout.Bottom)
        info.changeScoreBy(3)
    } else if (reward == 4) {
        game.setDialogTextColor(13)
        game.setDialogFrame(img`
            ..bbbbbbbbbbbbbbbbbbbb..
            .bd111111111111111111db.
            bd1dbbbbbbbbbbbbbbbbd1db
            b1dbbbbbbbbbbbbbbbbbbd1b
            b1bdffffffffffffffffdb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bdffffffffffffffffdb1b
            bd1bbbbbbbbbbbbbbbbbb1db
            bbd111111111111111111dbb
            .bbbbbbbbbbbbbbbbbbbbbb.
            ..bbbbbbbbbbbbbbbbbbbb..
            `)
        if (quiverstatus == true) {
            game.showLongText("You got 5 Arrows!", DialogLayout.Bottom)
            if (quiver.value <= 25) {
                quiver.value += 5
            } else {
                quiver.value += 0
            }
        } else {
            pause(50)
        }
    } else {
        game.setDialogTextColor(13)
        game.setDialogFrame(img`
            ..bbbbbbbbbbbbbbbbbbbb..
            .bd111111111111111111db.
            bd1dbbbbbbbbbbbbbbbbd1db
            b1dbbbbbbbbbbbbbbbbbbd1b
            b1bdffffffffffffffffdb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bdffffffffffffffffdb1b
            bd1bbbbbbbbbbbbbbbbbb1db
            bbd111111111111111111dbb
            .bbbbbbbbbbbbbbbbbbbbbb.
            ..bbbbbbbbbbbbbbbbbbbb..
            `)
        game.showLongText("You got 1 Heart Piece", DialogLayout.Bottom)
        heartcontainer += 1
    }
})
sprites.onOverlap(SpriteKind.arrow, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -12.5
    if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.MovingRight))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 100)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.MovingLeft))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 100)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.MovingDown))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 100)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.MovingUp))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 100)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.FacingRight))) {
        spriteutils.setVelocityAtAngle(link, spriteutils.angleFrom(link, otherSprite), 100)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.FacingLeft))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 100)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.FacingDown))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 100)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.FacingUp))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 100)
    }
})
sprites.onOverlap(SpriteKind.bigprojectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -50
    if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.MovingRight))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 200)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.MovingLeft))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 200)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.MovingDown))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 200)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.MovingUp))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 200)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.FacingRight))) {
        spriteutils.setVelocityAtAngle(link, spriteutils.angleFrom(link, otherSprite), 200)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.FacingLeft))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 200)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.FacingDown))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 200)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.FacingUp))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 200)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileGrass1, function (sprite, location) {
    leave = true
    field = true
    kokiri = false
    zora = false
    kakakiro = false
    castle = false
    gerudo = false
    lake = false
    ranch = false
    volcano = false
})
controller.player2.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    if (biggoron == true) {
        if (canhitbig == true) {
            canhitbig = false
            if (characterAnimations.matchesRule(link, characterAnimations.rule(Predicate.MovingUp))) {
                animation.runImageAnimation(
                link,
                [img`
                    ...........................
                    ...........................
                    ...........................
                    ...........................
                    ...........................
                    ...........................
                    ...........................
                    ...........................
                    ...........................
                    ...........................
                    ...........................
                    ......ffff.................
                    ....fff77fff.............11
                    ...fff7777fff...........111
                    ..fff777777fff.........111.
                    ..ff777777777f........111..
                    ..f7777777777f.......111...
                    ..f7777777777f......111....
                    .ff7777777777ff....111.....
                    .ff7777777777ff...111......
                    .fdd77777777ddf8.111.......
                    fbfd77777777dff8851........
                    f8ffd777777dbfdd88.........
                    f2fcf77777ef1cddc88........
                    f2f7f667766fbbcc...........
                    .ff.fee6666f...............
                    ....ffffffff...............
                    .....ff..ff................
                    `,img`
                    ...........................
                    ............1..............
                    ............1..............
                    ............1..............
                    ............1..............
                    ............1..............
                    ............1..............
                    ............1..............
                    ............1..............
                    ............1..............
                    ............1..............
                    ............1..............
                    ..........88588............
                    .......ff...8..............
                    .....ff77ffcc..............
                    ...fff7777fff..............
                    ..fff777777fff.............
                    ..fff777777fff.............
                    ..f7777777777ff............
                    .ff7777777777ff............
                    .fff77777777fff............
                    fbfd77777777dff............
                    f8fd77777777df.............
                    f2ffd777777df..............
                    f2fcf677776f...............
                    .ff7f666666f...............
                    ....ffffffff...............
                    .....fff...................
                    `],
                100,
                false
                )
                bigslash = sprites.createProjectileFromSprite(img`
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
                    `, link, 0, -110)
                bigslash.setKind(SpriteKind.bigprojectile)
                animation.runImageAnimation(
                bigslash,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . 4 5 . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . 4 5 . . 
                    . . . . . . . . . . . . . 4 5 . 
                    . . . . . . . . . . . . . . 4 . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . 4 5 . . . . 
                    . . . . . . . . . . . 4 5 . . . 
                    . . . . . . . . . . . . 4 5 . . 
                    . . . . . . . . . . . . . 4 5 . 
                    . . . . . . . . . . . . . . 4 . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . 5 5 . . . . . . 
                    . . . . . . . . 4 4 4 5 . . . . 
                    . . . . . . . . . . . 4 5 . . . 
                    . . . . . . . . . . . . 4 5 . . 
                    . . . . . . . . . . . . . 4 5 . 
                    . . . . . . . . . . . . . . 4 . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 5 5 5 5 . . . . . . 
                    . . . . . . 4 4 4 4 4 5 . . . . 
                    . . . . . . . . . . . 4 5 . . . 
                    . . . . . . . . . . . . 4 5 . . 
                    . . . . . . . . . . . . . 4 5 . 
                    . . . . . . . . . . . . . . 4 . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . 5 5 5 5 5 . . . . . . 
                    . . . . 5 5 5 4 4 4 4 5 . . . . 
                    . . . . 4 4 4 . . . . 4 5 . . . 
                    . . . . . . . . . . . . 4 5 . . 
                    . . . . . . . . . . . . . 4 5 . 
                    . . . . . . . . . . . . . . 4 . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . 5 5 5 5 5 . . . . . . 
                    . . . 5 5 5 5 4 4 4 4 5 . . . . 
                    . . 5 5 5 4 4 . . . . 4 5 . . . 
                    . . 5 4 4 . . . . . . . 4 5 . . 
                    . . 4 . . . . . . . . . . 4 5 . 
                    . . . . . . . . . . . . . . 4 . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `],
                50,
                false
                )
                timer.after(400, function () {
                    bigslash.destroy()
                })
            } else if (characterAnimations.matchesRule(link, characterAnimations.rule(Predicate.MovingRight))) {
                animation.runImageAnimation(
                link,
                [img`
                    .........................
                    .......fff...............
                    ....fffff7f............11
                    ..ff6666677ff.........111
                    .ff666666777ff.......111.
                    .f6666fff6666f......111..
                    .fffff66677776f....111...
                    fff6777f44ff47f...111....
                    ff67fff45ddd55f..111.....
                    f67ffd45ffddf58.111......
                    .ffddd45dddddf8851.......
                    ..fddd4ddddcfcc88........
                    ...f7777eeeccddc88.......
                    ...feeee66c77ddc.........
                    ...ffffffffcccc..........
                    ...fff...ff..............
                    .........................
                    .........................
                    .........................
                    .........................
                    .........................
                    .........................
                    .........................
                    .........................
                    `,img`
                    ....ffffff...............
                    ..ff6666f7f..............
                    .ff6666f777f.............
                    .f666ff6666f.............
                    .ffff6677776f............
                    .f677744ff47f............
                    ff67f45ddd55f............
                    ffff45ffddf5f............
                    fddd45dddddf.............
                    .fdc4ddddcf..............
                    ..fddc66ecf88............
                    ..fddc7ecc88.............
                    ...ccfe7c8851............
                    ...fee66c8.111...........
                    ....fffff...111..........
                    .....fff.....111.........
                    ..............111........
                    ...............111.......
                    ................111......
                    .................111.....
                    ..................11.....
                    .........................
                    .........................
                    .........................
                    `],
                100,
                false
                )
                bigslash = sprites.createProjectileFromSprite(img`
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
                    `, link, 110, 0)
                bigslash.setKind(SpriteKind.bigprojectile)
                animation.runImageAnimation(
                bigslash,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 4 5 . . . . . . . . 
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
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . 4 5 . . . . . . . 
                    . . . . . . . . 4 5 . . . . . . 
                    . . . . . . . . . 4 . . . . . . 
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
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . 4 5 . . . . . . . 
                    . . . . . . . . 4 5 . . . . . . 
                    . . . . . . . . . 4 5 . . . . . 
                    . . . . . . . . . . 4 5 . . . . 
                    . . . . . . . . . . . 4 . . . . 
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
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . 4 5 . . . . . . . 
                    . . . . . . . . 4 5 . . . . . . 
                    . . . . . . . . . 4 5 . . . . . 
                    . . . . . . . . . . 4 5 . . . . 
                    . . . . . . . . . . . 4 . . . . 
                    . . . . . . . . . . . 4 5 . . . 
                    . . . . . . . . . . . 4 5 . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . 4 5 . . . . . . . 
                    . . . . . . . . 4 5 . . . . . . 
                    . . . . . . . . . 4 5 . . . . . 
                    . . . . . . . . . . 4 5 . . . . 
                    . . . . . . . . . . . 4 . . . . 
                    . . . . . . . . . . . 4 5 . . . 
                    . . . . . . . . . . . 4 5 . . . 
                    . . . . . . . . . . . 4 5 . . . 
                    . . . . . . . . . . . 4 5 . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . 4 5 . . . . . . . 
                    . . . . . . . . 4 5 . . . . . . 
                    . . . . . . . . . 4 5 . . . . . 
                    . . . . . . . . . . 4 5 . . . . 
                    . . . . . . . . . . . 4 . . . . 
                    . . . . . . . . . . . 4 5 . . . 
                    . . . . . . . . . . . 4 5 . . . 
                    . . . . . . . . . . . 4 5 . . . 
                    . . . . . . . . . . 4 5 5 . . . 
                    . . . . . . . . . . 4 5 5 . . . 
                    . . . . . . . . . . 4 5 . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . 4 5 . . . . . . . 
                    . . . . . . . . 4 5 . . . . . . 
                    . . . . . . . . . 4 5 . . . . . 
                    . . . . . . . . . . 4 5 . . . . 
                    . . . . . . . . . . . 4 . . . . 
                    . . . . . . . . . . . 4 5 . . . 
                    . . . . . . . . . . . 4 5 . . . 
                    . . . . . . . . . . . 4 5 . . . 
                    . . . . . . . . . . 4 5 5 . . . 
                    . . . . . . . . . . 4 5 5 . . . 
                    . . . . . . . . . 4 5 5 . . . . 
                    . . . . . . . . . 4 5 5 . . . . 
                    . . . . . . . . 4 5 5 . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `],
                50,
                false
                )
                timer.after(400, function () {
                    bigslash.destroy()
                })
            } else if (characterAnimations.matchesRule(link, characterAnimations.rule(Predicate.MovingDown))) {
                animation.runImageAnimation(
                link,
                [img`
                    ......ffff................
                    ....fff77fff..............
                    ...fff7777fff...........11
                    ..fff666666fff.........111
                    ..ff677777766f........111.
                    ..f67ffffff76f.......111..
                    ..fff44ff45fff......111...
                    .fff45555555fff....111....
                    .ff455dddd555ff8..111.....
                    .fd45ffddff55df8.111......
                    fbf4dddddddd5ff8851.......
                    f8ffdddddcddbfdd88........
                    f2f4f7777eef1cddc888......
                    f2f.f77ee77fbbcc..........
                    .ff.fee6666f..............
                    ....ffffffff..............
                    .....ff..ff...............
                    ..........................
                    ..........................
                    ..........................
                    ..........................
                    ..........................
                    ..........................
                    ..........................
                    ..........................
                    ..........................
                    ..........................
                    ..........................
                    ..........................
                    ..........................
                    `,img`
                    ..........................
                    ..........................
                    .......ff.................
                    .....ff77ff...............
                    ...fff7777fff.............
                    ..fff777777fff............
                    ..fff777777fff............
                    ..f6666666666ff...........
                    .ff6744ff4576ff...........
                    .fff45dddd55fff...........
                    fbf45ffddff55ff...........
                    f8f4ddddddd55f............
                    f2ffdddddcdd5c............
                    f2fcf77777f7c.............
                    .ff7f66666f7c.............
                    ....ffffffddc.............
                    .....ffffcddc.............
                    ..........cc..............
                    ..........8...............
                    ........88588.............
                    ..........1...............
                    ..........1...............
                    ..........1...............
                    ..........1...............
                    ..........1...............
                    ..........1...............
                    ..........1...............
                    ..........1...............
                    ..........1...............
                    ..........................
                    `],
                100,
                false
                )
                bigslash = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . 1 1 1 1 1 . . . . 
                    . . . . . 1 1 1 1 1 1 1 1 1 . . 
                    . . . . 1 1 . . . . 1 1 1 1 1 . 
                    . . . 1 1 . . . . . . . 1 1 1 . 
                    . . 1 1 . . . . . . . . . . 1 . 
                    . . 1 . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, link, 0, 110)
                bigslash.setKind(SpriteKind.bigprojectile)
                animation.runImageAnimation(
                bigslash,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . 4 . 
                    . . . . . . . . . . . . . . 5 . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . 4 . 
                    . . . . . . . . . . . . . 4 5 . 
                    . . . . . . . . . . . . 4 5 . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . 4 . 
                    . . . . . . . . . . . . . 4 5 . 
                    . . . . . . . . . . . . 4 5 . . 
                    . . . . . . . . . . . 4 5 . . . 
                    . . . . . . . . . . 4 5 . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . 4 . 
                    . . . . . . . . . . . . . 4 5 . 
                    . . . . . . . . . . . . 4 5 . . 
                    . . . . . . . . . . . 4 5 . . . 
                    . . . . . . . . 4 4 4 5 . . . . 
                    . . . . . . . . 5 5 . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . 4 . 
                    . . . . . . . . . . . . . 4 5 . 
                    . . . . . . . . . . . . 4 5 . . 
                    . . . . . . . . . . . 4 5 . . . 
                    . . . . . . 4 4 4 4 4 5 . . . . 
                    . . . . . . 5 5 5 5 . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . 4 . 
                    . . . . . . . . . . . . . 4 5 . 
                    . . . . . . . . . . . . 4 5 . . 
                    . . . . 4 4 4 . . . . 4 5 . . . 
                    . . . . 5 5 5 4 4 4 4 5 . . . . 
                    . . . . . 5 5 5 5 5 . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . 4 . 
                    . . 4 . . . . . . . . . . 4 5 . 
                    . . 5 4 4 . . . . . . . 4 5 . . 
                    . . 5 5 5 4 4 . . . . 4 5 . . . 
                    . . . 5 5 5 5 4 4 4 4 5 . . . . 
                    . . . . . 5 5 5 5 5 . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `],
                50,
                false
                )
                timer.after(400, function () {
                    bigslash.destroy()
                })
            } else if (characterAnimations.matchesRule(link, characterAnimations.rule(Predicate.MovingLeft))) {
                animation.runImageAnimation(
                link,
                [img`
                    .........................
                    ...............fff.......
                    11............f7fffff....
                    111.........ff7766666ff..
                    .111.......ff777666666ff.
                    ..111......f6666fff6666f.
                    ...111....f67777666fffff.
                    ....111...f74ff44f7776fff
                    .....111..f55ddd54fff76ff
                    ......111.85fddff54dff76f
                    .......1588fddddd54dddff.
                    ........88ccfcdddd4dddf..
                    .......88cddcceee7777f...
                    .........cdd77c66eeeef...
                    ..........ccccffffffff...
                    ..............ff...fff...
                    .........................
                    .........................
                    .........................
                    .........................
                    .........................
                    .........................
                    .........................
                    .........................
                    `,img`
                    ...............ffffff....
                    ..............f7f6666ff..
                    .............f777f6666ff.
                    .............f6666ff666f.
                    ............f6777766ffff.
                    ............f74ff447776f.
                    ............f55ddd54f76ff
                    ............f5fddff54ffff
                    .............fddddd54dddf
                    ..............fcdddd4cdf.
                    ............88fce66cddf..
                    .............88cce7cddf..
                    ............1588c7efcc...
                    ...........111.8c66eef...
                    ..........111...fffff....
                    .........111.....fff.....
                    ........111..............
                    .......111...............
                    ......111................
                    .....111.................
                    .....11..................
                    .........................
                    .........................
                    .........................
                    `],
                100,
                false
                )
                bigslash = sprites.createProjectileFromSprite(img`
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
                    `, link, -110, 0)
                bigslash.setKind(SpriteKind.bigprojectile)
                animation.runImageAnimation(
                bigslash,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . 5 4 . . . . . . 
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
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . 5 4 . . . . . . . 
                    . . . . . . 5 4 . . . . . . . . 
                    . . . . . . 4 . . . . . . . . . 
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
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . 5 4 . . . . . . . 
                    . . . . . . 5 4 . . . . . . . . 
                    . . . . . 5 4 . . . . . . . . . 
                    . . . . 5 4 . . . . . . . . . . 
                    . . . . 4 . . . . . . . . . . . 
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
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . 5 4 . . . . . . . 
                    . . . . . . 5 4 . . . . . . . . 
                    . . . . . 5 4 . . . . . . . . . 
                    . . . . 5 4 . . . . . . . . . . 
                    . . . . 4 . . . . . . . . . . . 
                    . . . 5 4 . . . . . . . . . . . 
                    . . . 5 4 . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . 5 4 . . . . . . . 
                    . . . . . . 5 4 . . . . . . . . 
                    . . . . . 5 4 . . . . . . . . . 
                    . . . . 5 4 . . . . . . . . . . 
                    . . . . 4 . . . . . . . . . . . 
                    . . . 5 4 . . . . . . . . . . . 
                    . . . 5 4 . . . . . . . . . . . 
                    . . . 5 4 . . . . . . . . . . . 
                    . . . 5 4 . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . 5 4 . . . . . . . 
                    . . . . . . 5 4 . . . . . . . . 
                    . . . . . 5 4 . . . . . . . . . 
                    . . . . 5 4 . . . . . . . . . . 
                    . . . . 4 . . . . . . . . . . . 
                    . . . 5 4 . . . . . . . . . . . 
                    . . . 5 4 . . . . . . . . . . . 
                    . . . 5 4 . . . . . . . . . . . 
                    . . . 5 5 4 . . . . . . . . . . 
                    . . . 5 5 4 . . . . . . . . . . 
                    . . . . 5 4 . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . 5 4 . . . . . . . 
                    . . . . . . 5 4 . . . . . . . . 
                    . . . . . 5 4 . . . . . . . . . 
                    . . . . 5 4 . . . . . . . . . . 
                    . . . . 4 . . . . . . . . . . . 
                    . . . 5 4 . . . . . . . . . . . 
                    . . . 5 4 . . . . . . . . . . . 
                    . . . 5 4 . . . . . . . . . . . 
                    . . . 5 5 4 . . . . . . . . . . 
                    . . . 5 5 4 . . . . . . . . . . 
                    . . . . 5 5 4 . . . . . . . . . 
                    . . . . 5 5 4 . . . . . . . . . 
                    . . . . . 5 5 4 . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `],
                50,
                false
                )
                timer.after(400, function () {
                    bigslash.destroy()
                })
            } else if (characterAnimations.matchesRule(link, characterAnimations.rule(Predicate.FacingUp))) {
                animation.runImageAnimation(
                link,
                [img`
                    ...........................
                    ...........................
                    ...........................
                    ...........................
                    ...........................
                    ...........................
                    ...........................
                    ...........................
                    ...........................
                    ...........................
                    ...........................
                    ......ffff.................
                    ....fff77fff.............11
                    ...fff7777fff...........111
                    ..fff777777fff.........111.
                    ..ff777777777f........111..
                    ..f7777777777f.......111...
                    ..f7777777777f......111....
                    .ff7777777777ff....111.....
                    .ff7777777777ff...111......
                    .fdd77777777ddf8.111.......
                    fbfd77777777dff8851........
                    f8ffd777777dbfdd88.........
                    f2fcf77777ef1cddc88........
                    f2f7f667766fbbcc...........
                    .ff.fee6666f...............
                    ....ffffffff...............
                    .....ff..ff................
                    `,img`
                    ...........................
                    ............1..............
                    ............1..............
                    ............1..............
                    ............1..............
                    ............1..............
                    ............1..............
                    ............1..............
                    ............1..............
                    ............1..............
                    ............1..............
                    ............1..............
                    ..........88588............
                    .......ff...8..............
                    .....ff77ffcc..............
                    ...fff7777fff..............
                    ..fff777777fff.............
                    ..fff777777fff.............
                    ..f7777777777ff............
                    .ff7777777777ff............
                    .fff77777777fff............
                    fbfd77777777dff............
                    f8fd77777777df.............
                    f2ffd777777df..............
                    f2fcf677776f...............
                    .ff7f666666f...............
                    ....ffffffff...............
                    .....fff...................
                    `],
                100,
                false
                )
                bigslash = sprites.createProjectileFromSprite(img`
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
                    `, link, 0, -110)
                bigslash.setKind(SpriteKind.bigprojectile)
                animation.runImageAnimation(
                bigslash,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . 4 5 . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . 4 5 . . 
                    . . . . . . . . . . . . . 4 5 . 
                    . . . . . . . . . . . . . . 4 . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . 4 5 . . . . 
                    . . . . . . . . . . . 4 5 . . . 
                    . . . . . . . . . . . . 4 5 . . 
                    . . . . . . . . . . . . . 4 5 . 
                    . . . . . . . . . . . . . . 4 . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . 5 5 . . . . . . 
                    . . . . . . . . 4 4 4 5 . . . . 
                    . . . . . . . . . . . 4 5 . . . 
                    . . . . . . . . . . . . 4 5 . . 
                    . . . . . . . . . . . . . 4 5 . 
                    . . . . . . . . . . . . . . 4 . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 5 5 5 5 . . . . . . 
                    . . . . . . 4 4 4 4 4 5 . . . . 
                    . . . . . . . . . . . 4 5 . . . 
                    . . . . . . . . . . . . 4 5 . . 
                    . . . . . . . . . . . . . 4 5 . 
                    . . . . . . . . . . . . . . 4 . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . 5 5 5 5 5 . . . . . . 
                    . . . . 5 5 5 4 4 4 4 5 . . . . 
                    . . . . 4 4 4 . . . . 4 5 . . . 
                    . . . . . . . . . . . . 4 5 . . 
                    . . . . . . . . . . . . . 4 5 . 
                    . . . . . . . . . . . . . . 4 . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . 5 5 5 5 5 . . . . . . 
                    . . . 5 5 5 5 4 4 4 4 5 . . . . 
                    . . 5 5 5 4 4 . . . . 4 5 . . . 
                    . . 5 4 4 . . . . . . . 4 5 . . 
                    . . 4 . . . . . . . . . . 4 5 . 
                    . . . . . . . . . . . . . . 4 . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `],
                50,
                false
                )
                timer.after(400, function () {
                    bigslash.destroy()
                })
            } else if (characterAnimations.matchesRule(link, characterAnimations.rule(Predicate.FacingRight))) {
                animation.runImageAnimation(
                link,
                [img`
                    .........................
                    .......fff...............
                    ....fffff7f............11
                    ..ff6666677ff.........111
                    .ff666666777ff.......111.
                    .f6666fff6666f......111..
                    .fffff66677776f....111...
                    fff6777f44ff47f...111....
                    ff67fff45ddd55f..111.....
                    f67ffd45ffddf58.111......
                    .ffddd45dddddf8851.......
                    ..fddd4ddddcfcc88........
                    ...f7777eeeccddc88.......
                    ...feeee66c77ddc.........
                    ...ffffffffcccc..........
                    ...fff...ff..............
                    .........................
                    .........................
                    .........................
                    .........................
                    .........................
                    .........................
                    .........................
                    .........................
                    `,img`
                    ....ffffff...............
                    ..ff6666f7f..............
                    .ff6666f777f.............
                    .f666ff6666f.............
                    .ffff6677776f............
                    .f677744ff47f............
                    ff67f45ddd55f............
                    ffff45ffddf5f............
                    fddd45dddddf.............
                    .fdc4ddddcf..............
                    ..fddc66ecf88............
                    ..fddc7ecc88.............
                    ...ccfe7c8851............
                    ...fee66c8.111...........
                    ....fffff...111..........
                    .....fff.....111.........
                    ..............111........
                    ...............111.......
                    ................111......
                    .................111.....
                    ..................11.....
                    .........................
                    .........................
                    .........................
                    `],
                100,
                false
                )
                bigslash = sprites.createProjectileFromSprite(img`
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
                    `, link, 110, 0)
                bigslash.setKind(SpriteKind.bigprojectile)
                animation.runImageAnimation(
                bigslash,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 4 5 . . . . . . . . 
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
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . 4 5 . . . . . . . 
                    . . . . . . . . 4 5 . . . . . . 
                    . . . . . . . . . 4 . . . . . . 
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
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . 4 5 . . . . . . . 
                    . . . . . . . . 4 5 . . . . . . 
                    . . . . . . . . . 4 5 . . . . . 
                    . . . . . . . . . . 4 5 . . . . 
                    . . . . . . . . . . . 4 . . . . 
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
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . 4 5 . . . . . . . 
                    . . . . . . . . 4 5 . . . . . . 
                    . . . . . . . . . 4 5 . . . . . 
                    . . . . . . . . . . 4 5 . . . . 
                    . . . . . . . . . . . 4 . . . . 
                    . . . . . . . . . . . 4 5 . . . 
                    . . . . . . . . . . . 4 5 . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . 4 5 . . . . . . . 
                    . . . . . . . . 4 5 . . . . . . 
                    . . . . . . . . . 4 5 . . . . . 
                    . . . . . . . . . . 4 5 . . . . 
                    . . . . . . . . . . . 4 . . . . 
                    . . . . . . . . . . . 4 5 . . . 
                    . . . . . . . . . . . 4 5 . . . 
                    . . . . . . . . . . . 4 5 . . . 
                    . . . . . . . . . . . 4 5 . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . 4 5 . . . . . . . 
                    . . . . . . . . 4 5 . . . . . . 
                    . . . . . . . . . 4 5 . . . . . 
                    . . . . . . . . . . 4 5 . . . . 
                    . . . . . . . . . . . 4 . . . . 
                    . . . . . . . . . . . 4 5 . . . 
                    . . . . . . . . . . . 4 5 . . . 
                    . . . . . . . . . . . 4 5 . . . 
                    . . . . . . . . . . 4 5 5 . . . 
                    . . . . . . . . . . 4 5 5 . . . 
                    . . . . . . . . . . 4 5 . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . 4 5 . . . . . . . 
                    . . . . . . . . 4 5 . . . . . . 
                    . . . . . . . . . 4 5 . . . . . 
                    . . . . . . . . . . 4 5 . . . . 
                    . . . . . . . . . . . 4 . . . . 
                    . . . . . . . . . . . 4 5 . . . 
                    . . . . . . . . . . . 4 5 . . . 
                    . . . . . . . . . . . 4 5 . . . 
                    . . . . . . . . . . 4 5 5 . . . 
                    . . . . . . . . . . 4 5 5 . . . 
                    . . . . . . . . . 4 5 5 . . . . 
                    . . . . . . . . . 4 5 5 . . . . 
                    . . . . . . . . 4 5 5 . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `],
                50,
                false
                )
                timer.after(400, function () {
                    bigslash.destroy()
                })
            } else if (characterAnimations.matchesRule(link, characterAnimations.rule(Predicate.FacingDown))) {
                animation.runImageAnimation(
                link,
                [img`
                    ......ffff................
                    ....fff77fff..............
                    ...fff7777fff...........11
                    ..fff666666fff.........111
                    ..ff677777766f........111.
                    ..f67ffffff76f.......111..
                    ..fff44ff45fff......111...
                    .fff45555555fff....111....
                    .ff455dddd555ff8..111.....
                    .fd45ffddff55df8.111......
                    fbf4dddddddd5ff8851.......
                    f8ffdddddcddbfdd88........
                    f2f4f7777eef1cddc888......
                    f2f.f77ee77fbbcc..........
                    .ff.fee6666f..............
                    ....ffffffff..............
                    .....ff..ff...............
                    ..........................
                    ..........................
                    ..........................
                    ..........................
                    ..........................
                    ..........................
                    ..........................
                    ..........................
                    ..........................
                    ..........................
                    ..........................
                    ..........................
                    ..........................
                    `,img`
                    ..........................
                    ..........................
                    .......ff.................
                    .....ff77ff...............
                    ...fff7777fff.............
                    ..fff777777fff............
                    ..fff777777fff............
                    ..f6666666666ff...........
                    .ff6744ff4576ff...........
                    .fff45dddd55fff...........
                    fbf45ffddff55ff...........
                    f8f4ddddddd55f............
                    f2ffdddddcdd5c............
                    f2fcf77777f7c.............
                    .ff7f66666f7c.............
                    ....ffffffddc.............
                    .....ffffcddc.............
                    ..........cc..............
                    ..........8...............
                    ........88588.............
                    ..........1...............
                    ..........1...............
                    ..........1...............
                    ..........1...............
                    ..........1...............
                    ..........1...............
                    ..........1...............
                    ..........1...............
                    ..........1...............
                    ..........................
                    `],
                100,
                false
                )
                bigslash = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . 1 1 1 1 1 . . . . 
                    . . . . . 1 1 1 1 1 1 1 1 1 . . 
                    . . . . 1 1 . . . . 1 1 1 1 1 . 
                    . . . 1 1 . . . . . . . 1 1 1 . 
                    . . 1 1 . . . . . . . . . . 1 . 
                    . . 1 . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, link, 0, 110)
                bigslash.setKind(SpriteKind.bigprojectile)
                animation.runImageAnimation(
                bigslash,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . 4 . 
                    . . . . . . . . . . . . . . 5 . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . 4 . 
                    . . . . . . . . . . . . . 4 5 . 
                    . . . . . . . . . . . . 4 5 . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . 4 . 
                    . . . . . . . . . . . . . 4 5 . 
                    . . . . . . . . . . . . 4 5 . . 
                    . . . . . . . . . . . 4 5 . . . 
                    . . . . . . . . . . 4 5 . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . 4 . 
                    . . . . . . . . . . . . . 4 5 . 
                    . . . . . . . . . . . . 4 5 . . 
                    . . . . . . . . . . . 4 5 . . . 
                    . . . . . . . . 4 4 4 5 . . . . 
                    . . . . . . . . 5 5 . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . 4 . 
                    . . . . . . . . . . . . . 4 5 . 
                    . . . . . . . . . . . . 4 5 . . 
                    . . . . . . . . . . . 4 5 . . . 
                    . . . . . . 4 4 4 4 4 5 . . . . 
                    . . . . . . 5 5 5 5 . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . 4 . 
                    . . . . . . . . . . . . . 4 5 . 
                    . . . . . . . . . . . . 4 5 . . 
                    . . . . 4 4 4 . . . . 4 5 . . . 
                    . . . . 5 5 5 4 4 4 4 5 . . . . 
                    . . . . . 5 5 5 5 5 . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . 4 . 
                    . . 4 . . . . . . . . . . 4 5 . 
                    . . 5 4 4 . . . . . . . 4 5 . . 
                    . . 5 5 5 4 4 . . . . 4 5 . . . 
                    . . . 5 5 5 5 4 4 4 4 5 . . . . 
                    . . . . . 5 5 5 5 5 . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `],
                50,
                false
                )
                timer.after(400, function () {
                    bigslash.destroy()
                })
            } else if (characterAnimations.matchesRule(link, characterAnimations.rule(Predicate.FacingLeft))) {
                animation.runImageAnimation(
                link,
                [img`
                    .........................
                    ...............fff.......
                    11............f7fffff....
                    111.........ff7766666ff..
                    .111.......ff777666666ff.
                    ..111......f6666fff6666f.
                    ...111....f67777666fffff.
                    ....111...f74ff44f7776fff
                    .....111..f55ddd54fff76ff
                    ......111.85fddff54dff76f
                    .......1588fddddd54dddff.
                    ........88ccfcdddd4dddf..
                    .......88cddcceee7777f...
                    .........cdd77c66eeeef...
                    ..........ccccffffffff...
                    ..............ff...fff...
                    .........................
                    .........................
                    .........................
                    .........................
                    .........................
                    .........................
                    .........................
                    .........................
                    `,img`
                    ...............ffffff....
                    ..............f7f6666ff..
                    .............f777f6666ff.
                    .............f6666ff666f.
                    ............f6777766ffff.
                    ............f74ff447776f.
                    ............f55ddd54f76ff
                    ............f5fddff54ffff
                    .............fddddd54dddf
                    ..............fcdddd4cdf.
                    ............88fce66cddf..
                    .............88cce7cddf..
                    ............1588c7efcc...
                    ...........111.8c66eef...
                    ..........111...fffff....
                    .........111.....fff.....
                    ........111..............
                    .......111...............
                    ......111................
                    .....111.................
                    .....11..................
                    .........................
                    .........................
                    .........................
                    `],
                100,
                false
                )
                bigslash = sprites.createProjectileFromSprite(img`
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
                    `, link, -110, 0)
                bigslash.setKind(SpriteKind.bigprojectile)
                animation.runImageAnimation(
                bigslash,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . 5 4 . . . . . . 
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
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . 5 4 . . . . . . . 
                    . . . . . . 5 4 . . . . . . . . 
                    . . . . . . 4 . . . . . . . . . 
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
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . 5 4 . . . . . . . 
                    . . . . . . 5 4 . . . . . . . . 
                    . . . . . 5 4 . . . . . . . . . 
                    . . . . 5 4 . . . . . . . . . . 
                    . . . . 4 . . . . . . . . . . . 
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
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . 5 4 . . . . . . . 
                    . . . . . . 5 4 . . . . . . . . 
                    . . . . . 5 4 . . . . . . . . . 
                    . . . . 5 4 . . . . . . . . . . 
                    . . . . 4 . . . . . . . . . . . 
                    . . . 5 4 . . . . . . . . . . . 
                    . . . 5 4 . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . 5 4 . . . . . . . 
                    . . . . . . 5 4 . . . . . . . . 
                    . . . . . 5 4 . . . . . . . . . 
                    . . . . 5 4 . . . . . . . . . . 
                    . . . . 4 . . . . . . . . . . . 
                    . . . 5 4 . . . . . . . . . . . 
                    . . . 5 4 . . . . . . . . . . . 
                    . . . 5 4 . . . . . . . . . . . 
                    . . . 5 4 . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . 5 4 . . . . . . . 
                    . . . . . . 5 4 . . . . . . . . 
                    . . . . . 5 4 . . . . . . . . . 
                    . . . . 5 4 . . . . . . . . . . 
                    . . . . 4 . . . . . . . . . . . 
                    . . . 5 4 . . . . . . . . . . . 
                    . . . 5 4 . . . . . . . . . . . 
                    . . . 5 4 . . . . . . . . . . . 
                    . . . 5 5 4 . . . . . . . . . . 
                    . . . 5 5 4 . . . . . . . . . . 
                    . . . . 5 4 . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . 5 4 . . . . . . . 
                    . . . . . . 5 4 . . . . . . . . 
                    . . . . . 5 4 . . . . . . . . . 
                    . . . . 5 4 . . . . . . . . . . 
                    . . . . 4 . . . . . . . . . . . 
                    . . . 5 4 . . . . . . . . . . . 
                    . . . 5 4 . . . . . . . . . . . 
                    . . . 5 4 . . . . . . . . . . . 
                    . . . 5 5 4 . . . . . . . . . . 
                    . . . 5 5 4 . . . . . . . . . . 
                    . . . . 5 5 4 . . . . . . . . . 
                    . . . . 5 5 4 . . . . . . . . . 
                    . . . . . 5 5 4 . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `],
                50,
                false
                )
                timer.after(400, function () {
                    bigslash.destroy()
                })
            }
            timer.after(cooldown2, function () {
                canhitbig = true
            })
        }
    }
})
sprites.onOverlap(SpriteKind.bigprojectile, SpriteKind.Enemy2, function (sprite, otherSprite) {
    sprite.destroy()
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth2, otherSprite).value += -100
    if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.MovingRight))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 200)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.MovingLeft))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 200)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.MovingDown))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 200)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.MovingUp))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 200)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.FacingRight))) {
        spriteutils.setVelocityAtAngle(link, spriteutils.angleFrom(link, otherSprite), 200)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.FacingLeft))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 200)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.FacingDown))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 200)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.FacingUp))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 200)
    }
})
sprites.onOverlap(SpriteKind.arrow, SpriteKind.Enemy3, function (sprite, otherSprite) {
    sprite.destroy()
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth3, otherSprite).value += -35
    if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.MovingRight))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 150)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.MovingLeft))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 150)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.MovingDown))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 150)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.MovingUp))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 150)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.FacingRight))) {
        spriteutils.setVelocityAtAngle(link, spriteutils.angleFrom(link, otherSprite), 150)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.FacingLeft))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 150)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.FacingDown))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 150)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.FacingUp))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 150)
    }
})
statusbars.onZero(StatusBarKind.EnemyHealth3, function (status) {
    status.spriteAttachedTo().setKind(SpriteKind.NPC_DONE)
    status.spriteAttachedTo().follow(link, 0)
    animation.runImageAnimation(
    status.spriteAttachedTo(),
    [img`
        . . . . f f f f f . . . . 
        . . . f 1 1 1 1 1 f f . . 
        . . f b 1 1 1 1 1 1 b f . 
        . . f 1 1 1 1 1 1 1 d b f 
        . f d 1 1 1 1 1 1 d d d f 
        . f d 1 1 1 1 1 d d d d f 
        . f d 1 1 d d d d d d d f 
        . f 1 1 1 d d d d d d d f 
        . f 1 1 2 c d d d d d d f 
        f b 1 1 1 1 b d d d b f f 
        f 1 b 1 b d f c f f f . . 
        f b f b f f f f f f f . . 
        . f f f f f f f f f f . . 
        . . . f 1 1 d d c c f . . 
        . . . f b c b c b b c . . 
        . . . f 1 1 d c b b c . . 
        . . . . f f f f c c . . . 
        . . . . . . f f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . f f f f f . . . . 
        . . . f 1 1 1 1 1 f f . . 
        . . f b 1 1 1 1 1 1 b f . 
        . . f 1 1 1 1 1 1 1 d b f 
        . f d 1 1 1 1 1 1 d d d f 
        . f d 1 1 1 1 1 d d d d f 
        . f d 1 1 d d d d d d d f 
        . f 1 1 1 d d d d d d d f 
        . f 1 1 2 c d d d d d d f 
        f b 1 1 1 1 b d d d b f f 
        f 1 b 1 b d f c f f f . . 
        f b f b f f f f f f f . . 
        . f f f f f f f c c f . . 
        . . . f b c b c b b c . . 
        . . . f 1 1 d c b b c . . 
        . . . . f f f f c c . . . 
        . . . . . . f f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . f f f f f . . . . 
        . . . f 1 1 1 1 1 f f . . 
        . . f b 1 1 1 1 1 1 b f . 
        . . f 1 1 1 1 1 1 1 d b f 
        . f d 1 1 1 1 1 1 d d d f 
        . f d 1 1 1 1 1 d d d d f 
        . f d 1 1 d d d d d d d f 
        . f 1 1 1 d d d d d d d f 
        . f 1 1 2 c d d d d d d f 
        f b 1 1 1 1 b d d d b f f 
        f 1 b 1 b d f c c c f . . 
        f b f b f f f c b b c . . 
        . f f f f f f c b b c . . 
        . . . . f f f f c c . . . 
        . . . . . . f f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . f f f f f . . . . 
        . . . f 1 1 1 1 1 f f . . 
        . . f b 1 1 1 1 1 1 b f . 
        . . f 1 1 1 1 1 1 1 d b f 
        . f d 1 1 1 1 1 1 d d d f 
        . f d 1 1 1 1 1 d d d d f 
        . f d 1 1 d d d d d d d f 
        . f 1 1 1 d d d d d d d f 
        . f 1 1 2 c d d d d d d f 
        f b 1 1 1 1 b d d d b f f 
        f 1 b 1 b d f c f f f . . 
        f b f b f f f f f f f . . 
        . f f f f f f f f f f . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . f f f f f . . . . 
        . . . f 1 1 1 1 1 f f . . 
        . . f b 1 1 1 1 1 1 b f . 
        . . f 1 1 1 1 1 1 1 d b f 
        . f d 1 1 1 1 1 1 d d d f 
        . f d 1 1 1 1 1 d d d d f 
        . f d 1 1 d d d d d d d f 
        . f 1 1 1 d d d d d d d f 
        . f 1 1 f c d d d d d d f 
        f b 1 1 1 1 b d d d b f f 
        f 1 b 1 b d f c f f f . . 
        f b f b f f f f f f f . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . f f f f f . . . . 
        . . . f 1 1 1 1 1 f f . . 
        . . f b 1 1 1 1 1 1 b f . 
        . . f 1 1 1 1 1 1 1 d b f 
        . f d 1 1 1 1 1 1 d d d f 
        . f d 1 1 1 1 1 d d d d f 
        . f d 1 1 d d d d d d d f 
        . f 1 1 1 d d d d d d d f 
        . f 1 1 f c d d d d d d f 
        f b 1 1 1 1 b d d d b f f 
        f 1 b 1 b d f c f f f . . 
        f b f b f f f f f f f . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . f f f f f . . . . 
        . . . f 1 1 1 1 1 f f . . 
        . . f b 1 1 1 1 1 1 b f . 
        . . f 1 1 1 1 1 1 1 d b f 
        . f d 1 1 1 1 1 1 d d d f 
        . f d 1 1 1 1 1 d d d d f 
        . f d 1 1 d d d d d d d f 
        . f 1 1 1 d d d d d d d f 
        . f 1 1 f c d d d d d d f 
        f b 1 1 1 1 b d d d b f f 
        f 1 b 1 b d f c f f f . . 
        f b f b f f f f f f f . . 
        `],
    100,
    false
    )
    pause(2000)
    status.spriteAttachedTo().destroy()
    reward2 = randint(1, 4)
    if (reward2 == 2) {
        pause(50)
    } else if (reward2 == 3) {
        game.setDialogTextColor(13)
        game.setDialogFrame(img`
            ..bbbbbbbbbbbbbbbbbbbb..
            .bd111111111111111111db.
            bd1dbbbbbbbbbbbbbbbbd1db
            b1dbbbbbbbbbbbbbbbbbbd1b
            b1bdffffffffffffffffdb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bdffffffffffffffffdb1b
            bd1bbbbbbbbbbbbbbbbbb1db
            bbd111111111111111111dbb
            .bbbbbbbbbbbbbbbbbbbbbb.
            ..bbbbbbbbbbbbbbbbbbbb..
            `)
        game.showLongText("You got 2 Rupees!", DialogLayout.Bottom)
        info.changeScoreBy(2)
    } else if (reward2 == 4) {
        if (quiverstatus == true) {
            game.showLongText("You got 3 Arrows", DialogLayout.Bottom)
            if (quiver.value <= 27) {
                quiver.value += 3
            } else {
                quiver.value += 0
            }
        } else {
            pause(50)
        }
        game.setDialogTextColor(13)
        game.setDialogFrame(img`
            ..bbbbbbbbbbbbbbbbbbbb..
            .bd111111111111111111db.
            bd1dbbbbbbbbbbbbbbbbd1db
            b1dbbbbbbbbbbbbbbbbbbd1b
            b1bdffffffffffffffffdb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bdffffffffffffffffdb1b
            bd1bbbbbbbbbbbbbbbbbb1db
            bbd111111111111111111dbb
            .bbbbbbbbbbbbbbbbbbbbbb.
            ..bbbbbbbbbbbbbbbbbbbb..
            `)
    } else {
        game.setDialogTextColor(13)
        game.setDialogFrame(img`
            ..bbbbbbbbbbbbbbbbbbbb..
            .bd111111111111111111db.
            bd1dbbbbbbbbbbbbbbbbd1db
            b1dbbbbbbbbbbbbbbbbbbd1b
            b1bdffffffffffffffffdb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bdffffffffffffffffdb1b
            bd1bbbbbbbbbbbbbbbbbb1db
            bbd111111111111111111dbb
            .bbbbbbbbbbbbbbbbbbbbbb.
            ..bbbbbbbbbbbbbbbbbbbb..
            `)
        game.showLongText("You got 1 Heart Piece!", DialogLayout.Bottom)
        heartcontainer += 1
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileDarkGrass1, function (sprite, location) {
    info.stopCountdown()
    for (let value of tiles.getTilesByType(assets.tile`myTile0`)) {
        tiles.setTileAt(value, sprites.castle.tileDarkGrass3)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.heartman, function (sprite, otherSprite) {
    controller.moveSprite(sprite, 0, 0)
    story.startCutscene(function () {
        story.spriteSayText(otherSprite, "You have a maximum of 10 Hearts!", 15, 1, story.TextSpeed.Normal)
        story.spriteSayText(otherSprite, "You can fill your Life Bar by collecting Heart Pieces!", 15, 1, story.TextSpeed.Normal)
        story.spriteSayText(otherSprite, "4 Heart Pieces create 1 Heart Container!", 15, 1, story.TextSpeed.Normal)
    })
    otherSprite.setKind(SpriteKind.NPC_DONE)
    timer.after(13000, function () {
        controller.moveSprite(sprite, 100, 100)
        profilelife.setMaxLife(10)
    })
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -20
    if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.MovingRight))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 150)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.MovingLeft))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 150)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.MovingDown))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 150)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.MovingUp))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 150)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.FacingRight))) {
        spriteutils.setVelocityAtAngle(link, spriteutils.angleFrom(link, otherSprite), 150)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.FacingLeft))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 150)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.FacingDown))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 150)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.FacingUp))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 150)
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    if (shieldup == false) {
        controller.moveSprite(otherSprite, 0, 0)
        sprite.setKind(SpriteKind.NPC_DONE)
        info.changeLifeBy(-1)
        if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.MovingRight))) {
            spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(sprite, otherSprite), 150)
        } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.MovingLeft))) {
            spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(sprite, otherSprite), 150)
        } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.MovingDown))) {
            spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(sprite, otherSprite), 150)
        } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.MovingUp))) {
            spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(sprite, otherSprite), 150)
        } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.FacingRight))) {
            spriteutils.setVelocityAtAngle(link, spriteutils.angleFrom(sprite, otherSprite), 150)
        } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.FacingLeft))) {
            spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(sprite, otherSprite), 150)
        } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.FacingDown))) {
            spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(sprite, otherSprite), 150)
        } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.FacingUp))) {
            spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(sprite, otherSprite), 150)
        }
        timer.after(300, function () {
            sprite.setKind(SpriteKind.Enemy)
            controller.moveSprite(otherSprite, 100, 100)
            otherSprite.setVelocity(0, 0)
        })
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.dekutree, function (sprite, otherSprite) {
    controller.moveSprite(sprite, 0, 0)
    story.startCutscene(function () {
        story.spriteSayText(otherSprite, "Link...", 15, 1, story.TextSpeed.Normal)
        story.spriteSayText(otherSprite, "I am going to die.", 15, 1, story.TextSpeed.Normal)
        story.spriteSayText(otherSprite, "You must save Hyrule. Go to Hyrule Castle and defeat Phantom Ganon.", 15, 1, story.TextSpeed.Normal)
    })
    otherSprite.setKind(SpriteKind.NPC_DONE)
    timer.after(8500, function () {
        controller.moveSprite(sprite, 100, 100)
        otherSprite.setImage(img`
            ..................................................................
            ..................................................................
            ..................................................................
            ..................................................................
            ..................................................................
            ...................bbbbbbbbbbbb7777...............................
            .................bbbbbbbbbbbb777777777............................
            ...............bbbbbbbbbbb777777777777777.........................
            ............bbbbbbbbbbbb777777777777777777777777777777............
            ............bbbbbbbbbbb7777777777777777777777777777777777.........
            ..........bbbbbbbbbbbb7777777777777777777777777777777777777.......
            .........bbbbbbbbbbbb777777777777777777777777777777777777777......
            ........bbbbbbbbbbbbb777777777777777777777777777777777777777......
            .......bbbbbbbbbbbbbb7777777777777777777777777777777777777777.....
            ......bbbbbbbbbbbbbb77777777777777777777777777777777777777777.....
            ......bbbbbbbbbbbbb7777777777777777777777777777777777777777777....
            .....bbbbbbbbbbbbbb77777777777777777777777777777777777777777777...
            .....bbbbbbbbbbbbbb77777777777777777777777777777777777777777777...
            ....bbbbbbbbbbbbbbb77777777777777777777777777777777777777777777...
            ....bbbbbbbbbbbbbbb77777777777777777777777777777777777777777777...
            ...bbbbbbbbbbbbbbbbb7777777777777777777777777777777777777777777...
            ...bbbbbbbbbbbbbbbbb7777777777777777777777777777777777777777777...
            ...bbbbbbbbbbbbbbbbb7777777777777777777777777777777777777777777...
            ...bbbbbbbbbbbbbbbbb7777777777777777777777777777777777777777777...
            ...bbbbbbbbbbbbbbbbbb777777777777777777777777777777777777777777...
            ....bbbbbbbbbbbbbbbbb777777777777777777777777777777777777777777...
            .....bbbbbbbbbbbbbbbb777777777777777777777777777777777777777777...
            .....bbbbbbbbbbbbbbbbb7777777777777777777777777777777777777777....
            ......bbbbbbbbbbbbbbbbb777777777777777777777777777777777777777....
            .......bbbbbbbbbbbbbbbbb7777777777777777777777777777777777777.....
            ........bbbbbbbbbbbbbbbbbbb7777777777777777777777777777777........
            ..........bbbbbbbbbbbb...cb77777777777777777777777777777..........
            .........................ccccc77777777eeeeee.7777777..............
            .........................cccccccceeeeeeeeeee......................
            .........................cccccccceeeeeeeeeee......................
            .........................cccccccceeeeeeeeeee......................
            .........................cccccccceeeeeeeeeee......................
            ........................cccfcfccceeeeeefefee......................
            ........................ccccfcccceeeeeeefeee......................
            ........................cccfcfccceeeeeefefeee.....................
            ........................ccccccccceeeeeeeeeeee.....................
            .......................cccccccccceeeeeeeeeeee.....................
            .......................cccccccccceeeeeeeeeeee.....................
            .......................cccccfffffffffffffeeeee....................
            ......................ccccccccccef33feeeeeeeee....................
            ......................cccccccccceff3feeeeeeeee....................
            ......................ccccccccceeef3feeeeeeeee....................
            ......................ccccccccceeefffeeeeeeeee....................
            .....................cccccccccceeeeeeeeeeeeeee....................
            .....................cccccccccceeeeeeeeeeeeeeee...................
            ....................ccccccccccceeeeeeeeeeeeeeee...................
            ....................ccccccccccceeeeeeeeeeeeeeee...................
            ....................ccccccccccceeeeeeeeeeeeeeeee..................
            ...................ccccccccccceeeeeeeeeeeeeeeeee..................
            ...................ccccccccccceeeeeeeeeeeeeeeeee..................
            ..................ccccccccccceeeeeeeeeeeeeeeeeeee.................
            .................cccccccccccceeeeeeeeeeeeeeeeeeeee................
            ................cccccccccccceeeeffffeeeeeeeeeeeeeee...............
            ...............cccccccccccceeeffffffffeeeeeeeeeeeeee..............
            ..............cccccccccccceeefffffffffffeeeeeeeeeeeee.............
            ............ccccccccccccceeeffffffffffffeeeeeeeeeeeeee............
            ...........ccccccccccccceeeffffffffffffffeeeeeeeeeeeeeee..........
            ..........cccccccccccccceeeffffffffffffffeeeeeeeeeeeeeee..........
            ..........cccccccccccceeeeeffffffffffffffeeeeeeeeeeeeeee..........
            ..........ccccccccccceeeeeeffffffffffffffeeeeeeeeeeeeeee..........
            ...........ccccccccceeeeeeeffffffffffffffeeeeeeeeeeeeeee..........
            `)
    })
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy2, function (sprite, otherSprite) {
    sprite.destroy()
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth2, otherSprite).value += -35
    if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.MovingRight))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 200)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.MovingLeft))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 200)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.MovingDown))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 200)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.MovingUp))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 200)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.FacingRight))) {
        spriteutils.setVelocityAtAngle(link, spriteutils.angleFrom(link, otherSprite), 200)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.FacingLeft))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 200)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.FacingDown))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 200)
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.FacingUp))) {
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(link, otherSprite), 200)
    }
})
sprites.onOverlap(SpriteKind.Enemy3, SpriteKind.Player, function (sprite, otherSprite) {
    if (shieldup == false) {
        controller.moveSprite(otherSprite, 0, 0)
        sprite.setKind(SpriteKind.NPC_DONE)
        info.changeLifeBy(-1)
        if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.MovingRight))) {
            spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(sprite, otherSprite), 150)
        } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.MovingLeft))) {
            spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(sprite, otherSprite), 150)
        } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.MovingDown))) {
            spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(sprite, otherSprite), 150)
        } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.MovingUp))) {
            spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(sprite, otherSprite), 150)
        } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.FacingRight))) {
            spriteutils.setVelocityAtAngle(link, spriteutils.angleFrom(sprite, otherSprite), 150)
        } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.FacingLeft))) {
            spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(sprite, otherSprite), 150)
        } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.FacingDown))) {
            spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(sprite, otherSprite), 150)
        } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.FacingUp))) {
            spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(sprite, otherSprite), 150)
        }
        timer.after(300, function () {
            sprite.setKind(SpriteKind.Enemy3)
            controller.moveSprite(otherSprite, 100, 100)
            otherSprite.setVelocity(0, 0)
        })
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.ball, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy()
    goodorb = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 8 6 6 6 6 8 . . . . . 
        . . . . 8 6 9 9 9 9 6 8 . . . . 
        . . . . 6 9 1 1 1 1 9 6 . . . . 
        . . . . 6 9 1 1 1 1 9 6 . . . . 
        . . . . 6 9 1 1 1 1 9 6 . . . . 
        . . . . 6 9 1 1 1 1 9 6 . . . . 
        . . . . 8 6 9 9 9 9 6 8 . . . . 
        . . . . . 8 6 6 6 6 8 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, sprite, 0, -70)
    goodorb.setKind(SpriteKind.goodball)
    goodorb.follow(phantomganon, 70)
})
function createMoblin (col: number, row: number) {
    moblin = sprites.create(img`
        ..............ffffff....
        ....cc.......fcfbbbbff..
        ....cdc.....fcccfbbbbff.
        .....cdc....fbbbbffbbbf.
        ......cd2..fbccccbbffff.
        .......2f..fcbffffcccbf.
        ......2..f..ffeeefffffff
        ......2...f.4eee4beeeeff
        ...........f4eee41eeeeef
        ...........efdedeeeeeef.
        ...........eddfdeeccff..
        ............eefccceef...
        .............fefeeeef...
        .............fbbfbbbf...
        ..............ffffff....
        ................fff.....
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    tiles.placeOnTile(moblin, tiles.getTileLocation(col, row))
    statusbar = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
    statusbar.setColor(2, 15, 4)
    statusbar.setBarBorder(1, 12)
    statusbar.attachToSprite(moblin)
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.boss, function (sprite, otherSprite) {
    if (vulnerable == true) {
        sprite.destroy()
        statusbar5.value += -5
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenNorth, function (sprite, location) {
    tiles.destroySpritesOfKind(SpriteKind.StatusBar)
    tiles.destroySpritesOfKind(SpriteKind.bowman)
    tiles.destroySpritesOfKind(SpriteKind.spotter)
    tiles.destroySpritesOfKind(SpriteKind.Enemy4)
    tiles.destroySpritesOfKind(SpriteKind.Enemy3)
    tiles.destroySpritesOfKind(SpriteKind.Enemy2)
    tiles.destroySpritesOfKind(SpriteKind.Enemy)
    tiles.setTilemap(tilemap`level2`)
    tiles.placeOnTile(link, tiles.getTileLocation(4, 6))
    spawnPhantomGanon(4, 1)
    bossbattle = true
    game.setDialogCursor(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        .......ffcdb1bdff.......
        ........fcbfbfff........
        .........ffffff.........
        ........................
        1111.1111.1111.111..1111
        1.....11..1..1.1..1..11.
        1111..11..1111.111...11.
        ...1..11..1..1.1..1..11.
        ...1..11..1..1.1..1..11.
        1111..11..1..1.1..1..11.
        `)
    game.setDialogFrame(img`
        ..cccccccccccccccccccc..
        .c42222222222222222224c.
        c424cccccccccccccccc424c
        c24cccccccccccccccccc42c
        c2c4bbbbbbbbbbbbbbbb4c2c
        c2cbbbbbbbbbbbbbbbbbbc2c
        c2cbbbbbbbbbbbbbbbbbbc2c
        c2cbbbbbbbbbbbbbbbbbbc2c
        c2cbbbbbbbbbbbbbbbbbbc2c
        c2cbbbbbbbbbbbbbbbbbbc2c
        c2cbbbbbbbbbbbbbbbbbbc2c
        c2cbbbbbbbbbbbbbbbbbbc2c
        c2cbbbbbbbbbbbbbbbbbbc2c
        c2cbbbbbbbbbbbbbbbbbbc2c
        c2cbbbbbbbbbbbbbbbbbbc2c
        c2cbbbbbbbbbbbbbbbbbbc2c
        c2cbbbbbbbbbbbbbbbbbbc2c
        c2cbbbbbbbbbbbbbbbbbbc2c
        c2cbbbbbbbbbbbbbbbbbbc2c
        c2c4bbbbbbbbbbbbbbbb4c2c
        c42cccccccccccccccccc24c
        cc42222222222222222224cc
        .cccccccccccccccccccccc.
        ..cccccccccccccccccccc..
        `)
    game.setDialogTextColor(1)
    game.showLongText("Phantom Ganon: Evil Spirit From Beyond", DialogLayout.Bottom)
})
let day = false
let nightnight = false
let night = false
let nothin: Sprite = null
let statusbar: StatusBarSprite = null
let moblin: Sprite = null
let goodorb: Sprite = null
let bigslash: Sprite = null
let reward = 0
let statusbar4: StatusBarSprite = null
let redead: Sprite = null
let reward2 = 0
let statusbar2: StatusBarSprite = null
let lizalfos: Sprite = null
let zelda: Sprite = null
let myMinimap: minimap.Minimap = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
let statusbar3: StatusBarSprite = null
let stalchild: Sprite = null
let phantomganon: Sprite = null
let arrowproj: Sprite = null
let airslash: Sprite = null
let detector: Sprite = null
let scream = false
let orb: Sprite = null
let damagedraw = 0
let volcano = false
let ranch = false
let lake = false
let gerudo = false
let castle = false
let kakakiro = false
let zora = false
let field = false
let statusbar5: StatusBarSprite = null
let vulnerable = false
let quiver: StatusBarSprite = null
let prize = 0
let link: Sprite = null
let deadmanvolley = false
let bossbattle = false
let quiverstatus = false
let canbuybig = false
let canbuybow = false
let menu = false
let kokiri = false
let biggoron = false
let bow = false
let shieldup = false
let cooldown3 = 0
let cooldown2 = 0
let cooldown = 0
let canshoot = false
let canhitbig = false
let canhit = false
let leave = false
game.setDialogCursor(assets.image`b`)
scene.setBackgroundImage(img`
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    444e222222e22e44e22ee22222e44422e4444222222444e22ee4222222422444422ee2222e44444444e22e44422222244444444444444444444444444444444444444444444444444444444444444444
    4442ee2ee2ee2444422442e44ee444e244444e244e24e22eee2442e4424422444e2442e4ee2e4444e22ee2244e2444244444444444444444444444444444444444444444444444444444444444444444
    444e442e444e24444ee442e444e444e244444e2444242244442442444e4422e4442442e444e244442244442e4e2444e444caaaaaaaaaccaaaaaaaaacaaaac44444aaaaaaacc444444444caa444444444
    4444442e444e24444ee442e4444444e244444e24444424444444424444442e2e442442e44442e444244444e24e24444444a222222222e222222222ee2222ac444c222222222ac444444c222a44444444
    4444442e444e2eeee2e4422eee4444e244444e2eee4e24444444422ee44424e2442442e44442e44e244444e24e2eee4444a22eeee222aa222eee22eae22aa44444a222ee2222ea44444c222a44444444
    4444442e444e244442e442e4444444e244444e24444e2444e22442e444442442242442e44442e444244444e24e2eee4444a2accca22ec422aacca2eaa22a444444c22aaccaa22ec44442222ec4444444
    4444442e444e24444ee442e4444444e244444e2444442e444424424444442444222442e4444244442e4444224e24444444aaa44c222a4422ac444aacc22a444444c22ac4444a22a444c22a22a4444444
    4444442e444e244442e442e44ee444e244424e244424e2e44e24424442442444422442e44e2e4444e2e44e244e2444444444444e22a44422aa444444c22a444444c22ac4444c22ac44e2ea22ac444444
    44444e2244422e44e22ee22222e444222222422222244e2222e42222224222444e24e22222e444444e222244422e4444444444a22ac4442222222a44c22a444444c22ac4444422ec4c22aca22a444444
    44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444c222c44442222222ac4c22a444444c22ac4444422ec4c22a4c22a444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444ce22a4444422aaaaaa44c22a444444c22ac4444422ac4222eee22ec44444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444a22a44444422aa444444c22a444444c22ac4444c22acc222222222a44444
    444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444a22ec44cea422ac444ea4c22a444cacc22ac4444e22a4e22aaaaa22ac4444
    4444444444444e222444e222444ee44e222e442ee2444224442444444e222442222e4422222e22e2e44442e22222444444c222accca2ac22aacca2eac22accc22ac22aaccce22acc22ac4444a22a4444
    4444444444444244424e244e444224442442442442244e444e2e4444e244e24ee44e44e42444ee422444224ee44e444444a222222222ae22222222ea222222222ae222222222eace22ac4444a22ec444
    444444444444ee4442e2444444eeee4424424424422e4e44424244442444424ee44444442444ee42ee44224ee44444444ce222222222a222222222ee222222222a222222222ac4c2222a444c2222a444
    44444444444424444ee24444442442442e2e442442424e444e4244442444424e22e444442444ee424242424e2224444444aaaaaaaaaacaaaaaaaaaacaaaaaaaaacaaaaaaacc4444aaaac4444aaaac444
    444444444444e4444ee24444442222442424442442442e44e222e4442444424ee44444442444ee424e2e424ee44444444444444444444444444444444444444444444444444444444444444444444444
    444444444444e244424ee4444ee44ee4244244244244e24424442444ee44e24ee44444442444ee424424424ee44e44444444444444444444444444444444444444444444444444444444444444444444
    4444444444444e222444e22242e44e2e2e4e2e2ee2e4424e24442e444e2224422444444e2e4422e2e444e2e2222244444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    `)
game.setDialogFrame(img`
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    `)
game.showLongText("", DialogLayout.Full)
scene.setBackgroundImage(img`
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    `)
profilelife.setProfileImage(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 7 7 f f f . . . . 
    . . . f f f 7 7 7 7 f f f . . . 
    . . f f f 6 6 6 6 6 6 f f f . . 
    . . f f 6 7 7 7 7 7 7 6 6 f . . 
    . . f 6 7 4 4 f f 4 5 7 6 f . . 
    . . f f 4 5 5 5 5 5 5 5 f f . . 
    . f f 4 5 5 d d d d 5 5 5 f f . 
    . f d 4 5 f f d d f f 5 5 d f 8 
    . . f 4 d d d d d d d d 5 f 8 . 
    . . . f d d d d d c d d f 5 8 8 
    . . c b f 7 7 7 7 e e f b c . 8 
    . . b d f 7 7 7 e 7 7 f d b . 8 
    . . b b f e e e 6 6 6 f b b . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `)
profilelife.setMaxLife(3)
profilelife.setName("Link")
info.setLife(3)
leave = false
canhit = true
canhitbig = true
canshoot = true
cooldown = 500
cooldown2 = 1000
cooldown3 = 250
shieldup = false
let heartcontainer = 0
bow = false
biggoron = false
kokiri = true
menu = false
canbuybow = false
canbuybig = false
quiverstatus = false
bossbattle = false
deadmanvolley = false
link = sprites.create(img`
    . . . . . . f f f f . . . . . . . 
    . . . . f f f 7 7 f f f . . . . . 
    . . . f f f 7 7 7 7 f f f . . . . 
    . . f f f 6 6 6 6 6 6 f f f . . . 
    . . f f 6 7 7 7 7 7 7 6 6 f . . . 
    . . f 6 7 4 4 f f 4 5 7 6 f . . . 
    . . f f 4 5 5 5 5 5 5 5 f f . . . 
    . f f 4 5 5 d d d d 5 5 5 f f . 8 
    . f d 4 5 f f d d f f 5 5 d f 8 . 
    . . f 4 d d d d d d d d 5 f 8 . . 
    . . . f d d d d d c d d f 5 8 8 . 
    . . c b f 7 7 7 7 e e f b c . 8 . 
    . . b d f 7 7 7 e 7 7 f d b . 8 . 
    . . b b f e e e 6 6 6 f b b . . . 
    . . . . . f f f f f f . . . . . . 
    . . . . . f f . . f f . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(link, 100, 100)
scene.cameraFollowSprite(link)
tiles.loadMap(tiles.createMap(tilemap`level1`))
tiles.placeOnTile(link, tiles.getTileLocation(173, 103))
let deku = sprites.create(img`
    ..................................................................
    ..................................................................
    ..................................................................
    ..................................................................
    ..................................................................
    ...................bbbbbbbbbbbb7777...............................
    .................bbbbbbbbbbbb777777777............................
    ...............bbbbbbbbbbb777777777777777.........................
    ............bbbbbbbbbbbb777777777777777777777777777777............
    ............bbbbbbbbbbb7777777777777777777777777777777777.........
    ..........bbbbbbbbbbbb7777777777777777777777777777777777777.......
    .........bbbbbbbbbbbb777777777777777777777777777777777777777......
    ........bbbbbbbbbbbbb777777777777777777777777777777777777777......
    .......bbbbbbbbbbbbbb7777777777777777777777777777777777777777.....
    ......bbbbbbbbbbbbbb77777777777777777777777777777777777777777.....
    ......bbbbbbbbbbbbb7777777777777777777777777777777777777777777....
    .....bbbbbbbbbbbbbb77777777777777777777777777777777777777777777...
    .....bbbbbbbbbbbbbb77777777777777777777777777777777777777777777...
    ....bbbbbbbbbbbbbbb77777777777777777777777777777777777777777777...
    ....bbbbbbbbbbbbbbb77777777777777777777777777777777777777777777...
    ...bbbbbbbbbbbbbbbbb7777777777777777777777777777777777777777777...
    ...bbbbbbbbbbbbbbbbb7777777777777777777777777777777777777777777...
    ...bbbbbbbbbbbbbbbbb7777777777777777777777777777777777777777777...
    ...bbbbbbbbbbbbbbbbb7777777777777777777777777777777777777777777...
    ...bbbbbbbbbbbbbbbbbb777777777777777777777777777777777777777777...
    ....bbbbbbbbbbbbbbbbb777777777777777777777777777777777777777777...
    .....bbbbbbbbbbbbbbbb777777777777777777777777777777777777777777...
    .....bbbbbbbbbbbbbbbbb7777777777777777777777777777777777777777....
    ......bbbbbbbbbbbbbbbbb777777777777777777777777777777777777777....
    .......bbbbbbbbbbbbbbbbb7777777777777777777777777777777777777.....
    ........bbbbbbbbbbbbbbbbbbb7777777777777777777777777777777........
    ..........bbbbbbbbbbbb...cb77777777777777777777777777777..........
    .........................ccccc77777777eeeeee.7777777..............
    .........................cccccccceeeeeeeeeee......................
    .........................cccccccceeeeeeeeeee......................
    .........................cccccccceeeeeeeeeee......................
    .........................cccccccceeeeeeeeeee......................
    ........................cccfffccceeeeeefffee......................
    ........................cccfffccceeeeeefffee......................
    ........................cccfffccceeeeeefffeee.....................
    ........................ccccccccceeeeeeeeeeee.....................
    .......................cfffcccccceeeeeeeeffff.....................
    .......................cffffccccceeeeeeefffff.....................
    .......................cfffffccceeeeeefffffffe....................
    ......................ccfffffffceeeeefffffffee....................
    ......................cccffffffffffffffffffeee....................
    ......................cccccffffffffffffffeeeee....................
    ......................cccccccfffffffffffeeeeee....................
    .....................cccccccccceeeeeeeeeeeeeee....................
    .....................cccccccccceeeeeeeeeeeeeeee...................
    ....................ccccccccccceeeeeeeeeeeeeeee...................
    ....................ccccccccccceeeeeeeeeeeeeeee...................
    ....................ccccccccccceeeeeeeeeeeeeeeee..................
    ...................ccccccccccceeeeeeeeeeeeeeeeee..................
    ...................ccccccccccceeeeeeeeeeeeeeeeee..................
    ..................ccccccccccceeeeeeeeeeeeeeeeeeee.................
    .................cccccccccccceeeeeeeeeeeeeeeeeeeee................
    ................cccccccccccceeeeffffeeeeeeeeeeeeeee...............
    ...............cccccccccccceeeffffffffeeeeeeeeeeeeee..............
    ..............cccccccccccceeefffffffffffeeeeeeeeeeeee.............
    ............ccccccccccccceeeffffffffffffeeeeeeeeeeeeee............
    ...........ccccccccccccceeeffffffffffffffeeeeeeeeeeeeeee..........
    ..........cccccccccccccceeeffffffffffffffeeeeeeeeeeeeeee..........
    ..........cccccccccccceeeeeffffffffffffffeeeeeeeeeeeeeee..........
    ..........ccccccccccceeeeeeffffffffffffffeeeeeeeeeeeeeee..........
    ...........ccccccccceeeeeeeffffffffffffffeeeeeeeeeeeeeee..........
    `, SpriteKind.dekutree)
tiles.placeOnTile(deku, tiles.getTileLocation(206, 90))
let heartman = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 7 7 f f f . . . . 
    . . . f f f 7 7 7 7 f f f . . . 
    . . f f f 6 6 6 6 6 6 f f f . . 
    . . f f 6 7 7 7 7 7 7 6 6 f . . 
    . . f 6 7 4 4 f f 4 5 7 6 f . . 
    . . f f 4 5 5 5 5 5 5 5 f f . . 
    . f f d 4 5 d d d d 5 5 d f f . 
    . f d d d 8 8 d d 8 8 d d d f . 
    . . f d d d d d d d d d d f . . 
    . . . f d d d d d c d d f . . . 
    . . c b f 7 7 7 7 7 7 f b c . . 
    . . b d f 7 7 7 7 7 7 f d b . . 
    . . b b f 6 6 6 6 6 6 f b b . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.heartman)
tiles.placeOnTile(heartman, tiles.getTileLocation(193, 103))
let merchant = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f b b f f f . . . . 
    . . . f f f b b b b f f f . . . 
    . . f f f c c c c c c f f f . . 
    . . f f c b b b b b b c c f . . 
    . . f c b b c c c c b b c f . . 
    . . f f c c b b b b c c f f . . 
    . f f c b f f f f f f b c f f . 
    . f c b f f f f f f f f b c f . 
    . . f c f f f f f f f f c f . . 
    . . . f f f f f f f f f f . . . 
    . . c b f b b b b e e f b c . . 
    . . b d f b b b e b b f d b . . 
    . . b b f e e e c c c f b b . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.bowman)
tiles.placeOnTile(merchant, tiles.getTileLocation(115, 43))
let girl = sprites.create(img`
    . . . . . f f f f f f . . . . . 
    . . . . f e e e e e e f . . . . 
    . . . f e e e e e e e e f . . . 
    . . f c e e e e e e e e c f . . 
    . . f e e e e e e e e e e f . . 
    . f e e e e e d d e e e e e f . 
    . f e e f f d d d d f f e e f . 
    . f c c f b f d d f b f c c f . 
    . f c c d 1 f d d f 1 d c c f . 
    f f c c f d d d d d d f c c f f 
    f c c f f f e e e e f f f c c f 
    . f d d f b 4 4 4 4 b f d d f . 
    . . d b c 4 4 4 4 4 4 c b d . . 
    . . d f b 4 2 4 2 4 b 2 f d . . 
    . . . f f b 4 b 4 b 4 f f . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.malon)
tiles.placeOnTile(girl, tiles.getTileLocation(96, 64))
let zoranpc = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 6 6 f f f . . . . 
    . . . f f f 6 6 6 6 f f f . . . 
    . . f f f 8 8 8 8 8 8 f f f . . 
    . . f f 8 6 6 6 6 6 6 8 8 f . . 
    . . f 8 6 6 6 6 6 6 6 6 8 f . . 
    . . f 8 6 8 8 8 8 8 8 6 8 f . . 
    . f f 8 8 b f 6 6 f b 8 8 f f . 
    . f 8 8 6 1 f 6 6 f 1 6 8 8 f . 
    . . f 8 8 6 6 6 6 6 6 8 8 f . . 
    . . . f 8 8 6 6 6 6 8 8 f . . . 
    . . 6 8 f 6 6 6 6 6 6 f 8 6 . . 
    . . 8 6 f 6 6 6 6 6 6 f 6 8 . . 
    . . 8 8 f 8 8 8 8 8 8 f 8 8 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f 6 6 f f . . . . . 
    `, SpriteKind.zoraman)
tiles.placeOnTile(zoranpc, tiles.getTileLocation(186, 51))
let thief = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f 2 2 2 2 2 2 f f f . . 
    . . f f 2 2 2 2 2 2 2 2 2 f . . 
    . . f 2 2 f f f f f f 2 2 f . . 
    . . f 2 f f e e e e f f 2 f . . 
    . f f 2 f b f 4 4 f b f 2 f f . 
    . f 2 2 4 1 f 4 4 f 1 4 2 2 f . 
    . . f e e 4 4 4 4 4 4 e e f . . 
    . . . f e e e e e e e e f . . . 
    . . e 4 f 7 7 7 7 7 7 f 4 e . . 
    . . 4 e f 7 7 7 7 7 7 f e 4 . . 
    . . 4 4 f 6 6 6 6 6 6 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.gerudo)
tiles.placeOnTile(thief, tiles.getTileLocation(8, 17))
let shiekah = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f d d f f f . . . . 
    . . . f f f d d d d f f f . . . 
    . . f f f 1 1 1 1 1 1 f f f . . 
    . . f f 1 d d d d d d 1 1 f . . 
    . . f 1 d f f f f f f d 1 f . . 
    . . f f f f 4 4 4 4 f f f f . . 
    . f f 1 f b f b b f b f 1 f f . 
    . f 1 1 b 1 f 4 4 f 1 b 1 1 f . 
    . . f 1 1 4 4 4 4 4 4 1 1 f . . 
    . . . f 1 1 b b b b 1 1 f . . . 
    . . b 4 f a a a a a a f 4 b . . 
    . . 4 d f a a a a a a f d 4 . . 
    . . 4 4 f c c d d c c f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.impa)
tiles.placeOnTile(shiekah, tiles.getTileLocation(186, 23))
createMoblin(115, 78)
createMoblin(116, 79)
createMoblin(114, 77)
createMoblin(127, 62)
createMoblin(126, 63)
createMoblin(59, 57)
createMoblin(59, 58)
createMoblin(59, 59)
createMoblin(20, 16)
createMoblin(20, 17)
spawnLizalfos(182, 45)
spawnLizalfos(181, 45)
spawnLizalfos(182, 44)
spawnLizalfos(181, 44)
spawnLizalfos(149, 40)
spawnLizalfos(151, 41)
spawnLizalfos(150, 40)
spawnRedead(155, 20)
spawnRedead(158, 20)
spawnRedead(155, 15)
spawnRedead(160, 15)
spawnRedead(160, 23)
spawnRedead(22, 17)
spawnRedead(24, 17)
spawnRedead(22, 19)
music.setVolume(100)
forever(function () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy4)) {
        detector.setPosition(value.x, value.y)
    }
})
game.onUpdate(function () {
    if (info.score() >= 50) {
        canbuybow = true
    } else {
        canbuybow = false
    }
    if (info.score() >= 100) {
        canbuybig = true
    } else {
        canbuybig = false
    }
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        if (!(statusbar.value == 0)) {
            if (characterAnimations.matchesRule(value, characterAnimations.rule(Predicate.MovingRight))) {
                animation.runImageAnimation(
                value,
                [img`
                    ....ffffff..............
                    ..ffbbbbfcf.......cc....
                    .ffbbbbfcccf.....cdc....
                    .fbbbffbbbbf....cdc.....
                    .ffffbbccccbf..2dc......
                    .fbcccffffbcf..f2.......
                    fffffffeeeff..f..2......
                    ffeeeeb4eee4.f...2......
                    feeeee14eee4f...........
                    .feeeeeededfe...........
                    ..ffcceedfdde...........
                    ...feecccfee............
                    ...feeeefef.............
                    ...fbbbfbbf.............
                    ....ffffff..............
                    .....fff................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    `,img`
                    ........................
                    ....ffffff..............
                    ..ffbbbbfcf.......cc....
                    .ffbbbbfcccf.....cdc....
                    .fbbbffbbbbf....cdc.....
                    .ffffbbccccbf..2dc......
                    .fbcccffffbcf..f2.......
                    fffffffeeeff..f..2......
                    ffeeeeb4eee4.f...2......
                    feeeee14eee4f...........
                    .feeeeeededfe...........
                    ..ffcceedfdde...........
                    ...feecccfee............
                    ...fbbbbfbf.............
                    ....ffffff..............
                    .....fffff..............
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    `,img`
                    ....ffffff..............
                    ..ffbbbbfcf.......cc....
                    .ffbbbbfcccf.....cdc....
                    .fbbbffbbbbf....cdc.....
                    .ffffbbccccbf..2dc......
                    .fbcccffffbcf..f2.......
                    fffffffeeeff..f..2......
                    ffeeeeb4eee4.f...2......
                    feeeee14eee4f...........
                    .feeeeeededfe...........
                    ..ffcceedfdde...........
                    ...feecccfee............
                    ...feeeefef.............
                    ...fbbbfbbf.............
                    ....ffffff..............
                    ......fff...............
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    `,img`
                    ........................
                    ....ffffff..............
                    ..ffbbbbfcf.......cc....
                    .ffbbbbfcccf.....cdc....
                    .fbbbffbbbbf....cdc.....
                    .ffffbbccccbf..2dc......
                    .fbcccffffbcf..f2.......
                    fffffffeeeff..f..2......
                    ffeeeeb4eee4.f...2......
                    feeeee14eee4f...........
                    .feeeeeededfe...........
                    ..ffcceedfdde...........
                    ...feecccfee............
                    ...fbbbbfbf.............
                    ....ffffff..............
                    ....fffff...............
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    `],
                200,
                true
                )
            } else if (characterAnimations.matchesRule(value, characterAnimations.rule(Predicate.MovingLeft))) {
                animation.runImageAnimation(
                value,
                [img`
                    ..............ffffff....
                    ....cc.......fcfbbbbff..
                    ....cdc.....fcccfbbbbff.
                    .....cdc....fbbbbffbbbf.
                    ......cd2..fbccccbbffff.
                    .......2f..fcbffffcccbf.
                    ......2..f..ffeeefffffff
                    ......2...f.4eee4beeeeff
                    ...........f4eee41eeeeef
                    ...........efdedeeeeeef.
                    ...........eddfdeeccff..
                    ............eefccceef...
                    .............fefeeeef...
                    .............fbbfbbbf...
                    ..............ffffff....
                    ................fff.....
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    `,img`
                    ........................
                    ..............ffffff....
                    ....cc.......fcfbbbbff..
                    ....cdc.....fcccfbbbbff.
                    .....cdc....fbbbbffbbbf.
                    ......cd2..fbccccbbffff.
                    .......2f..fcbffffcccbf.
                    ......2..f..ffeeefffffff
                    ......2...f.4eee4beeeeff
                    ...........f4eee41eeeeef
                    ...........efdedeeeeeef.
                    ...........eddfdeeccff..
                    ............eefccceef...
                    .............fbfbbbbf...
                    ..............ffffff....
                    ..............fffff.....
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    `,img`
                    ..............ffffff....
                    ....cc.......fcfbbbbff..
                    ....cdc.....fcccfbbbbff.
                    .....cdc....fbbbbffbbbf.
                    ......cd2..fbccccbbffff.
                    .......2f..fcbffffcccbf.
                    ......2..f..ffeeefffffff
                    ......2...f.4eee4beeeeff
                    ...........f4eee41eeeeef
                    ...........efdedeeeeeef.
                    ...........eddfdeeccff..
                    ............eefccceef...
                    .............fefeeeef...
                    .............fbbfbbbf...
                    ..............ffffff....
                    ...............fff......
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    `,img`
                    ........................
                    ..............ffffff....
                    ....cc.......fcfbbbbff..
                    ....cdc.....fcccfbbbbff.
                    .....cdc....fbbbbffbbbf.
                    ......cd2..fbccccbbffff.
                    .......2f..fcbffffcccbf.
                    ......2..f..ffeeefffffff
                    ......2...f.4eee4beeeeff
                    ...........f4eee41eeeeef
                    ...........efdedeeeeeef.
                    ...........eddfdeeccff..
                    ............eefccceef...
                    .............fbfbbbbf...
                    ..............ffffff....
                    ...............fffff....
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    `],
                200,
                true
                )
            } else if (characterAnimations.matchesRule(value, characterAnimations.rule(Predicate.FacingLeft))) {
                animation.runImageAnimation(
                value,
                [img`
                    ..............ffffff....
                    ....cc.......fcfbbbbff..
                    ....cdc.....fcccfbbbbff.
                    .....cdc....fbbbbffbbbf.
                    ......cd2..fbccccbbffff.
                    .......2f..fcbffffcccbf.
                    ......2..f..ffeeefffffff
                    ......2...f.4eee4beeeeff
                    ...........f4eee41eeeeef
                    ...........efdedeeeeeef.
                    ...........eddfdeeccff..
                    ............eefccceef...
                    .............fefeeeef...
                    .............fbbfbbbf...
                    ..............ffffff....
                    ................fff.....
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    `],
                200,
                true
                )
            } else if (characterAnimations.matchesRule(value, characterAnimations.rule(Predicate.FacingRight))) {
                animation.runImageAnimation(
                value,
                [img`
                    ....ffffff..............
                    ..ffbbbbfcf.......cc....
                    .ffbbbbfcccf.....cdc....
                    .fbbbffbbbbf....cdc.....
                    .ffffbbccccbf..2dc......
                    .fbcccffffbcf..f2.......
                    fffffffeeeff..f..2......
                    ffeeeeb4eee4.f...2......
                    feeeee14eee4f...........
                    .feeeeeededfe...........
                    ..ffcceedfdde...........
                    ...feecccfee............
                    ...feeeefef.............
                    ...fbbbfbbf.............
                    ....ffffff..............
                    .....fff................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    `],
                200,
                true
                )
            }
        }
        if (sight.isInSight(
        value,
        link,
        100,
        false
        )) {
            value.follow(link, 50)
        } else {
            value.setVelocity(0, 0)
        }
    }
    for (let value of sprites.allOfKind(SpriteKind.Enemy2)) {
        if (!(statusbar2.value == 0)) {
            if (characterAnimations.matchesRule(value, characterAnimations.rule(Predicate.MovingRight))) {
                animation.runImageAnimation(
                value,
                [img`
                    . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . 
                    . f f f f f f f f . . . . . . 
                    f 6 6 6 6 6 6 6 6 f . . . c c 
                    f 6 7 7 7 7 7 7 7 6 f . c 1 c 
                    f 6 7 7 b f 7 7 7 f f c 1 1 c 
                    f 6 7 7 1 f 7 7 7 f c 1 1 c . 
                    f 6 7 7 7 7 7 7 7 c 1 1 c . . 
                    f 6 7 7 7 7 7 7 6 c 1 c . . . 
                    f e e 7 7 7 7 6 7 c c c . . . 
                    . f e e 7 7 6 2 7 7 6 . . . . 
                    . f 7 7 e 7 2 2 6 6 . . . . . 
                    . f 7 7 7 e e e f . . . . . . 
                    . f b b b b b b f . . . . . . 
                    . . f f f f f f . . . . . . . 
                    . . . f f f . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . 
                    . f f f f f f f f . . . . . . 
                    f 6 6 6 6 6 6 6 6 f . . . c c 
                    f 6 7 7 7 7 7 7 7 6 f . c 1 c 
                    f 6 7 7 b f 7 7 7 f f c 1 1 c 
                    f 6 7 7 1 f 7 7 7 f c 1 1 c . 
                    f 6 7 7 7 7 7 7 7 c 1 1 c . . 
                    f 6 7 7 7 7 7 7 6 c 1 c . . . 
                    f e e 7 7 7 7 6 7 c c c . . . 
                    . f e e 7 7 6 2 7 7 6 . . . . 
                    . f 7 7 e e 2 2 6 6 . . . . . 
                    . f b b b b b b f . . . . . . 
                    . . f f f f f f . . . . . . . 
                    . . . f f f f f . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . 
                    . f f f f f f f f . . . . . . 
                    f 6 6 6 6 6 6 6 6 f . . . c c 
                    f 6 7 7 7 7 7 7 7 6 f . c 1 c 
                    f 6 7 7 b f 7 7 7 f f c 1 1 c 
                    f 6 7 7 1 f 7 7 7 f c 1 1 c . 
                    f 6 7 7 7 7 7 7 7 c 1 1 c . . 
                    f 6 7 7 7 7 7 7 6 c 1 c . . . 
                    f e e 7 7 7 7 6 7 c c c . . . 
                    . f e e 7 7 6 2 7 7 6 . . . . 
                    . f 7 7 e 7 2 2 6 6 . . . . . 
                    . f 7 7 7 e e e f . . . . . . 
                    . f b b b b b b f . . . . . . 
                    . . f f f f f f . . . . . . . 
                    . . . . f f f . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . 
                    . f f f f f f f f . . . . . . 
                    f 6 6 6 6 6 6 6 6 f . . . c c 
                    f 6 7 7 7 7 7 7 7 6 f . c 1 c 
                    f 6 7 7 b f 7 7 7 f f c 1 1 c 
                    f 6 7 7 1 f 7 7 7 f c 1 1 c . 
                    f 6 7 7 7 7 7 7 7 c 1 1 c . . 
                    f 6 7 7 7 7 7 7 6 c 1 c . . . 
                    f e e 7 7 7 7 6 7 c c c . . . 
                    . f e e 7 7 6 2 7 7 6 . . . . 
                    . f 7 7 e e 2 2 6 6 . . . . . 
                    . f b b b b b b f . . . . . . 
                    . . f f f f f f . . . . . . . 
                    . . f f f f f . . . . . . . . 
                    `],
                200,
                true
                )
            } else if (characterAnimations.matchesRule(value, characterAnimations.rule(Predicate.MovingLeft))) {
                animation.runImageAnimation(
                value,
                [img`
                    . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . 
                    . . . . . . f f f f f f f f . 
                    c c . . . f 6 6 6 6 6 6 6 6 f 
                    c 1 c . f 6 7 7 7 7 7 7 7 6 f 
                    c 1 1 c f f 7 7 7 f b 7 7 6 f 
                    . c 1 1 c f 7 7 7 f 1 7 7 6 f 
                    . . c 1 1 c 7 7 7 7 7 7 7 6 f 
                    . . . c 1 c 6 7 7 7 7 7 7 6 f 
                    . . . c c c 7 6 7 7 7 7 e e f 
                    . . . . 6 7 7 2 6 7 7 e e f . 
                    . . . . . 6 6 2 2 7 e 7 7 f . 
                    . . . . . . f e e e 7 7 7 f . 
                    . . . . . . f b b b b b b f . 
                    . . . . . . . f f f f f f . . 
                    . . . . . . . . . f f f . . . 
                    `,img`
                    . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . 
                    . . . . . . f f f f f f f f . 
                    c c . . . f 6 6 6 6 6 6 6 6 f 
                    c 1 c . f 6 7 7 7 7 7 7 7 6 f 
                    c 1 1 c f f 7 7 7 f b 7 7 6 f 
                    . c 1 1 c f 7 7 7 f 1 7 7 6 f 
                    . . c 1 1 c 7 7 7 7 7 7 7 6 f 
                    . . . c 1 c 6 7 7 7 7 7 7 6 f 
                    . . . c c c 7 6 7 7 7 7 e e f 
                    . . . . 6 7 7 2 6 7 7 e e f . 
                    . . . . . 6 6 2 2 e e 7 7 f . 
                    . . . . . . f b b b b b b f . 
                    . . . . . . . f f f f f f . . 
                    . . . . . . . f f f f f . . . 
                    `,img`
                    . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . 
                    . . . . . . f f f f f f f f . 
                    c c . . . f 6 6 6 6 6 6 6 6 f 
                    c 1 c . f 6 7 7 7 7 7 7 7 6 f 
                    c 1 1 c f f 7 7 7 f b 7 7 6 f 
                    . c 1 1 c f 7 7 7 f 1 7 7 6 f 
                    . . c 1 1 c 7 7 7 7 7 7 7 6 f 
                    . . . c 1 c 6 7 7 7 7 7 7 6 f 
                    . . . c c c 7 6 7 7 7 7 e e f 
                    . . . . 6 7 7 2 6 7 7 e e f . 
                    . . . . . 6 6 2 2 7 e 7 7 f . 
                    . . . . . . f e e e 7 7 7 f . 
                    . . . . . . f b b b b b b f . 
                    . . . . . . . f f f f f f . . 
                    . . . . . . . . f f f . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . 
                    . . . . . . f f f f f f f f . 
                    c c . . . f 6 6 6 6 6 6 6 6 f 
                    c 1 c . f 6 7 7 7 7 7 7 7 6 f 
                    c 1 1 c f f 7 7 7 f b 7 7 6 f 
                    . c 1 1 c f 7 7 7 f 1 7 7 6 f 
                    . . c 1 1 c 7 7 7 7 7 7 7 6 f 
                    . . . c 1 c 6 7 7 7 7 7 7 6 f 
                    . . . c c c 7 6 7 7 7 7 e e f 
                    . . . . 6 7 7 2 6 7 7 e e f . 
                    . . . . . 6 6 2 2 e e 7 7 f . 
                    . . . . . . f b b b b b b f . 
                    . . . . . . . f f f f f f . . 
                    . . . . . . . . f f f f f . . 
                    `],
                200,
                true
                )
            } else if (characterAnimations.matchesRule(value, characterAnimations.rule(Predicate.FacingLeft))) {
                animation.runImageAnimation(
                value,
                [img`
                    . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . 
                    . . . . . . f f f f f f f f . 
                    c c . . . f 6 6 6 6 6 6 6 6 f 
                    c 1 c . f 6 7 7 7 7 7 7 7 6 f 
                    c 1 1 c f f 7 7 7 f b 7 7 6 f 
                    . c 1 1 c f 7 7 7 f 1 7 7 6 f 
                    . . c 1 1 c 7 7 7 7 7 7 7 6 f 
                    . . . c 1 c 6 7 7 7 7 7 7 6 f 
                    . . . c c c 7 6 7 7 7 7 e e f 
                    . . . . 6 7 7 2 6 7 7 e e f . 
                    . . . . . 6 6 2 2 7 e 7 7 f . 
                    . . . . . . f e e e 7 7 7 f . 
                    . . . . . . f b b b b b b f . 
                    . . . . . . . f f f f f f . . 
                    . . . . . . . . . f f f . . . 
                    `,img`
                    . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . 
                    . . . . . . f f f f f f f f . 
                    c c . . . f 6 6 6 6 6 6 6 6 f 
                    c 1 c . f 6 7 7 7 7 7 7 7 6 f 
                    c 1 1 c f f 7 7 7 f b 7 7 6 f 
                    . c 1 1 c f 7 7 7 f 1 7 7 6 f 
                    . . c 1 1 c 7 7 7 7 7 7 7 6 f 
                    . . . c 1 c 6 7 7 7 7 7 7 6 f 
                    . . . c c c 7 6 7 7 7 7 e e f 
                    . . . . 6 7 7 2 6 7 7 e e f . 
                    . . . . . 6 6 2 2 e e 7 7 f . 
                    . . . . . . f b b b b b b f . 
                    . . . . . . . f f f f f f . . 
                    . . . . . . . f f f f f . . . 
                    `,img`
                    . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . 
                    . . . . . . f f f f f f f f . 
                    c c . . . f 6 6 6 6 6 6 6 6 f 
                    c 1 c . f 6 7 7 7 7 7 7 7 6 f 
                    c 1 1 c f f 7 7 7 f b 7 7 6 f 
                    . c 1 1 c f 7 7 7 f 1 7 7 6 f 
                    . . c 1 1 c 7 7 7 7 7 7 7 6 f 
                    . . . c 1 c 6 7 7 7 7 7 7 6 f 
                    . . . c c c 7 6 7 7 7 7 e e f 
                    . . . . 6 7 7 2 6 7 7 e e f . 
                    . . . . . 6 6 2 2 7 e 7 7 f . 
                    . . . . . . f e e e 7 7 7 f . 
                    . . . . . . f b b b b b b f . 
                    . . . . . . . f f f f f f . . 
                    . . . . . . . . f f f . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . 
                    . . . . . . f f f f f f f f . 
                    c c . . . f 6 6 6 6 6 6 6 6 f 
                    c 1 c . f 6 7 7 7 7 7 7 7 6 f 
                    c 1 1 c f f 7 7 7 f b 7 7 6 f 
                    . c 1 1 c f 7 7 7 f 1 7 7 6 f 
                    . . c 1 1 c 7 7 7 7 7 7 7 6 f 
                    . . . c 1 c 6 7 7 7 7 7 7 6 f 
                    . . . c c c 7 6 7 7 7 7 e e f 
                    . . . . 6 7 7 2 6 7 7 e e f . 
                    . . . . . 6 6 2 2 e e 7 7 f . 
                    . . . . . . f b b b b b b f . 
                    . . . . . . . f f f f f f . . 
                    . . . . . . . . f f f f f . . 
                    `],
                200,
                true
                )
            } else if (characterAnimations.matchesRule(value, characterAnimations.rule(Predicate.FacingRight))) {
                animation.runImageAnimation(
                value,
                [img`
                    . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . 
                    . f f f f f f f f . . . . . . 
                    f 6 6 6 6 6 6 6 6 f . . . c c 
                    f 6 7 7 7 7 7 7 7 6 f . c 1 c 
                    f 6 7 7 b f 7 7 7 f f c 1 1 c 
                    f 6 7 7 1 f 7 7 7 f c 1 1 c . 
                    f 6 7 7 7 7 7 7 7 c 1 1 c . . 
                    f 6 7 7 7 7 7 7 6 c 1 c . . . 
                    f e e 7 7 7 7 6 7 c c c . . . 
                    . f e e 7 7 6 2 7 7 6 . . . . 
                    . f 7 7 e 7 2 2 6 6 . . . . . 
                    . f 7 7 7 e e e f . . . . . . 
                    . f b b b b b b f . . . . . . 
                    . . f f f f f f . . . . . . . 
                    . . . f f f . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . 
                    . f f f f f f f f . . . . . . 
                    f 6 6 6 6 6 6 6 6 f . . . c c 
                    f 6 7 7 7 7 7 7 7 6 f . c 1 c 
                    f 6 7 7 b f 7 7 7 f f c 1 1 c 
                    f 6 7 7 1 f 7 7 7 f c 1 1 c . 
                    f 6 7 7 7 7 7 7 7 c 1 1 c . . 
                    f 6 7 7 7 7 7 7 6 c 1 c . . . 
                    f e e 7 7 7 7 6 7 c c c . . . 
                    . f e e 7 7 6 2 7 7 6 . . . . 
                    . f 7 7 e e 2 2 6 6 . . . . . 
                    . f b b b b b b f . . . . . . 
                    . . f f f f f f . . . . . . . 
                    . . . f f f f f . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . 
                    . f f f f f f f f . . . . . . 
                    f 6 6 6 6 6 6 6 6 f . . . c c 
                    f 6 7 7 7 7 7 7 7 6 f . c 1 c 
                    f 6 7 7 b f 7 7 7 f f c 1 1 c 
                    f 6 7 7 1 f 7 7 7 f c 1 1 c . 
                    f 6 7 7 7 7 7 7 7 c 1 1 c . . 
                    f 6 7 7 7 7 7 7 6 c 1 c . . . 
                    f e e 7 7 7 7 6 7 c c c . . . 
                    . f e e 7 7 6 2 7 7 6 . . . . 
                    . f 7 7 e 7 2 2 6 6 . . . . . 
                    . f 7 7 7 e e e f . . . . . . 
                    . f b b b b b b f . . . . . . 
                    . . f f f f f f . . . . . . . 
                    . . . . f f f . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . 
                    . f f f f f f f f . . . . . . 
                    f 6 6 6 6 6 6 6 6 f . . . c c 
                    f 6 7 7 7 7 7 7 7 6 f . c 1 c 
                    f 6 7 7 b f 7 7 7 f f c 1 1 c 
                    f 6 7 7 1 f 7 7 7 f c 1 1 c . 
                    f 6 7 7 7 7 7 7 7 c 1 1 c . . 
                    f 6 7 7 7 7 7 7 6 c 1 c . . . 
                    f e e 7 7 7 7 6 7 c c c . . . 
                    . f e e 7 7 6 2 7 7 6 . . . . 
                    . f 7 7 e e 2 2 6 6 . . . . . 
                    . f b b b b b b f . . . . . . 
                    . . f f f f f f . . . . . . . 
                    . . f f f f f . . . . . . . . 
                    `],
                200,
                true
                )
            }
        }
        if (sight.isInSight(
        value,
        link,
        90,
        false
        )) {
            value.follow(link, 80)
        } else {
            value.setVelocity(0, 0)
        }
    }
    for (let value of sprites.allOfKind(SpriteKind.Enemy3)) {
        if (!(statusbar3.value == 0)) {
            if (characterAnimations.matchesRule(value, characterAnimations.rule(Predicate.MovingRight))) {
                animation.runImageAnimation(
                value,
                [img`
                    . . . . f f f f f . . . . 
                    . . f f 1 1 1 1 1 f . . . 
                    . f b 1 1 1 1 1 1 b f . . 
                    f b d 1 1 1 1 1 1 1 f . . 
                    f d d d 1 1 1 1 1 1 d f . 
                    f d d d d 1 1 1 1 1 d f . 
                    f d d d d d d d 1 1 d f . 
                    f d d d d d d d 1 1 1 f . 
                    f d d d d d d c 2 1 1 f . 
                    f f b d d d b 1 1 1 1 b f 
                    . . f f f c f d b 1 b 1 f 
                    . . f f f f f f f b f b f 
                    . . f f f f f f f f f f . 
                    . . f c c d d 1 1 f . . . 
                    . . c b b c b c b f . . . 
                    . . c b b c d 1 1 f . . . 
                    . . . c c f f f f . . . . 
                    . . . . f f f . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . 
                    . . . . f f f f f . . . . 
                    . . f f 1 1 1 1 1 f . . . 
                    . f b 1 1 1 1 1 1 b f . . 
                    f b d 1 1 1 1 1 1 1 f . . 
                    f d d d 1 1 1 1 1 1 d f . 
                    f d d d d 1 1 1 1 1 d f . 
                    f d d d d d d d 1 1 d f . 
                    f d d d d d d d 1 1 1 f . 
                    f d d d d d d c 2 1 1 f . 
                    f f b d d d b 1 1 1 1 b f 
                    . . f f f c f d b 1 b 1 f 
                    . . f f f f f f f b f b f 
                    . . f c c f f f f f f f . 
                    . . c b b c d 1 1 f . . . 
                    . . c b b c b c b f . . . 
                    . . . c c f f f f . . . . 
                    . . . . f f f f f . . . . 
                    `,img`
                    . . . . f f f f f . . . . 
                    . . f f 1 1 1 1 1 f . . . 
                    . f b 1 1 1 1 1 1 b f . . 
                    f b d 1 1 1 1 1 1 1 f . . 
                    f d d d 1 1 1 1 1 1 d f . 
                    f d d d d 1 1 1 1 1 d f . 
                    f d d d d d d d 1 1 d f . 
                    f d d d d d d d 1 1 1 f . 
                    f d d d d d d c 2 1 1 f . 
                    f f b d d d b 1 1 1 1 b f 
                    . . f f f c f d b 1 b 1 f 
                    . . f f f f f f f b f b f 
                    . . f f f f f f f f f f . 
                    . . f c c d d 1 1 f . . . 
                    . . c b b c b c b f . . . 
                    . . c b b c d 1 1 f . . . 
                    . . . c c f f f f . . . . 
                    . . . . . f f f . . . . . 
                    `,img`
                    . . . . . . . . . . . . . 
                    . . . . f f f f f . . . . 
                    . . f f 1 1 1 1 1 f . . . 
                    . f b 1 1 1 1 1 1 b f . . 
                    f b d 1 1 1 1 1 1 1 f . . 
                    f d d d 1 1 1 1 1 1 d f . 
                    f d d d d 1 1 1 1 1 d f . 
                    f d d d d d d d 1 1 d f . 
                    f d d d d d d d 1 1 1 f . 
                    f d d d d d d c 2 1 1 f . 
                    f f b d d d b 1 1 1 1 b f 
                    . . f f f c f d b 1 b 1 f 
                    . . f f f f f f f b f b f 
                    . . f c c f f f f f f f . 
                    . . c b b c d 1 1 f . . . 
                    . . c b b c b c b f . . . 
                    . . . c c f f f f . . . . 
                    . . . f f f f f . . . . . 
                    `],
                200,
                true
                )
            } else if (characterAnimations.matchesRule(value, characterAnimations.rule(Predicate.MovingLeft))) {
                animation.runImageAnimation(
                value,
                [img`
                    . . . . f f f f f . . . . 
                    . . . f 1 1 1 1 1 f f . . 
                    . . f b 1 1 1 1 1 1 b f . 
                    . . f 1 1 1 1 1 1 1 d b f 
                    . f d 1 1 1 1 1 1 d d d f 
                    . f d 1 1 1 1 1 d d d d f 
                    . f d 1 1 d d d d d d d f 
                    . f 1 1 1 d d d d d d d f 
                    . f 1 1 2 c d d d d d d f 
                    f b 1 1 1 1 b d d d b f f 
                    f 1 b 1 b d f c f f f . . 
                    f b f b f f f f f f f . . 
                    . f f f f f f f f f f . . 
                    . . . f 1 1 d d c c f . . 
                    . . . f b c b c b b c . . 
                    . . . f 1 1 d c b b c . . 
                    . . . . f f f f c c . . . 
                    . . . . . . f f f . . . . 
                    `,img`
                    . . . . . . . . . . . . . 
                    . . . . f f f f f . . . . 
                    . . . f 1 1 1 1 1 f f . . 
                    . . f b 1 1 1 1 1 1 b f . 
                    . . f 1 1 1 1 1 1 1 d b f 
                    . f d 1 1 1 1 1 1 d d d f 
                    . f d 1 1 1 1 1 d d d d f 
                    . f d 1 1 d d d d d d d f 
                    . f 1 1 1 d d d d d d d f 
                    . f 1 1 2 c d d d d d d f 
                    f b 1 1 1 1 b d d d b f f 
                    f 1 b 1 b d f c f f f . . 
                    f b f b f f f f f f f . . 
                    . f f f f f f f c c f . . 
                    . . . f 1 1 d c b b c . . 
                    . . . f b c b c b b c . . 
                    . . . . f f f f c c . . . 
                    . . . . f f f f f . . . . 
                    `,img`
                    . . . . f f f f f . . . . 
                    . . . f 1 1 1 1 1 f f . . 
                    . . f b 1 1 1 1 1 1 b f . 
                    . . f 1 1 1 1 1 1 1 d b f 
                    . f d 1 1 1 1 1 1 d d d f 
                    . f d 1 1 1 1 1 d d d d f 
                    . f d 1 1 d d d d d d d f 
                    . f 1 1 1 d d d d d d d f 
                    . f 1 1 2 c d d d d d d f 
                    f b 1 1 1 1 b d d d b f f 
                    f 1 b 1 b d f c f f f . . 
                    f b f b f f f f f f f . . 
                    . f f f f f f f f f f . . 
                    . . . f 1 1 d d c c f . . 
                    . . . f b c b c b b c . . 
                    . . . f 1 1 d c b b c . . 
                    . . . . f f f f c c . . . 
                    . . . . . f f f . . . . . 
                    `,img`
                    . . . . . . . . . . . . . 
                    . . . . f f f f f . . . . 
                    . . . f 1 1 1 1 1 f f . . 
                    . . f b 1 1 1 1 1 1 b f . 
                    . . f 1 1 1 1 1 1 1 d b f 
                    . f d 1 1 1 1 1 1 d d d f 
                    . f d 1 1 1 1 1 d d d d f 
                    . f d 1 1 d d d d d d d f 
                    . f 1 1 1 d d d d d d d f 
                    . f 1 1 2 c d d d d d d f 
                    f b 1 1 1 1 b d d d b f f 
                    f 1 b 1 b d f c f f f . . 
                    f b f b f f f f f f f . . 
                    . f f f f f f f c c f . . 
                    . . . f 1 1 d c b b c . . 
                    . . . f b c b c b b c . . 
                    . . . . f f f f c c . . . 
                    . . . . . f f f f f . . . 
                    `],
                200,
                true
                )
            } else if (characterAnimations.matchesRule(value, characterAnimations.rule(Predicate.FacingLeft))) {
                animation.runImageAnimation(
                value,
                [img`
                    . . . . f f f f f . . . . 
                    . . . f 1 1 1 1 1 f f . . 
                    . . f b 1 1 1 1 1 1 b f . 
                    . . f 1 1 1 1 1 1 1 d b f 
                    . f d 1 1 1 1 1 1 d d d f 
                    . f d 1 1 1 1 1 d d d d f 
                    . f d 1 1 d d d d d d d f 
                    . f 1 1 1 d d d d d d d f 
                    . f 1 1 2 c d d d d d d f 
                    f b 1 1 1 1 b d d d b f f 
                    f 1 b 1 b d f c f f f . . 
                    f b f b f f f f f f f . . 
                    . f f f f f f f f f f . . 
                    . . . f 1 1 d d c c f . . 
                    . . . f b c b c b b c . . 
                    . . . f 1 1 d c b b c . . 
                    . . . . f f f f c c . . . 
                    . . . . . . f f f . . . . 
                    `,img`
                    . . . . . . . . . . . . . 
                    . . . . f f f f f . . . . 
                    . . . f 1 1 1 1 1 f f . . 
                    . . f b 1 1 1 1 1 1 b f . 
                    . . f 1 1 1 1 1 1 1 d b f 
                    . f d 1 1 1 1 1 1 d d d f 
                    . f d 1 1 1 1 1 d d d d f 
                    . f d 1 1 d d d d d d d f 
                    . f 1 1 1 d d d d d d d f 
                    . f 1 1 2 c d d d d d d f 
                    f b 1 1 1 1 b d d d b f f 
                    f 1 b 1 b d f c f f f . . 
                    f b f b f f f f f f f . . 
                    . f f f f f f f c c f . . 
                    . . . f 1 1 d c b b c . . 
                    . . . f b c b c b b c . . 
                    . . . . f f f f c c . . . 
                    . . . . f f f f f . . . . 
                    `,img`
                    . . . . f f f f f . . . . 
                    . . . f 1 1 1 1 1 f f . . 
                    . . f b 1 1 1 1 1 1 b f . 
                    . . f 1 1 1 1 1 1 1 d b f 
                    . f d 1 1 1 1 1 1 d d d f 
                    . f d 1 1 1 1 1 d d d d f 
                    . f d 1 1 d d d d d d d f 
                    . f 1 1 1 d d d d d d d f 
                    . f 1 1 2 c d d d d d d f 
                    f b 1 1 1 1 b d d d b f f 
                    f 1 b 1 b d f c f f f . . 
                    f b f b f f f f f f f . . 
                    . f f f f f f f f f f . . 
                    . . . f 1 1 d d c c f . . 
                    . . . f b c b c b b c . . 
                    . . . f 1 1 d c b b c . . 
                    . . . . f f f f c c . . . 
                    . . . . . f f f . . . . . 
                    `,img`
                    . . . . . . . . . . . . . 
                    . . . . f f f f f . . . . 
                    . . . f 1 1 1 1 1 f f . . 
                    . . f b 1 1 1 1 1 1 b f . 
                    . . f 1 1 1 1 1 1 1 d b f 
                    . f d 1 1 1 1 1 1 d d d f 
                    . f d 1 1 1 1 1 d d d d f 
                    . f d 1 1 d d d d d d d f 
                    . f 1 1 1 d d d d d d d f 
                    . f 1 1 2 c d d d d d d f 
                    f b 1 1 1 1 b d d d b f f 
                    f 1 b 1 b d f c f f f . . 
                    f b f b f f f f f f f . . 
                    . f f f f f f f c c f . . 
                    . . . f 1 1 d c b b c . . 
                    . . . f b c b c b b c . . 
                    . . . . f f f f c c . . . 
                    . . . . . f f f f f . . . 
                    `],
                200,
                true
                )
            } else if (characterAnimations.matchesRule(value, characterAnimations.rule(Predicate.FacingRight))) {
                animation.runImageAnimation(
                value,
                [img`
                    . . . . f f f f f . . . . 
                    . . f f 1 1 1 1 1 f . . . 
                    . f b 1 1 1 1 1 1 b f . . 
                    f b d 1 1 1 1 1 1 1 f . . 
                    f d d d 1 1 1 1 1 1 d f . 
                    f d d d d 1 1 1 1 1 d f . 
                    f d d d d d d d 1 1 d f . 
                    f d d d d d d d 1 1 1 f . 
                    f d d d d d d c 2 1 1 f . 
                    f f b d d d b 1 1 1 1 b f 
                    . . f f f c f d b 1 b 1 f 
                    . . f f f f f f f b f b f 
                    . . f f f f f f f f f f . 
                    . . f c c d d 1 1 f . . . 
                    . . c b b c b c b f . . . 
                    . . c b b c d 1 1 f . . . 
                    . . . c c f f f f . . . . 
                    . . . . f f f . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . 
                    . . . . f f f f f . . . . 
                    . . f f 1 1 1 1 1 f . . . 
                    . f b 1 1 1 1 1 1 b f . . 
                    f b d 1 1 1 1 1 1 1 f . . 
                    f d d d 1 1 1 1 1 1 d f . 
                    f d d d d 1 1 1 1 1 d f . 
                    f d d d d d d d 1 1 d f . 
                    f d d d d d d d 1 1 1 f . 
                    f d d d d d d c 2 1 1 f . 
                    f f b d d d b 1 1 1 1 b f 
                    . . f f f c f d b 1 b 1 f 
                    . . f f f f f f f b f b f 
                    . . f c c f f f f f f f . 
                    . . c b b c d 1 1 f . . . 
                    . . c b b c b c b f . . . 
                    . . . c c f f f f . . . . 
                    . . . . f f f f f . . . . 
                    `,img`
                    . . . . f f f f f . . . . 
                    . . f f 1 1 1 1 1 f . . . 
                    . f b 1 1 1 1 1 1 b f . . 
                    f b d 1 1 1 1 1 1 1 f . . 
                    f d d d 1 1 1 1 1 1 d f . 
                    f d d d d 1 1 1 1 1 d f . 
                    f d d d d d d d 1 1 d f . 
                    f d d d d d d d 1 1 1 f . 
                    f d d d d d d c 2 1 1 f . 
                    f f b d d d b 1 1 1 1 b f 
                    . . f f f c f d b 1 b 1 f 
                    . . f f f f f f f b f b f 
                    . . f f f f f f f f f f . 
                    . . f c c d d 1 1 f . . . 
                    . . c b b c b c b f . . . 
                    . . c b b c d 1 1 f . . . 
                    . . . c c f f f f . . . . 
                    . . . . . f f f . . . . . 
                    `,img`
                    . . . . . . . . . . . . . 
                    . . . . f f f f f . . . . 
                    . . f f 1 1 1 1 1 f . . . 
                    . f b 1 1 1 1 1 1 b f . . 
                    f b d 1 1 1 1 1 1 1 f . . 
                    f d d d 1 1 1 1 1 1 d f . 
                    f d d d d 1 1 1 1 1 d f . 
                    f d d d d d d d 1 1 d f . 
                    f d d d d d d d 1 1 1 f . 
                    f d d d d d d c 2 1 1 f . 
                    f f b d d d b 1 1 1 1 b f 
                    . . f f f c f d b 1 b 1 f 
                    . . f f f f f f f b f b f 
                    . . f c c f f f f f f f . 
                    . . c b b c d 1 1 f . . . 
                    . . c b b c b c b f . . . 
                    . . . c c f f f f . . . . 
                    . . . f f f f f . . . . . 
                    `],
                200,
                true
                )
            }
        }
        if (sight.isInSight(
        value,
        link,
        90,
        false
        )) {
            value.follow(link, 50)
        } else {
            value.setVelocity(0, 0)
        }
    }
    for (let value of sprites.allOfKind(SpriteKind.Enemy4)) {
        if (!(statusbar4.value == 0)) {
            if (characterAnimations.matchesRule(value, characterAnimations.rule(Predicate.MovingRight))) {
                animation.runImageAnimation(
                value,
                [img`
                    . f f f f f f f f . . 
                    f c c c e e e e e f . 
                    f c b e e e e e e e f 
                    f c b e f f e e e f f 
                    f c b e f f e e e f f 
                    f c b e e e e e e e f 
                    f c d b e e e d e e f 
                    f b b c c b b c b f . 
                    . f c d d c f f f . . 
                    . f c d d c b b f . . 
                    . f d c c b b b f . . 
                    . f c c c c c c f . . 
                    . . f f f f f f . . . 
                    . . . f f f . . . . . 
                    `,img`
                    . . . . . . . . . . . 
                    . f f f f f f f f . . 
                    f c c c e e e e e f . 
                    f c b e e e e e e e f 
                    f c b e f f e e e f f 
                    f c b e f f e e e f f 
                    f c b e e e e e e e f 
                    f c d b e e e d e e f 
                    f b b c c b b c b f . 
                    . f c d d c f f f . . 
                    . f c d d c b b f . . 
                    . f d c c b b b f . . 
                    . . f f f f f f . . . 
                    . . . f f f f f . . . 
                    `,img`
                    . f f f f f f f f . . 
                    f c c c e e e e e f . 
                    f c b e e e e e e e f 
                    f c b e f f e e e f f 
                    f c b e f f e e e f f 
                    f c b e e e e e e e f 
                    f c d b e e e d e e f 
                    f b b c c b b c b f . 
                    . f c d d c f f f . . 
                    . f c d d c b b f . . 
                    . f d c c b b b f . . 
                    . f c c c c c c f . . 
                    . . f f f f f f . . . 
                    . . . . f f f . . . . 
                    `,img`
                    . . . . . . . . . . . 
                    . f f f f f f f f . . 
                    f c c c e e e e e f . 
                    f c b e e e e e e e f 
                    f c b e f f e e e f f 
                    f c b e f f e e e f f 
                    f c b e e e e e e e f 
                    f c d b e e e d e e f 
                    f b b c c b b c b f . 
                    . f c d d c f f f . . 
                    . f c d d c b b f . . 
                    . f d c c b b b f . . 
                    . . f f f f f f . . . 
                    . . f f f f f . . . . 
                    `],
                200,
                true
                )
            } else if (characterAnimations.matchesRule(value, characterAnimations.rule(Predicate.MovingLeft))) {
                animation.runImageAnimation(
                value,
                [img`
                    . . f f f f f f f f . 
                    . f e e e e e c c c f 
                    f e e e e e e e b c f 
                    f f e e e f f e b c f 
                    f f e e e f f e b c f 
                    f e e e e e e e b c f 
                    f e e d e e e b d c f 
                    . f b c b b c c b b f 
                    . . f f f c d d c f . 
                    . . f b b c d d c f . 
                    . . f b b b c c d f . 
                    . . f c c c c c c f . 
                    . . . f f f f f f . . 
                    . . . . . f f f . . . 
                    `,img`
                    . . . . . . . . . . . 
                    . . f f f f f f f f . 
                    . f e e e e e c c c f 
                    f e e e e e e e b c f 
                    f f e e e f f e b c f 
                    f f e e e f f e b c f 
                    f e e e e e e e b c f 
                    f e e d e e e b d c f 
                    . f b c b b c c b b f 
                    . . f f f c d d c f . 
                    . . f b b c d d c f . 
                    . . f b b b c c d f . 
                    . . . f f f f f f . . 
                    . . . f f f f f . . . 
                    `,img`
                    . . f f f f f f f f . 
                    . f e e e e e c c c f 
                    f e e e e e e e b c f 
                    f f e e e f f e b c f 
                    f f e e e f f e b c f 
                    f e e e e e e e b c f 
                    f e e d e e e b d c f 
                    . f b c b b c c b b f 
                    . . f f f c d d c f . 
                    . . f b b c d d c f . 
                    . . f b b b c c d f . 
                    . . f c c c c c c f . 
                    . . . f f f f f f . . 
                    . . . . f f f . . . . 
                    `,img`
                    . . . . . . . . . . . 
                    . . f f f f f f f f . 
                    . f e e e e e c c c f 
                    f e e e e e e e b c f 
                    f f e e e f f e b c f 
                    f f e e e f f e b c f 
                    f e e e e e e e b c f 
                    f e e d e e e b d c f 
                    . f b c b b c c b b f 
                    . . f f f c d d c f . 
                    . . f b b c d d c f . 
                    . . f b b b c c d f . 
                    . . . f f f f f f . . 
                    . . . . f f f f f . . 
                    `],
                200,
                true
                )
            } else if (characterAnimations.matchesRule(value, characterAnimations.rule(Predicate.FacingLeft))) {
                animation.runImageAnimation(
                value,
                [img`
                    . . f f f f f f f f . 
                    . f e e e e e c c c f 
                    f e e e e e e e b c f 
                    f f e e e f f e b c f 
                    f f e e e f f e b c f 
                    f e e e e e e e b c f 
                    f e e d e e e b d c f 
                    . f b c b b c c b b f 
                    . . f f f c d d c f . 
                    . . f b b c d d c f . 
                    . . f b b b c c d f . 
                    . . f c c c c c c f . 
                    . . . f f f f f f . . 
                    . . . . . f f f . . . 
                    `,img`
                    . . . . . . . . . . . 
                    . . f f f f f f f f . 
                    . f e e e e e c c c f 
                    f e e e e e e e b c f 
                    f f e e e f f e b c f 
                    f f e e e f f e b c f 
                    f e e e e e e e b c f 
                    f e e d e e e b d c f 
                    . f b c b b c c b b f 
                    . . f f f c d d c f . 
                    . . f b b c d d c f . 
                    . . f b b b c c d f . 
                    . . . f f f f f f . . 
                    . . . f f f f f . . . 
                    `,img`
                    . . f f f f f f f f . 
                    . f e e e e e c c c f 
                    f e e e e e e e b c f 
                    f f e e e f f e b c f 
                    f f e e e f f e b c f 
                    f e e e e e e e b c f 
                    f e e d e e e b d c f 
                    . f b c b b c c b b f 
                    . . f f f c d d c f . 
                    . . f b b c d d c f . 
                    . . f b b b c c d f . 
                    . . f c c c c c c f . 
                    . . . f f f f f f . . 
                    . . . . f f f . . . . 
                    `,img`
                    . . . . . . . . . . . 
                    . . f f f f f f f f . 
                    . f e e e e e c c c f 
                    f e e e e e e e b c f 
                    f f e e e f f e b c f 
                    f f e e e f f e b c f 
                    f e e e e e e e b c f 
                    f e e d e e e b d c f 
                    . f b c b b c c b b f 
                    . . f f f c d d c f . 
                    . . f b b c d d c f . 
                    . . f b b b c c d f . 
                    . . . f f f f f f . . 
                    . . . . f f f f f . . 
                    `],
                200,
                true
                )
            } else if (characterAnimations.matchesRule(value, characterAnimations.rule(Predicate.FacingRight))) {
                animation.runImageAnimation(
                value,
                [img`
                    . f f f f f f f f . . 
                    f c c c e e e e e f . 
                    f c b e e e e e e e f 
                    f c b e f f e e e f f 
                    f c b e f f e e e f f 
                    f c b e e e e e e e f 
                    f c d b e e e d e e f 
                    f b b c c b b c b f . 
                    . f c d d c f f f . . 
                    . f c d d c b b f . . 
                    . f d c c b b b f . . 
                    . f c c c c c c f . . 
                    . . f f f f f f . . . 
                    . . . f f f . . . . . 
                    `,img`
                    . . . . . . . . . . . 
                    . f f f f f f f f . . 
                    f c c c e e e e e f . 
                    f c b e e e e e e e f 
                    f c b e f f e e e f f 
                    f c b e f f e e e f f 
                    f c b e e e e e e e f 
                    f c d b e e e d e e f 
                    f b b c c b b c b f . 
                    . f c d d c f f f . . 
                    . f c d d c b b f . . 
                    . f d c c b b b f . . 
                    . . f f f f f f . . . 
                    . . . f f f f f . . . 
                    `,img`
                    . f f f f f f f f . . 
                    f c c c e e e e e f . 
                    f c b e e e e e e e f 
                    f c b e f f e e e f f 
                    f c b e f f e e e f f 
                    f c b e e e e e e e f 
                    f c d b e e e d e e f 
                    f b b c c b b c b f . 
                    . f c d d c f f f . . 
                    . f c d d c b b f . . 
                    . f d c c b b b f . . 
                    . f c c c c c c f . . 
                    . . f f f f f f . . . 
                    . . . . f f f . . . . 
                    `,img`
                    . . . . . . . . . . . 
                    . f f f f f f f f . . 
                    f c c c e e e e e f . 
                    f c b e e e e e e e f 
                    f c b e f f e e e f f 
                    f c b e f f e e e f f 
                    f c b e e e e e e e f 
                    f c d b e e e d e e f 
                    f b b c c b b c b f . 
                    . f c d d c f f f . . 
                    . f c d d c b b f . . 
                    . f d c c b b b f . . 
                    . . f f f f f f . . . 
                    . . f f f f f . . . . 
                    `],
                200,
                true
                )
            }
        }
        if (sight.isInSight(
        value,
        link,
        90,
        false
        ) && scream == true) {
            value.follow(link, 40)
        } else {
            value.setVelocity(0, 0)
        }
    }
})
forever(function () {
    if (controller.menu.isPressed()) {
        minimap.includeSprite(myMinimap, link, MinimapSpriteScale.MinimapScale)
        pause(1)
        myMinimap = minimap.minimap(MinimapScale.Sixteenth, 1, 12)
    }
})
game.onUpdateInterval(3000, function () {
    if (bossbattle == true) {
        if (deadmanvolley == false && vulnerable == false) {
            for (let value of sprites.allOfKind(SpriteKind.boss)) {
                orb = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . 2 4 4 4 4 2 . . . . . 
                    . . . . 2 4 5 5 5 5 4 2 . . . . 
                    . . . . 4 5 1 1 1 1 5 4 . . . . 
                    . . . . 4 5 1 1 1 1 5 4 . . . . 
                    . . . . 4 5 1 1 1 1 5 4 . . . . 
                    . . . . 4 5 1 1 1 1 5 4 . . . . 
                    . . . . 2 4 5 5 5 5 4 2 . . . . 
                    . . . . . 2 4 4 4 4 2 . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, value, 0, 70)
                orb.follow(link, 70)
                orb.setKind(SpriteKind.ball)
                timer.after(1500, function () {
                    orb.follow(link, 0)
                    orb.setVelocity(0, 70)
                })
            }
        } else {
            for (let value of sprites.allOfKind(SpriteKind.boss)) {
                nothin = sprites.createProjectileFromSprite(img`
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
                    `, value, 0, 0)
                nothin.setKind(SpriteKind.NPC_DONE)
            }
        }
    }
})
game.onUpdate(function () {
    if (vulnerable == true) {
        for (let value of sprites.allOfKind(SpriteKind.boss)) {
            value.setVelocity(0, 0)
            value.setImage(img`
                . . 1 . . . f f f f . . . 1 . . 
                . . 1 . f f f 2 2 f f f . 1 . . 
                . . . d f f 2 2 2 2 f f d . . . 
                . . f d f 2 2 2 2 2 2 f d f . . 
                . . f f b 2 2 2 2 2 2 b 2 f . . 
                . . f 2 b f f f f f f b 2 f . . 
                . . f f f f b b b b f f f f . . 
                . f f b f 4 4 1 1 4 4 f b f f . 
                . f e b d 1 4 1 1 4 1 d b e f . 
                . . f e b d 1 1 1 1 d b e f . . 
                . . . f e b b b b b b e f . . . 
                . . c b f c 6 d d 6 c f b c . . 
                . . b e f c c c c c c f e b . . 
                . . b b f e e b b e e f b b . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f f . . f f . . . . . 
                `)
            timer.after(3000, function () {
                value.setVelocity(60, 0)
                value.setImage(img`
                    . . 1 . . . f f f f . . . 1 . . 
                    . . 1 . f f f 2 2 f f f . 1 . . 
                    . . . d f f 2 2 2 2 f f d . . . 
                    . . f d f 2 2 2 2 2 2 f d f . . 
                    . . f f b 2 2 2 2 2 2 b 2 f . . 
                    . . f 2 b f f f f f f b 2 f . . 
                    . . f f f f b b b b f f f f . . 
                    . f f b f 5 5 1 1 5 5 f b f f . 
                    . f e b d 1 5 1 1 5 1 d b e f . 
                    . . f e b d 1 1 1 1 d b e f . . 
                    . . . f e b b b b b b e f . . . 
                    . . c b f c 6 d d 6 c f b c . . 
                    . . b e f c c c c c c f e b . . 
                    . . b b f e e b b e e f b b . . 
                    . . . . . f f f f f f . . . . . 
                    . . . . . f f . . f f . . . . . 
                    `)
            })
        }
    }
    if (night == true && nightnight == true) {
        spawnStalchild(61, 13)
        spawnStalchild(61, 14)
        spawnStalchild(62, 13)
        spawnStalchild(147, 66)
        spawnStalchild(147, 67)
        spawnStalchild(147, 68)
        spawnStalchild(147, 69)
        spawnStalchild(147, 70)
        spawnStalchild(147, 71)
        spawnStalchild(128, 60)
        spawnStalchild(150, 43)
        spawnStalchild(60, 59)
        spawnStalchild(60, 60)
        nightnight = false
    } else if (day == true) {
        tiles.destroySpritesOfKind(SpriteKind.Enemy3)
    }
    if (bow == true) {
        quiverstatus = true
        quiver = statusbars.create(20, 4, StatusBarKind.Energy)
        quiver.setColor(5, 12, 4)
        quiver.setBarBorder(1, 15)
        quiver.setLabel("|||", 12)
        quiver.setBarSize(20, 4)
        quiver.positionDirection(CollisionDirection.Top)
        quiver.setOffsetPadding(-60, 18)
        quiver.max = 30
        quiver.value = 30
    }
    for (let value of sprites.allOfKind(SpriteKind.boss)) {
        if (value.isHittingTile(CollisionDirection.Right)) {
            value.setVelocity(-75, 0)
        } else if (value.isHittingTile(CollisionDirection.Left)) {
            value.setVelocity(75, 0)
        }
    }
    if (bossbattle == true) {
        for (let value of sprites.allOfKind(SpriteKind.Projectile)) {
            value.setFlag(SpriteFlag.GhostThroughWalls, true)
        }
        for (let value of sprites.allOfKind(SpriteKind.bigprojectile)) {
            value.setFlag(SpriteFlag.GhostThroughWalls, true)
        }
        for (let value of sprites.allOfKind(SpriteKind.arrow)) {
            value.setFlag(SpriteFlag.GhostThroughWalls, true)
        }
        for (let value of sprites.allOfKind(SpriteKind.ball)) {
            value.setFlag(SpriteFlag.GhostThroughWalls, true)
        }
        for (let value of sprites.allOfKind(SpriteKind.goodball)) {
            value.setFlag(SpriteFlag.GhostThroughWalls, true)
        }
    }
})
forever(function () {
    day = true
    night = false
    nightnight = false
    color.clearFadeEffect()
    pause(180000)
    day = false
    night = true
    nightnight = true
    color.Darken.startScreenEffect()
    pause(180000)
})
game.onUpdate(function () {
    if (shieldup == false) {
        characterAnimations.loopFrames(
        link,
        [img`
            . . . . . . f f f f . . . . . . . 
            . . . . f f 7 7 7 7 f f . . . . . 
            . . . f 7 7 7 7 7 7 7 7 f . . . . 
            . . f f 7 7 7 7 7 7 7 7 f f . . . 
            . . f f 7 7 7 7 7 7 7 7 f f . . . 
            . . f 7 7 7 7 7 7 7 7 7 7 f . . . 
            . . f 7 7 7 7 7 7 7 7 7 7 f . . . 
            . f f 7 7 7 7 7 7 7 7 7 7 f f . 8 
            . f d d 7 7 7 7 7 7 7 8 8 8 f 8 . 
            . . f d 7 7 7 7 7 7 7 7 d 8 8 . . 
            . . . f d 7 7 7 7 7 7 d 4 5 8 8 . 
            . . c b f f 7 7 7 e f 8 8 4 . 8 . 
            . . b d f 6 6 e e 6 8 4 8 b . 8 . 
            . . b b f e e 7 7 4 8 8 b b . . . 
            . . . . . f f f 4 8 4 . . . . . . 
            . . . . . f f . 4 4 f . . . . . . 
            . . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . . 
            . . . . . f f f f . . . . . . . . 
            . . . f f 7 7 7 7 f f . . . . . . 
            . . f 7 7 7 7 7 7 7 7 f . . . . . 
            . . f 7 7 7 7 7 7 7 7 f . . . . . 
            . f f 7 7 7 7 7 7 7 7 f f . . . . 
            . f 7 7 7 7 7 7 7 7 7 7 f . . . . 
            . f 7 7 7 7 7 7 7 7 7 7 f . . . . 
            . f 7 7 7 7 7 7 7 7 7 7 f . . 8 . 
            f f d 7 7 7 7 7 7 7 8 8 8 f 8 . . 
            f f d 7 7 7 7 7 7 7 7 d 8 8 f . . 
            . . f d 7 7 7 7 7 7 d 4 5 8 8 . . 
            . . c f f 7 e e e f 8 8 4 2 8 . . 
            . . b f e e 7 7 6 8 4 8 f 2 8 . . 
            . . c f f f f f 4 8 8 b f f . . . 
            . . . f f f . 4 8 4 . . . . . . . 
            . . . . . . . 4 4 . . . . . . . . 
            `,img`
            . . . . . f f f f . . . . . . . . 
            . . . f f 7 7 7 7 f f . . . . . . 
            . . f 7 7 7 7 7 7 7 7 f . . . . . 
            . f f 7 7 7 7 7 7 7 7 f f . . . . 
            . f f 7 7 7 7 7 7 7 7 f f . . . . 
            . f 7 7 7 7 7 7 7 7 7 7 f . . . . 
            . f 7 7 7 7 7 7 7 7 7 7 f . . . . 
            f f 7 7 7 7 7 7 7 7 7 7 f f . 8 . 
            f d d 7 7 7 7 7 7 7 8 8 8 f 8 . . 
            . f d 7 7 7 7 7 7 7 7 d 8 8 . . . 
            . . f d 7 7 7 7 7 7 d 4 5 8 8 . . 
            . c b f f 7 7 7 e f 8 8 4 . 8 . . 
            . b d f 6 6 e e 6 8 4 8 b . 8 . . 
            . b b f e e 7 7 4 8 8 b b . . . . 
            . . . . f f f 4 8 4 . . . . . . . 
            . . . . f f . 4 4 f . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . . 
            . . . . . f f f f . . . . . . . . 
            . . . f f 7 7 7 7 f f . . . . . . 
            . . f 7 7 7 7 7 7 7 7 f . . . . . 
            . . f 7 7 7 7 7 7 7 7 f . . . . . 
            . f f 7 7 7 7 7 7 7 7 f f . . . . 
            . f 7 7 7 7 7 7 7 7 7 7 f . . . . 
            . f 7 7 7 7 7 7 7 7 7 7 f . . . . 
            . f 7 7 7 7 7 7 7 7 7 7 f . . 8 . 
            . f d 7 7 7 7 7 7 7 8 8 8 f 8 . . 
            . f d 7 7 7 7 7 7 7 7 d 8 8 . . . 
            . f f d 7 7 7 7 7 7 d 4 5 8 8 . . 
            . f b f f 7 e e e f 8 8 4 . 8 . . 
            . f d d c e 7 7 6 8 4 8 . . 8 . . 
            . f b c c f f f 4 8 8 c . . . . . 
            . . . . . . . 4 8 4 f . . . . . . 
            . . . . . . . 4 4 . . . . . . . . 
            `],
        200,
        characterAnimations.rule(Predicate.MovingUp)
        )
        characterAnimations.loopFrames(
        link,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . f f 6 6 7 7 7 7 f . . . . 
            . . f f 6 6 7 7 7 7 7 7 f . . . 
            . . f 6 6 7 7 7 6 6 6 6 f . . . 
            . . f 6 7 7 6 4 4 f f 4 6 f . . 
            . . f 7 7 6 4 5 5 5 5 5 7 f . . 
            . f f 7 f 4 5 5 d d d 5 5 f . . 
            . f f 7 d 4 5 f f d d f 5 f . . 
            . f d d d 4 d d d d d d f . . . 
            . . f d d d c c d d c f . . . . 
            . . . . f b d d c e e f . . . . 
            . . . . f c d d c 7 7 f . . . . 
            . . . f f f c c f 6 6 f f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . f f . . . f f f . . . . 
            `,img`
            . . . . . f f f f f f . . . . . 
            . . . f f 6 6 7 7 7 7 f . . . . 
            . . f f 6 6 7 7 7 7 7 7 f . . . 
            . . f 6 6 7 7 7 6 6 6 6 f . . . 
            . . f 6 7 7 6 4 4 f f 4 6 f . . 
            . . f 7 7 6 4 5 5 5 5 5 7 f . . 
            . f f 7 f 4 5 5 d d d 5 5 f . . 
            . f f 7 d 4 5 f f d d f 5 f . . 
            . f d d d d d d d d d d f f . . 
            . . f d d d d d d d c f 8 b f . 
            . . . f f d d b c c c f 5 8 f . 
            . . . . f 7 7 7 b d d c 8 2 f . 
            . . . . f 7 7 e c d d c 2 f . . 
            . . . . f e e 6 f c c f f . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . f f 6 6 7 7 7 7 f . . . . 
            . . f f 6 6 7 7 7 7 7 7 f . . . 
            . . f 6 6 7 7 7 6 6 6 6 f . . . 
            . . f 6 7 7 6 4 4 f f 4 6 f . . 
            . . f 7 7 6 4 5 5 5 5 5 7 f . . 
            . f f 7 f 4 5 5 d d d 5 5 f . . 
            . f f 7 d 4 5 f f d d f 5 f . . 
            . f d d d 4 d d d d d d f . . . 
            . . f d d d c c d d c f . . . . 
            . . . . f b d d c e e f . . . . 
            . . . . f c d d c 7 7 f . . . . 
            . . . f f f c c f 6 6 f f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . f f . . . f f f . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . f f 6 6 7 7 7 7 f . . . . 
            . . f f 6 6 7 7 7 7 7 7 f . . . 
            . . f 6 6 7 7 7 6 6 6 6 f . . . 
            . . f 6 7 7 6 4 4 f f 4 6 f . . 
            . . f 7 7 6 4 5 5 5 5 5 7 f . . 
            . f f 7 f 4 5 5 d d d 5 5 f . . 
            . f f 7 d 4 5 f f d d f 5 f . . 
            . f d d d d d d d d d d f f . . 
            . . f d d d d d d d c f 8 b f . 
            . . . . f 7 7 7 c c c f 5 8 f . 
            . . . . f 7 7 e b d d c 8 2 f . 
            . . . f f e e 6 c d d c 2 f . . 
            . . . f f f f f f c c f f . . . 
            . . . . f f . . . f f f . . . . 
            `],
        200,
        characterAnimations.rule(Predicate.MovingRight)
        )
        characterAnimations.loopFrames(
        link,
        [img`
            . . . . . . f f f f . . . . . . . 
            . . . . f f f 7 7 f f f . . . . . 
            . . . f f f 7 7 7 7 f f f . . . . 
            . . f f f 6 6 6 6 6 6 f f f . . . 
            . . f f 6 7 7 7 7 7 7 6 6 f . . . 
            . . f 6 7 4 4 f f 4 5 7 6 f . . . 
            . . f f 4 5 5 5 5 5 5 5 f f . . . 
            . f f 4 5 5 d d d d 5 5 5 f f . 8 
            . f d 4 5 f f d d f f 5 5 d f 8 . 
            . . f f f f d d d d d d 5 f 8 . . 
            . f b 8 8 b f d d c d d f 5 8 8 . 
            . f 8 5 5 8 f 7 7 e e f b c . 8 . 
            . f 2 8 8 2 f 7 e 7 7 f d b . 8 . 
            . . f 2 2 f e e 6 6 6 f b b . . . 
            . . . f f f f f f f f . . . . . . 
            . . . . . f f . . f f . . . . . . 
            . . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . . 
            . . . . f f f 7 7 f f f . . . . . 
            . . . f f f 7 7 7 7 f f f . . . . 
            . . f f f 6 6 6 6 6 6 f f f . . . 
            . . f f 6 7 7 7 7 7 7 6 6 f . . . 
            . . f 6 7 4 4 f f 4 5 7 6 f . . . 
            . f f f 4 5 5 5 5 5 5 5 f f f . . 
            . f f 4 5 5 d d d d 5 5 5 f f . 8 
            . f d 4 5 f f d d f f 5 5 d f 8 . 
            . f f 4 d d d d d d d d 5 f 8 . . 
            f b f f d d d d d c c c f 5 8 8 . 
            f 8 f c f 7 7 7 e c d d b c . 8 . 
            f 2 f b f 7 7 e 7 c d d c . . 8 . 
            f 2 f . f e e 6 6 f c c . . . . . 
            . f f . f f f f f f f . . . . . . 
            . . . . f f f . 4 4 . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . . 
            . . . . f f f 7 7 f f f . . . . . 
            . . . f f f 7 7 7 7 f f f . . . . 
            . . f f f 6 6 6 6 6 6 f f f . . . 
            . . f f 6 7 7 7 7 7 7 6 6 f . . . 
            . f f 6 7 4 4 f f 4 5 7 6 f f . . 
            . f f f 4 5 d d d d 5 5 f f f . . 
            . f f 4 5 f f d d f f 5 5 f f . 8 
            . f d 4 5 d d d d d d d 5 d f 8 . 
            . . f f f f f d d c d d d f 8 . . 
            . . f b 8 8 b f 7 e e f f 5 8 8 . 
            . . f 8 5 5 8 f e 7 7 f b c . 8 . 
            . . f 2 8 8 2 f 6 6 6 f 8 . . 8 . 
            . . . f 2 2 f f f f f f . . . . . 
            . . . . f f . . 4 f f f . . . . . 
            . . . . . . . . 4 4 . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . . 
            . . . . f f f 7 7 f f f . . . . . 
            . . . f f f 7 7 7 7 f f f . . . . 
            . . f f f 6 6 6 6 6 6 f f f . . . 
            . . f f 6 7 7 7 7 7 7 6 6 f . . . 
            . f f 6 7 4 4 f f 4 5 7 6 f f . . 
            . f f f 4 5 d d d d 5 5 f f f . . 
            . f f 4 5 f f d d f f 5 5 f f . 8 
            . f d 4 5 d d d d d d d 5 d f 8 . 
            . . f 4 c b d d d c d d d f b f . 
            . . c b d d c 7 7 e e f f f 8 f . 
            . . . c d d c 7 e 7 7 f b f 2 f . 
            . . . . c c f e 6 6 6 f 8 f 2 f . 
            . . . . . f f f f f f f . f f . . 
            . . . . . . . . 4 f f f . . . . . 
            . . . . . . . . 4 4 . . . . . . . 
            `],
        200,
        characterAnimations.rule(Predicate.MovingDown)
        )
        characterAnimations.loopFrames(
        link,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . f 7 7 7 7 6 6 f f . . . 
            . . . f 7 7 7 7 7 7 6 6 f f . . 
            . . . f 6 6 6 6 7 7 7 6 6 f . . 
            . . f 6 4 f f 4 4 6 7 7 6 f . . 
            . . f 7 5 5 5 5 5 4 6 7 7 f . . 
            . . f 5 5 d d d 5 5 4 f 7 f f . 
            . . f 5 f d d f f 5 4 d 7 f f . 
            . . . f d d d d d d 4 d d d f . 
            . . . . f c d d c c d d d f . . 
            . . . . f e e c d d b f . . . . 
            . . . . f 7 7 c d d c f . . . . 
            . . . f f 6 6 f c c f f f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . f f f . . . f f . . . . 
            `,img`
            . . . . . f f f f f f . . . . . 
            . . . . f 7 7 7 7 6 6 f f . . . 
            . . . f 7 7 7 7 7 7 6 6 f f . . 
            . . . f 6 6 6 6 7 7 7 6 6 f . . 
            . . f 6 4 f f 4 4 6 7 7 6 f . . 
            . . f 7 5 5 5 5 5 4 6 7 7 f . . 
            . . f 5 5 d d d 5 5 4 f 7 f f . 
            . . f 5 f d d f f 5 4 d 7 f f . 
            . . f f d d d d d d d d d d f . 
            . f b 8 f c d d d d d d d f . . 
            . f 8 5 f c c c b d d f f . . . 
            . f 2 8 c d d b 7 7 7 f . . . . 
            . . f 2 c d d c e 7 7 6 . . . . 
            . . . f f c c f 6 e e f . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . f 7 7 7 7 6 6 f f . . . 
            . . . f 7 7 7 7 7 7 6 6 f f . . 
            . . . f 6 6 6 6 7 7 7 6 6 f . . 
            . . f 6 4 f f 4 4 6 7 7 6 f . . 
            . . f 7 5 5 5 5 5 4 6 7 7 f . . 
            . . f 5 5 d d d 5 5 4 f 7 f f . 
            . . f 5 f d d f f 5 4 d 7 f f . 
            . . . f d d d d d d 4 d d d f . 
            . . . . f c d d c c d d d f . . 
            . . . . f e e c d d b f . . . . 
            . . . . f 7 7 c d d c f . . . . 
            . . . f f 6 6 f c c f f f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . f f f . . . f f . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . f 7 7 7 7 6 6 f f . . . 
            . . . f 7 7 7 7 7 7 6 6 f f . . 
            . . . f 6 6 6 6 7 7 7 6 6 f . . 
            . . f 6 4 f f 4 4 6 7 7 6 f . . 
            . . f 7 5 5 5 5 5 4 6 7 7 f . . 
            . . f 5 5 d d d 5 5 4 f 7 f f . 
            . . f 5 f d d f f 5 4 d 7 f f . 
            . . f f d d d d d d d d d d f . 
            . f b 8 f c d d d d d d d f . . 
            . f 8 5 f c c c 7 7 7 f . . . . 
            . f 2 8 c d d b e 7 7 f . . . . 
            . . f 2 c d d c 6 e e f f . . . 
            . . . f f c c f f f f f f . . . 
            . . . . f f f . . . f f . . . . 
            `],
        200,
        characterAnimations.rule(Predicate.MovingLeft)
        )
    } else if (shieldup == true) {
        characterAnimations.loopFrames(
        link,
        [img`
            . . . . . . f f f f . . . . . . . 
            . . . . f f 7 7 7 7 f f . . . . . 
            . . . f 7 7 7 7 7 7 7 7 f . . . . 
            . . f f 7 7 7 7 7 7 7 7 f f . . . 
            . . f f 7 7 7 7 7 7 7 7 f f . . . 
            . . f 7 7 7 7 7 7 7 7 7 7 f . . . 
            . . f 7 7 7 7 7 7 7 7 7 7 f . . . 
            . f f 7 7 7 7 7 7 7 7 7 7 f f . 8 
            . f d d 7 7 7 7 7 7 7 8 8 8 f 8 . 
            . . f d 7 7 7 7 7 7 7 7 d 8 8 . . 
            . . . f d 7 7 7 7 7 7 d 4 5 8 8 . 
            . . c b f f 7 7 7 e f 8 8 4 . 8 . 
            . . b d f 6 6 e e 6 8 4 8 b . 8 . 
            . . b b f e e 7 7 4 8 8 b b . . . 
            . . . . . f f f 4 8 4 . . . . . . 
            . . . . . f f . 4 4 f . . . . . . 
            . . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . . 
            . . . . . f f f f . . . . . . . . 
            . . . f f 7 7 7 7 f f . . . . . . 
            . . f 7 7 7 7 7 7 7 7 f . . . . . 
            . . f 7 7 7 7 7 7 7 7 f . . . . . 
            . f f 7 7 7 7 7 7 7 7 f f . . . . 
            . f 7 7 7 7 7 7 7 7 7 7 f . . . . 
            . f 7 7 7 7 7 7 7 7 7 7 f . . . . 
            . f 7 7 7 7 7 7 7 7 7 7 f . . 8 . 
            f f d 7 7 7 7 7 7 7 8 8 8 . 8 . . 
            f f d 7 7 7 7 7 7 7 7 d 8 8 . . . 
            . . f d 7 7 7 7 7 7 d 4 5 8 8 . . 
            . . c f f 7 e e e f 8 8 4 . 8 . . 
            . . b f e e 7 7 6 8 4 8 f . 8 . . 
            . . c f f f f f 4 8 8 b f . . . . 
            . . . f f f . 4 8 4 . . . . . . . 
            . . . . . . . 4 4 . . . . . . . . 
            `,img`
            . . . . . f f f f . . . . . . . . 
            . . . f f 7 7 7 7 f f . . . . . . 
            . . f 7 7 7 7 7 7 7 7 f . . . . . 
            . f f 7 7 7 7 7 7 7 7 f f . . . . 
            . f f 7 7 7 7 7 7 7 7 f f . . . . 
            . f 7 7 7 7 7 7 7 7 7 7 f . . . . 
            . f 7 7 7 7 7 7 7 7 7 7 f . . . . 
            f f 7 7 7 7 7 7 7 7 7 7 f f . 8 . 
            f d d 7 7 7 7 7 7 7 8 8 8 f 8 . . 
            . f d 7 7 7 7 7 7 7 7 d 8 8 . . . 
            . . f d 7 7 7 7 7 7 d 4 5 8 8 . . 
            . c b f f 7 7 7 e f 8 8 4 . 8 . . 
            . b d f 6 6 e e 6 8 4 8 b . 8 . . 
            . b b f e e 7 7 4 8 8 b b . . . . 
            . . . . f f f 4 8 4 . . . . . . . 
            . . . . f f . 4 4 f . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . . 
            . . . . . f f f f . . . . . . . . 
            . . . f f 7 7 7 7 f f . . . . . . 
            . . f 7 7 7 7 7 7 7 7 f . . . . . 
            . . f 7 7 7 7 7 7 7 7 f . . . . . 
            . f f 7 7 7 7 7 7 7 7 f f . . . . 
            . f 7 7 7 7 7 7 7 7 7 7 f . . . . 
            . f 7 7 7 7 7 7 7 7 7 7 f . . . . 
            . f 7 7 7 7 7 7 7 7 7 7 f . . 8 . 
            . f d 7 7 7 7 7 7 7 8 8 8 f 8 . . 
            . f d 7 7 7 7 7 7 7 7 d 8 8 . . . 
            . f f d 7 7 7 7 7 7 d 4 5 8 8 . . 
            . f b f f 7 e e e f 8 8 4 . 8 . . 
            . f d d c e 7 7 6 8 4 8 . . 8 . . 
            . f b c c f f f 4 8 8 c . . . . . 
            . . . . . . . 4 8 4 f . . . . . . 
            . . . . . . . 4 4 . . . . . . . . 
            `],
        200,
        characterAnimations.rule(Predicate.MovingUp)
        )
        characterAnimations.loopFrames(
        link,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . f f 6 6 7 7 7 7 f . . . . 
            . . f f 6 6 7 7 7 7 7 7 f . . . 
            . . f 6 6 7 7 7 6 6 6 6 f . . . 
            . . f 6 7 7 6 4 4 f f 4 6 f . . 
            . . f 7 7 6 4 5 5 5 5 5 7 f . . 
            . f f 7 f 4 5 5 d d d 5 5 f . . 
            . f f 7 d 4 5 f f d d f 5 f . . 
            . f d d d d d d d d d d f f . . 
            . . f d d d d d d d c f 8 b f . 
            . . . . f 7 7 7 c c c f 5 8 f . 
            . . . . f 7 7 e b d d c 8 2 f . 
            . . . f f e e 6 c d d c 2 f . . 
            . . . f f f f f f c c f f . . . 
            . . . . f f . . . f f f . . . . 
            `,img`
            . . . . . f f f f f f . . . . . 
            . . . f f 6 6 7 7 7 7 f . . . . 
            . . f f 6 6 7 7 7 7 7 7 f . . . 
            . . f 6 6 7 7 7 6 6 6 6 f . . . 
            . . f 6 7 7 6 4 4 f f 4 6 f . . 
            . . f 7 7 6 4 5 5 5 5 5 7 f . . 
            . f f 7 f 4 5 5 d d d 5 5 f . . 
            . f f 7 d 4 5 f f d d f 5 f . . 
            . f d d d d d d d d d d f f . . 
            . . f d d d d d d d c f 8 b f . 
            . . . f f d d b c c c f 5 8 f . 
            . . . . f 7 7 7 b d d c 8 2 f . 
            . . . . f 7 7 e c d d c 2 f . . 
            . . . . f e e 6 f c c f f . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . f f 6 6 7 7 7 7 f . . . . 
            . . f f 6 6 7 7 7 7 7 7 f . . . 
            . . f 6 6 7 7 7 6 6 6 6 f . . . 
            . . f 6 7 7 6 4 4 f f 4 6 f . . 
            . . f 7 7 6 4 5 5 5 5 5 7 f . . 
            . f f 7 f 4 5 5 d d d 5 5 f . . 
            . f f 7 d 4 5 f f d d f 5 f . . 
            . f d d d d d d d d d d f f . . 
            . . f d d d d d d d c f 8 b f . 
            . . . . f 7 7 7 c c c f 5 8 f . 
            . . . . f 7 7 e b d d c 8 2 f . 
            . . . f f e e 6 c d d c 2 f . . 
            . . . f f f f f f c c f f . . . 
            . . . . f f . . . f f f . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . f f 6 6 7 7 7 7 f . . . . 
            . . f f 6 6 7 7 7 7 7 7 f . . . 
            . . f 6 6 7 7 7 6 6 6 6 f . . . 
            . . f 6 7 7 6 4 4 f f 4 6 f . . 
            . . f 7 7 6 4 5 5 5 5 5 7 f . . 
            . f f 7 f 4 5 5 d d d 5 5 f . . 
            . f f 7 d 4 5 f f d d f 5 f . . 
            . f d d d d d d d d d d f f . . 
            . . f d d d d d d d c f 8 b f . 
            . . . . f 7 7 7 c c c f 5 8 f . 
            . . . . f 7 7 e b d d c 8 2 f . 
            . . . f f e e 6 c d d c 2 f . . 
            . . . f f f f f f c c f f . . . 
            . . . . f f . . . f f f . . . . 
            `],
        200,
        characterAnimations.rule(Predicate.MovingRight)
        )
        characterAnimations.loopFrames(
        link,
        [img`
            . . . . . . f f f f . . . . . . . 
            . . . . f f f 7 7 f f f . . . . . 
            . . . f f f 7 7 7 7 f f f . . . . 
            . . f f f 6 6 6 6 6 6 f f f . . . 
            . . f f 6 7 7 7 7 7 7 6 6 f . . . 
            . . f 6 7 4 4 f f 4 5 7 6 f . . . 
            . . f f 4 5 5 5 5 5 5 5 f f . . . 
            . f f 4 5 5 d d d d 5 5 5 f f . 8 
            . f d 4 5 f f d d f f 5 5 d f 8 . 
            . . f f f f d d d d d d 5 f 8 . . 
            . f b 8 8 b f d d c d d f 5 8 8 . 
            . f 8 5 5 8 f 7 7 e e f b c . 8 . 
            . f 2 8 8 2 f 7 e 7 7 f d b . 8 . 
            . . f 2 2 f e e 6 6 6 f b b . . . 
            . . . f f f f f f f f . . . . . . 
            . . . . . f f . . f f . . . . . . 
            . . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . . 
            . . . . f f f 7 7 f f f . . . . . 
            . . . f f f 7 7 7 7 f f f . . . . 
            . . f f f 6 6 6 6 6 6 f f f . . . 
            . . f f 6 7 7 7 7 7 7 6 6 f . . . 
            . f f 6 7 4 4 f f 4 5 7 6 f f . . 
            . f f f 4 5 d d d d 5 5 f f f . . 
            . f f 4 5 f f d d f f 5 5 f f . 8 
            . f d 4 5 d d d d d d d 5 d f 8 . 
            . . f f f f f d d c d d d f 8 . . 
            . . f b 8 8 b f 7 e e f f 5 8 8 . 
            . . f 8 5 5 8 f e 7 7 f b c . 8 . 
            . . f 2 8 8 2 f 6 6 6 f 8 . . 8 . 
            . . . f 2 2 f f f f f f . . . . . 
            . . . . f f . . 4 f f f . . . . . 
            . . . . . . . . 4 4 . . . . . . . 
            `],
        200,
        characterAnimations.rule(Predicate.MovingDown)
        )
        characterAnimations.loopFrames(
        link,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . f 7 7 7 7 6 6 f f . . . 
            . . . f 7 7 7 7 7 7 6 6 f f . . 
            . . . f 6 6 6 6 7 7 7 6 6 f . . 
            . . f 6 4 f f 4 4 6 7 7 6 f . . 
            . . f 7 5 5 5 5 5 4 6 7 7 f . . 
            . . f 5 5 d d d 5 5 4 f 7 f f . 
            . . f 5 f d d f f 5 4 d 7 f f . 
            . . f f d d d d d d d d d d f . 
            . f b 8 f c d d d d d d d f . . 
            . f 8 5 f c c c 7 7 7 f . . . . 
            . f 2 8 c d d b e 7 7 f . . . . 
            . . f 2 c d d c 6 e e f f . . . 
            . . . f f c c f f f f f f . . . 
            . . . . f f f . . . f f . . . . 
            `,img`
            . . . . . f f f f f f . . . . . 
            . . . . f 7 7 7 7 6 6 f f . . . 
            . . . f 7 7 7 7 7 7 6 6 f f . . 
            . . . f 6 6 6 6 7 7 7 6 6 f . . 
            . . f 6 4 f f 4 4 6 7 7 6 f . . 
            . . f 7 5 5 5 5 5 4 6 7 7 f . . 
            . . f 5 5 d d d 5 5 4 f 7 f f . 
            . . f 5 f d d f f 5 4 d 7 f f . 
            . . f f d d d d d d d d d d f . 
            . f b 8 f c d d d d d d d f . . 
            . f 8 5 f c c c b d d f f . . . 
            . f 2 8 c d d b 7 7 7 f . . . . 
            . . f 2 c d d c e 7 7 f . . . . 
            . . . f f c c f 6 e e f . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . f 7 7 7 7 6 6 f f . . . 
            . . . f 7 7 7 7 7 7 6 6 f f . . 
            . . . f 6 6 6 6 7 7 7 6 6 f . . 
            . . f 6 4 f f 4 4 6 7 7 6 f . . 
            . . f 7 5 5 5 5 5 4 6 7 7 f . . 
            . . f 5 5 d d d 5 5 4 f 7 f f . 
            . . f 5 f d d f f 5 4 d 7 f f . 
            . . f f d d d d d d d d d d f . 
            . f b 8 f c d d d d d d d f . . 
            . f 8 5 f c c c 7 7 7 f . . . . 
            . f 2 8 c d d b e 7 7 f . . . . 
            . . f 2 c d d c 6 e e f f . . . 
            . . . f f c c f f f f f f . . . 
            . . . . f f f . . . f f . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . f 7 7 7 7 6 6 f f . . . 
            . . . f 7 7 7 7 7 7 6 6 f f . . 
            . . . f 6 6 6 6 7 7 7 6 6 f . . 
            . . f 6 4 f f 4 4 6 7 7 6 f . . 
            . . f 7 5 5 5 5 5 4 6 7 7 f . . 
            . . f 5 5 d d d 5 5 4 f 7 f f . 
            . . f 5 f d d f f 5 4 d 7 f f . 
            . . f f d d d d d d d d d d f . 
            . f b 8 f c d d d d d d d f . . 
            . f 8 5 f c c c 7 7 7 f . . . . 
            . f 2 8 c d d b e 7 7 f . . . . 
            . . f 2 c d d c 6 e e f f . . . 
            . . . f f c c f f f f f f . . . 
            . . . . f f f . . . f f . . . . 
            `],
        200,
        characterAnimations.rule(Predicate.MovingLeft)
        )
    }
    if (heartcontainer == 4) {
        game.setDialogTextColor(13)
        game.setDialogFrame(img`
            ..bbbbbbbbbbbbbbbbbbbb..
            .bd111111111111111111db.
            bd1dbbbbbbbbbbbbbbbbd1db
            b1dbbbbbbbbbbbbbbbbbbd1b
            b1bdffffffffffffffffdb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bffffffffffffffffffb1b
            b1bdffffffffffffffffdb1b
            bd1bbbbbbbbbbbbbbbbbb1db
            bbd111111111111111111dbb
            .bbbbbbbbbbbbbbbbbbbbbb.
            ..bbbbbbbbbbbbbbbbbbbb..
            `)
        game.showLongText("You got 1 Heart Container", DialogLayout.Bottom)
        heartcontainer = 0
        info.changeLifeBy(1)
    }
})
forever(function () {
    if (kokiri == true) {
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(440, music.beat(BeatFraction.Half))
        music.playTone(494, music.beat(BeatFraction.Whole))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(440, music.beat(BeatFraction.Half))
        music.playTone(494, music.beat(BeatFraction.Whole))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(440, music.beat(BeatFraction.Half))
        music.playTone(494, music.beat(BeatFraction.Half))
        music.playTone(659, music.beat(BeatFraction.Half))
        music.playTone(587, music.beat(BeatFraction.Double))
        music.playTone(494, music.beat(BeatFraction.Half))
        music.playTone(523, music.beat(BeatFraction.Half))
        music.playTone(494, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Breve))
        music.playTone(294, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Double))
    } else if (bossbattle == true) {
        music.playTone(330, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(370, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Half))
    } else {
        music.playTone(494, music.beat(BeatFraction.Double))
        music.playTone(587, music.beat(BeatFraction.Whole))
        music.playTone(440, music.beat(BeatFraction.Double))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(440, music.beat(BeatFraction.Half))
        music.playTone(494, music.beat(BeatFraction.Double))
        music.playTone(587, music.beat(BeatFraction.Whole))
        music.playTone(440, music.beat(BeatFraction.Breve))
        music.playTone(494, music.beat(BeatFraction.Double))
        music.playTone(587, music.beat(BeatFraction.Whole))
        music.playTone(880, music.beat(BeatFraction.Double))
        music.playTone(784, music.beat(BeatFraction.Whole))
        music.playTone(587, music.beat(BeatFraction.Double))
        music.playTone(523, music.beat(BeatFraction.Half))
        music.playTone(494, music.beat(BeatFraction.Half))
        music.playTone(440, music.beat(BeatFraction.Breve))
    }
})
