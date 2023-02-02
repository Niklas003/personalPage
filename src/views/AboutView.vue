<script setup lang="ts">
import NavbarVue from '@/components/Navbar.vue';
</script>
<template>
    <div id="about" class="text-white min-h-screen">
        <Transition name="bounce" appear>
            <h1 class="text-center inter-bold text-6xl pt-20 about-title-bg" data-aos="fade-left">About</h1>
        </Transition>
        <NavbarVue site="About" class="mt-10"></NavbarVue>
        <Transition name="slide-fade" appear>
            <div class="flex flex-col md:flex-row justify-left mx-8">
            <div data-aos="fade-left" data-aos-duration="600" class="text-white p-2 m-2 mt-28 bg-white/5 border-slate-400 border shadow-2xl shadow-slate-900 duration-300 rounded-md">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sit quidem accusantium quos natus, fugiat, quas eveniet reprehenderit aliquam optio possimus? Molestias corrupti in perferendis fuga velit? Quasi, ratione ab?</p>
                <br>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, quidem! Itaque, provident? Similique sunt maxime adipisci, commodi minima consequuntur harum nemo dolorem sed vitae optio laboriosam dolores totam distinctio reiciendis.</p>
            </div>
            <div data-aos="fade-left" data-aos-duration="600" data-aos-delay="400" class="text-white p-2 m-2 mt-28 bg-white/5 border-slate-400 border shadow-2xl shadow-slate-900 duration-300 rounded-md">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sit quidem accusantium quos natus, fugiat, quas eveniet reprehenderit aliquam optio possimus? Molestias corrupti in perferendis fuga velit? Quasi, ratione ab?</p>
                <br>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, quidem! Itaque, provident? Similique sunt maxime adipisci, commodi minima consequuntur harum nemo dolorem sed vitae optio laboriosam dolores totam distinctio reiciendis.</p>
            </div>
        </div>
        </Transition>

    </div>
</template>