import { Form, Formik } from "formik";
import { withUrqlClient } from "next-urql";
import { useRouter } from "next/router";
import InputField from "../../../components/formui/inputfield";
import Layout from "../../../components/layout";
import {
  usePostQuery,
  useUpdatePostMutation,
} from "../../../src/generated/graphql";
import { createUrqlClient } from "../../../utils/createUrqlClient";
import useGetIntId from "../../../utils/useGetIntId";

const EditPost = () => {
  const router = useRouter();
  const intId = useGetIntId();
  const [{ data, fetching }] = usePostQuery({
    pause: intId === -1,
    variables: {
      id: intId,
    },
  });
  const [, updatePost] = useUpdatePostMutation();
  if (fetching) {
    return (
      <Layout>
        <div>loading...</div>
      </Layout>
    );
  }

  if (!data?.post) {
    return (
      <Layout>
        <p>could not find post</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <div>
        <Formik
          initialValues={{ title: data.post.title, text: data.post.text }}
          onSubmit={async (values) => {
            await updatePost({ id: intId, ...values });
            router.push("/");
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <InputField name="title" placeholder="title" label="Title" />
              <InputField name="text" placeholder="text" label="Text" />
              <button className="bg-primary" type="submit">
                update post
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient)(EditPost);
