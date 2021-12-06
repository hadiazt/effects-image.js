const { Blur } = require('effects-image.js');
const { writeFile } = require('fs');

new Blur()
    .setImage('./img/avatar.jpg')
    .setLevel(5)
    .build().then(res => {
        writeFile('./img/blur.jpg', res, function (err) {
            if (err) throw err;
        })
    })

    