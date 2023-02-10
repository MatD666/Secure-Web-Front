<script>
    import Modal from './modal.svelte';
    import { onMount } from 'svelte';
    import * as api from "$lib/api.js";

    let showModal = false;

    export let data;
    let isLoggedIn = (data.userRole !== "guest")

    if (!isLoggedIn) {
        window.location.href = '/login';
    }

    let currentPage = 0;
    let films = [];

    onMount(async () => {
        await changePage(0)
    });

    async function changePage(newPage) {
        let filmsPerPage = 10;

        currentPage = newPage;
        //films = await api.get(`locations?offset=${newPage * filmsPerPage}&limit=${filmsPerPage}`, data.user);
        films = await api.get(`locations`, data.user);
    }
</script>

{#if isLoggedIn}
    <style>
        th, td {
            border: 2px solid black;
            padding: 8px;
            text-align: left;
        }

        .pagination {
            text-align: right;
        }

        .pagination button, .pagination div {
            display: inline-block;
        }

        .center {
            text-align: center;
            padding: 20px;
        }
    </style>

    {#if (data.userRole === "admin")}
        <a href="/locations/add" class="center">
            <button>Ajouter une location</button>
        </a>
    {/if}

    <table>
        <tr>
            <th>Type de film</th>
            <th>Nom du producteur</th>
            <th>Nom du film</th>
            <th>Année</th>
            <th>Afficher / modifier</th>
        </tr>

        {#each films as film}
            <tr on:click={() => showModal = {film: film, user: data.user, userRole: data.userRole}}>
                <td>{film.filmType}</td>
                <td>{film.filmProducerName}</td>
                <td>{film.filmName}</td>
                <td>{film.year}</td>
                <td>
                    <button on:click={() => showModal = {film: film, user: data.user, userRole: data.userRole}}>Afficher</button>
                </td>
            </tr>
        {/each}
    </table>

    <div class="pagination">
        <button disabled={currentPage === 0} on:click={() => changePage(currentPage - 1)}>&lt;</button>
        <span>{currentPage + 1}</span>
        <button on:click={() => changePage(currentPage + 1)}>&gt;</button>
    </div>

    {#if showModal}
        <Modal close={() => showModal = false} film={showModal.film} user={showModal.user} userRole={showModal.userRole} />
    {/if}
{/if}