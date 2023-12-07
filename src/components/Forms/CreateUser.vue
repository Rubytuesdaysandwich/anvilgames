<template>
<div class="create-form-container">
    <form action="submit">
        <div class="user-data-container">
        <div class="user-data">   
                <input type="text" placeholder="UserName"> 
                <input type="text"  placeholder="Password"> 
        </div>
        <div class="user-data">
                <input type="email"  placeholder="Email">
                <input type="date"  placeholder="Age">
            <label for="birthday" id="birthday" name="">Age</label>
        </div>
        </div>
        <div class="confirm">
            <button>Cancel</button>
            <button>submit</button>
        </div>
    </form>
</div>
</template>
<script>
export default {
    name:'CreateUser'
}
</script>

<style scoped>
.create-form-container{
    display: flex;
    justify-content: center;
}
form{
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: start;

}

input{
    margin:1rem;
    
    
}


.confirm{
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    gap: 5rem;

}
</style>