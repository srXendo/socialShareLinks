
class temporal{
    #algoritm='aes-256-gcm';
    #secret_pass = process.env.secret_pass;
    #secret_pass_ed = process.env.secret_pass_ed;
    #crypto = require('crypto');
    constructor(){}
    encrypt(data, pass){
        return this.#crypto.createHmac("sha256", pass)
            .update(data)
            .digest("hex");
    }
    encoding(t, m) {
        return this.encoding_private(t, m)
    }
    encoding_private(text, masterkey = this.#secret_pass_ed){
        try {
            // random initialization vector
            const iv = this.#crypto.randomBytes(16);

            // random salt
            const salt = this.#crypto.randomBytes(64);

            // derive key: 32 byte key length - in assumption the masterkey is a cryptographic and NOT a password there is no need for
            // a large number of iterations. It may can replaced by HKDF
            const key = this.#crypto.pbkdf2Sync(masterkey, salt, 2145, 32, 'sha512');

            // AES 256 GCM Mode
            const cipher = this.#crypto.createCipheriv(this.#algoritm, key, iv);

            // encrypt the given text
            const encrypted = Buffer.concat([cipher.update(text, 'utf8'), cipher.final()]);

            // extract the auth tag
            const tag = cipher.getAuthTag();

            // generate output
            return Buffer.concat([salt, iv, tag, encrypted]).toString('base64');

        }catch(e){
        }

        // error
        return null;
    }

    /**
     * Decrypts text by given key
     * @returns String decrypted (original) text
     * @param data
     * @param masterkey
     */
    decoding(d,m){
        return this.decoding_private(d,m)
    }
    decoding_private(data, masterkey = this.#secret_pass_ed){
        try {
            // base64 decoding
            let bData = Buffer.from(data, 'base64');
            // convert data to buffers
            let salt = bData.slice(0, 64);
            let iv = bData.slice(64, 80);
            let tag = bData.slice(80, 96);
            let text = bData.slice(96);

            // derive key using; 32 byte key length
            let key = this.#crypto.pbkdf2Sync(masterkey, salt , 2145, 32, 'sha512');

            // AES 256 GCM Mode
            let decipher = this.#crypto.createDecipheriv(this.#algoritm, key, iv);
            decipher.setAuthTag(tag);
            return  decipher.update(text, 'binary', 'utf8') + decipher.final('utf8');

        }catch(e){
            console.error(e)
            return false;
        }

    }
    md5(t){
        return this.#crypto.createHash('md5').update(t).digest("hex");
    }
}

module.exports = new temporal();