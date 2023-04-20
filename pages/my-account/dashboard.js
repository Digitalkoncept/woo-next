import React from "react";
import Layout from "../../components/Layout"
import Authcomponent from "../../components/Authcomponent";
import UserProfile from "../../components/UserProfile";
import { useSession } from 'next-auth/react';
const profile = () => {
  const { data: session, status } = useSession();
  const user = session?.user;
  return (
  <Layout>
  <Authcomponent>
  <UserProfile user={user}/>
  </Authcomponent>
  </Layout>
  );
};

export default profile;
