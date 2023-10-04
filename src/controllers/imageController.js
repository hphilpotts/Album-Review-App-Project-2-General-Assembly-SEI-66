const sharp = require('sharp');
const { S3Client, PutObjectCommand, DeleteObjectCommand } = require('@aws-sdk/client-s3');

const s3 = new S3Client({ region: process.env.AWS_REGION })

exports.resizeUploadedImage = async ( req, res, next) => {
    try {

        const { file } = req; // future Harry, FYI: same as const file = req.file
        if (!file) next(); // skip if no file

        if (file.mimetype !== 'image/jpeg' || 'image/png') {
            res.status.send(422);
            return
        }

        file.buffer = await sharp(file.buffer)
            .resize({ width: 300, height: 300 })
            .toBuffer();

        next();

    } catch (err) {
        console.error(err);
        res.status.send(400); 
    }
}

exports.storeInS3 = async (req, res, next) => {

    try {

        const { file } = req; // see above if confused
        if (!file) next();

        const key = Date.now().toString() + file.originalname

        const params = {
            Bucket: process.env.S3_BUCKET,
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

exports.deleteFromS3 = async (req, res, next) => {
    try {

        console.log(req.query);

        const key = req.query.key;

        console.log(key);

        const params = {
            Bucket: process.env.S3_BUCKET,
            Key: key
        }

        const command = new DeleteObjectCommand(params);

        await s3.send(command);

        console.log('delet');

        next();

    } catch (err) {
        console.error(err);
        res.send('Error deleting image from bucket.');
    }
}