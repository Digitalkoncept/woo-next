import React from 'react'
import Layout from "../../components/Layout"
import Authcomponent from "../../components/Authcomponent";
import UserAccount from '../../components/UserAccount';
const account = () => {
    
  return (
    <Layout>
      <Authcomponent>
        <UserAccount/>
      </Authcomponent>
    </Layout>
  )
}

export default account
