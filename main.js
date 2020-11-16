let coin = {
    state: 0,
    flip: function() {
        coin.state = Math.floor(Math.random() * 2)
        return this.state
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
    },
    toString: function() {
         
         if (this.state === 0) {
             return "Head"

         }
         else {
             return "Tail"
         }
           
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
    },
    toHTML: function() {
        let image = document.createElement('img');
        if (this.state === 0) {
            image.src = './images/head.jpg'

        }
        else {
            image.src = './images/tail.png'
        } 
           
        /* 3. Set the properties of this image element to show either face-up
    or face-down, depending on whether this.state is 0 or 1.*/
    return image
}
};
 console.log(coin.flip())
 console.log(coin.toString())
 console.log(coin.toHTML())
 let images = document.createElement('div');
 images.append(coin.toHTML());
 document.body.append(images);
function display20flips(newcoin) {
    for (let c = 1; c <= 20; c++) {
        console.log(c + " " + newcoin.toString())
        //document.writeIn(newcoin.toString())
    }
}
display20flips(coin)
function display20images(displayImg) {
    for (let g = 1; g <= 20; g++) {
        displayImg.toHTML()
    }
}
display20images(coin)
