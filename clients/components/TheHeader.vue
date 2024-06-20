<template>
  <header class="mb-5">
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-dark shadow">
        <div class="container">
            <NuxtLink class="navbar-brand" to="/">NUXT JOY 🎊</NuxtLink>
            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarCollapse"
                aria-controls="navbarCollapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                <li class="nav-item active">
                    <NuxtLink class="nav-link" to="/"
                    >Home <span class="sr-only">(current)</span></NuxtLink
                    >
                </li>
                <li class="nav-item">
                    <NuxtLink class="nav-link" to="/about-us">About Us</NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink class="nav-link" to="/contact-us">Contact Us</NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink class="nav-link" to="/students">Students</NuxtLink>
                </li>
                </ul>
            </div>
        </div>
    </nav>
  </header>
</template>

<script setup></script>

<style scoped></style>
