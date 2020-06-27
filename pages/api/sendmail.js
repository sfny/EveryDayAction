const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default (req, res) => {


    const msg = {
    to: 'sunrisefade@gmail.com',
    from: 'jh@jacobhartog.com',
    subject: 'Sending with Twilio SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };
    console.log("Sending Mail")
    sgMail.send(msg);
    res.status(200).json({ name: 'Next.js' })

}