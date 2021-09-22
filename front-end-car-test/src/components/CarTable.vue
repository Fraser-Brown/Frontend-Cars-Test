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
    sort-by="model"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item, index }">
      <v-btn @click="editItem(item, index)">edit</v-btn>
      <v-btn @click="deleteItem(index)">delete</v-btn>
    </template>
  </v-data-table>
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
                    value: 'make',
                },
                { text: 'model', value: 'model' },
                { text: 'Year', value: 'year' },
                { text: 'Colour', value: 'colour' },
                { text: 'Actions', value: 'actions'}
                ],
            items : [],
            newMake: '',
            newModel: '',
            newYear: '',
            newColour: '',
            showEditModal: false
        }),
        mounted(){
            console.log('hello')
            this.items = JSON.parse(localStorage.getItem('tableContents')) || [];
        },
        methods : {
            submitCar(){
                var newCar = {
                    make : this.newMake,
                    model : this.newModel,
                    year : this.newYear,
                    colour : this.newColour,
                    actions : ['remove']
                }
                this.items.push(newCar)
                localStorage.setItem("tableContents", JSON.stringify(this.items));
                this.resetForm();
            },
            editItem(item, index){
                console.log(item, index)

            },
            deleteItem(index){
                console.log(index)
                this.items.splice(index, 1);
                console.log(this.items)
                localStorage.setItem("tableContents", JSON.stringify(this.items));
            },
            resetForm(){
                this.newMake = ''
                this.newModel = ''
                this.newYear =''
                this.newColour = ''
            }
        }
    }
</script>