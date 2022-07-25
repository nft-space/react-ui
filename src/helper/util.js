import axios from "axios";

// import global variables
import { REQUEST_DEBOUNCE_TIMEOUT_IN_MS } from "./globals";

axios.defaults.baseURL =
  "https://nft-space-http-web-ui-react-nu2qzjqzmq-uc.a.run.app";

export const axiosGetCall = (path, data = {}) => {
  return axios.get(path, { params: data });
};

export const axiosPostCall = (path, data = {}) => {
  return axios.post(path, data);
};

export const axiosPutCall = (path, data = {}) => {
  return axios.put(path, data);
};

export const getShortenedAddressString = (addressString) => {
  return `${addressString.slice(0, 3)} ... ${addressString.slice(-3)}`;
};

export const debounceRequests = (callback) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback.apply(this, args);
    }, REQUEST_DEBOUNCE_TIMEOUT_IN_MS);
  };
};

export const getTotalLengthOfAllListsInDictionary = (dict) => {
  let count = 0;
  for (const [, value] of Object.entries(dict)) {
    count += value.length;
  }
  return count;
};
