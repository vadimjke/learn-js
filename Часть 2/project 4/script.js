'use strict';


// Класс блока
class Block {
    constructor(height = 300, width = 300, bg = 'grey', fontSize = '5em', 
                textAlign = 'center', text = 'test') {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
        this.text = text;
    }
    // Метод создания блока
    makeDiv() {
        let newDiv = document.createElement("div");
        newDiv.innerHTML = this.text;
        newDiv.style.cssText = `height: ${this.height}px; font-size: ${this.fontSize}; 
                                background-color: ${this.bg}; width: ${this.width}px;
                                text-align: ${this.textAlign}`;
        // console.log(newDiv);
        return newDiv;
    }
}

// Объявление блоков \ присвоение классов
const newBlock = new Block();
const newBlockRed = new Block(200, 200, 'red', '2em', 'right', 'test2');

// Вызов метода создания блока в объекте с присвоенным классом
document.body.append(newBlock.makeDiv());
document.body.append(newBlockRed.makeDiv());