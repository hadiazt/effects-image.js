const { Flip } = require('effects-image.js');

new Flip()
    .setImage('./img/avatar.jpg')
    .write('./img/Flip.jpg')
    .build().then(console.log('Saved'))
