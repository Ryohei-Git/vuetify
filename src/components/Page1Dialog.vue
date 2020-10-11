<template>
  <v-row justify="center">
    <v-btn color="primary" class="mb-2" @click="dialog = true">登録</v-btn>
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
          <v-btn color="secondary" elevation="4" @click="saveData">確定</v-btn>
          <v-btn color="success" elevation="4" @click="resetData">キャンセル</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    valid: true,
    ageList: ["0-10", "11-20", "21-30","31-40", "41-50", "51-60", "60+"],
    skillList: [
      "スキー",
      "アイスホッケー",
      "サッカー",
      "バスケットボール",
      "ホッケー",
      "読む",
      "書く",
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
    //バリデーションチェックを行う
    validate() {
      let valiCheckResult = this.$refs.form.validate();
      return valiCheckResult;
    },
    saveData: function() {
        console.log(this.inputForm)
      if (this.validate()) {
        this.dialog = false;
        this.$emit("save-inputform", this.inputForm);
      }
    },
    resetData: function() {
      this.dialog = false;
    }
  }
};
</script>