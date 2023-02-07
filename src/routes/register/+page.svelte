<script>
	import { enhance } from '$app/forms';
	import ListErrors from '$lib/ListErrors.svelte';

	/** @type {import('./$types').ActionData} */
	export let form;
</script>
<h1>Registration</h1>
<a href="/login">Have an account?</a>
<ListErrors errors={form?.errors} />
<form use:enhance method="POST">
	<p>Name</p>
	<input type="text" name="name" required placeholder="Your Name" />
	<p>Password</p>
	<input type="password" name="password" required placeholder="Password" />
	<br />
	<button>Submit</button>
</form>


