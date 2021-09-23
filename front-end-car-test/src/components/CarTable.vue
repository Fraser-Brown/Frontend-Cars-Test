<template>
    <div style="margin: 20px 20px 20px 20px">
      <EditModal 
        v-if="showEditModal" 
        :editedItem="editedItem" 
        v-on:closeModal="closeModal()"
        v-on:updateEntry="updateEntry($event)">
        </EditModal>
        <v-form id="newEntry">
            <h2>Create new Entry </h2>
            <v-text-field label='Make' v-model="newMake" id="entryMake"></v-text-field>
            <v-text-field label='Model' v-model="newModel" id="entryModel"></v-text-field>
            <v-text-field label='Year' v-model="newYear" id="entryYear"></v-text-field>
            <v-text-field label='Colour' v-model="newColour" id="entryColour"></v-text-field>
            <v-btn @click="submitCar()" id="submitButton">Submit</v-btn>
        </v-form>
        <v-spacer></v-spacer>
        <h2> Search </h2>
        <v-text-field
        v-model="searchTerm"
        id="searchBar"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
      <v-spacer></v-spacer>
      <h2> Table </h2>
   <v-data-table
    :headers="headers"
    :items="items"
    :search="searchTerm"
    sort-by="model"
    class="elevation-1"
    id="carTable"
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
import EditModal from './editModal';

    export default {
        name: 'CarTable',
        components: {
          EditModal,
        },
        data : () => ({
            headers: [
                { text: 'Make', align: 'start', value: 'make'},
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
            showEditModal: false,
            editedItem: null,
            editedIndex: -1,
            searchTerm: ''
        }),
        mounted(){
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
                this.editedItem = item;
                this.showEditModal = true;
                this.editedIndex = index;
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
            },
            closeModal(){
              this.showEditModal = false
            },
            updateEntry(item){
              this.items[this.editedIndex] = item;
              localStorage.setItem("tableContents", JSON.stringify(this.items));
              this.closeModal()
            }
        }
    }
</script>