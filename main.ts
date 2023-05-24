let Samuel = 0
/**
 * G-P0
 * 
 * VCC-P0
 * 
 * ECHO-P2
 * 
 * TRIG-P1
 */
/**
 * Miguel Lázaro Moguilnaia 2º ESO A
 */
basic.forever(function () {
    basic.showNumber(Samuel)
    if (Samuel <= 0) {
        music.setVolume(0)
    }
    Samuel = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    if (Samuel < 5) {
        music.ringTone(262)
        basic.showString("")
    } else if (Samuel < 10) {
        music.ringTone(294)
        basic.showString("")
    } else if (Samuel < 15) {
        music.ringTone(330)
        basic.showString("")
    } else if (Samuel < 20) {
        music.ringTone(349)
        basic.showString("")
    } else if (Samuel < 25) {
        music.ringTone(392)
        basic.showString("")
    } else if (Samuel < 30) {
        music.ringTone(440)
        basic.showString("")
    } else if (Samuel < 35) {
        music.ringTone(494)
        basic.showString("")
    } else if (Samuel < 40) {
        music.ringTone(523)
        basic.showString("")
    }
})
