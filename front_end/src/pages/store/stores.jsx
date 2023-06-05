import { useQuery } from "@tanstack/react-query";
import { getStores, startStore } from "../../api/stores";
import NoStore from "./noStorefound";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import minmalistic  from "../../assets/images/minimal.png";
import flonee from "../../assets/images/flon.png";


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
  const startStoreQuery = useQuery(["startStore"],  () => startStore(storeid), {enabled: false,});
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

  const handleStartStore = (id) => {
    // console.log(storeId);
    // setStoreId(id);
    startStoreQuery.refetch({ storeid: id });
  }
  return (
    <div className="flex justify-between mx-8">
      {!isLoading ? (
        data?.data[0] ? (
          data?.data?.map((storeData) => {
            return (
              <div key={storeData._id} className="my-4 mx-8 p-8 shadow-lg">
                <div className="img w-full"><img className="w-full" src={storeData.theme !== "flonee" ? minmalistic : flonee} alt="" /></div>
                <div className="mt-4">
                <h1 className="font-poppins text-base">Theme Name: <b>{storeData.theme}</b></h1>
                <h1 className="font-poppins text-base">Store Name: <b>{storeData.name}</b></h1>
                </div>
                <div className="btns flex flex-col mt-8">
                <button className="p-2 rounded-lg bg-green-600 font-poppins text-base text-white" onClick={() => handleStartStore(storeData._id)}>View website</button>
                <button className="p-2 rounded-lg bg-red font-poppins text-base mt-3 text-white">stop website</button>
                <button className="p-2 rounded-lg bg-gray-800 font-poppins text-base mt-3 text-white"
                  onClick={() => {
                    viewDashboard(storeData.store_id);
                  }}
                >
                  admin dashboard
                </button>
                </div>
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
