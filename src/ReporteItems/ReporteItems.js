import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const ReporteItems = () => {
  const {
    data: reportedItems = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["reportedItems"],
    queryFn: async () => {
      const res = await fetch(
        `https://laptop-hut-server.vercel.app/admin/reportedItem`,
        {
          method: "GET",
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });

  console.log(reportedItems);

  const handleDeletebuyer = (buyer) => {
    fetch(
      `https://laptop-hut-server.vercel.app/admin/reported/delete/${buyer._id}`,
      {
        method: "DELETE",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Deleted Successfully");

        refetch();
      });
  };

  return (
    <div>
      <div className="mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-8 ">
        {reportedItems.map((reportedItem) => (
          <div key={reportedItem._id}>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={reportedItem.photoURL} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{reportedItem.modelName}</h2>

                <button
                  onClick={() => handleDeletebuyer(reportedItem)}
                  className="btn sbtn-primary"
                >
                  Delete
                </button>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReporteItems;
