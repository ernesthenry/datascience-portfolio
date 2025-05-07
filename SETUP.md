# Personal Portfolio Setup Guide

## 🚀 **Getting Started**

### 1️⃣ **Clone the Project**

* **Fork the project**:
  Navigate to [GitHub Repo](https://github.com/ernesthenry/portfolio) and fork it.

* **Clone your fork**:

  ```bash
  git clone https://github.com/{yourusername}/portfolio.git
  ```

---

### 2️⃣ **Install Required Version of Node**

* Use [nvm](https://github.com/nvm-sh/nvm) to install Node.js version 20:

  ```bash
  nvm install 20
  ```
* Switch to the correct version:

  ```bash
  nvm use 20.19.1
  ```

---

### 3️⃣ **Install Dependencies**

After cloning the project, install the required packages:

```bash
npm install
```

---

### 4️⃣ **Start the Project Locally**

Start the project with:

```bash
npm start
```

The project should be running locally at `http://localhost:3000`.

---

## ✏️ **Customize Your Portfolio**

### 1️⃣ **Configuration Files**

* All the content (text, icons, links, etc.) is stored in the `assets` folder.

* **Configs**:
  There is a config file for each page/component. For example, to modify the footer, go to `footerConfig.js`.

  **Important**:
  Keep the key names, structure, and className the same to avoid breaking the layout. You can add new items where needed.

* **Images**:
  In `projectsConfig.js`, you can modify images displayed on various routes (e.g., blogs, projects).
  For instance, each project can have an "image" property linked to an image in the `assets/images` folder.

  ```json
  {
    "title": "Project Name",
    "image": "./src/assets/images/project1.png",
    "link": "https://example.com"
  }
  ```

---

## 🌐 **Optional: Google Analytics Integration**

1. Copy the `.env.example` file to `.env`.
2. Add your Google Analytics tracking ID to the variable `REACT_APP_TRACKING_ID`.

   Example:

   ```env
   REACT_APP_TRACKING_ID=UA-XXXXXXX-X
   ```

---

## 🛠️ **Troubleshooting**

* If you encounter an error regarding the token `">"` while deploying, remove the `homepage` field in `package.json`:

  ```json
  "homepage": "https://ernesthenry.github.io/portfolio",
  ```

---

## 🔗 **Live Demo**

You can check the live demo of this portfolio here:
[**Live Demo**](https://ernesthenry.github.io/portfolio/)

---

## 📂 **GitHub Repository**

You can find the full source code here:
[**GitHub Repo**](https://github.com/ernesthenry/portfolio)

---

Feel free to use this project as a template and give it a ⭐ if you find it helpful!
