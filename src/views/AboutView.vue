<script setup lang="ts">
import NavbarVue from '@/components/Navbar.vue';
</script>
<template>
    <div class="text-white">
        <Transition name="bounce" appear>
            <h1 class="text-center inter-bold text-6xl pt-20 about-title-bg">About</h1>
        </Transition>
        <NavbarVue site="About" class="mt-10"></NavbarVue>
        <Transition name="slide-fade" appear>
            <div class="flex flex-col md:flex-row justify-center mx-8 mt-10">
            <div class="lg:w-1/3 md:w-full p-4 m-2 first-margin bg-white/5 border-slate-400 border-2 shadow-md shadow-slate-700 rounded-md">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sit quidem accusantium quos natus, fugiat, quas eveniet reprehenderit aliquam optio possimus? Molestias corrupti in perferendis fuga velit? Quasi, ratione ab?</p>
                <br>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, quidem! Itaque, provident? Similique sunt maxime adipisci, commodi minima consequuntur harum nemo dolorem sed vitae optio laboriosam dolores totam distinctio reiciendis.</p>
            </div>
            <div class="lg:w-1/3 md:w-full p-4 m-2 first-margin bg-white/5 border-slate-400 border-2 shadow-md shadow-slate-700 rounded-md">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sit quidem accusantium quos natus, fugiat, quas eveniet reprehenderit aliquam optio possimus? Molestias corrupti in perferendis fuga velit? Quasi, ratione ab?</p>
                <br>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, quidem! Itaque, provident? Similique sunt maxime adipisci, commodi minima consequuntur harum nemo dolorem sed vitae optio laboriosam dolores totam distinctio reiciendis.</p>
            </div>
            <div class="lg:w-1/3 md:w-full p-4 m-2 first-margin bg-white/5 border-slate-400 border-2 shadow-md shadow-slate-700 rounded-md">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sit quidem accusantium quos natus, fugiat, quas eveniet reprehenderit aliquam optio possimus? Molestias corrupti in perferendis fuga velit? Quasi, ratione ab?</p>
                <br>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, quidem! Itaque, provident? Similique sunt maxime adipisci, commodi minima consequuntur harum nemo dolorem sed vitae optio laboriosam dolores totam distinctio reiciendis.</p>
            </div>
            <div class="lg:w-1/3 md:w-full p-4 m-2 first-margin bg-white/5 border-slate-400 border-2 shadow-md shadow-slate-700 rounded-md">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sit quidem accusantium quos natus, fugiat, quas eveniet reprehenderit aliquam optio possimus? Molestias corrupti in perferendis fuga velit? Quasi, ratione ab?</p>
                <br>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, quidem! Itaque, provident? Similique sunt maxime adipisci, commodi minima consequuntur harum nemo dolorem sed vitae optio laboriosam dolores totam distinctio reiciendis.</p>
            </div>
            <div class="lg:w-1/3 md:w-full p-4 m-2 first-margin bg-white/5 border-slate-400 border-2 shadow-md shadow-slate-700 rounded-md">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sit quidem accusantium quos natus, fugiat, quas eveniet reprehenderit aliquam optio possimus? Molestias corrupti in perferendis fuga velit? Quasi, ratione ab?</p>
                <br>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, quidem! Itaque, provident? Similique sunt maxime adipisci, commodi minima consequuntur harum nemo dolorem sed vitae optio laboriosam dolores totam distinctio reiciendis.</p>
            </div>
      
        </div>
        </Transition>

    </div>
</template>