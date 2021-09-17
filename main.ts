radio.onReceivedNumber(function (receivedNumber) {
	
})
input.onButtonPressed(Button.A, function () {
    Pause = 1
    basic.showNumber(radio.receivedPacket(RadioPacketProperty.SignalStrength) + 100)
    Pause = 0
})
let Pause = 0
radio.setGroup(1)
basic.showIcon(IconNames.Giraffe)
basic.forever(function () {
    while (Pause == 0) {
        led.plotBarGraph(
        radio.receivedPacket(RadioPacketProperty.SignalStrength) + 100,
        60
        )
    }
})
