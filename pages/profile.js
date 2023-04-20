import React from 'react'
import Authcomponent from "../components/Authcomponent";
import Profile from '../components/Profile';
export default function profile() {
  return (
    <div>
      <Authcomponent >
       <Profile/>
      </Authcomponent>
    </div>
  );
}