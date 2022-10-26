<template>
    <v-row>
        <v-col cols="5">
            <v-card class="rounded-xl" style="box-shadow: 0px 24px 30px #959ea51a">
            <v-card-title>
                <v-icon class="mr-3" large color="info">mdi-alarm</v-icon>
                <span>Create New Invoice</span>
            </v-card-title>
            <v-card-text>
                <v-card class="rounded grey lighten-1">
                    <v-card-title>
                        <v-icon class="mr-3" color="info">mdi-alarm</v-icon>
                <span style="font-size:medium !important">Customer Information</span>
                <v-spacer></v-spacer>
                <v-icon color="success">mdi-plus</v-icon>
                    </v-card-title>
                    <v-card-text>
                        
                    </v-card-text>
                </v-card>
            </v-card-text>
            </v-card>
        </v-col>
        <v-col cols="7"></v-col>
    </v-row>
</template>

<script>
export default {
    name:'addnewinv',
    data() {
        return {}
    }

}
</script>

<style>

</style>