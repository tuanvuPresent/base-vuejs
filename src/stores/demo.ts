import { reactive } from "@vue/composition-api";

export default function demoStore() {
    type state = {};
    const state = reactive({
        loading: false,
        demoError: {
            status: 200
        },
        data: [
            {
                'a': 1,
                'b': 2
            }, {
                'a': 1,
                'b': 2
            }, {
                'a': 1,
                'b': 2
            }
        ]
    });

    return {
        get loading() {
            return state.loading;
        },

        get demoError() {
            return state.demoError;
        },
        get data() {
            return state.data;
        }
    }
}

export type Demo = ReturnType<typeof demoStore>;
