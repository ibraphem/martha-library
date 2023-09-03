import { useState } from "react";
import {
  Button,
  Flex,
  FormLabel,
  Input,
  Text,
  FormControl,
  FormErrorMessage,
  Alert,
  AlertIcon,
  AlertTitle,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import { signInSchema } from "../utils/formValidationSchema";
import { useSelector } from "react-redux";
import AuthWrapper from "../components/layout/AuthWrapper";
import { signIn } from "../services/authService";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  //   const auth = useSelector((state) => state.auth);
  //   const dispatch = useDispatch();
  const users = useSelector((state) => state.users?.users);

  console.log(users);

  const initialValues = {
    email: "",
    password: "",
  };

  //   useEffect(() => {
  //     if (auth?.user) {
  //       return navigate("/dashboard");
  //     }
  //   }, [auth?.user, navigate]);

  const handleSubmit = async (values) => {
    setLoading(true)
    const res = await signIn(values);
    console.log(res);
    setLoading(false)
    setError("")
    return navigate("/home");
  };

  return (
    <AuthWrapper>
      {error && (
            <Alert status="error" className="mt-3">
              <AlertIcon />
              <AlertTitle>{error}</AlertTitle>
            </Alert>
          )}

      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={signInSchema}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({ errors, touched, handleBlur, handleChange }) => (
          <Form mt={4}>
            <FormControl
              isInvalid={errors.email && touched.email}
              mb={5}
              color="black"
            >
              <FormLabel>Email</FormLabel>
              <Input
                placeholder="Enter email address"
                bgColor={"#F3F3F3"}
                borderRadius={0}
                borderColor={"transparent"}
                mb="1rem"
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {touched.email && errors.email && (
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              )}
            </FormControl>

            <FormControl
              isInvalid={errors.password && touched.password}
              mb={5}
              color="black"
            >
              <FormLabel>Password</FormLabel>
              <InputGroup size="lg">
                <Input
                  placeholder="Enter password"
                  bgColor={"#F3F3F3"}
                  borderRadius={0}
                  borderColor={"transparent"}
                  mb="1rem"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type={show ? "text" : "password"}
                />
                <InputRightElement width="4.5rem">
                  <Button
                    h="1.75rem"
                    size="sm"
                    background={"none"}
                    onClick={() => setShow(!show)}
                  >
                    {show ? (
                      <AiOutlineEye w={8} h={8} color="GrayText" />
                    ) : (
                      <AiOutlineEyeInvisible color={"GrayText"} w={8} h={8} />
                    )}
                  </Button>
                </InputRightElement>
              </InputGroup>

              {touched.password && errors.password && (
                <FormErrorMessage>{errors.password}</FormErrorMessage>
              )}
            </FormControl>

            <Button
              color={"white"}
              bgColor={"#124477"}
              borderRadius="none"
              mb="1rem"
              type="submit"
              isLoading={loading}
              loadingText="Logging in ..."
            >
              Login
            </Button>
          </Form>
        )}
      </Formik>

      <Flex justify={"space-between"} alignItems={"center"} fontSize={"sm"}>
        <Text align={"center"} mt={"30px"}>
          Don't have an account{" "}
          <span style={{ fontWeight: "bolder", color: "red" }}>
            <Link>Sign Up</Link>
          </span>
        </Text>
      </Flex>
    </AuthWrapper>
  );
};

export default Login;
