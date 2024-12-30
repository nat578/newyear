<template>
    <div class="bg-white">
        <div :style="ballStyle" class="ball" />
        <div class="base">
            <svg width="100" height="100" viewBox="0 0 421 223" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_3_17)">
                    <path d="M211.402 0.607361L420.387 104.804L211.402 209L2.41718 104.804L211.402 0.607361Z"
                        fill="#830067" />
                </g>
                <defs>
                    <filter id="filter0_d_3_17" x="0.417175" y="0.607361" width="419.969" height="222.393"
                        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha" />
                        <feOffset dx="-1" dy="13" />
                        <feGaussianBlur stdDeviation="0.5" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_17" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_17" result="shape" />
                    </filter>
                </defs>
            </svg>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    data() {
        return {
            hue: 0, // Start with a hue of 0
        };
    },
    computed: {
        ballStyle() {
            const color = `hsla(${this.hue}, 100%, 50%, 0.5)`; // Generate color using HSL
            return {
                boxShadow: `0px 4px 24.1px 2px ${color}`,
                borderRadius: "50%",
                width: "100px",
                height: "100px",
                background: "rgba(189, 244, 255, 0.54)"
            };
        },
    },
    mounted() {
        setInterval(() => {
            this.hue = (this.hue + 10) % 360; // Increment hue and loop back after 360
        }, 100); // Change color every 100ms
    },
});
</script>

<style scoped>
.bg-white {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
}

.ball {
    margin: auto;
    z-index: 1;
}

.base {
    position: relative;
    top: -40px;
    z-index: 0;
}
</style>