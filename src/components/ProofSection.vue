<template>
    <div class="proof-section">
        <div class="introduction">
            <h2 class="heading">A <span class="font-serif-italic font-normal">Counterintuitive Approach</span> to Living a
                Good Life
            </h2>
            <div class="content">
                <p>
                    The Subtle Art of Not Giving a F**k is his antidote to the coddling, let’s-all-feel-good mindset that
                    has
                    infected modern society and spoiled a generation, rewarding them with gold medals just for showing up.
                </p>
                <p>A much-needed grab-you-by-the-shoulders-and-look-you-in-the-eye moment of real-talk, filled
                    with entertaining stories and profane, ruthless humor, The Subtle Art of Not Giving a F**k is a
                    refreshing
                    slap for a generation to help them lead contented, grounded lives.</p>

            </div>

        </div>
        <div class="sliding-text-container">
            <Splide :options="options" :has-track="false" :extensions="extensions">
                <div>
                    <SplideTrack>
                        <SplideSlide>
                            <div class="scroll-text">THE SUBTLE ART OF NOT GIVING A F*CK</div>
                        </SplideSlide>
                    </SplideTrack>
                </div>
            </Splide>
            <div class="img-float">
                <img class="img-book"
                    src="https://ik.imagekit.io/o3zau3i2w/markmanson/proof/img-the-subtle-art-of-not-giving-a-fck-book-cover.webp?updatedAt=1688882140253"
                    alt="The subtle art of not giving a fuck book" height="736px" width="478px">
            </div>
        </div>
        <div class="testimonial-container">
            <p class="hashtag">#1 New York Times Bestseller</p>
            <p class="subtitle">Over 1,000,000 million copies sold</p>
            <div class="testimonial-splide">
                <Splide :options="options2" :has-track="false" :extensions="extensions">
                    <div>
                        <SplideTrack>
                            <SplideSlide v-for="testimonial in  Testimonials " :key="testimonial">
                                <div class="testimonials">
                                    <div class="flex justify-center">
                                        <svg width="25" height="28" viewBox="0 0 25 28" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7.47508 14.1779C8.9701 14.1779 10.0498 14.971 11.0465 16.7837C11.5449 18.1433 12.1262 18.03 12.3754 16.5571C13.7874 9.64606 16.4452 3.0749 21.3455 0.242499C23.2558 -0.663863 24.3356 1.14887 24.3356 2.73501C24.3356 3.52809 24.0864 4.09456 23.505 4.54775C19.103 7.04025 14.4518 10.8923 14.4518 15.3109C14.4518 16.6704 14.8671 17.5768 15.4485 17.5768C16.3621 17.5768 16.8605 14.1779 20.1827 14.1779C23.3389 14.1779 25 17.4635 25 20.8624C25 24.8277 22.9236 28 19.3522 28C17.1096 28 15.1993 26.4139 13.3721 22.9017C12.8738 21.6554 12.2093 21.6554 11.794 23.015C10.6312 26.3006 8.9701 28 6.64452 28C2.99003 28 0 24.0346 0 17.9167C0 11.4588 2.99003 3.52809 8.63787 0.242499C10.5482 -0.663863 11.6279 1.26216 11.6279 2.73501C11.6279 3.64138 11.3787 4.09456 10.7143 4.54775C6.39535 7.15356 1.41196 10.8923 1.41196 15.3109C1.41196 16.6704 1.82724 17.5768 2.49169 17.5768C3.40532 17.5768 4.23588 14.1779 7.47508 14.1779Z"
                                                fill="white" />
                                        </svg>
                                    </div>
                                    <p class="testimonial">{{ testimonial.testimonial }}</p>
                                    <img class="h-10 mx-auto rounded-full" height="50px" width="50px" :src="testimonial.img"
                                        :alt="testimonial.name">

                                    <p class="company">{{ testimonial.name }}</p>
                                    <div class="flex justify-center">

                                        <span v-for="n in testimonial.stars" :key="n" class="star ">
                                            <svg width="11" height="9" viewBox="0 0 11 9" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M4.01395 1.81183C4.55457 0.445103 6.48891 0.445104 7.02953 1.81183L7.0755 1.92806C7.29247 2.47657 7.82247 2.83688 8.41233 2.83688H8.9011C10.2241 2.83688 10.7048 4.58048 9.56878 5.25848C9.0203 5.58581 8.79001 6.2625 9.02495 6.85645L9.04686 6.91185C9.52895 8.13063 8.19209 9.26744 7.06662 8.59575L6.36735 8.17842C5.84646 7.86756 5.19701 7.86756 4.67613 8.17842L3.97685 8.59575C2.85139 9.26744 1.51452 8.13063 1.99662 6.91185L2.01853 6.85645C2.25347 6.2625 2.02318 5.58581 1.4747 5.25848C0.338646 4.58048 0.819388 2.83688 2.14238 2.83688H2.63115C3.22101 2.83688 3.75101 2.47657 3.96798 1.92806L4.01395 1.81183Z"
                                                    fill="#F26822" />
                                            </svg>


                                        </span>
                                    </div>
                                </div>
                            </SplideSlide>
                        </SplideTrack>
                    </div>
                </Splide>
            </div>
            <div class="pb-10">
                <button class="primary-btn">Available on amazon</button>
                <p class="text-[0.7rem] mt-3 btn-label">4.6 out of 5 with 136, 838 ratings</p>

            </div>
        </div>
    </div>
</template>
<script>
import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import Testimonials from "../assets/data/testimonial.json"

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
            arrows: false,
            width: 'fit-content',
            perPage: 1,
            padding: '2rem',
            mediaQuery: 'min',
            breakpoints: {
                767: {
                    perPage: 2,
                    gap: '2rem'
                },
                1024: {
                    perPage: 3
                }


            },

            pagination: false,

            autoScroll: {
                speed: 1,
                pauseOnHover: true,
                pauseOnFocus: false,
            }
        };

        return {
            options, options2, extensions: { AutoScroll }, Testimonials
        }

    }
}


</script>