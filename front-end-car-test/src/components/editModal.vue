<template>
    <v-card>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <v-text-field
                v-model="updatedItem.make"
                label="Make"
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <v-text-field
                v-model="updatedItem.model"
                label="Model"
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <v-text-field
                v-model="updatedItem.year"
                label="Year"
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <v-text-field
                v-model="updatedItem.colour"
                label="Colour"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="blue darken-1"
          text
          @click="submit()"
        >
          Submit
        </v-btn>
        <v-btn
          color="blue darken-1"
          text
          @click="close()"
        >
          Cancel
        </v-btn>
      </v-card-actions>
    </v-card>           
</template>

<script>
    export default {
        name: 'EditModal',
        props: [
          'editedItem'
        ],
        data : () => ({
          updatedItem : {}
        }),
        mounted(){
          console.log(this.editedItem)
          this.updatedItem = this.editedItem;
        },
        methods : {
           close(){
             console.log('closing')
              this.$emit('closeModal');
           },
           submit(){
              this.$emit('updateEntry', this.updatedItem);
           }

        }
    }
</script>