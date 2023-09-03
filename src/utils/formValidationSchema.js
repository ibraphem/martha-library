import * as yup from "yup";

export const signInSchema = yup.object().shape({
    email: yup.string().email("Wrong email format").required("Email is required"),
    password: yup.string().required("You must enter password"),
  });

  export const addUserSchema = yup.object().shape({
    firstName: yup.string().required("Enter User First Name"),
    lastName: yup.string().required("Enter user Last Name"),
    email: yup.string().email("Wrong email format").required("Email is required"),
    role: yup.string().required("Select User Role"),
    
  });
