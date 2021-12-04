import axios from "axios";

const axiosinstance = axios.create({ baseURL: process.env.VUE_APP_API_ROOT });
axiosinstance.defaults.timeout = 3500;
axiosinstance.interceptors.response.use(function (response) {
    return response;
}, function (err) {
    const isTimeout = err.code === "ECONNABORTED";
    if (isTimeout) {
        // router.push("/timeout-error");
        return err;
    }
    if (!err.response) {
        // router.push("/network-error");
        return err;
    } else {
        return err;
    }
});
export default axiosinstance