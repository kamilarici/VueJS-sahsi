<template>
<div class="about"> 

    <transition appear name="fade" @after-enter="after">
    
        <h1>Hakkımızda</h1>
    </transition>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aperiam cupiditate quam impedit modi! Rerum beatae dolorem laborum est natus!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aperiam cupiditate quam impedit modi! Rerum beatae dolorem laborum est natus!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aperiam cupiditate quam impedit modi! Rerum beatae dolorem laborum est natus!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aperiam cupiditate quam impedit modi! Rerum beatae dolorem laborum est natus!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aperiam cupiditate quam impedit modi! Rerum beatae dolorem laborum est natus!</p>
</div>
</template>
<script>
export default{
    name:'Hakkimizda'
}
</script>
<style>
.about{
    max-width: 600px;
    margin: 20px auto;
}
</style>