import React from 'react'
import Layout from '../../components/Layout'
import Authcomponent from '../../components/Authcomponent'
import UserOrder from '../../components/UserOrder'
const orders = () => {
  return (
   <Layout>
    <Authcomponent>
      <UserOrder/>
    </Authcomponent>
   </Layout>
  )
}

export default orders
