<script>

    // import user, {isAuthenticated} from '../../user';
    import { userStore, authenticationStatusStore} from '$lib/classes/user';
    import Login from '$lib/Login.svelte';

    let loggedUser = {
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        birthday: ""
     };

    // user.subscribe(user => {
    //     loggedUser = user;
    // });

    userStore.subscribe(user => {
        loggedUser = user;
    });
     

    $: isLoggedIn = $authenticationStatusStore;

    function logout() {
        authenticationStatusStore.set(0);
    }

    let status = 0;
     authenticationStatusStore.subscribe(isAuthenticated => {
        status = isAuthenticated;
    });
</script>

{#if isLoggedIn == 1}
<h2>Logged In</h2>
<a href='/profile'>Profile</a>
<a href='/dashboard'>Dashboard</a>

{ loggedUser.email }<br>{status}
<form on:submit|preventDefault={logout}>
    <button type="submit">Logout</button>
</form>
{:else}
<Login />
{/if}