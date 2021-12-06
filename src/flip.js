const jimp = require('jimp');

class Flip {
    constructor(data = {}) {
        this.res = null;
        this.file = data.file ?? null;
        this.image = data.image;
        this.x = data.x ?? true;
        this.y = data.y ?? false;
    }

    write(file) {
        this.file = file;
        return this;
    }

    setImage(img) {
        if (!img) throw new Error('You must provide an picture in the setImage() section');

        this.image = img;
        return this;
    }

    setFlipOption(x, y) {
        const valueX = Boolean(x);
        const valueY = Boolean(y);

        if (!valueX || !valueY) {
            console.log('setFlipOption() inputs must be like this\nsetFlipOption(true, true)\nsetFlipOption(false, false)\nsetFlipOption(true, false)\nsetFlipOption(false, true)\nBy default is setFlipOption(true, false) ');
            return this;
        }

        this.x = x;
        this.y = y;
        return this;
    }

    async build() {
        this.res = await jimp.read(this.image);

        this.res.flip(Boolean(this.x), Boolean(this.y));

        this.file ? await this.res.write(this.file) : null;

        return new Promise(async (resolve, reject) => {
            this.res.getBuffer('image/png', (error, buffer) => error ? reject(error) : resolve(buffer))
        });
    }
}

module.exports = Flip;