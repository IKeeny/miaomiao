<template>
    <div id="header">
       <h1>喵喵影院</h1>
    </div>
</template>

<script>
    export default {
        //浏览器调试时可以看到组件名字
        name: 'Header',
    }
</script>

<style lang="css" scoped>
#header{
    width:100%; 
    height:50px; 
    color: #fff; 
    background: #e54847; 
    border-bottom: 1px solid #e54847; 
    position: relative;
}
#header h1{ 
    font-size: 18px; 
    text-align: center; 
    line-height: 50px; 
    font-weight: normal; 
}
#header i{ 
    position: absolute; 
    left: 5px; 
    top: 50%; 
    margin-top: -13px; 
    font-size: 26px;
}
</style>