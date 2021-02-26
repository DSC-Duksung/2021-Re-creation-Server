const express = require('express');
const Multer = require('multer');
const bodyParser = require('body-parser');
const { Storage } = require('@google-cloud/storage');
const dotenv = require('dotenv');
dotenv.config();
const { Image } = require('../models');

const storage = new Storage();
const app = express();
const router = express.Router();
app.set('view engine', 'pug');
app.use(bodyParser.json());
 
const multer = Multer({
    storage: Multer.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024, // 5MB
    },
});
 
const bucket = storage.bucket(process.env.GOOGLE_CLOUD_STORAGE_BUCKET);

router.get('/', (req, res) => {
    res.render('form.pug');
});

router.post('/upload', multer.single('file'), async (req, res, next) => { // TODO: isLoggedIn
    if (!req.file) {
        res.status(400).send('No file uploaded.');
        return;
    }
  
    // TODO: 파일 이름 형식 변경
    const blob = bucket.file(req.file.originalname);
    const blobStream = blob.createWriteStream();
 
    blobStream.on('error', (err) => {
        next(err);
    });
 
    const publicUrl = 'https://storage.googleapis.com/'
    blobStream.on('finish', () => {  
        publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
        // res.status(200).send(publicUrl);
        console.log(publicUrl)
    });
 
    blobStream.end(req.file.buffer);

    try {
        const image = await Image.create({
            img: publicUrl,
            UserId: 2, // TODO: req.user.id
            CategoryId: 1, // TODO: req.body.category
        });
    } catch (error) {
        console.error(error);
        next(error);
    }
});

module.exports = router;