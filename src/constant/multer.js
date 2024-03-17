const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../public/uploads/'));
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

module.exports.uploadSingleFile = multer({ storage: storage });
module.exports.uploadMultipleFile = multer({ storage: storage }).array('files', 5);

