import db from "@/firebase/db";
import {ref} from '@vue/composition-api';

let userList = ref([]);

const addUser = (name: string, age: number) => {
    db.ref('users').push({name: name, age: age})
        .then(() => {
            console.log('success')
        })
        .catch((error) => {
            console.log('error')
        })
}

const getUser = () => {
    db.ref('users/').on("value", function (response) {
        let result: any = []
        response.forEach((item) => {
            let temp = item.val()
            temp['id'] = item.key
            result.push(temp)
        });
        console.log(result)
        userList.value = result
    })
}

const updateUser = (id: string, name: string, age: number) => {
    db.ref('users').child(id).set({
        name: name,
        age: age
    })
        .then(() => {
            console.log('success')
        })
        .catch((error) => {
            console.log(error)
        })
}

const deleteUser = (id: string) => {
    db.ref('users').child(id).remove()
        .then(() => {
            console.log('success')
        })
        .catch((error) => {
            console.log(error)
        })
}

const headerUser = [
    {
        text: "name",
        value: "name",
        sortable: true,
        align: "start"
    },
    {
        text: "age",
        value: "age",
        sortable: true,
        align: "start"
    },
    {
        text: "",
        value: "delete",
        align: "start",
        sortable: false,
    },
    {
        text: "",
        value: "edit",
        align: "start",
        sortable: false,
    },
]

export default {
    getUser,
    addUser,
    deleteUser,
    updateUser,
    headerUser,
    userList
}
