<template>
    <v-list dense>
        <template v-for="(link, i) in links">
            <v-list-item
                    :key="i"
                    :to="link.to"
                    active-class="blue white--text"
                    link
                    v-if="!link.sub_links"
            >
                <v-list-item-action>
                    <v-icon>{{ link.icon }}</v-icon>
                </v-list-item-action>
                <v-list-item-title v-text="link.title"/>
            </v-list-item>
            <v-list-group :key="link.title" no-action v-else>
                <template v-slot:activator>
                    <v-list-item-action>
                        <v-icon>{{ link.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-title v-text="link.title"/>
                </template>
                <v-list-item
                        :key="sublink.title"
                        :to="sublink.to"
                        active-class="blue white--text"
                        v-for="sublink in link.sub_links"
                >
                    <v-list-item-title v-text="sublink.title"/>
                </v-list-item>
            </v-list-group>
        </template>
    </v-list>
</template>

<script>
    export default {
        name: "MenuDemo",
        data() {
            return {
                drawer: true,
                links: [
                    {
                        title: 'Home', icon: 'mdi-home', to: '/',
                    },
                ],
                mini: true,
            }
        },
    }
</script>

<style scoped>

</style>
