<template>
<div class="tabs">
    <ul class="tabs_header">
        <li v-for="title in tabTitles" :key="title">
            {{tittle}}
        </li>
    </ul>
    <slot/>
</div>
</template>
<script>
//creating reusbale tabs for our web pages
//uses slots to contain data from another component and still allow that component to be reusable

import { defineComponen } from 'vue';

export default defineComponen({

data(){
    return{
        tabTitles,
    }
}






})

</script>