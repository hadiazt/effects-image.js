const jimp = require('jimp');

class Rotate {
    constructor(data = {}) {
        this.res = null;
        this.file = data.file ?? null;
        this.image = data.image;
        this.rotate = data.rotate ?? 90;
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

    setRotate(number) {
        const value = parseInt(number);


        
        if (!value || value <= 0 || value > 360) {
            console.log('setRotate() input must be between 1 and 360\nBy default setRotate() is 90');
            return this;
        }

        this.rotate = number;
        return this;
    }

    async build() {
        this.res = await jimp.read(this.image);
        this.res.rotate(Number(this.rotate));

        this.file ? await this.res.write(this.file) : null;

        return new Promise(async (resolve, reject) => {
            this.res.getBuffer('image/png', (error, buffer) => error ? reject(error) : resolve(buffer))
        });
    }
}

module.exports = Rotate;