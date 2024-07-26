# User-Management-GraphQL-API
 This project is a simple User Management API built using Node.js, Express, and GraphQL. The API allows you to perform CRUD operations (Create, Read, Update, Delete) on user data. It includes a GraphQL endpoint with queries and mutations to manage users stored in a mock JSON file.
# Features
* GraphQL Endpoint: A single /graphql endpoint to interact with the API using GraphQL queries and mutations.
* CRUD Operations:
  * Create User: Add a new user.
  * Read User: Fetch user data by ID.
  * Update User: Update existing user data by ID.
  * Delete User: Remove a user by ID.
 * GraphiQL Interface: A built-in interface to test GraphQL queries and mutations.
# Technologies Used
* Node.js: JavaScript runtime for building the backend.
* Express: Fast, unopinionated, minimalist web framework for Node.js.
* GraphQL: Query language for your API, providing a more efficient, powerful, and flexible alternative to REST.
* express-graphql: Create a GraphQL HTTP server with Express

# Usage
  # Queries
  * Get User by ID:
    {
  getUserById(id: 1) {
    id
    firstName
    lastName
    email
    gender
    password
  }
}
 # Mutations
* Create a New User:
  
  mutation {
  createNewUser(firstName: "John", lastName: "Doe", email: "john.doe@example.com", gender: "Male", password: "password123") {
    id
    firstName
    lastName
    email
    gender
    password
  }
}
* Update an Existing User:

  mutation {
  updateUser(id: 1, firstName: "Jane", lastName: "Doe", email: "jane.doe@example.com", gender: "Female", password: "newpassword") {
    id
    firstName
    lastName
    email
    gender
    password
  }
}
* Delete a User:
  
  mutation {
  deleteUser(id: 1) {
    id
    firstName
    lastName
    email
    gender
    password
  }
}

# Contributing
Contributions are welcome! Please fork this repository and submit pull requests for any enhancements or bug fixes.

# License
This project is licensed under the MIT License. See the LICENSE file for details.
#
Feel free to customize this description to better fit your project's specifics or to add any additional sections you find necessary.

      
