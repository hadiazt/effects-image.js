const { Greyscale } = require('../methods');

new Greyscale()
    .setImage('./img/avatar.jpg')
    .write('./img/greyscale.jpg')
    .build().then(console.log('Saved'))
