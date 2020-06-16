const button = function() {
    console.log('button');
};

class Slider {
    constructor(width, height, count) {
        this.width = width;
        this.height = height;
        this.count = count;
    }
    nextSlide() {
        console.log('Next slide');
    }
    prevSlide() {
        console.log('Prev slide');
    }
    whoAmI() {
        console.log(this.width, this.height, this.count);
    }
}

const slider = new Slider(600, 400, 5),
    sliderTwo = new Slider(800, 800, 3);
// slider.whoAmI();
// sliderTwo.whoAmI();


class AutoSlider extends Slider {
    constructor(width, height, count, auto = true) {
        super(width, height, count);
        this.auto = auto;
    }
    play() {
        console.log(`autoplay is ${this.auto}`);
    }
}

const sliderThree = new AutoSlider(800, 900, 3);
// sliderThree.play();
// sliderThree.whoAmI();


export {button};
export default Slider;
// export {button as btn, Slider};