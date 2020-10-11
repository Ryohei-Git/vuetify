<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="personalList"
      class="elevation-1"
      :search="search"
      :custom-filter="filterOnlyCapsText"
      style="padding:20px;"
    >
      <template v-slot:top>
        <v-text-field v-model="search" label="検索" class="mx-4"></v-text-field>
      </template>
      <template v-slot:item.edit="{item}">
        <Page1Edit :PersonalList="personalList" :Index="personalList.indexOf(item)"></Page1Edit>
      </template>
      <template v-slot:item.delete="{ item }">
        <v-btn small color="success" @click="deleteItem(item)">削除</v-btn>
      </template>
    </v-data-table>
  </div>
</template>
<style>
.color-white {
  color: white !important;
}
</style>

<script>
import Page1Edit from "./Page1Edit.vue";
export default {
  components: {
    Page1Edit
  },
  props: {
    personalList: {
      type: Array
    }
  },
  data() {
    return {
      search: "",
      calories: ""
    };
  },
  computed: {
    headers() {
      return [
        {
          text: "名前",
          value: "name",
          align: "center"
        },
        {
          text: "メールアドレス",
          value: "mailAddress",
          align: "center"
        },
        {
          text: "パスワード",
          value: "password",
          align: "center"
        },
        {
          text: "年齢",
          value: "age",
          align: "center"
        },
        {
          text: "特技",
          value: "skill",
          align: "center"
        },
        {
          text: "編集",
          value: "edit",
          align: "center",
          sortable: false
        },
        {
          text: "削除",
          value: "delete",
          align: "center",
          sortable: false
        }
      ];
    }
  },
  methods: {
    filterOnlyCapsText(value, search) {
      return (
        value != null &&
        search != null &&
        typeof value === "string" &&
        value.toString().indexOf(search) !== -1
      );
    },
    deleteItem(item) {
      const index = this.personalList.indexOf(item);
      confirm("削除しますか？") && this.personalList.splice(index, 1);
    },
    editItem(item) {
      const index = this.personalList.indexOf(item);
      console.log(index);
    },
  }
};
</script>