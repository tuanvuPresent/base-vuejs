import axiosinstance from "./clientAPI";

export default function useExampleAPI() {
    async function postExampleData(data: any) {
        try {
            const res = await axiosinstance.post('/api/example', data);
            if (res.status === 200) {
                return res.data
            } else {
                return []
            }
        } catch (error) {
            console.error(error);
        }
    }

    async function getExampleData() {
        try {
            const res = await axiosinstance.get('/api/example');
            if (res.status === 200) {
                return res.data
            } else {
                return
            }
        } catch (error) {
            console.error(error);
        }
    }

    async function getDetailExampleData(id: string) {
        try {
            const res = await axiosinstance.get(`/api/example/${id}`);
            if (res.status === 200) {
                return res.data
            } else {
                return
            }
        } catch (error) {
            console.error(error);
        }
    }

    async function putExampleData(id: string, data: any) {
        try {
            const res = await axiosinstance.put(`/api/example/${id}`, data);
            if (res.status === 200) {
                return res.data
            } else {
                return
            }
        } catch (error) {
            console.error(error);
        }
    }

    async function deleteExampleData(id: string) {
        try {
            const res = await axiosinstance.delete(`/api/example/${id}`)
            if (res.status === 200) {
                return res.data
            } else {
                return
            }
        } catch (error) {
            console.error(error);
        }
    }

    return {
        postExampleData, getExampleData, getDetailExampleData, putExampleData, deleteExampleData
    }
}