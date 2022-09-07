<template>
  <div v-if="isHavePermission">
    <div class="pb-2">
      <button class="btn btn-primary" @click="directTo">{{ btnName }}</button>
    </div>
    <div class="w-100"></div>
  </div>
</template>

<script>
import TokenService from "@/services/token.service";

export default {
  props: ["btnName", "action", "type"],
  data() {
    return {
      havePermission: false,
    };
  },
  computed: {
    isHavePermission() {
      return (
        TokenService.getTokenInfo()[`${(this.action + this.type).toUpperCase()}`] !==
        undefined
      );
    },
  },
  methods: {
    directTo() {
      this.$router.push({ name: `user-${this.action}-${this.type}` });
    },
  },
};
</script>