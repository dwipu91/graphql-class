import Student from "../models/student.js";

export const resolvers = {
  Query: {
    getAllStudents: async () => {
      return await Student.find();
    },
    getSingleStudent: async (_, { _id }) => {
      const data = await Student.findById(_id);
      return data;
    },
  },

  Mutation: {
    createStudent: async (
      _,
      { name, email, mobile, age, location, gender }
    ) => {
      //   check Email
      const checkEmail = await Student.findOne({ email });
      if (checkEmail) {
        throw new Error("Email are Useddddd");
      }

      //  check mobile
      const checkMobile = await Student.findOne({ mobile });
      if (checkMobile) {
        throw new Error("Mobile number is useded");
      }

      const data = await Student.create({
        name,
        email,
        mobile,
        age,
        location,
        gender,
      });

      return data;
    },

    deleteStudent: async (_, { id }) => {
      const data = await Student.findByIdAndDelete(id);
      return data;
    },

    updataStudent: async (_, { id }) => {
      const data = Student;
      return data;
    },
    updataStudent: async (
      _,
      { id, name, age, email, mobile, location, gender }
    ) => {
      const data = await Student.findByIdAndUpdate(
        id,
        {
          name,
          email,
          mobile,
          age,
          location,
          gender,
        },
        { new: true }
      );
      return data;
    },
  },
};
