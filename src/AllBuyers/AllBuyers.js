import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllBuyers = () => {


    const {
        data: Buyers = [],
        refetch,
        isLoading,
      } = useQuery({
        queryKey: ["Buyers"],
        queryFn: async () => {
          const res = await fetch(`http://localhost:5000/admin/Buyers`, {
            method: "GET",
            headers: {
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
          });
          const data = await res.json();
          return data;
        },
      });

console.log(Buyers)

const handleDeletebuyer=(buyer)=>{
    fetch(`http://localhost:5000/admin/delete/${buyer._id}`,{
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


    return (
        <div>
            This is All Buyers;
            {
                Buyers.map(buyer=><div key={buyer._id}>
                
                <h1>{buyer.name}</h1>
                <h1>{buyer.email}</h1>
                {
                    buyer.isverified && <div> verified</div>
                }
                 {
                    !buyer.isverified && <div> not  verified</div>
                }
                <button onClick={()=>handleDeletebuyer(buyer)} className='btn sbtn-primary'>Delete</button>
             

                </div>)
            }
        </div>
    );
};

export default AllBuyers;