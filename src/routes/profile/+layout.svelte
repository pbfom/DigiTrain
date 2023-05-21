<script>
    import '$lib/vendor/fontawesome-free/css/all.min.css';
    import '$lib/vendor/template/css/sb-admin-2.min.css';

    import { browser } from '$app/environment';
    import { goto } from '$app/navigation';
    import { authenticationStatusStore } from '$lib/classes/user';

    // Logincheck
    if (browser) {
        console.log("authenticationstatus");
        console.log($authenticationStatusStore);
        if ($authenticationStatusStore == 0) {
            goto('/login');
        }
    }

    
</script>

<div class="main-content">
    <slot></slot>
</div>