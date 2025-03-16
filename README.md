# Cicero Brukerforum 2025 Website

A responsive conference website for the Cicero library system user forum event, built with Express.js, EJS templates, and vanilla JavaScript.

## Features

- Responsive design that works on all devices
- Information pages (Home, About, Speakers, Schedule, Contact)
- Dynamic content rendering with EJS templates
- Interactive schedule with tabbed navigation and expandable event details
- Mobile-friendly navigation
- Norwegian language interface

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
   git clone https://github.com/yourusername/cicero-brukerforum.git
   cd cicero-brukerforum
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
cicero-brukerforum/
├── public/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── images/
│       ├── ingerstenersen.png
│       ├── eliseconradi.png
│       └── deichman_bjorvika.jpg
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

### Schedule Display

The schedule is displayed with an interactive interface that:
- Shows tabs for each conference day
- Lists events with time, title, speaker, and location
- Allows users to click on events to reveal additional details
- Uses Font Awesome icons for visual enhancements

To modify the schedule:
1. Update the schedule data in `app.js`
2. Each event can include the following properties:
   - `time`: The event's time slot
   - `title`: The event's title
   - `speaker`: (Optional) The presenter's name
   - `location`: The venue/room
   - `description`: Detailed information about the event

## Special Features

### Registration Notice

The "Påmelding" (Registration) button on the homepage displays an alert informing users that registration is closed:
```javascript
function showRegistrationAlert(event) {
  event.preventDefault();
  alert("Påmeldingsfristen er nå ute, og brukermøtet er fulltegnet");
}
```

### Font Awesome Integration

The website uses Font Awesome icons for enhanced visual elements:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
```

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
- [Font Awesome](https://fontawesome.com/) - Icon library

## License

MIT License
