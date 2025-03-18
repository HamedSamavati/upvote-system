# upvote-system
An upvoting system as a requirement of Scrawlr company for the front-end developer position
# Upvote System

## 📌 Overview
This is a **React-based Upvote System** that allows users to upvote items dynamically. The application is designed using **React, Vite, Context API**, and **Vitest for testing**.

This project was developed as part of a **technical assessment**.

---

## 🛠 Tech Stack
- **Frontend**: React, Vite
- **State Management**: React Context API
- **Styling**: SCSS
- **Testing**: Vitest, React Testing Library
- **Build Tool**: Vite
- **Icons**: React Icons

---

## 🚀 Installation Guide
Follow these steps to set up and run the project locally.

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/YOUR_USERNAME/upvote-system.git
cd upvote-system
```

### **2️⃣ Install Dependencies**
```sh
npm install
```
### **3️⃣ Start the Development Server**
```sh
npm run dev
```
By default, the app runs on http://localhost:3000.

---

### **✅ Running Tests**
This project includes unit tests using Vitest & React Testing Library.

### Run All Tests
```sh
npm run test
```
### Run Tests in Watch Mode
```sh
npm run test -- --watch
```

---

### **📂 Project Structure**
```
📦 upvote-system
├── 📂 src
│   ├── 📂 components     # Reusable UI components (Upvote, UpvoteList)
│   ├── 📂 contexts       # React Context API for state management
│   ├── 📂 pages          # the main page of the App
│   ├── 📂 services       # Utility functions (local storage handling)
│   ├── 📂 styles         # SCSS styles
│   ├── 📂 tests          # Unit tests
│   ├── App.jsx           # Main App component
│   ├── main.jsx          # Entry point
│   ├── index.html        # HTML template
├── .gitignore
├── package.json
├── vite.config.js        # Vite configuration
├── README.md             # This file
```

---

### 🔥 Features
- ✔ Upvote Items: Users can toggle upvotes on items.
- ✔ Persistent State: Upvotes are stored using local storage.
- ✔ Dynamic List: Users can add new upvotes.
- ✔ Unit Testing: Tested using Vitest & React Testing Library.

---

### 🔄 Future Improvements
- ✅ Dark Mode Support
- ✅ API Integration for Persistent Data
- ✅ Drag-and-Drop for Upvote Reordering
- ✅ Animations for UI Enhancements

---

### 📜 License
This project is open-source under the MIT License.

---

### 📌 Author
## Hamed Samavati
- 💼 GitHub: @HamedSamavati
- 📧 Email: hamed@samavati.ca

---

Feel free to fork this repo and contribute! 🚀✨





