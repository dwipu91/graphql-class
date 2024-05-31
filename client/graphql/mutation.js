import { gql } from "@apollo/client";

export const CREATE_STUDENT_MUTATION = gql`
  mutation creatStudent(
    $name: String!
    $email: String!
    $location: String!
    $mobile: String
    $gender: String!
    $age: Int
  ) {
    createStudents(
      name: $name
      email: $email
      location: $location
      mobile: $mobile
      gender: $gender
      age: $age
    ) {
      id
      name
      age
      gender
      location
      email
    }
  }
`;
