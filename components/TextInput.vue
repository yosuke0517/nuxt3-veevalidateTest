<script setup lang="ts">
import { useField } from "vee-validate";
import * as yup from "yup";

interface Props {
  fieldName: string;
  rule: object;
}

const rule = yup
  .string()
  .required()
  .min(8);

const props = withDefaults(defineProps<Props>(), {});

const { fieldName } = toRefs(props);

const { errorMessage, value: inputValue } = useField(fieldName, rule);
</script>

<template>
  <div class="TextInput">
    <input v-model="inputValue" type="text" />
    <span>{{ errorMessage }}</span>
  </div>
</template>
<style lang="scss" scoped>
.TextInput {
  input {
    width: 100%;
    height: 44px;
    padding: 0 12px;
    box-sizing: border-box;
    border: 1px solid gray;
    border-radius: 4px;
  }
}
</style>
