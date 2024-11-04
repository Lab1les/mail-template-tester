const nodemailer = require('nodemailer');
const fs = require('fs').promises;

const templateName = process.argv[2];

(async () => {
    const transporter = nodemailer.createTransport({
        host: 'localhost',
        port: 1025,
        ignoreTLS: true
    });

    const emailTemplate = await fs.readFile(`src/templates/${templateName || "test" }.html`, 'utf8');

    const mailOptions = {
        from: 'test-sender@decathlon.com',
        to: 'test-reciver@example.com',
        subject: 'Test Email',
        html: emailTemplate
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Email sent: ' + info.response);
    });
})()
