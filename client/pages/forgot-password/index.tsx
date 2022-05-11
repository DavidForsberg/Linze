import { Formik, Form } from "formik";
import { useState } from "react";
import InputField from "../../components/formui/inputfield";
import { useForgotPasswordMutation } from "../../src/generated/graphql";

const ForgotPassword = () => {
  const [complete, setComplete] = useState(false);
  const [, forgotPassword] = useForgotPasswordMutation();

  return (
    <Formik
      initialValues={{ email: "" }}
      onSubmit={async (values) => {
        await forgotPassword(values);
        setComplete(true);
      }}
    >
      {({ isSubmitting }) =>
        complete ? (
          <p>if an account with that email exists, we sent you an email!</p>
        ) : (
          <Form>
            <InputField
              name="email"
              placeholder="email"
              label="Email"
              type="email"
            />
            <button className="bg-primary" type="submit">
              forgot password
            </button>
          </Form>
        )
      }
    </Formik>
  );
};

export default ForgotPassword;
