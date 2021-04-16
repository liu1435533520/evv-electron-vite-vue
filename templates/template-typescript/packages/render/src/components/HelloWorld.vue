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

<script lang="ts" setup>
	import { defineProps, reactive } from "vue";

	defineProps({
		msg: String,
	});
</script>

<style scoped>
	a {
		color: #42b983;
	}
</style>