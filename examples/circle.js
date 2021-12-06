const { Circle } = require('effects-image.js');

new Circle()
    .setImage('./img/avatar.jpg')
    .write('./img/greyscale.jpg')
    .build().then(console.log('Saved'))
