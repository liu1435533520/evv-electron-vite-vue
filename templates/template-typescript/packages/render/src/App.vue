<!--
 * @Author: your name
 * @Date: 2021-04-10 15:15:43
 * @LastEditTime: 2021-04-10 23:14:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vite-vue-electron\packages\render\src\App.vue
-->
<template>
	<div>
		<img alt="Vue logo" src="@/assets/code.jpg" />
		<HelloWorld msg="Chat with this lonely man !" />
	</div>
	<div>
		<img alt="Vue logo" src="@/assets/code1.jpg" />
		<HelloWorld msg="Offer him a cup of milk tea !" />
	</div>
</template>

<script script lang="ts" setup>
	import HelloWorld from "./components/HelloWorld.vue";
</script>

<style>
	body {
		margin: 0;
		padding: 0;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	img {
		width: 40%;
	}
</style>