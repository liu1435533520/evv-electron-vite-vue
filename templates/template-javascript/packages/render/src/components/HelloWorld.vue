<!--
 * @Author: your name
 * @Date: 2021-04-10 15:15:43
 * @LastEditTime: 2021-04-10 23:14:15
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vite-vue-electron\packages\render\src\components\HelloWorld.vue
-->
<template>
	<h1>{{ msg }}</h1>
</template>

<script setup>
	import { defineProps, reactive } from "vue";

	defineProps({
		msg: String,
	});

	const state = reactive({ count: 0 });
</script>

<style scoped>
	a {
		color: #42b983;
	}
</style>