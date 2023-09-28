<template>
  <nav>
    <div>
      <p>hi (displayName)</p>
      <p class="email">currently logged in as...'email'</p>
    </div>
    <button class="pointer" @click="handleClick">Logout</button>
  </nav>
</template>
<script>
import useLogout from "@/composables/useLogout";
export default {
  setup() {
    const { logout, error } = useLogout();
    const handleClick = async () => {
      await logout();
      if (!error.value) {
        console.log("user logged out");
      }
    };
    return { handleClick };
  },
};
</script>
<style>
nav {
  padding: 20px;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav p {
  margin: 2px auto;
  font-size: 16px;
  color: #444;
  text-align: left;
}
nav p.email {
  font-size: 14px;
  color: #888;
}
.pointer {
  cursor: pointer;
}
</style>
