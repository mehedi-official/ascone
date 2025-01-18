<script module lang="ts">
    export { arrow_right, star, arrow_up_45, transparency, creative, credit, plus, bd, sparkle, global, chart, arrow_head, aboutus_illustration }
</script>

{#snippet arrow_right()}
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.71289 8.3L6.42956 5.58333C6.75039 5.2625 6.75039 4.7375 6.42956 4.41666L3.71289 1.7" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
{/snippet}

{#snippet star()}
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1974_1928)">
        <path d="M7.99967 1.33331L10.0597 5.50665L14.6663 6.17998L11.333 9.42665L12.1197 14.0133L7.99967 11.8466L3.87967 14.0133L4.66634 9.42665L1.33301 6.17998L5.93967 5.50665L7.99967 1.33331Z" fill="#FEC802" stroke="#FEC802" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
        <clipPath id="clip0_1974_1928">
        <rect width="16" height="16" fill="white"/>
        </clipPath>
        </defs>
    </svg>
{/snippet}

{#snippet arrow_up_45(color: string = "black")}
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.0205 21.9202L21.92 12.0207" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12.0205 12.0208H21.92V21.9202" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
{/snippet}

{#snippet transparency(color: string = "black")}
    <svg width="58" height="56" viewBox="0 0 58 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.75" y="0.75" width="32.5" height="32.5" rx="16.25" stroke={color} stroke-width="1.5"/>
        <rect x="0.75" y="22.75" width="32.5" height="32.5" rx="16.25" stroke={color} stroke-width="1.5"/>
        <rect x="24.75" y="0.75" width="32.5" height="32.5" rx="16.25" stroke={color} stroke-width="1.5"/>
        <rect x="24.75" y="22.75" width="32.5" height="32.5" rx="16.25" stroke={color} stroke-width="1.5"/>
    </svg>  
{/snippet}

{#snippet creative(color: string = "black")}
    <svg width="65" height="49" viewBox="0 0 65 49" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1.06066" y="24.0417" width="32.5" height="32.5" rx="7.25" transform="rotate(-45 1.06066 24.0417)" stroke={color} stroke-width="1.5"/>
        <rect x="17.0607" y="24.0417" width="32.5" height="32.5" rx="7.25" transform="rotate(-45 17.0607 24.0417)" stroke={color} stroke-width="1.5"/>
    </svg>
{/snippet}

{#snippet credit(color: string = "black")}
    <svg width="56" height="57" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="19.75" y="38.75" width="16.5" height="16.5" rx="8.25" stroke={color} stroke-width="1.5"/>
        <rect x="9.75" y="19.75" width="36.5" height="36.5" rx="18.25" stroke={color} stroke-width="1.5"/>
        <rect x="0.75" y="0.75" width="54.5" height="54.5" rx="27.25" stroke={color} stroke-width="1.5"/>
    </svg>
{/snippet}

{#snippet plus(isActive: boolean = true)}
    <svg class={[isActive ? 'stroke-[#8695A9]' : 'stroke-black']} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 5V19" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M5 12H19" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
{/snippet}

{#snippet bd()}
    <svg
        viewBox="0 0 1000 600" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="20" height="14"><path fill="#006a4e" d="M0 0h1000v600H0z"/>
        <circle cx="450" cy="300" r="200" fill="#f42a41"/>
    </svg>
{/snippet}

{#snippet sparkle(width: number = 148, fill: string = "white")}
    <svg width={width} height={width} viewBox="0 0 148 148" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M74 0C74 0 79.7805 36.8733 95.4536 52.5464C111.127 68.2195 148 74 148 74C148 74 111.127 79.7805 95.4536 95.4536C79.7805 111.127 74 148 74 148C74 148 68.2195 111.127 52.5464 95.4536C36.8733 79.7805 0 74 0 74C0 74 36.8733 68.2195 52.5464 52.5464C68.2195 36.8733 74 0 74 0Z" fill={fill}/>
    </svg>
{/snippet}

{#snippet global()}
    <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="42" cy="42" r="41.5" stroke="#1C3F3A"/>
        <path d="M83.5 41.5C83.5 42.824 82.514 44.206 80.4277 45.5566C78.3634 46.8929 75.3432 48.1154 71.5664 49.1495C64.02 51.2158 53.5665 52.5 42 52.5C30.4335 52.5 19.98 51.2158 12.4336 49.1495C8.65679 48.1154 5.63659 46.8929 3.57228 45.5566C1.48604 44.206 0.5 42.824 0.5 41.5C0.5 40.176 1.48604 38.794 3.57228 37.4434C5.63659 36.1071 8.65679 34.8846 12.4336 33.8505C19.98 31.7842 30.4335 30.5 42 30.5C53.5665 30.5 64.02 31.7842 71.5664 33.8505C75.3432 34.8846 78.3634 36.1071 80.4277 37.4434C82.514 38.794 83.5 40.176 83.5 41.5Z" stroke="#1C3F3A"/>
        <path d="M83.5 42C83.5 48.9428 78.9525 55.3062 71.4353 59.9596C63.9258 64.6084 53.5201 67.5 42 67.5C30.4799 67.5 20.0742 64.6084 12.5647 59.9596C5.04752 55.3062 0.5 48.9428 0.5 42C0.5 35.0572 5.04752 28.6938 12.5647 24.0404C20.0742 19.3916 30.4799 16.5 42 16.5C53.5201 16.5 63.9258 19.3916 71.4353 24.0404C78.9525 28.6938 83.5 35.0572 83.5 42Z" stroke="#1C3F3A"/>
        <path d="M67.5 42C67.5 53.5201 64.6084 63.9258 59.9596 71.4353C55.3062 78.9525 48.9428 83.5 42 83.5C35.0572 83.5 28.6938 78.9525 24.0404 71.4353C19.3916 63.9258 16.5 53.5201 16.5 42C16.5 30.4799 19.3916 20.0742 24.0404 12.5647C28.6938 5.04752 35.0572 0.5 42 0.5C48.9428 0.5 55.3062 5.04752 59.9596 12.5647C64.6084 20.0742 67.5 30.4799 67.5 42Z" stroke="#1C3F3A"/>
        <path d="M52.5 42C52.5 53.5665 51.2158 64.02 49.1495 71.5664C48.1154 75.3432 46.8929 78.3634 45.5566 80.4277C44.206 82.514 42.824 83.5 41.5 83.5C40.176 83.5 38.794 82.514 37.4434 80.4277C36.1071 78.3634 34.8846 75.3432 33.8505 71.5664C31.7842 64.02 30.5 53.5665 30.5 42C30.5 30.4335 31.7842 19.98 33.8505 12.4336C34.8846 8.65679 36.1071 5.63659 37.4434 3.57228C38.794 1.48604 40.176 0.5 41.5 0.5C42.824 0.5 44.206 1.48604 45.5566 3.57228C46.8929 5.63659 48.1154 8.65679 49.1495 12.4336C51.2158 19.98 52.5 30.4335 52.5 42Z" stroke="#1C3F3A"/>
    </svg>
{/snippet}

{#snippet chart()}
    <svg class="w-full"  height="118" viewBox="0 0 229 118" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 116L11.5 109L22.5 96L34 106L45 87L54.5 100.5L64.5 96L77.5 99L87 111.5L98 96L109 94L122.5 63.5L131 59.5L140.5 36.5L151.5 44.5L161.5 40L174 52.5L186.5 40L192.5 44.5L205 33L214.5 11L228 2" stroke="white" stroke-width="2.5"/>
    </svg>
{/snippet}

{#snippet arrow_head()}
    <svg width="108" height="71" viewBox="0 0 108 71" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="53.8145" width="24" height="76.1053" transform="rotate(45 53.8145 0)" fill="white"/>
        <rect x="53.8145" width="76.0095" height="24" transform="rotate(45 53.8145 0)" fill="white"/>
    </svg>
{/snippet}

{#snippet aboutus_illustration()}
    <svg width="539" height="539" viewBox="0 0 539 539" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="268.5" cy="269.5" r="128" stroke="#1C3F3A" stroke-opacity="0.2"/>
        <circle cx="269" cy="270" r="201.5" stroke="#1C3F3A" stroke-opacity="0.2"/>
        <circle cx="269.5" cy="269.5" r="269" stroke="#1C3F3A" stroke-opacity="0.2"/>
        <circle cx="269" cy="270" r="74.1071" stroke="#1C3F3A" stroke-width="1.78571"/>
        <path d="M343.107 269.107C343.107 271.471 341.346 273.939 337.621 276.351C333.935 278.737 328.541 280.92 321.797 282.767C308.322 286.457 289.655 288.75 269 288.75C248.345 288.75 229.678 286.457 216.203 282.767C209.459 280.92 204.065 278.737 200.379 276.351C196.654 273.939 194.893 271.471 194.893 269.107C194.893 266.743 196.654 264.275 200.379 261.863C204.065 259.477 209.459 257.294 216.203 255.447C229.678 251.758 248.345 249.464 269 249.464C289.655 249.464 308.322 251.758 321.797 255.447C328.541 257.294 333.935 259.477 337.621 261.863C341.346 264.275 343.107 266.743 343.107 269.107Z" stroke="#1C3F3A" stroke-width="1.78571"/>
        <path d="M343.107 270C343.107 282.398 334.987 293.761 321.563 302.071C308.153 310.372 289.572 315.536 269 315.536C248.428 315.536 229.847 310.372 216.437 302.071C203.013 293.761 194.893 282.398 194.893 270C194.893 257.602 203.013 246.239 216.437 237.929C229.847 229.628 248.428 224.464 269 224.464C289.572 224.464 308.153 229.628 321.563 237.929C334.987 246.239 343.107 257.602 343.107 270Z" stroke="#1C3F3A" stroke-width="1.78571"/>
        <path d="M314.536 270C314.536 290.572 309.372 309.153 301.071 322.563C292.761 335.987 281.398 344.107 269 344.107C256.602 344.107 245.239 335.987 236.929 322.563C228.628 309.153 223.464 290.572 223.464 270C223.464 249.428 228.628 230.847 236.929 217.437C245.239 204.013 256.602 195.893 269 195.893C281.398 195.893 292.761 204.013 301.071 217.437C309.372 230.847 314.536 249.428 314.536 270Z" stroke="#1C3F3A" stroke-width="1.78571"/>
        <path d="M287.75 270C287.75 290.655 285.457 309.322 281.767 322.797C279.92 329.541 277.737 334.935 275.351 338.621C272.939 342.346 270.471 344.107 268.107 344.107C265.743 344.107 263.275 342.346 260.863 338.621C258.477 334.935 256.294 329.541 254.447 322.797C250.757 309.322 248.464 290.655 248.464 270C248.464 249.345 250.757 230.678 254.447 217.203C256.294 210.459 258.477 205.065 260.863 201.379C263.275 197.654 265.743 195.893 268.107 195.893C270.471 195.893 272.939 197.654 275.351 201.379C277.737 205.065 279.92 210.459 281.767 217.203C285.457 230.678 287.75 249.345 287.75 270Z" stroke="#1C3F3A" stroke-width="1.78571"/>
    </svg>
{/snippet}
