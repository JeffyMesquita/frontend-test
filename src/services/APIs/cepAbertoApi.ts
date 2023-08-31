import axios, { AxiosProxyConfig } from "axios";

const proxy: AxiosProxyConfig = {
  host: "https://www.cepaberto.com/api/v3/",
  port: 8080,
};

const cepAbertoApi = axios.create({
  baseURL: "https://www.cepaberto.com/api/v3/",
  proxy: proxy,
});

cepAbertoApi.interceptors.request.use((config) => {
  config.headers[
    "Authorization"
  ] = `Token token=${process.env.NEXT_PUBLIC_CEP_ABERTO_API_KEY}`;
  config.headers["Content-Type"] = "application/json";

  return config;
});

export { cepAbertoApi };
