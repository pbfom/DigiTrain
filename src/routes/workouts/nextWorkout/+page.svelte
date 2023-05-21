<script>
    import Workout from '$lib/workouts/nextWorkout/Workout.svelte';
    import '$lib/vendor/template/css/sb-admin-2.min.css';
    import { authenticationStatusStore } from '$lib/classes/user';

    import { browser } from '$app/environment';
    import { goto } from '$app/navigation';


    // logincheck
    if (browser) {
        console.log("authenticationstatus");
        console.log($authenticationStatusStore);
        if ($authenticationStatusStore == 0) {
            goto('/login');
        }
    }
</script>

<svelte:head>
    <script src='/src/lib/vendor/jquery/jquery.min.js' />
    <script src='/src/lib/vendor/template/js/sb-admin-2.min.js' />
    <script src='/src/lib/vendor/jquery-easing/jquery.easing.min.js' />
    <script src='/src/lib/vendor/bootstrap/js/bootstrap.bundle.min.js' />
    <script src="/src/lib/vendor/chart.js/Chart.min.js" />
</svelte:head>

<Workout />

