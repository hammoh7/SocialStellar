# SocialStellar
Welcome to SocialStellar, a social media platform which connects friends and helps individuals to share their memorable photos and different posts.

## Getting Started
1. Open two terminals
2. In first terminal:
   ```
   cd frontend
   npm install
   ```
3. In second terminal:
   ```
   cd backend
   npm install
   ```
4. In backend folder, create a .env file and paste the required keys for below:<br>
   -  We have used MongoDB as database, so paste the MongoDB URL.
   -  In JWT_SECRET you can keep any secret key of you own choice
   -  Provide the port number on which you want to run your backend server
   ```
   MONGO_URL = ''
   JWT_SECRET = ''
   PORT = 
   ```
5. After above setup, in both the terminals do:
   ```
   npm run start
   ```
6. The backend will run on the specified port and frontend will run on localhost:3000
