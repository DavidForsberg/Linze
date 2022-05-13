import { withUrqlClient } from "next-urql";
import { useEffect, useState } from "react";
import Layout from "../../components/layout";
import { useGetProfileQuery } from "../../src/generated/graphql";
import { createUrqlClient } from "../../utils/createUrqlClient";

const Profile = () => {
  const [{ data, fetching }] = useGetProfileQuery();
  const [formattedDate, formatDate] = useState("");

  useEffect(() => {
    if (data?.getProfile.created_at) {
      const date: string = new Date(
        parseInt(data.getProfile.created_at)
      ).toLocaleDateString("en-US");
      formatDate(date);
    }
  }, [data]);

  if (fetching) {
    return (
      <Layout>
        <p>loading...</p>
      </Layout>
    );
  }

  if (!data) {
    return (
      <Layout>
        <h1>Could not find user</h1>
      </Layout>
    );
  }

  return (
    <Layout>
      <div>
        <h1 className="text-3xl">{data.getProfile.username}</h1>
        <p>Created account on {formattedDate}</p>
      </div>
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient)(Profile);
