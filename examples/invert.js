const { Invert } = require('../methods');

new Invert()
    .setImage('./img/avatar.jpg')
    .write('./img/Invert.jpg')
    .build().then(console.log('Saved'))