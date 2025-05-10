# 🖥️ EJS Authentication Interface

A simple Node.js web application using **Express** and **EJS** templating engine to render authentication pages such as **Home**, **Login**, and **Signup**. This project demonstrates basic routing, template rendering, and static file serving.

---

## 📁 Project Structure

├── public/
│ └── style.css # Static CSS file
├── src/
│ ├── config.js # Configuration (optional use)
│ └── index.js # Main server entry point
├── views/
│ ├── home.ejs # Home page view
│ ├── login.ejs # Login page view
│ └── signup.ejs # Signup page view
├── package.json
└── .gitignore


---

## 🚀 Features

- ✨ Dynamic rendering with EJS
- 🧭 Express.js for routing
- 🎨 Styled using external CSS
- 🔐 Ready to extend for user authentication

---

## Install dependencies

- npm install

##  Run the server

- node src/index.js
- http://localhost:8500 in your browser.

## Routes

| Route     | Description | View Rendered |
| --------- | ----------- | ------------- |
| `/`       | Home page   | `home.ejs`    |
| `/login`  | Login page  | `login.ejs`   |
| `/signup` | Signup page | `signup.ejs`  |

## Technologies Used
- Node.js
- Express.js
- EJS (Embedded JavaScript templates)
- HTML/CSS
