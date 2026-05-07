let roll = 0;
let d = 0;
radio.setGroup(67);
d = 20;

input.onButtonPressed(Button.A, function () {
    if (d == 20) {
        roll = Math.round(Math.random() * 19) + 1
        radio.sendString(">" + roll + "/20")
        if (roll == 20) {
            radio.sendNumber(2000);
        }
        basic.showString("" + roll + "/20")
    } else if (d == 12) {
        roll = Math.round(Math.random() * 11) + 1
        radio.sendString(">" + roll + "/12");
        basic.showString("" + roll + "/12");
    } else if (d == 10) {
        roll = Math.round(Math.random() * 9) + 1
        radio.sendString(">" + roll + "/10");
        basic.showString("" + roll + "/10");
    } else if (d == 8) {
        roll = Math.round(Math.random() * 7) + 1
        radio.sendString(">" + roll + "/8");
        basic.showString("" + roll + "/8");
    } else if (d == 6) {
        roll = Math.round(Math.random() * 5) + 1
        radio.sendString(">" + roll + "/6");
        basic.showString("" + roll + "/6");
    } else if (d == 4) {
        roll = Math.round(Math.random() * 3) + 1
        radio.sendString(">" + roll + "/4");
        basic.showString("" + roll + "/4");
    } else if (d == 100) {
        roll = Math.round(Math.random() * 99) + 1
        radio.sendString("" + roll + "/100");
        basic.showString("" + roll + "/100");
    }
})

input.onButtonPressed(Button.AB, function () {
    radio.sendString("Chevilk");
    basic.showNumber(d);
})

input.onButtonPressed(Button.B, function () {
    if (d == 20) {
        d = 12;
        basic.showNumber(d);
    } else if (d == 12) {
        d = 10;
        basic.showNumber(d);
    } else if (d == 10) {
        d = 8;
        basic.showNumber(d);
    } else if (d == 8) {
        d = 6;
        basic.showNumber(d);
    } else if (d == 6) {
        d = 4;
        basic.showNumber(d);
    } else if (d == 4) {
        d = 100;
        basic.showNumber(d);
    } else if (d == 100) {
        d = 20;
        basic.showNumber(d);
    }
})

radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString);
})

radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 2000) {
        music.play(music.stringPlayable("C E G E G B - - ", 400), music.PlaybackMode.UntilDone);
    } else {
        basic.showNumber(receivedNumber);
    }
})