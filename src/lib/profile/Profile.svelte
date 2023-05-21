<script>
    import Sidebar from '$lib/Sidebar.svelte';
    import NavigationBar from '$lib/NavigationBar.svelte'
    import undrawPosting from '$lib/vendor/template/img/undraw_posting_photo.svg';
    import PersonalData from '$lib/profile/PersonalData.svelte';
    import Footer from '$lib/Footer.svelte';


    function allowNotifications() {
        // Login Fetch -> normally connect vs a database
        //fetch('http://127.0.0.1:3030/login')
        //user.update(val => val = {...email})
        Notification.requestPermission().then((result) => {
          if (result === "granted") {
            randomNotification();
          }
          
        });
        randomNotification();
    }

    function randomNotification() {
  const randomItem = Math.floor(Math.random() * games.length);
  const notifTitle = games[randomItem].name;
  const notifBody = `Created by ${games[randomItem].author}.`;
  const notifImg = `data/img/${games[randomItem].slug}.jpg`;
  const options = {
    body: notifBody,
    icon: notifImg,
  };
  new Notification(notifTitle, options);
  setTimeout(randomNotification, 30000);
}

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
                    <div class="col-xl-8 col-lg-7">
                        <div class="card shadow mb-4">
                            <!-- Card Header - Dropdown -->
                            <div
                                class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 class="m-0 font-weight-bold text-primary">Personal Data</h6>
                            </div>
                            <!-- Card Body -->
                            <PersonalData />
                            <div class="form-group row">
                                <div class="col-sm-10">
                                <form on:submit|preventDefault={allowNotifications} class="user">
                                  <button type="submit" class="btn btn-primary">allowNotifications</button>
                                </form>
                                </div>
                              </div>
                        </div>
                    </div>

                    <!-- Pie Chart -->
                    <div class="col-xl-4 col-lg-5">
                        <div class="card shadow mb-4">
                            <!-- Card Header - Dropdown -->
                            <div
                                class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 class="m-0 font-weight-bold text-primary">Trainer</h6>
                            </div>
                            <!-- Card Body -->
                            <div class="card-body">
                                <img class="img-fluid px-3 px-sm-4 mt-3 mb-4" style="width: 25rem;"
                                        src="{ undrawPosting}" alt="...">
                                <p>Philip Baier</p>
                                <p class="mb-0">Email: philip.baier@icloud.com</p>
                                <p class="mb-0">Phone: 0176 61970159</p>
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