const { Normalize } = require('effects-image.js');

new Normalize()
    .setImage('./img/avatar.jpg')
    .write('./img/Normalize.jpg')
    .build().then(console.log('Saved'))
