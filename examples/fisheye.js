const { Fisheye } = require('../methods');

new Fisheye()
    .setImage('./img/avatar.jpg')
    .write('./img/greyscale.jpg')
    .build().then(console.log('Saved'))
