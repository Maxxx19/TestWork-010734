<template>
    <main>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark col-12 col-sm-12">
            <div class="container-fluid d-flex">
                <router-link to="/" class="navbar-brand" href="#">Laravel Vue Crud</router-link>
                <div class="collapse navbar-collapse justify-content-end">
                    <div class="navbar-nav">
                        <router-link exact-active-class="active" to="/" class="nav-item nav-link">Home</router-link>
                        <router-link exact-active-class="active" to="/category" class="nav-item nav-link">Category</router-link>
                    </div>
                </div>
            </div>
        </nav>
        <div class="container mt-5">
            <router-view></router-view>
        </div>
    </main>
</template>
 
<script>
    export default {}
</script>