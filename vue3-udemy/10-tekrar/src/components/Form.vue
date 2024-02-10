<template>
  <form >
    <label > Email:</label>
    <input v-model="email" type="email"/>
<label >Yetki</label>
<select v-model="yetki" >
    <option  value="1">editor</option>
    <option  value="2">admin</option>
</select>
{{ yetki }}
  </form>
</template>

<script>

export default {
data() {
    return {
        email:"dfgd",
        yetki:"yyy"
    }
},
}
</script>

<style>

</style>