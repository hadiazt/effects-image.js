const jimp = require('jimp');

class Blur {
    constructor(data = {}) {
        this.res = null;
        this.file = data.file ?? null;
        this.image = data.image;
        this.level = data.level ?? 5;
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

    setLevel(number) {
        const value = parseInt(number);

        if (!value || value <= 0 || value > 6) {
            console.log('setLevel() input must be between 1 and 5\nBy default setLevel() is 5');
            return this;
        }

        this.level = number;
        return this;
    }

    async build() {
        this.res = await jimp.read(this.image);
        this.res.blur(Number(this.level));

        this.file ? await this.res.write(this.file) : null;

        return new Promise(async (resolve, reject) => {
            this.res.getBuffer('image/png', (error, buffer) => error ? reject(error) : resolve(buffer))
        });
    }
}

module.exports = Blur;