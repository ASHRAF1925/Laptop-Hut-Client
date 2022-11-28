import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthContext/AuthProvider';
import OrdersCard from './OrdersCard/OrdersCard';

const MyOrder = () => {



    const user = useContext(AuthContext);

  const {
    data: orders= [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/buyer/orders`, {
        method: "GET",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });
  console.log(orders);
    return (
        <div>
            <h1>Thisis my orders</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
            {orders.map((order) => (
              <OrdersCard key={order._id} order={order}></OrdersCard>
            ))}
          </div>
        </div>
    );
};

export default MyOrder;