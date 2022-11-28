import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ReporteItems = () => {

    const {
        data: reportedItems = [],
        refetch,
        isLoading,
      } = useQuery({
        queryKey: ["reportedItems"],
        queryFn: async () => {
          const res = await fetch(`http://localhost:5000/admin/reportedItem`, {
            method: "GET",
            headers: {
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
          });
          const data = await res.json();
          return data;
        },
      });

console.log(reportedItems)
    return (
        <div>
            <h1>from reporte Items</h1>
        </div>
    );
};

export default ReporteItems;