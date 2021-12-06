const { Flip } = require('effects-image.js');

new Flip()
    .setImage('./img/avatar.jpg')
    .setFlipOption(true, true) 
    // first is X rotation, second is Y rotation | default : true , false
    .write('./img/Flip.jpg')
    .build().then(console.log('Saved'))
