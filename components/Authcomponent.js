import { useRouter } from "next/router";
import { useEffect,useState } from "react";
import {getSession} from 'next-auth/react'

export default function Authcomponent({ children }) {
  const [loading, setLoading] = useState(true)
  

  const router = useRouter();
   useEffect(() => {
    const securePage = async () =>{
    const session = await getSession();
    if (!session) {
      router.push("/login");
    } else {
      setLoading(false)
    }
  }
  securePage()
  },[]);
  if (loading) {
    return <h2>Loading...</h2>
  }

  return <>{children}</>;
}
