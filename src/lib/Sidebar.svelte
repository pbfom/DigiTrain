<script>
    import rocket from '$lib/vendor/template/img/undraw_rocket.svg';


    // replace with an import
    import { authenticationStatusStore } from '$lib/classes/user';
    let authenticationstatus = 0;

    authenticationStatusStore.subscribe(isAuthenticated => {
         authenticationstatus = isAuthenticated;
     });
    export function logout() {
        authenticationStatusStore.set(0);
        console.log(authenticationStatusStore);
        location.replace('/');
    }
</script>
<!-- Sidebar -->
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

        <!-- Sidebar - Brand -->
        <a class="sidebar-brand d-flex align-items-center justify-content-center" href="/dashboard">
            <div class="sidebar-brand-icon rotate-n-15">
                <i class="fas fa-laugh-wink"></i>
            </div>
            <div class="sidebar-brand-text mx-3">DigiTrain</div>
        </a>

        <!-- Divider -->
        <hr class="sidebar-divider my-0">

        <!-- Nav Item - Dashboard -->
        <li class="nav-item active">
            <a class="nav-link" href="/dashboard">
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span></a>
        </li>
        <li class="nav-item active">
            <a class="nav-link" href="/workouts">
                <i class="fas fa-fw fa-dumbbell"></i>
                <span>Workouts</span></a>
        </li>
        <li class="nav-item active">
            <a class="nav-link" href="/health_data">
                <i class="fas fa-fw fa-heart"></i>
                <span>Health Data</span></a>
        </li>

        <!-- Divider -->
        <hr class="sidebar-divider">

        <!-- Heading -->
        <div class="sidebar-heading">
            Settings
        </div>

        <!-- Nav Item - Pages Collapse Menu -->
        <li class="nav-item">
            <a class="nav-link" href="/profile">
                <i class="fas fa-fw fa-cog"></i>
                <span>Profile</span>
            </a>
            <a class="nav-link" href="/profile">
                <i class="fas fa-fw fa-cog"></i>
                <span>Appearance</span>
            </a>
        </li>
 

        <!-- Divider -->
        <hr class="sidebar-divider d-none d-md-block">

        <!-- Sidebar Toggler (Sidebar) -->
        <div class="text-center d-none d-md-inline">
            <button class="rounded-circle border-0" id="sidebarToggle"></button>
        </div>

        <!-- Sidebar Message -->
        <div class="sidebar-card d-none d-lg-flex">
            <img class="sidebar-card-illustration mb-2" src="{ rocket }" alt="...">
            <p class="text-center mb-2"><strong>DigiTrain Pro</strong> Get your AI coach now!</p>
            <a class="btn btn-success btn-sm" href="#">Upgrade to Pro!</a>
        </div>

        <!-- Divider -->
        <hr class="sidebar-divider d-none d-md-block">

        <div class="sidebar-card d-none d-lg-flex">
            <form on:submit|preventDefault={logout} >
                <button type="submit" class="btn-danger btn-icon-spli">
                    <span class="icon text-white-50">
                        <i class="fas fa-sign-out"></i>
                    </span>
                    <span class="text">Logout</span>
                </button> 
            </form>
            
        </div>

    </ul>
    <!-- End of Sidebar -->