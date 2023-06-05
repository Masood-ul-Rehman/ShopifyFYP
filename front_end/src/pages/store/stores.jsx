import { useQuery } from "@tanstack/react-query";
import { getStores, startStore } from "../../api/stores";
import NoStore from "./noStorefound";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Stores = ({ refetchState }) => {
  const navigate = useNavigate();
  const [storeid, setStoreId] = useState();

  const {
    data,
    isLoading,
    refetch: GetStores,
  } = useQuery({
    queryKey: ["getStores"],
    queryFn: getStores,
  });

  // if (storeid !== null || storeid !== null || storeid !== " "){
  //   const startStoreQuery = useQuery("startStore", startStore(storeid), enabled: false);
  // }
  const startStoreQuery = useQuery("startStore",  () => startStore(storeid), {enabled: false,});
  useEffect(() => {
    GetStores();
    startStoreQuery.refetch();
  }, [refetchState, storeid]);
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

  const handleStartStore = (id) => {
    // console.log(storeId);
    // startStoreQuery.refetch(storeId);
    setStoreId(id);
  }
  return (
    <div>
      {!isLoading ? (
        data?.data[0] ? (
          data?.data?.map((storeData) => {
            return (
              <div key={storeData._id}>
                <h1>Theme Name: {storeData.theme}</h1>
                <h1>Website Name: {storeData.name}</h1>
                <button onClick={() => handleStartStore(storeData._id)}>View website</button>
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
