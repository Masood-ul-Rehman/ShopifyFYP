import { useQuery } from "@tanstack/react-query";
import { getStores, startStore } from "../../api/stores";
import NoStore from "./noStorefound";
import useEffect from "react";
const Stores = ({ refetchState }) => {
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
  const { isLoading: startLoading } = useQuery({
    queryKey: ["getStores"],
    queryFn: (id) => {
      startStore(id);
    },
    enabled: false,
  });
  return (
    <div>
      {data?.data[0] ? (
        data?.data?.map((storeData) => {
          return (
            <div>
              <h1>Theme Name: {storeData.theme}</h1>
              <h1>Website Name: {storeData.name}</h1>
              <button onClick={() => {}}>View website</button>
              <button>stop website</button>
              <button>admin dashboard</button>
            </div>
          );
        })
      ) : (
        <NoStore />
      )}
    </div>
  );
};
export default Stores;
