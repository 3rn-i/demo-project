showLettersA = False
showLettersB = False

def show_startup_pattern():
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

show_startup_pattern()

def on_button_pressed_a():
    global showLettersA
    showLettersA = not showLettersA
    if not showLettersA:
        basic.clear_screen()
    show_startup_pattern()  # Display the startup pattern after pausing or toggling A

input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global showLettersB
    showLettersB = not showLettersB
    if not showLettersB:
        basic.clear_screen()
    show_startup_pattern()  # Display the startup pattern after pausing or toggling B

input.on_button_pressed(Button.B, on_button_pressed_b)

def on_forever():
    global showLettersA
    if showLettersA:
        basic.show_string("E")
        basic.pause(200)
        if not showLettersA:
            return
        basic.show_string("R")
        basic.pause(200)
        if not showLettersA:
            return
        basic.show_string("N")
        basic.pause(200)
        if not showLettersA:
            return
        basic.show_string("I")
        basic.pause(200)
        showLettersA = False
        show_startup_pattern()  # Display the startup pattern after finishing A loop

basic.forever(on_forever)

def on_forever2():
    global showLettersB
    if showLettersB:
        basic.show_string("W")
        basic.pause(200)
        if not showLettersB:
            return
        basic.show_string("E")
        basic.pause(200)
        if not showLettersB:
            return
        basic.show_string("L")
        basic.pause(200)
        if not showLettersB:
            return
        basic.show_string("C")
        basic.pause(200)
        basic.show_string("O")
        basic.pause(200)
        if not showLettersB:
            return
        basic.show_string("M")
        basic.pause(200)
        if not showLettersB:
            return
        basic.show_string("E")
        basic.pause(200)
        if not showLettersB:
            return
        showLettersB = False
        show_startup_pattern()  # Display the startup pattern after finishing B loop

basic.forever(on_forever2)
