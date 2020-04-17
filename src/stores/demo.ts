import {reactive} from "@vue/composition-api";
import axios from "axios";
import router from "@/router/routers";

export default function demoStore() {
    type state = {};
    const state = reactive({
        loading: false,
        demoError: {
            status: 200
        },
        data: [
            {'a': 1, 'b': 2},
            {'a': 1, 'b': 2},
            {'a': 1, 'b': 2}
        ]
    });

    const axiosinstance = axios.create({
        baseURL: process.env.VUE_APP_API_SERVER
    });

    axiosinstance.defaults.timeout = 3500;
    axiosinstance.interceptors.response.use(
        function (response) {
            // 200 OK
            // console.log("INSTANCE-response", response);
            return response;
        },
        function (err) {
            const isTimeout = err.code === "ECONNABORTED";
            if (isTimeout) {
                state.loading = false;
                router.push("/timeout-error");
                return err;
            }
            if (!err.response) {
                state.loading = false;
                router.push("/network-error");
                return err;
            } else {
                state.loading = false;
                state.demoError = err.response;
            }
        }
    );

    return {
        get loading() {
            return state.loading;
        },

        get demoError() {
            return state.demoError;
        },
        get data() {
            return state.data;
        },
    }
}

export type Demo = ReturnType<typeof demoStore>;
