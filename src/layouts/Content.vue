<template>
	<div id="app" class="container">
    <Header />
    <slot></slot>
		<Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
export default {
	components: {
		Header,
		Footer
	}
}
</script>
