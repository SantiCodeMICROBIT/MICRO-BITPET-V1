input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # # # .
            . . . . .
            `)
    }
    hunger += 1
    basic.showIcon(IconNames.Asleep)
})
input.onGesture(Gesture.ScreenDown, function () {
    basic.showLeds(`
        . . . . .
        . . # . #
        . . . . .
        . . # # #
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . # .
        . . . . .
        . . . # #
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . . .
        . . . . #
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . . .
        . . . . #
        . . . . .
        `)
    basic.clearScreen()
    basic.pause(2000)
    fun += -3
    basic.showIcon(IconNames.Asleep)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Happy)
    fun += 1
    basic.showIcon(IconNames.Asleep)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        . . . # .
        `)
    fun += 2
    basic.showIcon(IconNames.Asleep)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Angry)
    hunger += -1
    fun += -1
    basic.showIcon(IconNames.Asleep)
})
let fun = 0
let hunger = 10
basic.showIcon(IconNames.Asleep)
basic.forever(function () {
    basic.pause(1000)
    hunger += -0.1
    if (hunger == 0.1) {
        for (let index = 0; index < 1000; index++) {
            basic.showLeds(`
                # . # . #
                . # . # .
                # . # . #
                . # # # .
                . . . # .
                `)
            basic.pause(5000)
        }
    }
})
basic.forever(function () {
    basic.pause(1000)
    fun += -0.1
    if (fun == 0.1) {
        for (let index = 0; index < 1000; index++) {
            basic.showLeds(`
                # . # . #
                . # . # .
                # . # . #
                . # # # .
                . . . # .
                `)
            basic.pause(5000)
        }
    }
})
