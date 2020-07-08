const express = require("express");
const router = express.Router();
const mailer = require("nodemailer")

router.get('/', (req, res) => res.render('index'));
router.post('/kirim', (req, res) => {
  let transporter = mailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
      user: '', //email yang digunakan untuk mengirim
      pass: ''  //pass email yang untuk mengirim
    },
    tls: { rejectUnauthorized: false }
  });
  let mailOptions = {
    from: '',  //email yang digunakan untuk mengirim
    to: "", //email yang menerima pesan  
    subject: req.body.subject, 
    text: req.body.text
  };
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) throw err;
    res.render('layanan');
  });
});

module.exports = router;
