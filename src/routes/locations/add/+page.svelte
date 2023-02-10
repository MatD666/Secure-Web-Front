<script>
    import { enhance } from '$app/forms';

    /** @type {import('./$types').ActionData} */
    export let form;
</script>

<div class="auth-page">
    <div class="container page">
        <div class="row">
            <div class="col-md-6 offset-md-3 col-xs-12">
                <h1 class="text-xs-center">Ajouter une location</h1>

                <form use:enhance method="POST">
                    <fieldset class="form-group">
                        <input
                                class="form-control form-control-lg"
                                name="filmType"
                                type="text"
                                required
                                placeholder="Type de film"
                        />
                    </fieldset>
                    <fieldset class="form-group">
                        <input
                                class="form-control form-control-lg"
                                name="filmProducerName"
                                type="text"
                                required
                                placeholder="Nom du producteur"
                        />
                    </fieldset>
                    <fieldset class="form-group">
                        <input
                                class="form-control form-control-lg"
                                name="endDate"
                                type="text"
                                required
                                placeholder="Date de fin"
                        />
                    </fieldset>
                    <fieldset class="form-group">
                        <input
                                class="form-control form-control-lg"
                                name="filmName"
                                type="text"
                                required
                                placeholder="Nom du film"
                        />
                    </fieldset>
                    <fieldset class="form-group">
                        <input
                                class="form-control form-control-lg"
                                name="district"
                                type="text"
                                required
                                placeholder="Code postal"
                        />
                    </fieldset>
                    <fieldset class="form-group">
                        <input
                                class="form-control form-control-lg"
                                name="sourceLocationId"
                                type="text"
                                required
                                placeholder="sourceLocationId"
                        />
                    </fieldset>
                    <fieldset class="form-group">
                        <input
                                class="form-control form-control-lg"
                                name="filmDirectorName"
                                type="text"
                                required
                                placeholder="Nom du directeur"
                        />
                    </fieldset>
                    <fieldset class="form-group">
                        <input
                                class="form-control form-control-lg"
                                name="address"
                                type="text"
                                required
                                placeholder="Adresse"
                        />
                    </fieldset>
                    <fieldset class="form-group">
                        <input
                                class="form-control form-control-lg"
                                name="startDate"
                                type="text"
                                required
                                placeholder="Date de début"
                        />
                    </fieldset>
                    <fieldset class="form-group">
                        <input
                                class="form-control form-control-lg"
                                name="year"
                                type="text"
                                required
                                placeholder="Année"
                        />
                    </fieldset>

                    <button class="btn btn-lg btn-primary pull-xs-right" type="submit">Ajouter</button>
                </form>
            </div>
        </div>
    </div>
</div>
