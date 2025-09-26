import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import { body, validationResult } from 'express-validator';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../dist')));
}

// Email configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER || 'your-email@gmail.com',
        pass: process.env.EMAIL_PASS || 'your-app-password'
    }
});

// Contact form validation rules
const contactValidation = [
    body('name').trim().isLength({ min: 2 }).withMessage('Name must be at least 2 characters long'),
    body('email').isEmail().withMessage('Please enter a valid email address'),
    body('subject').trim().isLength({ min: 5 }).withMessage('Subject must be at least 5 characters long'),
    body('message').trim().isLength({ min: 10 }).withMessage('Message must be at least 10 characters long')
];

// API Routes
app.get('/api/health', (req, res) => {
    res.json({ status: 'Server is running!' });
});

app.post('/api/contact', contactValidation, async (req, res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                message: 'Validation failed',
                errors: errors.array()
            });
        }

        const { name, email, subject, message } = req.body;

        const mailOptions = {
            from: email,
            to: process.env.EMAIL_USER || 'your-email@gmail.com',
            subject: `Portfolio Contact: ${subject}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 10px;">
            New Portfolio Contact
          </h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong style="color: #2c3e50;">Name:</strong> ${name}</p>
            <p><strong style="color: #2c3e50;">Email:</strong> ${email}</p>
            <p><strong style="color: #2c3e50;">Subject:</strong> ${subject}</p>
          </div>
          <div style="background: white; padding: 20px; border-left: 4px solid #3498db;">
            <p><strong style="color: #2c3e50;">Message:</strong></p>
            <p style="line-height: 1.6; color: #555;">${message.replace(/\n/g, '<br>')}</p>
          </div>
        </div>
      `
        };

        // Send the main email to you
        await transporter.sendMail(mailOptions);

        // Send auto-reply to the person who contacted you
        const autoReplyOptions = {
            from: process.env.EMAIL_USER || 'your-email@gmail.com',
            to: email,
            subject: 'Thank you for contacting me!',
            html: `
                <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: #f8f9fa; padding: 20px;">
                    <div style="background: #1e2028; color: #ffffff; padding: 30px; border-radius: 8px; text-align: center;">
                        <h1 style="color: #c778dd; margin-bottom: 20px; font-family: 'Courier New', monospace;">$ Jaimin</h1>
                        <h2 style="color: #ffffff; margin-bottom: 20px;">Thank you for reaching out!</h2>
                        
                        <div style="background: #282c34; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: left; border-left: 4px solid #c778dd;">
                            <p style="color: #abb2bf; margin-bottom: 15px;">Hi <strong style="color: #ffffff;">${name}</strong>,</p>
                            <p style="color: #abb2bf; line-height: 1.6; margin-bottom: 15px;">
                                Thank you for contacting me through my portfolio website. I have received your message regarding "<strong style="color: #ffffff;">${subject}</strong>" and I appreciate you taking the time to reach out.
                            </p>
                            <p style="color: #abb2bf; line-height: 1.6; margin-bottom: 15px;">
                                I will review your message and get back to you as soon as possible, typically within 24-48 hours.
                            </p>
                            <p style="color: #abb2bf; line-height: 1.6; margin-bottom: 0;">
                                Best regards,<br>
                                <strong style="color: #c778dd;">Jaimin</strong><br>
                                <span style="color: #666;">Web Designer & Front-end Developer</span>
                            </p>
                        </div>
                        
                        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #3e4451;">
                            <p style="color: #abb2bf; font-size: 14px; margin: 0;">
                                This is an automated response. Please do not reply to this email.
                            </p>
                        </div>
                    </div>
                </div>
            `
        };

        // Send the auto-reply
        await transporter.sendMail(autoReplyOptions);

        res.json({
            success: true,
            message: 'Thank you! Your message has been sent successfully. You should receive a confirmation email shortly.'
        });
    } catch (error) {
        console.error('Email sending error:', error);
        res.status(500).json({
            success: false,
            message: 'Sorry, there was an error sending your message. Please try again later.'
        });
    }
});

// Serve React app in production
if (process.env.NODE_ENV === 'production') {
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../dist/index.html'));
    });
}

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});