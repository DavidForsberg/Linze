import { Formik, Form } from "formik";
import { withUrqlClient } from "next-urql";
import React, { useEffect } from "react";
import InputField from "../components/formui/inputfield";
import { useCreatePostMutation, useMeQuery } from "../src/generated/graphql";
import { createUrqlClient } from "../utils/createUrqlClient";
import { useRouter } from "next/router";
import Layout from "../components/layout";
import { useIsAuth } from "../utils/useIsAuth";

const CreatePost: React.FC<{}> = () => {
  const router = useRouter();
  useIsAuth();
  const [, createPost] = useCreatePostMutation();

  return (
    <Layout>
      <div>
        <Formik
          initialValues={{ title: "", text: "" }}
          onSubmit={async (values) => {
            const { error } = await createPost({ input: values });
            if (!error) {
              router.push("/");
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <InputField name="title" placeholder="title" label="Title" />
              <InputField name="text" placeholder="text" label="Text" />
              <button className="bg-primary" type="submit">
                create post
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient)(CreatePost);
