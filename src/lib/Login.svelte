<script>
    import { userStore, authenticationStatusStore, CheckUsernameAndPassword } from '$lib/classes/user';

    let email = "philip.baier@icloud.com";
    let password = "test";
    let firstName = "Philip";
    let lastName = "Baier";
    let birthday = "10.02.1994";

    let loginerror = false;
    $: havingLoginError = loginerror;

    let status;

    function login() {
        // Login Fetch -> normally connect vs a database
        //fetch('http://127.0.0.1:3030/login')
        //user.update(val => val = {...email})
        if (CheckUsernameAndPassword(email, password) == true) {
            loginerror = false;
            authenticationStatusStore.set(1);
            userStore.set({email: email, password: password, firstName: firstName , lastName: lastName, birthday: birthday});
            goto('/dashboard');
        } else {
            loginerror = true;
        }
    }

</script>

<div class="container">

    <!-- Outer Row -->
    <div class="row justify-content-center">

        <div class="col-xl-10 col-lg-12 col-md-9">

            <div class="card o-hidden border-0 shadow-lg my-5">
                <div class="card-body p-0">
                    <!-- Nested Row within Card Body -->
                    <div class="row">
                        <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                        <div class="col-lg-6">
                            <div class="p-5">
                                <div class="text-center">
                                    <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                </div>
                                <form on:submit|preventDefault={login} class="user">
                                    <div class="form-group">
                                        <input type="email" class="form-control form-control-user"
                                            id="exampleInputEmail" aria-describedby="emailHelp"
                                            placeholder="Enter Email Address..." bind:value={email}>
                                    </div>
                                    <div class="form-group">
                                        <input type="password" class="form-control form-control-user"
                                            id="exampleInputPassword" bind:value={password} placeholder="Password">
                                    </div>
                                    <div class="form-group">
                                        <div class="custom-control custom-checkbox small">
                                            <input type="checkbox" class="custom-control-input" id="customCheck">
                                            <label class="custom-control-label" for="customCheck">Remember
                                                Me</label>
                                        </div>
                                    </div>
                                    {#if havingLoginError}
                                        <div id="error_message" class="text-danger">Email or password is wrong!</div>
                                    {/if}
                                    <button type="submit" class="btn btn-primary">Login</button>
                                    <hr>
                                    <a href="index.html" class="btn btn-google btn-user btn-block">
                                        <i class="fab fa-google fa-fw"></i> Login with Google
                                    </a>
                                    <a href="index.html" class="btn btn-facebook btn-user btn-block">
                                        <i class="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                    </a>
                                </form>
                                <hr>
                                <div class="text-center">
                                    <a class="small" href="#">Forgot Password?</a>
                                </div>
                                <div class="text-center">
                                    <a class="small" href="#">Create an Account!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>

</div>

