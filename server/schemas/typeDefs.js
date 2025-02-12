const typeDefs = `
  
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    tasks: [Task]
  }

  input TaskInput {
    _id: ID
    text: String
    isComplete: Boolean
  }  
  type Task {
    _id: ID
    text: String
    isComplete: Boolean
  }


  type Auth {
    token: ID!
    user: User
  }

 
  type Query {
    me: User
    getTask(taskId: ID!): Task
  }


  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addTask(taskdata: TaskInput!): User
    updateTask(taskId: ID!, taskdata: TaskInput!): User
    deleteTask(taskId: ID!): User
  }
`;

module.exports = typeDefs;
