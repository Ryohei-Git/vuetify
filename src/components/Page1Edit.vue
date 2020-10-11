<template>
  <v-row justify="center">
    <v-btn small color="primary" class="mb-2" @click="openDialog" style="margin-top:8px">編集</v-btn>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">ユーザー情報入力フォーム</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="姓" :rules="nameRules" required v-model="inputForm.lastName"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="名" :rules="nameRules" required v-model="inputForm.firstName"></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="メールアドレス" required v-model="inputForm.mailAddress"></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="パスワード" type="password" required v-model="inputForm.password"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-select :items="ageList" label="年齢" required v-model="inputForm.age"></v-select>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-select :items="skillList" label="特技" v-model="inputForm.skill"></v-select>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="secondary" elevation="4" @click="updateData">更新</v-btn>
          <v-btn color="success" elevation="4" @click="resetData">キャンセル</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
// Pege1の編集ボタンのコンポーネント
export default {
  props: {
    PersonalList: {
      type: Array
    },
    Index: {
      type: Number
    }
  },
  data: () => ({
    dialog: false,
    valid: true,
    ageList: ["0-18", "19-30", "31-59", "60+"],
    skillList: [
      "スキー",
      "アイスホッケー",
      "サッカー",
      "バスケットボール",
      "ホッケー",
      "読書",
      "作文",
      "コーディング"
    ],
    inputForm: {
      lastName: "",
      firstName: "",
      mailAddress: "",
      password: "",
      age: "",
      skill: ""
    },
    nameRules: [v => !!v || "入力してください"]
  }),
  methods: {
    openDialog: function() {
      this.dialog = true;
      this.inputForm.lastName = this.PersonalList[this.Index].lastName;
      this.inputForm.firstName = this.PersonalList[this.Index].firstName;
      this.inputForm.mailAddress = this.PersonalList[this.Index].mailAddress;
      this.inputForm.password = this.PersonalList[this.Index].password;
      this.inputForm.age = this.PersonalList[this.Index].age;
      this.inputForm.skill = this.PersonalList[this.Index].skill;
    },
    //バリデーションチェックを行う
    validate() {
      let valiCheckResult = this.$refs.form.validate();
      return valiCheckResult;
    },
    updateData: function() {
      if (this.validate()) {
        this.dialog = false;
        this.PersonalList[this.Index].lastName = this.inputForm.lastName;
        this.PersonalList[this.Index].firstName = this.inputForm.firstName;
        this.PersonalList[this.Index].name = this.inputForm.lastName + this.inputForm.firstName;
        this.PersonalList[this.Index].mailAddress = this.inputForm.mailAddress;
        this.PersonalList[this.Index].password = this.inputForm.password;
        this.PersonalList[this.Index].age = this.inputForm.age;
        this.PersonalList[this.Index].skill = this.inputForm.skill;
      }
    },
    resetData: function() {
      this.dialog = false;
    }
  }
};
</script>