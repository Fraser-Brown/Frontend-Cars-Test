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
            headers: [
                {
                    text: 'Make',
                    align: 'start',
                    sortable: false,
                    value: 'make',
                },
                { text: 'model', value: 'model' },
                { text: 'Year', value: 'year' },
                { text: 'Colour', value: 'colour' },
                ],
            items : [],
            newMake: '',
            newModel: '',
            newYear: '',
            newColour: '',
        }),
        mounted(){
            console.log('hello')
            this.items = JSON.parse(localStorage.getItem('tableContents'));
        },
        methods : {
            submitCar(){
                var newCar = {
                    make : this.newMake,
                    model : this.newModel,
                    year : this.newYear,
                    colour : this.newColour,
                }
                this.items.push(newCar)
                localStorage.setItem("tableContents", JSON.stringify(this.items));
            }
        }
    }
</script>