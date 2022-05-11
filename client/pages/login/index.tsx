import { Form, Formik } from "formik";
import InputField from "../../components/formui/inputfield";
import {
  useLoginMutation,
  useRegisterMutation,
} from "../../src/generated/graphql";
import { toErrorMap } from "../../utils/toErrorMap";
import { useRouter } from "next/router";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../../utils/createUrqlClient";
import Layout from "../../components/layout";
import Link from "next/link";
import Button from "../../components/formui/button";
import Button2 from "../../components/formui/button2";

const Login = () => {
  const router = useRouter();
  const [, register] = useRegisterMutation();
  const [, login] = useLoginMutation();

  return (
    <Layout>
      <div className="items-center justify-center w-11/12 text-center flex">
        <div className="bg-alternative flex rounded-2xl shadow-2xl w-11/12 max-w-4xl">
          {/* Register */}
          <div className=" w-3/5 p-5 bg-primary rounded-tl-2xl rounded-bl-2xl">
            <div className="text-left font-bold text-alternative">
              Linze-Account
            </div>
            <div className="py-4">
              {/* py-över 6 skapar whitespace buggen */}
              <h2 className="text-3xl font-bold text-alternative my-3">
                Sign in to Account
              </h2>
              <div>
                {/* GOOGLE AUTH */}
                <img
                  src="/icons/google.png"
                  alt=""
                  width={50}
                  height={50}
                  className="mx-auto border-2 rounded-2xl border-alternative hover:border-primary cursor-pointer"
                />
              </div>
              <div className="py-10">
                <h2 className="text-3xl font-bold text-alternative my-3">
                  Sign up
                </h2>
                <div>
                  {/* GOOGLE AUTH */}
                  <img
                    src="/icons/google.png"
                    alt=""
                    width={50}
                    height={50}
                    className="mx-auto border-2 rounded-2xl border-alternative hover:border-primary cursor-pointer"
                  />
                </div>
                <p className="text-alternative my-2">
                  Or use your email account
                </p>

                <div className="flex flex-col items-center">
                  <Formik
                    initialValues={{ email: "", username: "", password: "" }}
                    onSubmit={async (values, { setErrors }) => {
                      const response = await register({ options: values });
                      if (response.data?.register.errors) {
                        setErrors(toErrorMap(response.data.register.errors));
                      } else if (response.data?.register.user) {
                        // worked
                        router.push("/");
                      }
                    }}
                  >
                    {({ isSubmitting }) => (
                      <Form>
                        <InputField
                          name="username"
                          placeholder="username"
                          label="Username"
                        />
                        <InputField
                          name="email"
                          placeholder="email"
                          label="Email"
                        />
                        <InputField
                          name="password"
                          placeholder="password"
                          label="Password"
                          type="password"
                        />
                        <button className="bg-alternative" type="submit">
                          Register
                        </button>
                      </Form>
                    )}
                  </Formik>

                  <div className="flex w-64 mb-5 text-xs justify-between text-alternative">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        name="remember"
                        className="mr-2 cursor-pointer"
                      />
                      Remember me
                    </label>
                    <Link href="/forgot-password">
                      <a>Forgot Password?</a>
                    </Link>
                  </div>
                  {/* <Button text="Sign in" link="/" /> */}
                </div>
              </div>
            </div>

            <div className="w-2/5 p-5 bg-alternative rounded-tr-2xl rounded-br-2xl py-36 px-12">
              {/* Login */}
              <h2 className="text-3xl font-bold text-primary my-3">Sign in</h2>
              <Formik
                initialValues={{ usernameOrEmail: "", password: "" }}
                onSubmit={async (values, { setErrors }) => {
                  const response = await login(values);
                  if (response.data?.login.errors) {
                    setErrors(toErrorMap(response.data.login.errors));
                  } else if (response.data?.login.user) {
                    // worked
                    if (typeof router.query.next === "string") {
                      router.push(router.query.next);
                    } else {
                      router.push("/");
                    }
                  }
                }}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <InputField
                      name="usernameOrEmail"
                      placeholder="username or email"
                      label="Username or Email"
                    />
                    <InputField
                      name="password"
                      placeholder="password"
                      label="Password"
                      type="password"
                    />
                    <button className="bg-primary" type="submit">
                      Login
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient)(Login);

// export default Login;
