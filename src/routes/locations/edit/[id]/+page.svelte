<script>
    import { enhance } from '$app/forms';

    /** @type {import('./$types').ActionData} */
    export let data;
    let film = data.location;

    export let form;
</script>

<div class="auth-page">
    <div class="container page">
        <div class="row">
            <div class="col-md-6 offset-md-3 col-xs-12">
                <h1 class="text-xs-center">Modifier la location</h1>

                <form use:enhance method="POST">
                    <fieldset class="form-group">
                        <input
                                class="form-control form-control-lg"
                                name="filmType"
                                type="text"
                                required
                                placeholder="Type de film"
                                value={film.filmType}
                        />
                    </fieldset>
                    <fieldset class="form-group">
                        <input
                                class="form-control form-control-lg"
                                name="filmProducerName"
                                type="text"
                                required
                                placeholder="Nom du producteur"
                                value={film.filmProducerName}
                        />
                    </fieldset>
                    <fieldset class="form-group">
                        <input
                                class="form-control form-control-lg"
                                name="endDate"
                                type="text"
                                required
                                placeholder="Date de fin"
                                value={film.endDate}
                        />
                    </fieldset>
                    <fieldset class="form-group">
                        <input
                                class="form-control form-control-lg"
                                name="filmName"
                                type="text"
                                required
                                placeholder="Nom du film"
                                value={film.filmName}
                        />
                    </fieldset>
                    <fieldset class="form-group">
                        <input
                                class="form-control form-control-lg"
                                name="district"
                                type="text"
                                required
                                placeholder="Code postal"
                                value={film.district}
                        />
                    </fieldset>
                    <fieldset class="form-group">
                        <input
                                class="form-control form-control-lg"
                                name="sourceLocationId"
                                type="text"
                                required
                                placeholder="sourceLocationId"
                                value={film.sourceLocationId}
                        />
                    </fieldset>
                    <fieldset class="form-group">
                        <input
                                class="form-control form-control-lg"
                                name="filmDirectorName"
                                type="text"
                                required
                                placeholder="Nom du directeur"
                                value={film.filmDirectorName}
                        />
                    </fieldset>
                    <fieldset class="form-group">
                        <input
                                class="form-control form-control-lg"
                                name="address"
                                type="text"
                                required
                                placeholder="Adresse"
                                value={film.address}
                        />
                    </fieldset>
                    <fieldset class="form-group">
                        <input
                                class="form-control form-control-lg"
                                name="startDate"
                                type="text"
                                required
                                placeholder="Date de début"
                                value={film.startDate}
                        />
                    </fieldset>
                    <fieldset class="form-group">
                        <input
                                class="form-control form-control-lg"
                                name="year"
                                type="text"
                                required
                                placeholder="Année"
                                value={film.year}
                        />
                    </fieldset>

                    <button class="btn btn-lg btn-primary pull-xs-right" type="submit">Enregistrer</button>
                </form>
            </div>
        </div>
    </div>
</div>
