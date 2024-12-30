import nodemailer from 'nodemailer';

async function sendMagicLink(email: string, magicLink: string): Promise<void> {
    // Create a transporter object using SMTP transport
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL_USER, // your email
            pass: process.env.EMAIL_PASS // your password
        }
    });

    // Email content
    const mailOptions = {
        from: '"Media Nexus" <medianexus@srmorg.com>',
        to: email,
        subject: 'Your Magic Link for Authentication',
        text: `Click on the following link to authenticate: ${magicLink}`,
        html: `<p>Click on the following link to authenticate: <a href="${magicLink}">${magicLink}</a></p>`
    };

    // Send email
    try {
        await transporter.sendMail(mailOptions);
        console.log('Magic link sent successfully');
    } catch (error) {
        console.error('Error sending magic link:', error);
    }
}

export { sendMagicLink };