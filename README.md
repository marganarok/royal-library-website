# Royal Library Website - Stripe Payment Integration

A Renaissance-themed digital library featuring the Sacred Digital Ministry Bible and various research portals, now with integrated Stripe payment processing.

## Features

- **Renaissance-themed design** with golden accents and flaming sword cursors
- **Complete book showcase** with the Sacred Digital Ministry Bible
- **Multiple payment options** for the $27 Alchemist Pack:
  - Direct contact
  - Cryptocurrency
  - **NEW: Stripe credit card payments**
- **Secure payment processing** with Stripe Elements
- **Payment success confirmation** page
- **Responsive design** for all devices

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Stripe

1. **Create a Stripe Account**
   - Go to [stripe.com](https://stripe.com) and create an account
   - Complete the onboarding process

2. **Get API Keys**
   - In your Stripe dashboard, go to "Developers" > "API keys"
   - Copy your "Publishable key" and "Secret key"

3. **Configure Environment Variables**
   - Open the `.env` file in the project root
   - Replace the placeholder values with your actual Stripe keys:

```env
STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
STRIPE_SECRET_KEY=sk_test_your_secret_key_here
```

### 3. Start the Server

```bash
node server.js
```

The server will start on port 3000. You can access the website at `http://localhost:3000`

### 4. Test the Payment Flow

1. Navigate to the main page (`index.html`)
2. Click on "Get the Alchemist Pack - $27"
3. On the product page, click "Pay with Card"
4. Use Stripe's test card numbers for testing:
   - **Success**: `4242 4242 4242 4242`
   - **Decline**: `4000 0000 0000 0002`
   - Use any future expiry date and any CVC

## Project Structure

```
Royal_Library_Website/
├── server.js              # Express server with Stripe integration
├── package.json           # Dependencies and scripts
├── .env                   # Environment variables (Stripe keys)
├── public/                # Static files
│   ├── index.html         # Main landing page
│   ├── alchemist_pack_product_page.html  # Product page with Stripe
│   ├── payment-success.html              # Success confirmation
│   ├── style.css          # Renaissance-themed styles
│   └── ... (other research portals)
└── node_modules/          # Dependencies
```

## Payment Flow

1. **Product Selection**: User clicks "Get the Alchemist Pack" on main page
2. **Payment Options**: User can choose from direct contact, crypto, or card payment
3. **Stripe Processing**: Secure payment processing with Stripe Elements
4. **Success Confirmation**: User redirected to success page with confirmation details

## Security Features

- **PCI Compliant**: Stripe handles all sensitive payment data
- **Environment Variables**: API keys stored securely
- **CORS Protection**: Cross-origin request safeguards
- **Webhook Support**: Ready for production webhook integration

## Deployment

### Local Development

```bash
npm start
```

### Production Deployment

1. Set environment variables in your hosting platform
2. Ensure HTTPS is enabled (required for Stripe)
3. Configure webhooks in Stripe dashboard for production events

## Troubleshooting

### Common Issues

1. **"Invalid API Key" Error**
   - Check that your Stripe keys are correctly set in `.env`
   - Ensure you're using test keys for development

2. **Payment Form Not Loading**
   - Verify Stripe.js is properly loaded
   - Check browser console for JavaScript errors

3. **Server Not Starting**
   - Ensure port 3000 is available
   - Check that all dependencies are installed

### Debug Mode

Add this to your `.env` file for additional logging:

```env
DEBUG=true
```

## Support

For issues with:

- **Stripe Integration**: Check Stripe's documentation at [stripe.com/docs](https://stripe.com/docs)
- **Website Functionality**: Review the code in `server.js` and HTML files
- **Styling Issues**: Check `style.css` for Renaissance theme customizations

## License

This project is part of the Royal Library digital collection.
