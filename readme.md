# Email Template Tester

This is a tool that let you test your html email template

## how to use it

Frist install everything:

```
npm install
```

Then, you need to run the mail client and mail SMTP server (with Docker)
```
npm run smtp
```

You can access the mail client on http://localhost:1080/

To test the email template, run
```
npm run send -- TEMPLATE_NAME
```

You will recive and email on your mail client app

## Config info
- Respect the file folder, put all of your email template in ```src/templates``` in html format
- argument **TEMPLATE_NAME** do not need the file path or the file extension (.html) but just the template name
- If no file name is provided, it nodemailer will use the default ```test.html``` template
