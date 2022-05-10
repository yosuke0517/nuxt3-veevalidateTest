<script setup lang="ts">
import { Form, SubmissionHandler } from "vee-validate";
import * as yup from "yup";
import { OptionalObjectSchema } from "yup/lib/object";
import TextInput from "~/components/TextInput.vue";

const formSchema = yup.object({
  organization: yup.string().required("テキストは必須項目です"),
});

// これvalueの型にいけるかと思ったけど補完（oraganizationが効かない）効かなかった
type TypeOfLangageShorthandKey = keyof typeof formSchema;
// TODO 型がわからん
const handleSubmit = (values, actions) => {
  console.log("values");
  console.log(values);

  console.log("actions");
  console.log(typeof actions);
};
</script>
<template>
  <div class="container">
    <Form :validation-schema="formSchema" @submit="handleSubmit">
      <span>入力</span>
      <TextInput
        :field-name="'organization'"
        :rule="formSchema.fields.organization"
      />
      <button type="submit">送信</button>
    </Form>
  </div>
</template>
