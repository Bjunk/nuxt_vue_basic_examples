<template>
    <header class="p-3 bg-dark text-white">
            <div class="container">
                <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                        <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"/></svg>
                    </a>
                    <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li class="nav-item">
                            <NuxtLink class="nav-link px-2 text-white" to="/" aria-current="page" href="/">Home</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink class="nav-link px-2 text-white" to="/solutions" aria-current="page" href="/solutions">Solutions</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink class="nav-link px-2 text-white" to="/about" aria-current="page" href="/about">About</NuxtLink>
                        </li>
                    </ul>
                    <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                        <input type="search" class="form-control form-control-dark" placeholder="Search..." aria-label="Search">
                    </form>
                    <div class="text-end">
                        <NuxtLink to="/login"><button type="button" class="btn btn-outline-light me-2">Login</button></NuxtLink>
                        <NuxtLink to="/signin"><button type="button" to="/signin" class="btn btn-warning">Sign-up</button></NuxtLink>
                    </div>
                </div>
            </div>
    </header>
</template>