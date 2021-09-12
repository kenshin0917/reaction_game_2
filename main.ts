function P1_Touched () {
    if (running2) {
        running2 = false
        end2 = input.runningTime()
        basic.showLeds(`
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            `)
        basic.pause(100)
        basic.showNumber(end2 - start2)
    } else {
        false_start2 = true
        basic.showLeds(`
            . . . . .
            # . # . .
            . # . . .
            # . # . .
            . . . . .
            `)
    }
}
function P0＿Touched () {
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.clearScreen()
    running2 = false
    false_start2 = false
    basic.pause(1000 + randint(0, 1999))
    if (!(false_start2)) {
        start2 = input.runningTime()
        running2 = true
        led.stopAnimation()
        basic.clearScreen()
        led.plot(randint(0, 4), randint(0, 4))
    }
}
let start2 = 0
let end2 = 0
let false_start2 = false
let running2 = false
running2 = false
false_start2 = false
end2 = 0
start2 = 0
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) > 350) {
        P0＿Touched()
    }
})
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P1) > 350) {
        P1_Touched()
    }
})
