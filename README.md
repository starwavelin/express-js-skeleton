# express-js-skeleton

The Express Framework Skeleton in JavaScript

# Steps to Create a Minimal JS Skeleton Node Project

1. Initialize the project to be a Node project

```
$ npm init -y
```

2. Install Express.js

```
$ npm i express
```

3. Install Nodemon (Optional but helpful):

```
$ npm i -D nodemon
```

4. Create the Directory Structure
   From the steps above you should have a few files ready in the structure.  
   Please also add `app.js` and `routes/index.js` files, so it'd look like:

```
express-js-skeleton/
│
├── app.js          # Entry point of your application
├── routes/         # Directory for your route files
│   └── index.js    # Example route file
├── package.json    # Node.js dependency and script configuration
└── README.md       # Optional project description
```

5. Write Minimal Code in app.js (Entry Point)

```
const express = require('express');

const app = express();
const PORT = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Routes
app.use('/', require('./routes/index'));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

6. Write Minimal Code in routes/index.js (Route file)

```
const express = require("express");
const router = express.Router();

// Define a simple Hello route
router.get("/", (req, res) => {
  res.send("Hello, Express.js!");
});

module.exports = router;
```

7. Add Development Scripts
   In the `package.json` file's `scripts` section, add the following:

```
"scripts": {
  "start": "node app.js",
  "dev": "nodemon app.js"
}
```

# Run and Test

- You can use command `$ npm run dev` to see if the server is correctly start

- You may also use your browser or `Postman` to hit the `http://localhost:3000` endpoint to view the message from the hello route, when the server is running.
