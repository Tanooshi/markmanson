<template>
    <div class="blogs-section">
        <div class="sliding-text-container">
            <Splide :options="options" :has-track="false" :extensions="extensions">
                <div>
                    <SplideTrack>
                        <SplideSlide>
                            <div class="scroll-text leading-[0.70]">No More B*llsh*t</div>
                        </SplideSlide>
                    </SplideTrack>
                </div>
            </Splide>

        </div>
        <div class="heading">
            <h2><span class="font-serif-italic text-primary-orange font-normal">Unfiltered</span> Life Lessons That Kick Ass
            </h2>

        </div>
        <div class="blog-splide">
            <Splide :options="options2" :has-track="false">
                <div class="splide__arrows">
                    <button class="splide__arrow splide__arrow--prev">
                        Prev
                    </button>
                    <button class="splide__arrow splide__arrow--next  bg-primary-orange">
                        <img src="https://ik.imagekit.io/o3zau3i2w/markmanson/display/arrow.webp?updatedAt=1688882098052"
                            alt="arrow next">

                    </button>
                </div>
                <div>
                    <SplideTrack>
                        <SplideSlide v-for="blog in  Blogs " :key="blog">
                            <div class="blog">
                                <p class="title">{{ blog.title }}</p>
                                <div>
                                    <p class="excerpt">{{ blog.excerpt }}</p>
                                    <a class="link" :href="blog.link" target="_blank">Read blog</a>
                                </div>


                            </div>
                        </SplideSlide>
                    </SplideTrack>
                </div>

            </Splide>





        </div>
    </div>
</template>
<script>
import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import Blogs from "../assets/data/blogs.json"
export default {
    mounted() {
        AutoScroll
    },
    components: {
        Splide, SplideSlide, SplideTrack
    },
    setup() {

        const options = {
            type: 'loop',
            gap: '0rem',
            autoplay: true,
            arrows: false,
            autoWidth: true,
            pagination: false,
            autoScroll: {
                speed: 1,
                pauseOnHover: true,
                pauseOnFocus: false,
            }
        };
        const options2 = {
            type: 'loop',
            gap: '0.75rem',
            autoplay: true,
            arrows: true,

            width: 'fit-content',
            perPage: 1,
            padding: '2rem',
            mediaQuery: 'min',
            perMove: 1,
            breakpoints: {
                767: {
                    perPage: 2,
                    gap: '2rem'
                },
                1024: {
                    perPage: 1,
                    padding: { right: '10rem' }
                },
                1280: {
                    perPage: 2,
                    padding: { right: '5rem' }

                },
                1536: {
                    padding: { right: '10rem' }

                }



            },

            pagination: false,


        };

        return {
            options, options2, extensions: { AutoScroll }, Blogs
        }

    }
}
</script>