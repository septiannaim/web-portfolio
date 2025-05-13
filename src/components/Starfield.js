import React from "react";
import Particles from "react-tsparticles";

const Starfield = () => (
    <Particles
        id="tsparticles"
        options={{
            fullScreen: { enable: true, zIndex: 0 },
            background: { color: "transparent" },
            particles: {
                number: { value: 120, density: { enable: true, value_area: 800 } },
                color: { value: "#fff" },
                shape: { type: "circle" },
                opacity: { value: 0.7, random: true },
                size: { value: 1.5, random: true },
                move: { enable: true, speed: 0.2, direction: "none", out_mode: "out" },
            },
            interactivity: { events: { onhover: { enable: false } } },
            detectRetina: true,
        }}
    />
);

export default Starfield; 