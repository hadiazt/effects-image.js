const { Rotate } = require('effects-image.js');

new Rotate()
    .setImage('./img/avatar.jpg')
    .setRotate(85) // from 1 to 360 | default : 90
    .write('./img/Rotate.jpg')
    .build().then(console.log('Saved'))