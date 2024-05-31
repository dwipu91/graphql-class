import { gql } from "@apollo/client";

export const GET_ALL_STUDENT = gql`
  query allStudentData {
    getAllStudents {
      _id
      name
      email
      age
      location
      mobile
    }
  }
`;
