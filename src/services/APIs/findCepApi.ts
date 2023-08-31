import axios from "axios";

const findCepApi = axios.create({
  baseURL: "https://example.api.findcep.com/v1/endereco/pesquisa/",
});

findCepApi.interceptors.request.use((config) => {
  config.headers["Content-Type"] = "application/json";
  config.headers["Referer"] = "example.com";
  config.auth = {
    username: "example",
    password: "E1NHRO71JEONCF",
  };

  return config;
});

export { findCepApi };
