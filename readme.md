
# Email Template Tester

This is a tool that lets you test your HTML email templates.

## How to Use It

First, install all dependencies:

```
npm install
```

Then, run the mail client and SMTP server (using Docker):

```
npm run smtp
```

You can access the mail client at http://localhost:1080/

To test the email template, run:

```
npm run send -- TEMPLATE_NAME
```

You will receive an email in your mail client app.

## Config
#### Create Template
- Follow the file structure: put all your email templates in ```src/templates``` in HTML format.
- The **TEMPLATE_NAME** argument does not require the file path or the file extension (.html) – just the template name.
- If no file name is provided, Nodemailer will use the default ```test.html``` template.

#### External Data
- To use external data, **create a .json file** in the ```src/data``` folder.
- The **.json file name must match the name of the template** you want to use with that data, so the application can locate the data using the file name passed as an argument.
- Use only first-level data in the .json file; avoid nested objects (perhaps in the future).
