let velocidad = 25
let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) <= 10) {
        maqueen.motorStop(maqueen.Motors.All)
        strip.showRainbow(1, 360)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        basic.pause(10)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        basic.pause(10)
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, velocidad)
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0) {
        maqueen.motorStop(maqueen.Motors.M1)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, velocidad)
        strip.showColor(neopixel.colors(NeoPixelColors.Orange))
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1) {
        maqueen.motorStop(maqueen.Motors.M2)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, velocidad)
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, velocidad)
        strip.showColor(neopixel.colors(NeoPixelColors.Violet))
    }
})
