<template>
  <div>
    <v-container fluid>
      <v-card class="pa-2" elevation="1" tile color="info">
        <v-row justify="center" style="margin:20px;">
          <h3>登録者情報</h3>
        </v-row>
        <Page1Dialog @save-inputform="showInputData" :dialog="dialog"></Page1Dialog>
      </v-card>
    </v-container>
    <v-container>
      <Page1Table :personal-list="personal"></Page1Table>
    </v-container>
  </div>
</template>
<script>
import Page1Dialog from "../components/Page1Dialog.vue";
import Page1Table from "../components/Page1Table.vue";

export default {
  components: {
    Page1Dialog,
    Page1Table
  },
  data() {
    return {
			dialog:false,
      personal: [
        {
					lastName:"山本",
					firstName:"太郎",
          name: "山本太郎",
          mailAddress: "xxxxxxxxx@gmail.co.jp",
          password: "123456",
          age: '24',
          skill: "サッカー"
        },
        {
					lastName:"田中",
					firstName:"太郎",
          name: "田中太郎",
          mailAddress: "xxxxxxxxx@gmail.co.jp",
          password: "123456",
          age: '24',
          skill: "野球"
        },
        {
					lastName:"鈴木",
					firstName:"太郎",
          name: "鈴木太郎",
          mailAddress: "xxxxxxxxx@gmail.co.jp",
          password: "123456",
          age: '24',
          skill: "バスケットボール"
        },
        {
					lastName:"佐藤",
					firstName:"太郎",
          name: "佐藤太郎",
          mailAddress: "xxxxxxxxx@gmail.co.jp",
          password: "123456",
          age: '24',
          skill: "ゴルフ"
        },
      ]
    };
  },
  methods: {		
    showInputData(inputData) {
      let data = {
				lastName:inputData.lastName,
				firstName:inputData.firstName,
        name: inputData.lastName + inputData.firstName,
        mailAddress: inputData.mailAddress,
        password: inputData.password,
        age: inputData.age,
        skill: inputData.skill
      };
      this.personal.push(data);
    }
  }
};
</script>