<script>
    import { userStore } from '$lib/classes/user';

    let user = {
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        birthday: ""
     };

    userStore.subscribe(storredUser => {
        user = storredUser;
    });

    function updateUserData() {
        userStore.set({email: user.email, password: user.password, firstName: user.firstName , lastName: user.lastName, birthday: user.birthday});
    }
</script>

<div class="card-body">
    <form on:submit|preventDefault={updateUserData} >
        <div class="form-group row">
          <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <input type="text"  class="form-control-plaintext" id="inputEmail" bind:value={user.email}>
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
          <div class="col-sm-10">
            <input type="password" class="form-control form-control form-control-user" id="inputPassword" placeholder="Password" bind:value={user.password}>
          </div>
        </div>
        <div class="form-group row">
            <label for="inputFirstName" class="col-sm-2 col-form-label">First Name</label>
            <div class="col-sm-10">
              <input type="text"  class="form-control" id="inputFirstName" bind:value={user.firstName}>
            </div>
          </div>
        <div class="form-group row">
            <label for="inputLastName" class="col-sm-2 col-form-label">Last Name</label>
            <div class="col-sm-10">
              <input type="text"  class="form-control" id="inputLastName" bind:value={user.lastName}>
            </div>
        </div>
        <div class="form-group row">
            <label for="inputBirthday" class="col-sm-2 col-form-label">Birthday</label>
            <div class="col-sm-10">
              <input type="text"  class="form-control" id="inputBirthday" bind:value={user.birthday}>
            </div>
        </div>
            <button type="submit" class="btn btn-success btn-icon-split">
                    <span class="icon text-white-50">
                        <i class="fas fa-check"></i>
                    </span>
                    <span class="text">Save Personal Data</span>
            </button>  
      </form>
</div>