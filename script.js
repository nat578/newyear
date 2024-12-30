function SnowGlobe() {
    return (
        <svg width="200" height="200" viewBox="-100 -100 200 200">
            <clipPath id="snow-globe">
                <circle cx="0" cy="0" r="80" />
            </clipPath>

            <g clip-path="url(#snow-globe)">
                <Content />
            </g>

            <circle r="80" fill="none" stroke="gray" stroke-width="2" />
        </svg>
    );
}
