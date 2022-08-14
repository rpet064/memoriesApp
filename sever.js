const express=require('express');
var AWS = require("aws-sdk");
require('dotenv').config()

let s3 = new AWS.S3();
const app=express();

// Our default route
app.get('/',(req,res)=>{
	AWS.config.update({
			accessKeyId: process.env.IAM_USER_KEY,
			secretAccessKey: process.env.IAM_USER_SECRET
		  });
	let s3 = new AWS.S3();
	async function getImage(){
			const data =  s3.getObject(
			  {
				  Bucket: process.env.BUCKET,
				  Key: '1.jpg'
				}
			).promise();
			return data;
		  }
	getImage()
		  .then((img)=>{
			  let image="<img src='data:image/jpeg;base64," + encode(img.Body) + "'" + "/>";
			  let startHTML="<html><body></body>";
			  let endHTML="</body></html>";
			  let html=startHTML + image + endHTML;
			res.send(html)
		  }).catch((e)=>{
			res.send(e)
		  })
	function encode(data){
			  let buf = Buffer.from(data);
			  let base64 = buf.toString('base64');
			  return base64
		  }
	})
  
  app.listen(process.env.PORT,()=>{
    console.log(`Server running on port ${process.env.PORT}`);
});
