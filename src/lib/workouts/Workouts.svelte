<script>
    import Sidebar from '$lib/Sidebar.svelte';
    import NavigationBar from '$lib/NavigationBar.svelte'
    import Footer from '$lib/Footer.svelte';
    import WorkoutBreakdownChart from './WorkoutBreakdownChart.svelte';
    import WorkoutOverview from '$lib/health_data/WorkoutOverview.svelte';
    import {getWeekEndDate} from '$lib/classes/applicationParameters';
    import {getNextWorkoutThisWeek} from "$lib/classes/workouts";

    let endOfWeekDate = getWeekEndDate();

    let nextWorkout = getNextWorkoutThisWeek();
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
                <div class="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 class="h3 mb-0 text-gray-800">Workout Overview</h1>
                </div>

                <!-- Content Row -->


                <div class="row">

                    <!-- Content Column -->
                    <div class="col-lg-6 mb-4">

                        <!-- Project Card Example -->
                        <div class="card shadow mb-4">
                            <div class="card-header py-3">
                                <h6 class="m-0 font-weight-bold text-primary">Workout Week Status unitl {endOfWeekDate}</h6>
                            </div>
                            <div class="card-body">
                                <h4 class="small font-weight-bold">Overall Workouts <span
                                    class="float-right">33%</span></h4>
                            <div class="progress mb-4">
                                <div class="progress-bar bg-success" role="progressbar" style="width: 33%"
                                    aria-valuenow="33" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                                <h4 class="small font-weight-bold">HIIT <span
                                        class="float-right">0%</span></h4>
                                <div class="progress mb-4">
                                    <div class="progress-bar bg-danger" role="progressbar" style="width: 0%"
                                        aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h4 class="small font-weight-bold">Core <span
                                        class="float-right">100%</span></h4>
                                <div class="progress mb-4">
                                    <div class="progress-bar bg-warning" role="progressbar" style="width: 100%"
                                        aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>    

                        <div class="card shadow mb-4">
                            <!-- Card Header - Dropdown -->
                            <div
                                class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 class="m-0 font-weight-bold text-primary">Next Workout</h6>
                            </div>
                            <!-- Card Body -->
                            <div class="card-body">
                                <div class="">
                                    <a class="linkwithOutUnderline" href="/workouts/nextWorkout">
                                        <div class="card bg-danger text-white shadow">
                                            <div class="card-body">Start {nextWorkout.type} Workout
                                                <div class="text-white-50 small">Duration: {nextWorkout.duration}</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                
                                    

                            </div>
                            <!-- Card Body -->

                            
                        </div>
                    </div>

                    <div class="col-lg-6 mb-4">

                        <!-- Illustrations -->
                        <div class="card shadow mb-4">
                            <div class="card-header py-3">
                                <h6 class="m-0 font-weight-bold text-primary">Workout Breakdown</h6>
                            </div>
                            <div class="card-body">
                                <div class="chart-pie pt-4 pb-2">
                                    <div class="chartjs-size-monitor">
                                        <div class="chartjs-size-monitor-expand">
                                            <div class="">

                                            </div>
                                        </div>
                                        <div class="chartjs-size-monitor-shrink">
                                            <div class=""></div>
                                        </div>
                                    </div>
                                    <WorkoutBreakdownChart />
                                </div>
                            </div>
                        </div>

                        

                    </div>
                </div>

                <div class="row">

                    <!-- Area Chart -->
                    <div class="">
                        <div class="card shadow mb-4">
                            <!-- Card Header - Dropdown -->
                            <div
                                class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 class="m-0 font-weight-bold text-primary">Workout Overview</h6>
                            </div>
                            <!-- Card Body -->
                            <div class="card-body">
                                
                                    <WorkoutOverview />

                            </div>
                            <!-- Card Body -->

                            
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


<style>
    a.linkwithOutUnderline:hover {
        text-decoration: none;
     }
</style>