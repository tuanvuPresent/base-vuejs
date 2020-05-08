<template>
    <v-card>
        <v-card-text class="user-list">
            <v-row>
                <v-col cols="4">
                    <v-text-field label="name" v-model="name"></v-text-field>
                </v-col>
                <v-col class="align-center" cols="2">
                    <v-btn @click="addUser(name,age)" color="primary">ADD</v-btn>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="4">
                    <v-text-field label="age" v-model="age"></v-text-field>
                </v-col>
            </v-row>

            <v-data-table
                    :headers="headerUser"
                    :items="userList"
            >
                <template v-slot:body="{ items }">
                    <tr :key="item.id" v-for="item in items">
                        <td class="text-start">{{ item.name }}</td>
                        <td class="text-start">{{ item.age }}</td>
                        <td>
                            <v-btn @click="deleteItem(item.id)" color="primary" small>
                                delete
                            </v-btn>
                        </td>
                        <td>
                            <v-btn @click="updateItem(item.id,name,age)" color="primary" small>
                                update
                            </v-btn>
                        </td>
                    </tr>
                </template>
            </v-data-table>
        </v-card-text>
    </v-card>
</template>

<script lang="ts">
    import {computed, createComponent, onMounted,} from "@vue/composition-api";
    import user from "@/firebase/user";

    export default createComponent({
        setup() {
            const headerUser = computed(() => user.headerUser)
            let userList = computed(() => (user.userList.value))

            let name = ""
            let age = 0

            const addUser = (name: string, age: number) => {
                user.addUser(name, age)
            }

            const deleteItem = (id: string) => {
                user.deleteUser(id)
            }

            const updateItem = (id: string, name: string, age: number) => {
                user.updateUser(id, name, age)
            }

            onMounted(() => {
                user.getUser()
            });
            return {
                addUser,
                deleteItem,
                updateItem,
                userList,
                headerUser,
                name,
                age,
            };

        },

        components: {}
    });
</script>

<style lang="scss" scoped>
    /*@import "";*/
    .user-list {
        background-color: #09eaea;
    }
</style>
