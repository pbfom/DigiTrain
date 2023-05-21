<script>
    import Sidebar from '$lib/Sidebar.svelte';
    import NavigationBar from '$lib/NavigationBar.svelte'
    import Footer from '$lib/Footer.svelte';
    import WeightChart from '$lib/health_data/WeightChart.svelte';
    import WorkoutOverview from '$lib/health_data/WorkoutOverview.svelte';

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
                    <h1 class="h3 mb-0 text-gray-800">Profile</h1>
                </div>

                <!-- Content Row -->

                <div class="row">

                    <!-- Area Chart -->
                    <div class="">
                        <div class="card shadow mb-4">
                            <!-- Card Header - Dropdown -->
                            <div
                                class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 class="m-0 font-weight-bold text-primary">Weight</h6>
                            </div>
                            <!-- Card Body -->
                            <div class="card-body">
                                
                                    <WeightChart />

                            </div>
                            <!-- Card Body -->

                            
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