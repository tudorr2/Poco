![Status](https://img.shields.io/badge/Status-Completed-2ECC71?style=for-the-badge&logo=checkmarx&logoColor=white)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=github&logoColor=white)

<br/>

<div align="center">
  <img src="resources/favicons/icons8-bicycle-96.png" alt="Poco Logo" width="90"/>
  <h1>Poco</h1>
  <p><strong>A fully client-side e-commerce storefront built for Mountain Bike enthusiasts.</strong></p>
  <a href="https://tudorr2.github.io/Poco/">🌐 Live Demo</a>
</div>

---

## 📖 About

**Poco** is a lightweight, front-end-only e-commerce website focused on Mountain Bike (MTB) gear and products. Built without any backend or frameworks, it showcases dynamic product management, a shopping cart, product detail pages, and an admin panel — all powered by vanilla JavaScript and the browser's local storage.

---

## ✨ Features

- 🛒 **Shopping Cart** — Add, remove, and manage items with real-time quantity and total updates
- 🔍 **Product Detail Pages** — Dedicated detail view for each product listing
- 🛠️ **Admin Panel** — Add and manage products directly from the browser
- 💾 **LocalStorage Persistence** — Cart and product data persists across page refreshes
- 📱 **Responsive Design** — Optimized for both desktop and mobile viewports
- ⚡ **No Dependencies** — Zero frameworks, zero build tools — just HTML, CSS, and JS

---

## 🗂️ Project Structure

```
Poco/
├── index.html          # Home / product listing page
├── cart.html           # Shopping cart page
├── details.html        # Product detail page
├── admin.html          # Admin panel for product management
├── main.js             # Core application logic
├── style.css           # Global stylesheet
├── src/
│   └── js/             # Additional JS modules
└── resources/
    └── favicons/       # App icons & favicon assets
```

---

## 🛠️ Tech Stack

| Technology            | Purpose                                               |
| --------------------- | ----------------------------------------------------- |
| **HTML5**             | Page structure & semantic markup                      |
| **CSS3**              | Styling, layout, and responsive design                |
| **JavaScript (ES6+)** | Application logic, DOM manipulation, state management |
| **LocalStorage API**  | Client-side data persistence for cart and products    |
| **GitHub Pages**      | Static site hosting & deployment                      |

---

## 🚀 Getting Started

No installation or build step needed — just open in a browser.

**Clone the repository:**

```bash
git clone https://github.com/tudorr2/Poco.git
cd Poco
```

**Run locally:**

Open `index.html` directly in your browser, or use a simple local server:

```bash
# Using the VS Code Live Server extension, or:
npx serve .
```

Alternatively, visit the **[live deployment](https://tudorr2.github.io/Poco/)** directly — no setup required.

---

## 📄 Pages

| Page    | File           | Description                      |
| ------- | -------------- | -------------------------------- |
| Home    | `index.html`   | Product catalog and listings     |
| Cart    | `cart.html`    | Shopping cart & checkout summary |
| Details | `details.html` | Individual product detail view   |
| Admin   | `admin.html`   | Product management panel         |

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).
