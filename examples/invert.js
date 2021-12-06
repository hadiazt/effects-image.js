const { Invert } = require('effects-image.js');

new Invert()
    .setImage('./img/avatar.jpg')
    .write('./img/Invert.jpg')
    .build().then(console.log('Saved'))