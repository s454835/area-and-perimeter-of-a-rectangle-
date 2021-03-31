game.splash("Today we will calculate the area of a rectangle!")
let legnth = game.askForNumber("Enter the length in cm:")
let width = game.askForNumber("Enter the width in cm:")
let area = legnth * width
game.splash("The area of a rectangle with length " + legnth + "cm and width" + width + "is" + area + "cm squared.")
let perimeter = legnth * 2 + width * 2
game.splash("The perimeter of a rectangle with length " + legnth + "cm and width" + width + "is" + perimeter + "cm.")
