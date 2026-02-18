# User Signup API – System Reliability Backend

A production-style backend API built using Node.js and Express that allows users to sign up while ensuring system reliability and database consistency even if external services like email fail.

This project demonstrates real-world backend architecture concepts such as retry mechanisms, service isolation, and reliable user creation without rollback.

🌐 Live API: https://user-signup-api.onrender.com/signup  
📬 Postman Collection: https://fardinsaluji-2836416.postman.co/workspace/fardin-saluji's-Workspace~e97d20b3-8255-42ec-8afe-4e2fff9b6306/collection/49870578-08466f7c-ee0c-4aad-9cd7-afcc8639411f?action=share&creator=49870578  

---

## Features

- User signup API
- Stores user in database
- Sends welcome email
- Email retry mechanism if email fails
- Prevents rollback of user creation
- Maintains database consistency
- Worker-based background email processing
- Clean backend architecture
- REST API design

---

## Tech Stack

- Node.js
- Express.js
- JavaScript
- REST API
- Render (Deployment)
- Postman (Testing)

---

## Folder Structure

```
User-signup-api/
│
├── node_modules/
│
├── src/
│   │
│   ├── models/
│   │   └── user.model.js
│   │
│   ├── routes/
│   │   └── signup.route.js
│   │
│   ├── services/
│   │   ├── email.service.js
│   │   └── user.service.js
│   │
│   ├── workers/
│   │   ├── email.worker.js
│   │   └── emailOutbox.model.js
│   │
│   ├── app.js
│   └── db.js
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

## API Endpoint

### Create User

**POST** `/signup`

Example Request Body:

```
{
  "email": "test@email.com"
}
```

Example Response:

```
{
  "message": "User created successfully",
  "userId": 1
}
```

---

## How System Reliability Works

Normal Flow:

1. User sends signup request
2. User is saved to database
3. Email service tries to send welcome email

If Email Service Fails:

- User is NOT deleted
- Email is saved in outbox
- Worker retries email later
- Database remains consistent

This ensures system reliability.

---

## Key Concepts Implemented

- No rollback on email failure
- Retry mechanism using worker
- Service isolation
- Database consistency
- Background job processing
- Clean backend architecture

---

## Installation

Clone the project:

```
git clone https://github.com/yourusername/user-signup-api.git
```

Go to folder:

```
cd user-signup-api
```

Install dependencies:

```
npm install
```

Run server:

```
npm start
```

Server runs on:

```
http://localhost:3000
```

---

## Testing

You can test using:

- Postman
- Thunder Client
- Curl

Live test endpoint:

```
POST https://user-signup-api.onrender.com/signup
```

---

## Future Improvements

- Add MongoDB or PostgreSQL
- Add password support
- Add JWT authentication
- Add email queue using Redis
- Add logging system
- Add production-level validation

---

## Author

Fardin Saluji  
Full Stack Developer (MERN Stack)

---

## License

This project is created for learning system design and backend reliability.
