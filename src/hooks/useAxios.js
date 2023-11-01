import { useState } from "react";
import { API } from "../api/axiosWithAuth";
import { toast } from "react-toastify";

//ADIM 1:
export const REQ_TYPES = Object.freeze({
  GET: "get",
  POST: "post",
  PUT: "put",
  DELETE: "delete",
});

//ADIM 2:
export const useAxios = (initialValue = null) => {
  //ADIM 3:
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(initialValue);
  const [error, setError] = useState("");

  //ADIM 4:
  const doRequest = ({
    endpoint,
    reqType = REQ_TYPES.GET,
    payload,
    config,
  }) => {
    setLoading(true);
    API[reqType](endpoint, payload || config, payload && config) // axios instance
      .then((res) => {
        setData(res.data);
        setError("");
      })
      .catch((err) => {
        setError(err.message);
        setData(initialValue);
        toast.error(err.message);
      })
      .finally(() => setLoading(false));
  };

  //ADIM 5:
  return [doRequest, data, loading, error];
};
