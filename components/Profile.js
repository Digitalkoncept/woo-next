import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import  supabase  from "../lib/supabase.js";
import { useCallback } from "react";

export default function Profile() {
    const { data: session, status,loading } = useSession();
    const userid = session?.user.id;
    const [name, setName] = useState(session?.user.name || '');
    const [email, setEmail] = useState(session?.user.email || '');
  
    // useEffect(() => {
    //   if (!session) router.push('/login');
    // }, [session]);
    
    // const handleUpdateProfile = useCallback(async () => {
    //   const { data, error } = await supabase
    //     .from("users")
    //     .update({ name: name, email: email })
    //     .eq("id", userid);
  
    //   if (error) console.log(error);
    //   if (data) alert("Profile updated successfully!");
    // }, [userid, name, email]);

    const handleUpdateProfile = async (event) => {
      event.preventDefault();
      try {
        const response = await fetch('/api/user', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email,userid,session }),
        });
        if (response.ok) 
          return response.json();
      } catch (error) {
        console.log(error)
        console.log('request failed')
      }
    };
  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleUpdateProfile}>Update Profile</button>
    </div>
  );
}
