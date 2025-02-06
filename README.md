# 🚀 Fullstack Blog App | CI/CD Deployed on Render

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/rikulauttia/fullstack-ci-cd/deployment.yml?branch=main)
![GitHub last commit](https://img.shields.io/github/last-commit/rikulauttia/fullstack-ci-cd)
![GitHub stars](https://img.shields.io/github/stars/rikulauttia/fullstack-ci-cd?style=social)

## 🌍 Live Demo

- **Frontend:** [Live Site 🌐](https://fullstack-ci-cd-frontend.onrender.com/)
- **Backend API:** [Live API 📡](https://fullstack-ci-cd-backend.onrender.com/)

---

## 📌 Project Overview

The **Fullstack Blog App** is a feature-rich **MERN** (MongoDB, Express.js, React, Node.js) application that allows users to **create, read, update, and delete (CRUD)** blog posts.

🔹 **Fully automated CI/CD pipeline** for smooth deployments.  
🔹 **Deployed on Render** with separate backend and frontend services.  
🔹 **Linting, testing, and versioning** integrated with GitHub Actions.  
🔹 **Secure authentication** with JSON Web Tokens (JWT).  
🔹 **Responsive UI** built with React and styled with modern design principles.

---

## ✨ Features

✅ **User Authentication:** Secure login/logout with JWT.  
✅ **Blog Management:** Create, edit, and delete blog posts.  
✅ **Commenting System:** Users can leave comments on posts.  
✅ **Real-time Updates:** Fully optimized frontend API interactions.  
✅ **CI/CD Pipeline:** Automated testing, linting, and deployments with GitHub Actions.  
✅ **Cloud Database:** Hosted on **MongoDB Atlas**.

---

## Technologies Used

### **Frontend**

- ⚛️ **React** – Component-based architecture
- 🚀 **Vite** – Fast build tool for modern frontend development
- 🔗 **Axios** – API communication

### **Backend**

- 🌐 **Node.js & Express.js** – Lightweight and fast backend
- 🔑 **JWT (JSON Web Tokens)** – Secure authentication
- 🗄️ **MongoDB Atlas** – Cloud database

### **CI/CD & DevOps**

- 🏗️ **GitHub Actions** – Automated pipeline for testing, linting, and deployments
- ☁️ **Render** – Cloud hosting for backend & frontend

---

## Deployment & CI/CD Workflow

### **🔹 GitHub Actions Workflow**

1. **Push to GitHub** → Runs linting & tests for both frontend and backend.
2. **If tests pass** → Backend deploys to **Render**.
3. **If backend deploys successfully** → Frontend deploys to **Render**.
4. **Versioning** → GitHub Actions **automatically bumps version numbers**.

### **🔹 Render Deployment URLs**

- **Frontend**: [`https://fullstack-ci-cd-frontend.onrender.com/`](https://fullstack-ci-cd-frontend.onrender.com/)
- **Backend API**: [`https://fullstack-ci-cd-backend.onrender.com/`](https://fullstack-ci-cd-backend.onrender.com/)

---

## 🛠️ How to Set Up Locally

### **🔹 Prerequisites**

- **Node.js v20+**
- **MongoDB Atlas account**
- **Git**

### **🔹 Clone the Repository**

```sh
git clone https://github.com/rikulauttia/fullstack-ci-cd.git
cd fullstack-ci-cd
```
