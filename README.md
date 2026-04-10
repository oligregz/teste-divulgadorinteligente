# 🚀 SmartPromo

Application developed as a technical test for the Fullstack Developer position. The project consumes a REST API (Strapi) to list products, display coupons, filter offers, and manage an interactive shopping cart.

**🌍 [Access the live application running here!](https://teste-divulgadorinteligente-six.vercel.app/)**

---

## 🛠️ Architecture and Technical Decisions

To ensure a modern, scalable delivery with an excellent user experience (Look & Feel), the chosen stack was:

* **Next.js (App Router):** Chosen for its native server-side rendering (SSR) performance, excellent SEO (vital for affiliate e-commerce), and robust routing engine. This allowed implementing coupon filtering via URL (`?coupon=...`) and search queries (`?search=...`) without compromising performance.
* **Tailwind CSS (v4):** Used to build a responsive interface, with a custom `teal` color palette to convey a more professional and modern tone. The Shopping Cart animations were built using `@keyframes` injected directly into the global CSS.
* **Redux Toolkit (RTK):** Chosen to manage the Shopping Cart's global state. Although the Context API is native to React, RTK demonstrates architectural maturity and prepares the application for future scalability with complex data.
* **Jest + React Testing Library:** Implemented to ensure code quality (Bonus). The Redux architecture was unit-tested, alongside the correct rendering of the promotion pills and cards in the DOM.
* **Adapter Pattern (Services):** The HTTP call layer (native Fetch) was designed with an "Adapter" that flattens the complex backend response (`data[].attributes`) into clean, predictable TypeScript interfaces for the UI components to consume.

---

## ⚙️ How to run the project locally

### 1. Prerequisites
* Node.js (v18 or higher)
* NPM or Yarn

### 2. Installation
Clone the repository and install the dependencies:

\`\`\`bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
cd YOUR-REPOSITORY
npm install
\`\`\`

### 3. Running the Server
\`\`\`bash
npm run dev
\`\`\`
Access [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 How to run the Tests (Bonus)

The project features unit test coverage for the Redux logic and UI integration on the Product Card.

\`\`\`bash
npm run test
\`\`\`

To run in continuous mode (Watch mode):
\`\`\`bash
npm run test:watch
\`\`\`

---

## 👨‍💻 Author

**Gregory Oliveira Souza**
* [LinkedIn](https://linkedin.com/in/gregory-oliveira)
* [GitHub](https://github.com/oligregz)
