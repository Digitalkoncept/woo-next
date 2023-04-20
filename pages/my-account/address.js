import React from 'react'
import Layout from '../../components/Layout'
import Authcomponent from '../../components/Authcomponent'
import UserAddress from '../../components/UserAddress'
const address = () => {

  return (
    <Layout>
      <Authcomponent>
        <UserAddress/>
      </Authcomponent>
    </Layout>
  )
}

export default address
