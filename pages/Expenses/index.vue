<template>
  <v-row class="py-5">
    <v-col cols="12">
        <v-card class="rounded-xl ma-0 py-4 px-0" style="box-shadow: 0px 24px 30px #959ea51a">
        <v-data-table :headers="headers" :items="data" sort-by="amount" showSelect checkbox-color="grey lighten-1">
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title class="d-flex">
                <v-img
                  src="svgs/icon.svg"
                  max-width="fit-content"
                  height="fit-content"
                  class="mr-2"
                  contain
                ></v-img>
                <span class="pl-3 darkBlue-heading-text subHeadingFontSize"
                  >Expense List</span
                >
              </v-toolbar-title>
              <v-spacer></v-spacer>
              <v-dialog v-model="dialog" max-width="500px">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="primary"
                    fab
                    elevation="0"
                    dark
                    small
                    class="mb-2"
                    v-bind="attrs"
                    v-on="on"
                  >
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                </template>
          
                <v-card>
                  <v-card-title>
                    <span class="text-h5">{{ formTitle }}</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.name"
                            label="Customer Name"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.amount"
                            label="Amount"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.date"
                            label="Due Date"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.status"
                            label="Status"
                          >
                        </v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.id"
                            label="id"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="close">
                      Cancel
                    </v-btn>
                    <v-btn color="blue darken-1" text @click="save">
                      Save
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <v-dialog v-model="dialogDelete" max-width="500px">
                <v-card>
                  <v-card-title class="text-h5"
                    >Are you sure you want to delete this field?</v-card-title
                  >
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="closeDelete"
                      >Cancel</v-btn
                    >
                    <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                      >OK</v-btn
                    >
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-toolbar>
          </template>
          <template v-slot:item.actions="{ item }">
            <v-icon small class="mr-2" @click="editItem(item)">
              mdi-pencil
            </v-icon>
            <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
          </template>
          <template v-slot:no-data>
            <v-btn color="primary" @click="initialize"> Reset </v-btn>
          </template>
        </v-data-table>
      </v-card>
      </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'ExpensesPage',
  data() {
    return {
      dialog: false,
      dialogDelete: false,
      headers: [
      { text: 'ID', value: 'id' },  
      {
          text: 'Customer Name',
          value: 'name',
        },
        { text: 'Amount', value: 'amount' },
        { text: 'Due Date', value: 'date' },
        { text: 'Status', value: 'status' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      data: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        amount: 0,
        date: 0,
        status: 0,
        id: 0,
      },
      defaultItem: {
        name: '',
        amount: 0,
        date: 0,
        status: 0,
        id: 0,
      },
    }
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New' : 'Edit'
    },
  },

  watch: {
    dialog(val) {
      val || this.close()
    },
    dialogDelete(val) {
      val || this.closeDelete()
    },
  },

  created() {
    this.initialize()
  },

  methods: {
    initialize() {
      this.data = [
        {
          id: 1001,
          name: 'Basil Faheem',
          amount: '250,00 AED',
          date: '12-09-2022',
          status: 'Paid',
        },
        {
          id: 1002,
          name: 'Basil Faheem',
          amount: '500,00 AED',
          date: '12-09-2022',
          status: 'In Proccess',
        },
        {
          id: 1003,
          name: 'Basil Faheem',
          amount: '900,00 AED',
          status: 'Transfered',
        },
        {
          id: 1001,
          name: 'Basil Faheem',
          amount: '250,00 AED',
          status: 'Paid',
        },
        {
          id: 1002,
          name: 'Basil Faheem',
          amount: '500,00 AED',
          status: 'In Proccess',
        },
        {
          id: 1003,
          name: 'Basil Faheem',
          amount: '900,00 AED',
          status: 'Transfered',
        },
        {
          id: 1001,
          name: 'Basil Faheem',
          amount: '250,00 AED',
          status: 'Paid',
        },
        {
          id: 1002,
          name: 'Basil Faheem',
          amount: '500,00 AED',
          status: 'In Proccess',
        },
        {
          id: 1003,
          name: 'Basil Faheem',
          amount: '900,00 AED',
          status: 'Transfered',
        },
        {
          id: 1001,
          name: 'Basil Faheem',
          amount: '250,00 AED',
          status: 'Paid',
        },
        {
          id: 1002,
          name: 'Basil Faheem',
          amount: '500,00 AED',
          status: 'In Proccess',
        },
        {
          id: 1003,
          name: 'Basil Faheem',
          amount: '900,00 AED',
          status: 'Transfered',
        },
        {
          id: 1003,
          name: 'Basil Faheem',
          amount: '900,00 AED',
          status: 'Transfered',
        },
        {
          id: 1003,
          name: 'Basil Faheem',
          amount: '900,00 AED',
          status: 'Transfered',
        },
        {
          id: 1003,
          name: 'Basil Faheem',
          amount: '900,00 AED',
          status: 'Transfered',
        },
        {
          id: 1003,
          name: 'Basil Faheem',
          amount: '900,00 AED',
          status: 'Transfered',
        },
        {
          id: 1003,
          name: 'Basil Faheem',
          amount: '900,00 AED',
          status: 'Transfered',
        },
        {
          id: 1003,
          name: 'Basil Faheem',
          amount: '900,00 AED',
          status: 'Transfered',
        },
        {
          id: 1003,
          name: 'Basil Faheem',
          amount: '900,00 AED',
          status: 'Transfered',
        },
        {
          id: 1003,
          name: 'Basil Faheem',
          amount: '900,00 AED',
          status: 'Transfered',
        },
      ]
    },

    editItem(item) {
      this.editedIndex = this.data.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem(item) {
      this.editedIndex = this.data.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm() {
      this.data.splice(this.editedIndex, 1)
      this.closeDelete()
    },

    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete() {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.data[this.editedIndex], this.editedItem)
      } else {
        this.data.push(this.editedItem)
      }
      this.close()
    },

    getStatus(status) {
      if(status === 'Paid') return 'green'
      else if(status === 'In Process') return 'orange'
      else return 'info'
    },
  },
}
</script>

<style>
  .v-data-footer .v-data-footer__select {
    color: red;
    display: none;
  }
  .v-data-footer .v-data-footer__pagination {
    color: red;
    display: none;
  }
  .v-data-footer {
    display: flex;
    justify-content: end;
    padding: 20px 60px 5px 0px;
  }
  .customStatus.theme--dark.v-chip:not(.v-chip--active) {
    align-items: center;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
  }
</style>