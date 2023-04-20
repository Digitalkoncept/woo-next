import React from 'react'
import Link from 'next/link';
const card = (props) => {
  const { category } = props;
  return (
    <div>
      
{/* <div className="w-full max-w-sm bg-white rounded-lg shadow-md ">
    <a href="#">
        <img className="p-8 rounded-t-lg" src={category?.products?.edges?.[0]?.node?.image?.sourceUrl ?? ''} alt="product image" />
    </a>
    <div className="px-5 pb-5">
        <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
        </a>
        
        
    </div>
</div> */}

<div className="  pt-20 cursor-pointer">
<Link href={`/category/${category?.slug}`}>
  <div className=" bg-white  mx-auto shadow-md  rounded-md hover:shadow-xl transition duration-200 ">
    <img className="rounded-t-lg  h-[150px] w-[200px]  max-w-sm" src={category?.products?.edges?.[0]?.node?.image?.sourceUrl ?? ''} alt="" />
    <div className="py-4 px-8">
      <h1 className="hover:cursor-pointer mt-2 text-gray-900 font-semibold text-xl ">{category?.name.slice(0,10)}</h1>
    
    </div>
  </div>
  </Link>
</div>

    </div>
  )
}

export default card
