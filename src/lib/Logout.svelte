<script>
    // import { isAuthenticated } from '../user';
    import { authenticationStatusStore } from '$lib/classes/user';
    let authenticationstatus = 0;

    // isAuthenticated.subscribe(isAuthenticated => {
    //     authenticationstatus = isAuthenticated;
    // });

    authenticationStatusStore.subscribe(isAuthenticated => {
         authenticationstatus = isAuthenticated;
     });
    export function logout() {
        authenticationStatusStore.set(0);
        console.log(authenticationStatusStore);
        location.replace('/');
    }
</script>


<!-- Logout Modal-->
<div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
            <div class="modal-footer">
                <form on:submit|preventDefault={logout} action="/">
                    <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                    <button class="btn btn-primary" type="submit">Logout</button>
                </form>
            </div>
        </div>
    </div>
</div>