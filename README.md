# MySeeLocalApp

MySeeLocalApp is a mobile application that currently helps users register and log in securely. This README file provides detailed instructions on setting up and running both the frontend and backend of the application.

## Features

- User registration
- User login
- Secure authentication using JWT

## Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose
- Axios
- React Native
- Expo

## Setup and Installation

### Backend Setup

1. **Clone the repository:**

   ```sh
   git clone https://github.com/loganhoppen/myseelocalapp-backend.git
   cd myseelocalapp-backend
### Back End
1. **Install Dependencies:**
   npm install
2. **Set up environment**
   Create a .env file in the root of the project and add the following:
   PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
3.**Start Server**
   npm run dev
### Front End

1. **Install Dependencies:**
   if still in backend use cd.. to return to root project
   npm install
2.**Set up api url**
   Open the app.json file and update the apiUrl in the extra section with your backend URL
   "extra": {
      "apiUrl": "https://<LocalHost:5000> or <Youripv4address:5000>/api"
    }
3.**Start expo**
   npm start
