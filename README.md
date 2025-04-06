# 🎬 Movieflix

Movieflix is a full-stack movie catalog application where users can browse, add, and favorite movies. It supports user authentication (including Google Login), private/public routes, form validation, CRUD operations, and responsive UI with dark/light mode toggle. Built using the MERN stack.

---

## 🚀 Live Website
🔗 [Visit Movieflix Live](https://movieflix-f2433.web.app/)

---

## 📁 Repositories

- **Client Side:** [Movieflix Frontend Repo](https://github.com/Sayed161/Assignment-10-Client-side)
- **Server Side:** [Movieflix Backend Repo](https://github.com/Sayed161/Assignment-10_server_side)

---

## 🔧 Tech Stack

### Frontend:
- React.js
- React Router DOM
- Firebase Authentication
- Tailwind CSS + DaisyUI
- React Hook Form
- React Simple Star Rating
- Toastify

### Backend:
- Node.js
- Express.js
- MongoDB (Atlas)
- CORS
- dotenv

---

## ✨ Features

- 🔐 **Authentication**
  - Email/password login & registration
  - Google social login
  - Protected routes (Add Movie, Favorites, Details, Update)

- 🎥 **Movie Management**
  - Add, Update, Delete Movies (with validation)
  - View all movies
  - Favorite and Unfavorite movies
  - Individual Movie Details

- 🔍 **Extras**
  - Search movies by title
  - Loading Spinner
  - 404 Page
  - Toast & SweetAlerts for CRUD operations
  - Responsive Design with Dark/Light Mode

---

## 🗂️ Pages & Routes

| Route                | Description                               | Access     |
|---------------------|-------------------------------------------|------------|
| `/`                 | Home page (Slider, Featured, Extra)       | Public     |
| `/login`            | Login Page                                | Public     |
| `/register`         | Register Page                             | Public     |
| `/all-movies`       | All Movies Listing                        | Public     |
| `/add-movie`        | Add a New Movie                           | Private    |
| `/favorites`        | User's Favorite Movies                    | Private    |
| `/movie/:id`        | Movie Details                             | Private    |
| `/update/:id`       | Update Movie Form                         | Private    |
| `/shows`            | TV SHOW                                   | Public     |
| `*`                 | 404 Page                                  | Public     |

---

## 🛠️ Installation & Setup

### Prerequisites:
- Node.js
- MongoDB Atlas
- Firebase project for authentication

### Backend (Server)

```bash
git clone https://github.com/your-username/movieflix-server.git
cd movieflix-server
npm install
create .env file with DB and PORT
npm start
