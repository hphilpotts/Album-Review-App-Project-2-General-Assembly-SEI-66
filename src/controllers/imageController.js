const sharp = require('sharp');
const { S3Client, PutObjectCommand, DeleteObjectCommand } = require('@aws-sdk/client-s3');

const s3 = new S3Client({ region: process.env.AWS_REGION })

exports.resizeUploadedImage = async (req, res, next) => {
    try {

        const { file } = req; // future Harry, FYI: same as const file = req.file
        if (!file) next(); // skip if no file

        // check if file is correct type
        if (['image/jpeg', 'image/png'].includes(file.mimetype) === false) {
            res.status(422).send('Incorrect file type uploaded, please try again with a .jpeg or .png image!');
            return
        }

        file.buffer = await sharp(file.buffer)
            .resize({ width: 300, height: 300 })
            .toBuffer();

        next();

    } catch (err) {
        console.error(err);
        res.status(400).send('Error resizing uploaded image. Please try again in a moment!');
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
        res.status(400).send('Error uploading image to S3 Bucket. Please try again in a moment!');
    }

}

exports.deleteFromS3 = async (req, res, next) => {
    try {

        const key = req.query.key;

        const params = {
            Bucket: process.env.S3_BUCKET,
            Key: key
        }

        const command = new DeleteObjectCommand(params);

        await s3.send(command);

        console.info('Image deleted from S3 Bucket successfully...');

        next();

    } catch (err) {
        console.error(err);
        res.status(400).send('Error deleting image from bucket.');
    }
}