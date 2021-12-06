const { Blur } = require('effects-image.js');

new Blur()
    .setImage('./img/avatar.jpg')
    .setLevel(2) // from 1 to 5 | default : 5
    .write('./img/blur.jpg')
    .build().then(console.log('Saved'))

