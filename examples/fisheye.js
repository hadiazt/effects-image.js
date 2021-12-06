const { Fisheye } = require('effects-image.js');

new Fisheye()
    .setImage('./img/avatar.jpg')
    .write('./img/greyscale.jpg')
    .build().then(console.log('Saved'))
