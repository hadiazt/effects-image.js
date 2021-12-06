const { Greyscale } = require('effects-image.js');

new Greyscale()
    .setImage('./img/avatar.jpg')
    .write('./img/greyscale.jpg')
    .build().then(console.log('Saved'))
