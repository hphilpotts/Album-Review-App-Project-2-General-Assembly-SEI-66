const sharp = require('sharp');
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');

const s3 = new S3Client({ region: process.env.AWS_REGION })

exports.resizeUploadedImage = async (req, res, next) => {
    try {

        const { file } = req; // future Harry, FYI: same as const file = req.file
        if (!file) next(); // skip if no file

        file.buffer = await sharp(file.buffer)
            .resize({ width: 300, height: 300 })
            .grayscale() // TODO remove before deployment
            .toBuffer();

        next();

    } catch (err) {
        console.error(err);
        res.status.send(400);
    }
}

exports.storeInS3 = async (req, res) => {

    try {

        const { file } = req; // future Harry, FYI: same as const file = req.file
        if (!file) next(); // skip if no file

        const key = Date.now().toString() + file.originalname

        const params = {
            Bucket: process.env.S3_Bucket,
            Body: req.file.buffer,
            Key: key
        }

        const command = new PutObjectCommand(params);
        await s3.send(command);

        req.body.key = key;

        next();

    } catch (err) {
        console.error(err);
        res.send('WHY DAMMIT WHY');
    }

}