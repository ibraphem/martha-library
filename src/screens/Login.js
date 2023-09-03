
import {
  Button,
  Flex,
  FormLabel,
  Image,
  Input,
  Text,
  FormControl,
  FormErrorMessage,
//   Alert,
//   AlertIcon,
//   AlertTitle,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import { signInSchema } from "../utils/formValidationSchema";
import {  useSelector } from "react-redux";
import logo from "../assets/images/logo.jpg"
import bg from "../assets/images/bg.jpg"

const Login = () => {
  const navigate = useNavigate();
//   const [error, setError] = useState(null);
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
    console.log(values);
    return  navigate("/home");

  };

  return (
    <Flex w="full" h="100vh" overflow={"hidden"}>
      <Flex
        basis={[0, 0, "40%", "50%"]}
        h="full"
        shrink={"0"}
        position={"relative"}
        bg={"blackAlpha.900"}
      >
        <Image
          src={bg}
          w="full"
          h="full"
          objectFit={"fill"}
          position={"absolute"}
          opacity={"0.5"}
          top={0}
        />
      </Flex>

      <Flex
        h={"full"}
        w="full"
        justify={"center"}
        alignItems={"center"}
        position={"relative"}
        bgColor={"#124477"}
      >
        <Flex w={["90%", "80%", "90%", "55%"]} position={"relative"}>
          <Image
            src={logo}
            w={"120px"}
            position={"absolute"}
            left={"50%"}
            transform={"translateX(-50%) translateY(-50%)"}
            borderRadius="50%"
          />

          
       
          <Flex
            direction={"column"}
            bg={"white"}
            width={"full"}
            px={"1.5rem"}
            py="2rem"
            mt={"1.5rem"}
          >
      

            {/* {error && (
            <Alert status="error" className="mt-3">
              <AlertIcon />
              <AlertTitle>{error}</AlertTitle>
            </Alert>
          )} */}

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
                    <Input
                      placeholder="Enter password"
                      bgColor={"#F3F3F3"}
                      borderRadius={0}
                      borderColor={"transparent"}
                      mb="1rem"
                      name="password"
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
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
                  >
                    Login
                  </Button>
                </Form>
              )}
            </Formik>

            <Flex
              justify={"space-between"}
              alignItems={"center"}
              fontSize={"sm"}
            >
              <Text>Forgot password</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Login;
