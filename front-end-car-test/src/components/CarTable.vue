<template>
    <div style="margin: 20px 20px 20px 20px">
        <v-form>
            <v-text-field label='Make' v-model="newMake"></v-text-field>
            <v-text-field label='Model' v-model="newModel"></v-text-field>
            <v-text-field label='Year' v-model="newYear"></v-text-field>
            <v-text-field label='Colour' v-model="newColour"></v-text-field>
            <v-btn @click="submitCar()">Submit</v-btn>
        </v-form>
    <v-data-table
        :headers="headers"
        :items="items"
        :items-per-page="5"
        class="elevation-1"
    ></v-data-table>
  </div>
</template>

<script>
    export default {
        name: 'CarTable',
        data : () => ({
            headers : ['Make', 'Model', 'Year', 'Colour'],
            items : [],
            newMake: '',
            newModel: '',
            newYear: '',
            newColour: '',
        }),
        mounted(){
            console.log('hello')
        },
        methods : {
            submitCar(){
                console.log(this.newMake);
            }
        }
    }
</script>