const jimp = require('jimp');

class Fisheye {
    constructor(data = {}) {
        this.res = null;
        this.file = data.file ?? null;
        this.image = data.image;
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

    async build() {
        this.res = await jimp.read(this.image);
        this.res.fisheye();

        this.file ? await this.res.write(this.file) : null;

        return new Promise(async (resolve, reject) => {
            this.res.getBuffer('image/png', (error, buffer) => error ? reject(error) : resolve(buffer))
        });
    }
}

module.exports = Fisheye;