<template>
<body class="bg-gradient-primary" style="color: var(--bs-red);background: #1a1d39;">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-9 col-lg-12 col-xl-10">
                <div class="card shadow-lg o-hidden border-0 my-5">
                    <div class="card-body p-0">
                        <div class="row">
                            <div class="col-lg-6 d-none d-lg-flex"><img src="assets/img/avatars/cold,%20smooth%20&%20tasty..png"></div>
                            <div class="col-lg-6">
                                <div class="p-5">
                                    <div class="text-center">
                                        <h4 class="text-dark mb-4">Welcome !</h4>
                                    </div>
                                    <form class="user">
                                        <div class="mb-3"><input v-model="form.username" class="form-control form-control-user" type="text" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..." name="email"></div>
                                        <div class="mb-3"><input v-model="form.password" class="form-control form-control-user" type="password" id="exampleInputPassword" placeholder="Password" name="password"></div>
                                        <div class="mb-3">
                                            <div class="custom-control custom-checkbox small">
                                                <div class="form-check"><input class="form-check-input custom-control-input" type="checkbox" id="formCheck-1"><label class="form-check-label custom-control-label" for="formCheck-1">Remember Me</label></div>
                                            </div>
                                        </div><button class="btn btn-primary d-block btn-user w-100"  @click="verifAdmin">Login</button>
                                        <hr>
                                        <hr>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</template>
 <script>
 export default {
     data() {
         return {
             form : {
                 username : '',
                 password : ''
             },
             error : '',
         }
     },
     methods: {
         verifAdmin(){
             if ((this.form.username == 'admin')&&(this.form.password=='admin')) {
                this.$router.push({ name: "admin"})
             }
             else
             {
                alert('invalid admin')
             }
         }
     },
 }
 </script>