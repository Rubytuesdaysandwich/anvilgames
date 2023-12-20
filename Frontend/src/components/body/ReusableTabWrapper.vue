<template>
<div class="tabs">
    <ul class="tabs-header">
        <li v-for="title in tabTitles" :key="title" @click="selectedTitle = title" :class ="{selected: title === selectedTitle}">
            {{title}}
        </li>
    </ul>
    <slot/>
</div>
</template>
<script lang="ts">
//creating reusbale tabs for our web pages
//uses slots to contain data from another component and still allow that component to be reusable

import { defineComponent,  } from 'vue';
import { ref,provide,Slot } from 'vue';
export default defineComponent({
   
   
    
        setup(props, { slots }: { slots: { default: Slot[] } }){
            const tabTitles = ref(slots.default().map((tab) => tab.props ? tab.props.title:null))
            const selectedTitle =ref(tabTitles.value[0])
            
       
        provide("selectedTitle", selectedTitle)
          return{
              selectedTitle,
              tabTitles,

          } 
    },
})

</script>



<style scoped>
.tabs{
max-width: 1rem;
margin:0;
}
.tabs-header{
    margin-bottom:10px;
    list-style:none;
    padding:0;
    display:flex;
}

.tabs-header li{
    display: flex;
    justify-content: center;
    width: 80px;
    text-align: center;
    padding: 10px 20px ;
    margin:5px;
    background-color: rgb(247, 242, 242);
    color: black;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.4s all ease-out;
}
.tabs-header li:hover{
    background-color: yellow;
}
.tabs-header li.selected{
    background-color: purple;
    color: orange;
}
</style>