import random


font("Adelphe-FructidorRegular")
fontSize(50)
words = ["Glyphs","Export","Coffee","Anchor point","Handle","Font Info","Instance","Compatible","Shape shifter","Weight","Metrics","Tangent Point","Corner Point","Variable Font","woff2","Component","Overlap","Axis","FontGauntlet","Interpolation","Slider","ttf","Path direction","Extremes","Angled handles"]

counter = 0

x, y, w, h = 0, 1, 100, 100


for i in range(20):
    newPage(500, 500)
    y = 0
    counter = 0
    random.shuffle(words)
    font("Adelphe-FructidorRegular")
    fontSize(10)
    for j in range(5):
        for k in range(5):
            fill(1)
            stroke(0)
            strokeWidth(1)
            rect(x, y, w, h)
            strokeWidth(0)
            fill(0)
            textBox(words[counter],(x, y-48, w, h), align="center")
            x = x+100
            counter = counter+1
        y = y+100
        x = 0

saveImage("~/Desktop/Bingo.pdf")