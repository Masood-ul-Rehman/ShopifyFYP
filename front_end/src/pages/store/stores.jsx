import { useQuery } from "@tanstack/react-query";
import { getStores, startStore } from "../../api/stores";
import NoStore from "./noStorefound";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Stores = ({ refetchState }) => {
  const navigate = useNavigate();

  const {
    data,
    isLoading,
    refetch: GetStores,
  } = useQuery({
    queryKey: ["getStores"],
    queryFn: getStores,
  });
  useEffect(() => {
    GetStores();
  }, [refetchState]);
  // function stopServer(store){
  //   const stop = useQuery({
  //     queryKey: ["startStore",store],
  //     queryFn: (id) => {
  //       startStore(id);
  //     },
  //     enabled: false,
  //   });
  // }
  const viewDashboard = (storeId) => {
    localStorage.setItem("store", storeId);
    navigate(`/dashboard/${storeId}`);
  };
  return (
    <div>
      {!isLoading ? (
        data?.data[0] ? (
          data?.data?.map((storeData) => {
            return (
              <div key={storeData._id}>
                <h1>Theme Name: {storeData.theme}</h1>
                <h1>Website Name: {storeData.name}</h1>
                <button onClick={() => {}}>View website</button>
                <button>stop website</button>
                <button
                  onClick={() => {
                    viewDashboard(storeData.store_id);
                  }}
                >
                  admin dashboard
                </button>
              </div>
            );
          })
        ) : (
          <NoStore />
        )
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};
export default Stores;
