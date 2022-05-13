import { Form, Formik } from 'formik';
import InputField from '../../components/formui/inputfield';
import {
  useLoginMutation,
  useRegisterMutation,
} from '../../src/generated/graphql';
import { toErrorMap } from '../../utils/toErrorMap';
import { useRouter } from 'next/router';
import { withUrqlClient } from 'next-urql';
import { createUrqlClient } from '../../utils/createUrqlClient';
import Layout from '../../components/layout';
import Link from 'next/link';
import Button from '../../components/formui/button';
import Button2 from '../../components/formui/button2';

const Login = () => {
  const router = useRouter();
  const [, register] = useRegisterMutation();
  const [, login] = useLoginMutation();

  return (
    <Layout>
      <div className="items-center justify-center text-center md:flex md:w-11/12 w-full">
        <div className="rounded-2xl shadow-2xl md:w-11/12 md:max-w-4xl md:flex">
          {/* Register */}
          <div className="px-5 pt-5 bg-gradient-to-t from-bg to-alternative md:bg-gradient-to-r md:from-bg md:to-alternative md:rounded-tl-2xl md:rounded-bl-2xl md:w-3/5 md:pb-0 pb-8">
            <div className="text-left font-bold text-primary">
              Linze-Account
            </div>
            <div>
              <div className="md:pt-16 pt-4">
                <h2 className="text-3xl font-bold text-primary my-3">
                  Sign up
                </h2>
                <div>
                  {/* GOOGLE AUTH */}
                  <img
                    src="/icons/google.png"
                    alt=""
                    width={50}
                    height={50}
                    className="mx-auto border-2 rounded-2xl border-primary hover:border-primary cursor-pointer"
                  />
                </div>
                <p className="text-primary my-2 font-bold mb-4">
                  Or use your email account
                </p>

                <div className="flex flex-col items-center">
                  <Formik
                    initialValues={{ email: '', username: '', password: '' }}
                    onSubmit={async (values, { setErrors }) => {
                      const response = await register({ options: values });
                      if (response.data?.register.errors) {
                        setErrors(toErrorMap(response.data.register.errors));
                      } else if (response.data?.register.user) {
                        // worked
                        router.push('/');
                      }
                    }}
                  >
                    {() => (
                      <Form className="space-y-4 w-3/5">
                        <InputField
                          name="username"
                          placeholder="Username"
                          label=""
                          className="rounded px-4 py-1 placeholder:text-alternative focus:ring-2 ring-alternative outline-none"
                        />
                        <InputField
                          name="email"
                          placeholder="Email"
                          label=""
                          className="rounded px-4 py-1 placeholder:text-alternative focus:ring-2 ring-alternative outline-none"
                        />
                        <InputField
                          name="password"
                          placeholder="Password"
                          label=""
                          className="rounded placeholder:text-alternative focus:ring-2 ring-alternative outline-none mb-2 py-1 px-4"
                          type="password"
                        />
                        <button
                          className="bg-primary text-alternative rounded-2xl hover:bg-alternative hover:text-primary hover:ring-2 hover:ring-primary duration-100 font-bold md:py-2 md:px-8 py-1 px-6"
                          type="submit"
                        >
                          Register
                        </button>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
          {/* Sign in */}
          <div className="pt-5 bg-gradient-to-b from-bg to-alternative md:bg-gradient-to-r md:from-alternative md:to-alternative md:rounded-tr-2xl md:rounded-br-2xl md:w-2/5 md:pb-0 pb-8 md:px-5 px-24 md:border-l-2 border-l-0 border-l-primary">
            <div className="md:py-28 md:px-12 py-10">
              <h2 className="text-3xl font-bold text-primary align-top my-3">
                Sign in
              </h2>
              <div>
                {/* GOOGLE AUTH */}
                <img
                  src="/icons/google.png"
                  alt=""
                  width={50}
                  height={50}
                  className="mx-auto ring-2 rounded-2xl ring-primary hover:ring-0 cursor-pointer mb-6"
                />
              </div>
              <Formik
                initialValues={{ usernameOrEmail: '', password: '' }}
                onSubmit={async (values, { setErrors }) => {
                  const response = await login(values);
                  if (response.data?.login.errors) {
                    setErrors(toErrorMap(response.data.login.errors));
                  } else if (response.data?.login.user) {
                    // worked
                    if (typeof router.query.next === 'string') {
                      router.push(router.query.next);
                    } else {
                      router.push('/');
                    }
                  }
                }}
              >
                {() => (
                  <Form className="space-y-4">
                    <InputField
                      name="usernameOrEmail"
                      placeholder="Email or Username"
                      label=""
                      className="rounded px-4 py-1 placeholder:text-alternative focus:ring-2 ring-primary outline-none"
                    />
                    <InputField
                      name="password"
                      placeholder="Password"
                      label=""
                      className="rounded px-4 py-1 placeholder:text-alternative focus:ring-2 ring-primary outline-none mb-3"
                      type="password"
                    />
                    <button
                      className="bg-primary text-alternative rounded-2xl hover:bg-alternative hover:text-primary hover:ring-2 hover:ring-primary duration-100 font-bold md:py-2 md:px-8 py-1 px-6"
                      type="submit"
                    >
                      Login
                    </button>
                  </Form>
                )}
              </Formik>
              <div className="flex mb-5 text-xs justify-between text-primary mt-4">
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
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient)(Login);

// export default Login;
