export const typeDefs = `#graphql 
  
 type Student{
  _id: ID!
  name: String!
  email: String
  mobile: String
  location: String!
  gender: String!
  age: Int
  status: Boolean
  trash: Boolean
  createAt: String
  updatedAt: String
 }
 

  type Query {
    getAllStudents: [Student]
    getSingleStudent(_id: ID!): Student
  }

  type Mutation{
    createStudent(name: String!, email: String!,mobile: String, location: String!, gender: String!, age: Int!): Student

    deleteStudent(id:ID!):Student

    updataStudent(id:ID!, name: String!,email: String!, mobile: String!, location: String!,gender: String!,age: Int!):Student
  }


`;
