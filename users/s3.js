require("dotenv").config();
const multer = require("multer");
const AWS = require("aws-sdk");
const fs = require("fs");

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ID,
  secretAccessKey: process.env.AWS_SECRET,
});

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

fs.readFile("MyDocument.docx", (err, data) => {
  if (err) throw err;
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME, // pass your bucket name
    Key: "MyDocument.docx", //
    Body: data,
  };
  s3.upload(params, (s3Err, data) => {
    if (s3Err) throw s3Err;
    console.log(`File uploaded successfully at ${data.Location}`);
  });
});
