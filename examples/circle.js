const { Circle } = require('../methods');

new Circle()
    .setImage('./img/avatar.jpg')
    .write('./img/greyscale.jpg')
    .build().then(console.log('Saved'))
