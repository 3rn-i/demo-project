let showLettersA = false
let showLettersB = false
function show_startup_pattern() {
    led.plot(1, 0)
    led.plot(2, 0)
    led.plot(3, 0)
    led.plot(0, 1)
    led.plot(1, 1)
    led.plot(4, 1)
    led.plot(3, 1)
    led.plot(0, 2)
    led.plot(2, 2)
    led.plot(4, 2)
    led.plot(0, 3)
    led.plot(1, 3)
    led.plot(3, 3)
    led.plot(4, 3)
    led.plot(0, 4)
    led.plot(2, 4)
    led.plot(4, 4)
    basic.pause(1000)
}

show_startup_pattern()
//  Display the startup pattern after pausing or toggling A
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    showLettersA = !showLettersA
    if (!showLettersA) {
        basic.clearScreen()
    }
    
    show_startup_pattern()
})
//  Display the startup pattern after pausing or toggling B
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    showLettersB = !showLettersB
    if (!showLettersB) {
        basic.clearScreen()
    }
    
    show_startup_pattern()
})
//  Display the startup pattern after finishing A loop
basic.forever(function on_forever() {
    
    if (showLettersA) {
        basic.showString("E")
        basic.pause(200)
        if (!showLettersA) {
            return
        }
        
        basic.showString("R")
        basic.pause(200)
        if (!showLettersA) {
            return
        }
        
        basic.showString("N")
        basic.pause(200)
        if (!showLettersA) {
            return
        }
        
        basic.showString("I")
        basic.pause(200)
        showLettersA = false
        show_startup_pattern()
    }
    
})
//  Display the startup pattern after finishing B loop
basic.forever(function on_forever2() {
    
    if (showLettersB) {
        basic.showString("W")
        basic.pause(200)
        if (!showLettersB) {
            return
        }
        
        basic.showString("E")
        basic.pause(200)
        if (!showLettersB) {
            return
        }
        
        basic.showString("L")
        basic.pause(200)
        if (!showLettersB) {
            return
        }
        
        basic.showString("C")
        basic.pause(200)
        basic.showString("O")
        basic.pause(200)
        if (!showLettersB) {
            return
        }
        
        basic.showString("M")
        basic.pause(200)
        if (!showLettersB) {
            return
        }
        
        basic.showString("E")
        basic.pause(200)
        if (!showLettersB) {
            return
        }
        
        showLettersB = false
        show_startup_pattern()
    }
    
})
