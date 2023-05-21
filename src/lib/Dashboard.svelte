<script>
    import Sidebar from '$lib/Sidebar.svelte';
    import NavigationBar from '$lib/NavigationBar.svelte'
    import Footer from '$lib/Footer.svelte';
    import { getCountOfOpenWorkouts } from '$lib/classes/workouts';
    import { getWeightDifference } from '$lib/classes/health_data';
    import { getCurrentWeight } from '$lib/classes/health_data';
    import { getCountOfWorkouts } from '$lib/classes/workouts';

    let WorkoutCount = getCountOfWorkouts();
    let OpenWorkout = getCountOfOpenWorkouts();
    let currentWeight = getCurrentWeight();
    let weightTrend = getWeightDifference();
</script>

<!-- Page Wrapper -->
<div id="wrapper">

    <Sidebar />

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">

        <!-- Main Content -->
        <div id="content">

            <NavigationBar />

            <!-- Begin Page Content -->
            <div class="container-fluid">

                <!-- Page Heading -->
                <div id="page-top" class="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
                </div>

                <!-- Content Row -->
                <div class="row">

                    <!-- Earnings (Monthly) Card Example -->
                    


                    <div class="col-xl-3 col-md-6 mb-4">
                        <a href="/health_data">
                        <div class="card border-left-primary shadow h-100 py-2">
                            <div class="card-body">
                                <div class="row no-gutters align-items-center">
                                    <div class="col mr-2">
                                        <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                            Weight Trend</div>
                                        <div class="h5 mb-0 font-weight-bold text-gray-800">{ currentWeight } kg 
                                            {#if weightTrend > 0}
                                                (- {weightTrend.toFixed(1)} kg)
                                            {:else if weightTrend == 0}
                                            (+ 0 kg)
                                            {:else}
                                                (+ {weightTrend.toFixed(1)} kg)
                                            {/if}
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        {#if weightTrend > 0}
                                            <i class="fas fa-arrow-down fa-2x text-gray-300"></i>
                                        {:else if weightTrend == 0}
                                        No changes
                                        {:else}
                                        {weightTrend} <i class="fas fa-arrow-up fa-2x text-gray-300"></i>
                                        {/if}
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        </a>
                    </div>

                    <!-- Earnings (Monthly) Card Example -->
                    <div class="col-xl-3 col-md-6 mb-4">
                        <a href="/health_data#workouts">
                        <div class="card border-left-success shadow h-100 py-2">
                            <div class="card-body">
                                <div class="row no-gutters align-items-center">
                                    <div class="col mr-2">
                                        <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                            Workouts done
                                        </div>
                                        <div class="h5 mb-0 font-weight-bold text-gray-800">{ WorkoutCount }
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <i class="fas fa-dumbbell fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </a>
                    </div>

                    <!-- Earnings (Monthly) Card Example -->
                    <div class="col-xl-3 col-md-6 mb-4">
                        <div class="card border-left-info shadow h-100 py-2">
                            <div class="card-body">
                                <div class="row no-gutters align-items-center">
                                    <div class="col mr-2">
                                        <div class="text-xs font-weight-bold text-info text-uppercase mb-1">Workouts for this week
                                        </div>
                                        <div class="row no-gutters align-items-center">
                                            <div class="col-auto">
                                                <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">2 of 3</div>
                                            </div>
                                            <div class="col">
                                                <div class="progress progress-sm mr-2">
                                                    <div class="progress-bar bg-info" role="progressbar" style="width: 66%" aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Pending Requests Card Example -->
                    <div class="col-xl-3 col-md-6 mb-4">
                        <div class="card border-left-warning shadow h-100 py-2">
                            <div class="card-body">
                                <div class="row no-gutters align-items-center">
                                    <div class="col mr-2">
                                        <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                            Pending Requests</div>
                                        <div class="h5 mb-0 font-weight-bold text-gray-800">{ currentWeight }</div>
                                    </div>
                                    <div class="col-auto">
                                        <i class="fas fa-comments fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /.container-fluid -->

        </div>
        <!-- End of Main Content -->

        <Footer />

    </div>
    <!-- End of Content Wrapper -->

</div>
<!-- End of Page Wrapper -->

<!-- Scroll to Top Button-->
<a class="scroll-to-top rounded" href="#page-top">
    <i class="fas fa-angle-up"></i>
</a>