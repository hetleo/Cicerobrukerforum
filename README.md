# Conference Website

A simple, responsive conference website built with Express.js, EJS templates, and vanilla JavaScript.

![Conference Website](https://via.placeholder.com/800x400?text=Conference+Website)

## Features

- Responsive design that works on all devices
- Information pages (Home, About, Speakers, Schedule, Contact)
- Dynamic content rendering with EJS templates
- Interactive schedule with tabbed navigation
- Contact form with validation
- Mobile-friendly navigation

## Table of Contents

- [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Customization](#customization)
- [Deployment](#deployment)
- [Technologies](#technologies)
- [License](#license)

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/conference-website.git
   cd conference-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Visit `http://localhost:3000` in your browser to see the website.

## Project Structure

```
conference-website/
├── public/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── images/
├── views/
│   ├── partials/
│   │   ├── header.ejs
│   │   └── footer.ejs
│   ├── index.ejs
│   ├── about.ejs
│   ├── speakers.ejs
│   ├── schedule.ejs
│   └── contact.ejs
├── app.js
├── package.json
└── README.md
```

## Usage

### Running in Development Mode

```bash
npm run dev
```

This starts the server with nodemon, which automatically restarts when you make changes to your files.

### Running in Production Mode

```bash
npm start
```

## Customization

### Conference Information

To customize the conference information, modify the following files:

- `app.js`: Update sample data for speakers and schedule
- `views/*.ejs`: Update content in the EJS templates
- `public/css/style.css`: Customize styles and colors

### Styling

The website uses CSS variables for easy customization. The primary colors and styles can be changed by modifying the CSS variables at the top of `public/css/style.css`:

```css
:root {
  --primary-color: #3498db;
  --secondary-color: #2c3e50;
  --accent-color: #e74c3c;
  --light-color: #f5f5f5;
  --dark-color: #333;
  --text-color: #444;
  --border-color: #ddd;
}
```

### Adding Pages

To add a new page:

1. Create a new EJS file in the `views` directory
2. Add a route for the new page in `app.js`
3. Add a link in the navigation menu (in `views/partials/header.ejs`)

## Adding Functionality

### Backend for Contact Form

The contact form currently only performs client-side validation. To make it actually send emails:

1. Install nodemailer:
   ```bash
   npm install nodemailer
   ```

2. Create a POST route in `app.js`:
   ```javascript
   const nodemailer = require('nodemailer');

   // Create a transporter
   const transporter = nodemailer.createTransport({
     // Add your email service configuration
   });

   // Route for form submission
   app.post('/contact', (req, res) => {
     const { name, email, subject, message } = req.body;
     
     // Send email logic
     transporter.sendMail({
       from: email,
       to: 'your-email@example.com',
       subject: subject || `Message from ${name}`,
       text: message
     }, (error, info) => {
       if (error) {
         return res.status(500).send('Error sending message');
       }
       res.status(200).send('Message sent successfully');
     });
   });
   ```

3. Update the form in `views/contact.ejs` to submit to '/contact'

### Registration System

To add a registration system:

1. Create a registration form and page
2. Set up database integration (MongoDB, PostgreSQL, etc.)
3. Create routes for registration handling
4. Add user authentication if needed

## Deployment

### Preparing for Production

1. Set environment variables:
   ```javascript
   // app.js
   const port = process.env.PORT || 3000;
   ```

2. Create a production start script in package.json:
   ```json
   "scripts": {
     "start": "node app.js",
     "dev": "nodemon app.js"
   }
   ```

### Deployment Options

- **Heroku:**
  ```bash
  heroku create
  git push heroku main
  ```

- **Vercel:**
  Create a `vercel.json` file:
  ```json
  {
    "version": 2,
    "builds": [
      {
        "src": "app.js",
        "use": "@vercel/node"
      }
    ],
    "routes": [
      {
        "src": "/(.*)",
        "dest": "app.js"
      }
    ]
  }
  ```

- **DigitalOcean, AWS, or GCP:**
  Follow their respective documentation for Node.js applications.

## Technologies

- [Node.js](https://nodejs.org/) - JavaScript runtime
- [Express.js](https://expressjs.com/) - Web framework
- [EJS](https://ejs.co/) - Templating engine
- [Nodemon](https://nodemon.io/) - Development utility for auto-restarting

## License

MIT License

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

If you have any questions or need help, please open an issue or contact us at info@conference2025.com.