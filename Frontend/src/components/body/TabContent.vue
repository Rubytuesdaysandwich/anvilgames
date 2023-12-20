<template>
    <div class="tab-content" v-show="title == selectedTitle">
        <slot/>
    </div>
    </template>




    <script>
    import { inject } from 'vue';
    
    export default{
        props:['title'],
        setup(){
            const selectedTitle = inject('selectedTitle')
            return{
                selectedTitle,
            }
        }
    }
    </script>
    <style scoped>
.tab-content{
    width:min-content;
    height: 100%;
    display: flex;
    flex-direction:column;
     margin-left:1rem ;
    border-radius: 5px;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.05);
}
</style>