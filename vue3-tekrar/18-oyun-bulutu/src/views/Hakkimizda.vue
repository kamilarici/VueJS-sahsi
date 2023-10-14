<template>
<div class="about"> 

    <transition appear name="fade" @after-enter="after">
    
        <h1>Hakkımızda</h1>
    </transition>
    <transition appear name="p1">
    
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aperiam cupiditate quam impedit modi! Rerum beatae dolorem laborum est natus!</p>
    </transition>
    <transition appear name="p2">
    
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aperiam cupiditate quam impedit modi! Rerum beatae dolorem laborum est natus!</p>
    </transition>
    <transition appear name="p3">
    
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aperiam cupiditate quam impedit modi! Rerum beatae dolorem laborum est natus!</p>
    </transition>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aperiam cupiditate quam impedit modi! Rerum beatae dolorem laborum est natus!</p>

</div>
</template>
<script>
export default{
    name:'Hakkimizda',
    setup(){
        const after=(el)=>{
            el.style.color='#c44569'
        }
        return {after}
    }
}
</script>
<style>
.about{
    max-width: 600px;
    margin: 20px auto;
}

.fade-enter-from{
    opacity: 0;
    transform: translateY(-100px)

}
.fade-enter-to{
    transition: all 3s ease;
}

.p1-enter-from{
    opacity: 0;
    transform: translateY(100px);
}
.p1-enter-to{
    opacity: 0.5;
    transform: translateY(0px);
}
.p1-enter-active{
   transition: opacity 2s ease-in;
   transition:transform  2s ease-out;
    
}
.p2-enter-from{
    opacity: 0;
    transform: translateY(150px);
}
.p2-enter-to{
    opacity: 0.5;
    transform: translateY(0px);
}
.p2-enter-active{
   transition: opacity 2s ease-in;
   transition:transform  2s ease-out;
    
}
.p3-enter-from{
    opacity: 0;
    transform: translateY(200px);
}
.p3-enter-to{
    opacity: 0.5;
    transform: translateY(0px);
}
.p3-enter-active{
   transition: opacity 2s ease-in;
   transition:transform  2s ease-out;
    
}
</style>