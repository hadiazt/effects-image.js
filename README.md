# effects-image.js

### 🎨 A nice and easy to use module to add effects to your images 

</br>

### ⚡️ Available filters

|blur|brightness|circle|fhisheye|flip|
|:-------------: |:-------------:|:-------------:|:-------------:|:-------------:
|greyscale|invert|normalize|rotate



### See [examples](https://github.com/hadiazt/effect-image.js/tree/main/examples) for more help

</br>

### Add a blur filter to an image ? It's possible and easy !

```js
const { Blur } = require('effects-image.js');

new Blur()
    .setImage('./img.png')
    .setLevel(5)
    .write('./new.png')
    .build().then(console.log('Saved'))

new Blur({
    image: './img.png',
    level: 5,
    file: './new.png'
}).build().then(console.log('Saved'))
```

Simple Discord example (discord.js v13)

```js
const { Blur } = require('effects-image.js');
const { Client, Intents } = require('discord.js');

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.on('messageCreate', (message) => {
    if (message.author.bot) return;

    new Blur()
        .setImage('./img.png')
        .setLevel(5)
        .build().then(res => {
            message.channel.send({
                content: 'Hello world', files: [
                    { attachment: res }
                ]
            })
        })
});

client.login('');
```

</br>

This is an fork of [ZerioDev](https://github.com/ZerioDev/Effects.js) source.
