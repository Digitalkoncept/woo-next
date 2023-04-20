import React from 'react'
import AuthModalpage from "../components/AuthModalpage"
import UnAuthcomponent from "../components/UnAuthcomponent"
import Layout from '../components/Layout'
const login = () => {
  return (
      <>
      <Layout>
        <UnAuthcomponent>
        <AuthModalpage/>
        </UnAuthcomponent>
      </Layout>
      </> 
    
  )
}

export default login
