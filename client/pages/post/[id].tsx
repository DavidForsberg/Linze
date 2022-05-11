import { withUrqlClient } from "next-urql";
import Layout from "../../components/layout";
import { createUrqlClient } from "../../utils/createUrqlClient";
import { useGetPostFromUrl } from "../../utils/useGetPostFromUrl";

const Post = () => {
  const [{ data, error, fetching }] = useGetPostFromUrl();

  if (fetching) {
    return (
      <Layout>
        <p>loading...</p>
      </Layout>
    );
  }

  if (!data?.post) {
    return (
      <Layout>
        <h1>Could not find post</h1>
      </Layout>
    );
  }

  return (
    <Layout>
      <div>
        <h1 className="text-3xl">{data.post.title}</h1>
        <p>{data.post.text}</p>
      </div>
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient)(Post);
