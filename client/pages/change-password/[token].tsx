import { Formik, Form } from "formik";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import InputField from "../../components/formui/inputfield";
import { toErrorMap } from "../../utils/toErrorMap";
import { useChangePasswordMutation } from "../../src/generated/graphql";
import { useState } from "react";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../../utils/createUrqlClient";

const ChangePassword: NextPage = () => {
  const router = useRouter();
  const [, changePassword] = useChangePasswordMutation();
  const [tokenError, setTokenError] = useState("");
  return (
    <Formik
      initialValues={{ newPassword: "" }}
      onSubmit={async (values, { setErrors }) => {
        const response = await changePassword({
          newPassword: values.newPassword,
          token:
            typeof router.query.token === "string" ? router.query.token : "",
        });
        if (response.data?.changePassword.errors) {
          const errorMap = toErrorMap(response.data.changePassword.errors);
          if ("token" in errorMap) {
            setTokenError(errorMap.token);
          }
          setErrors(errorMap);
        } else if (response.data?.changePassword.user) {
          // worked
          router.push("/");
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <InputField
            name="newPassword"
            placeholder="new password"
            label="New Password"
            type="password"
          />
          {tokenError ? <p>{tokenError}</p> : null}
          <button className="bg-primary" type="submit">
            change password
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default withUrqlClient(createUrqlClient)(ChangePassword);
