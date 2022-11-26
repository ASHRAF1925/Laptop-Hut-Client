import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllSellers = () => {


    const {
        data: sellers = [],
        refetch,
        isLoading,
      } = useQuery({
        queryKey: ["sellers"],
        queryFn: async () => {
          const res = await fetch(`http://localhost:5000/admin/sellers`, {
            method: "GET",
            headers: {
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
          });
          const data = await res.json();
          return data;
        },
      });

console.log(sellers)

const handleDeleteSeller=(seller)=>{
    fetch(`http://localhost:5000/admin/delete/${seller._id}`,{
        method:'DELETE',
        headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
       
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        toast.success("Deleted Successfully")
        
        refetch();
    })
}
const handleVerifySeller=(seller)=>{
    fetch(`http://localhost:5000/admin/verify/${seller._id}`,{
        method:'put',
        headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
       
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        toast.success("Verified Successfully")
        
        refetch();
    })
}

    return (
        <div>
            This is All Sellers;
            {
                sellers.map(seller=><div key={seller._id}>
                
                <h1>{seller.name}</h1>
                <h1>{seller.email}</h1>
                {
                    seller.isverified && <div> verified</div>
                }
                 {
                    !seller.isverified && <div> not  verified</div>
                }
                <button onClick={()=>handleDeleteSeller(seller)} className='btn sbtn-primary'>Delete</button>
                <button onClick={ ()=> handleVerifySeller(seller)} className='btn sbtn-primary m-10'>Verify</button>

                </div>)
            }
        </div>
    );
};

export default AllSellers;