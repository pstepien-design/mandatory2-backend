 import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config({path: './.env'});
const transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  },
});

const options = {
  from: process.env.EMAIL_USER,
  to: '',
  subject: 'Confirmation of the order',
  html: ""
}

export const sendEmail = async (email, total) => {
options.to = email;
options.html = `<p>Thank you for the order from our webshop! <br> Your order will be sent soon. <br> Your total order is <b> ${total} DKK<b></p>`
return new Promise((resolve)=>{
  transporter.sendMail(options, function(err){
  if(err){
    resolve(false);
  }
  else{
  resolve(true);
  }
})
})
}