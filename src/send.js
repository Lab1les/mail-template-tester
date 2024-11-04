const nodemailer = require('nodemailer');
const fs = require('fs').promises;

const templateName = process.argv[2];

(async () => {
    const transporter = nodemailer.createTransport({
        host: 'localhost',
        port: 1025,
        ignoreTLS: true
    });

    const emailTemplate = await fs.readFile(`src/templates/${templateName || "test"}.html`, 'utf8');
    const data = await fs.readFile(`src/data/${templateName || "test"}.json`, 'utf8');

    const compileEmail = (template, data) => {
        for (let key in data) {
            template = template.replace("${" + key + "}", data[key])
        }
        return template;
    }

    const mailOptions = {
        from: 'test-sender@decathlon.com',
        to: 'test-reciver@example.com',
        subject: 'Test Email',
        html: compileEmail(emailTemplate, JSON.parse(data))
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Email sent: ' + info.response);
    });
})()
