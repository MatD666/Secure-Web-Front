<script>
	import ArticleList from '$lib/ArticleList/index.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>
<ArticleList articles={data.location} />