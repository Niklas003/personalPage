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
            <div class="flex flex-col md:flex-row justify-start mx-8">
                <div data-aos="fade-left" data-aos-duration="600" class="self-end text-white p-4 m-2 mt-28 bg-[rgb(27,39,53)] drop-shadow-lg shadow-slate-800 duration-300 rounded-md max-w-96">
                <p>Hey! My Name is Niklas and I enjoy creating things for the Web. My interest in web development started during my school days when I took up a CS course and we've developed some Pages with PHP.😱 
                    <br>
                    <br>
                    Currently more active in the Frontend section I also want to gain Experience in Backend Dev. <i>Always learning</i>
                    <br><br>
                    Though I'm still a student I enjoy working at <a href="https://www.dbsystel.de/dbsystel" class="text-cyan-300 hover:underline">DB Systel</a> where I've learned a lot about the German Railway System😅, and of course coding stuff.
                </p>
            </div>
        </div>
        </Transition>

    </div>
</template>