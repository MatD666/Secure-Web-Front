<script>
    import * as api from '$lib/api.js';

    export let close;
    export let film;
    export let user;
    export let userRole;

    async function deleteLocation(id) {
        await api.del(`locations/${id}`, user);
        window.location.reload();
    }
</script>

<div class="modal-overlay">
    <div class="modal-content">
        <h3 class="modal-title">Informations de la location</h3>
        <br/><br/>

        <div>Type de film : {film.filmType}</div>
        <div>Nom du producteur : {film.filmProducerName}</div>
        <div>Date de fin : {film.endDate}</div>
        <div>Nom du film : {film.filmName}</div>
        <div>Code postal : {film.district}</div>
        <div>sourceLocationId : {film.sourceLocationId}</div>
        <div>Nom du directeur : {film.filmDirectorName}</div>
        <div>Adresse : {film.address}</div>
        <div>Date de début : {film.startDate}</div>
        <div>Année : {film.year}</div>

        <div class="modal-actions">
            {#if (userRole == "admin")}
                <button onclick="window.location.href='/locations/edit/{film._id}'">Modifier</button>
                <button on:click={() => {deleteLocation(film._id)}}>Supprimer</button>
            {/if}

            <button on:click={close}>Fermer</button>
        </div>
    </div>
</div>

<style>
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .modal-content {
        background-color: white;
        border-radius: 10px;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
        padding: 30px;
        width: 500px;
        max-width: 95%;
    }

    .modal-title {
        text-align: center;
    }

    .modal-actions {
        display: flex;
        justify-content: flex-end;
        margin-top: 30px;
    }

    .modal-actions button {
        margin-left: 10px;
    }
</style>
