<script>
    import HealthData from '$lib/health_data/HealthData.svelte';
    import '$lib/vendor/template/css/sb-admin-2.min.css';
    import { authenticationStatusStore } from '$lib/classes/user';

    import { browser } from '$app/environment';
    import { goto } from '$app/navigation';


    // logincheck
    if (browser) {
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
    <script src="/src/lib/vendor/datatables/jquery.dataTables.min.js" />

</svelte:head>

<HealthData />

