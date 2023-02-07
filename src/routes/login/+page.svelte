<script>
	import { enhance } from '$app/forms';
	import ListErrors from '$lib/ListErrors.svelte';

	/** @type {import('./$types').ActionData} */
	export let form;
</script>

<svelte:head>
	<title>Sign in</title>
</svelte:head>

<h1>Sign In</h1>
<a href="/register">Need an account?</a>

<ListErrors errors={form?.errors} />

<form use:enhance method="POST">
	<input
			class="form-control form-control-lg"
			name="name"
			type="text"
			required
			placeholder="your name"
	/>
	<input
			class="form-control form-control-lg"
			name="password"
			type="password"
			required
			placeholder="Password"
	/>
	<button class="btn btn-lg btn-primary pull-xs-right" type="submit">Sign in</button>
</form>