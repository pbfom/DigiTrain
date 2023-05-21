<script>
    import Sidebar from '$lib/Sidebar.svelte';
    import NavigationBar from '$lib/NavigationBar.svelte'
    import Footer from '$lib/Footer.svelte';

    import {getNextWorkoutThisWeek} from "$lib/classes/workouts";

    import Exercise from '$lib/workouts/exercises/Exercise.svelte';

    let nextWorkout = getNextWorkoutThisWeek();
    let exercises  = getNextWorkoutThisWeek().content;


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
                    <div class="card-body">
                        <div class="">
                                <div class="card bg-danger text-white shadow">
                                    <div class="card-body">{nextWorkout.type} Workout
                                        <div class="text-white-50 small">Duration: {nextWorkout.duration}</div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>

                <!-- Area Chart -->
                <div class="">
                    <div class="card shadow mb-4" >
                        <!-- Card Header - Dropdown -->
                        {#each exercises as exercise}
                          <Exercise bind:exercise />
                        {/each}
                        
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

    svg { transition: transform 0.2s ease-in;
	}
	
	[aria-expanded=true] svg { transform: rotate(0.25turn); }
</style>
