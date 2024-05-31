import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { GET_ALL_STUDENT } from "../../graphql/query";
import { CREATE_STUDENT_MUTATION } from "../../graphql/mutation";

const Student = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    mobile: "",
    gender: "",
    age: "",
    location: "",
  });

  const {
    loading: queryLoading,
    error: queryError,
    data,
  } = useQuery(GET_ALL_STUDENT);

  // input handler
  const handleInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // use useMutation
  const [createStudent, { loading: createLoading, error: createError }] =
    useMutation(CREATE_STUDENT_MUTATION);

  // form student create submit handler
  const handleStudentCreate = (e) => {
    e.preventDefault();

    if (createLoading) return;

    createStudent({
      variables: {
        name: input.name,
        email: input.email,
        mobile: input.mobile,
        gender: input.gender,
        age: Number(input.age), // Ensure age is passed as an integer
        location: input.location,
      },
      refetchQueries: [{ query: GET_ALL_STUDENT }], // To refresh the list after creation
    }).catch((error) => {
      console.error("Error creating student:", error);
    });
  };

  if (queryLoading) return <p>Loading data...</p>;
  if (queryError) return <p>Error loading data: {queryError.message}</p>;

  return (
    <div className="container my-3 p-2">
      <div className="row">
        <div className="col-md-12 m-auto">
          <form onSubmit={handleStudentCreate}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={input.name}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={input.email}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Age"
              name="age"
              value={input.age}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Mobile"
              name="mobile"
              value={input.mobile}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Location"
              name="location"
              value={input.location}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Gender"
              name="gender"
              value={input.gender}
              onChange={handleInputChange}
            />
            <button type="submit" disabled={createLoading}>
              Create
            </button>
          </form>
          {createError && <p>Error creating student: {createError.message}</p>}
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-md-12">
          <div className="card text-center">
            <table className="table table-striped">
              <thead className="p-2">
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Image</th>
                  <th>Mobile</th>
                  <th>Email</th>
                  <th>Location</th>
                  <th>Age</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.getAllStudents.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <b>{item.name}</b>
                    </td>
                    <td>😊</td>
                    <td>{item.mobile}</td>
                    <td>{item.email}</td>
                    <td>{item.location}</td>
                    <td>{item.age}</td>
                    <td>
                      <button className="btn btn-sm btn-info">View</button>
                      <button className="btn btn-sm btn-success mx-1">
                        Edit
                      </button>
                      <button className="btn btn-sm btn-danger">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student;
