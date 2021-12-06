const { Normalize } = require('../methods');

new Normalize()
    .setImage('./img/avatar.jpg')
    .write('./img/Normalize.jpg')
    .build().then(console.log('Saved'))
