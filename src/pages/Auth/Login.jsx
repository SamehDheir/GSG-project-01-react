import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Toaster, toast } from "react-hot-toast";

import { useEffect, useState } from "react";
import loginImg from "../../assets/loginPage.jpg";
import { loginUser } from "../../api/auth";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Loading from "../../components/Loading";

const Login = () => {
  const navigate = useNavigate();
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    document.title = "Login Page | Exclusive";
    if (localStorage.getItem("token")) {
      navigate("/dashboard", { replace: true });
    }
    setCheckingAuth(false);
  }, [navigate]);
  if (checkingAuth) {
    return <Loading />;
  }
  const validationSchema = Yup.object({
    username: Yup.string().required("Required"),
    password: Yup.string().min(6, "Min 6 chars").required("Required"),
  });

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const data = await loginUser(values);
      localStorage.setItem("token", data.accessToken);
      toast.success("Login successful! 🎉");
      navigate("/dashboard");
      console.log("Login success:", data);
    } catch (error) {
      setErrors({ password: "Invalid credentials" });
      toast.error("Invalid username or password ❌");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Navbar heartIcon={false} cartIcon={false} profileIcon={false} />

      <div className="flex flex-col lg:items-center md:flex-row gap-10 mt-10 px-5 md:px-20">
        <div className="hidden md:block w-1/2">
          <img
            src={loginImg}
            alt="Login"
            className="w-full h-full rounded-lg"
          />
        </div>

        <div className="w-full md:w-1/2 max-w-md">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
            Log in to Exclusive
          </h2>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            Enter your details below
          </p>

          <Formik
            initialValues={{ username: "emilys", password: "emilyspass" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="mt-8 space-y-6">
                <Field
                  type="text"
                  name="username"
                  placeholder="Username"
                  className="w-full border-b border-gray-400 focus:border-primary outline-none py-2 text-sm md:text-base"
                />
                <ErrorMessage
                  name="username"
                  component="p"
                  className="text-red-500 text-sm"
                />
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full border-b border-gray-400 focus:border-primary outline-none py-2 text-sm md:text-base"
                />
                <ErrorMessage
                  name="password"
                  component="p"
                  className="text-red-500 text-sm"
                />

                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-primary text-white px-6 py-2 rounded hover:bg-[#DB3333] transition-colors duration-300"
                  >
                    {isSubmitting ? "Logging in..." : "Login"}
                  </button>
                  <a href="#" className="text-primary text-sm hover:underline">
                    Forget Password?
                  </a>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: { fontSize: "14px" },
        }}
      />
    </>
  );
};

export default Login;
