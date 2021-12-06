const { Brightness } = require('effects-image.js');

new Brightness()
    .setImage('./img/avatar.jpg')
    .setBrightness(8) // from 1 to 6 | default : 6
    .write('./img/brightness.jpg')
    .build().then(console.log('Saved'))
