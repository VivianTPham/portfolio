import React, { JSX, useEffect, useRef, useState } from "react";
import "./WavyMarquee.css";

type WavyMarqueeProps = {
  text?: string;
  speed?: number;
};

const WavyMarquee = ({ text = "Hello and Welcome!", speed = 1 }: WavyMarqueeProps) => {
    const tspansRef = useRef<SVGTSpanElement[]>([]);
    const [tspans, setTspans] = useState<JSX.Element[]>([]);
    const [pathWidth, setPathWidth] = useState<number>(0);
    const textWidth = 648; // Estimate for now, can be dynamic if needed

    useEffect(() => {
    // Set enough tspans to cover screen * ~3
    const screenWidth = window.innerWidth;
    const totalTspans = Math.ceil((screenWidth * 3) / textWidth);
    setPathWidth(textWidth * totalTspans);

    const generatedTspans = Array.from({ length: totalTspans }, (_, i) => (
        <tspan
        key={i}
        x={(textWidth * i).toString()}
        ref={(el) => {
            if (el) tspansRef.current[i] = el;
        }}
        className="Marquee-svg-text"
        >
        {text}
        </tspan>
    ));
    setTspans(generatedTspans);
    }, [text]);

    useEffect(() => {
    let animationFrame: number;

    const animate = () => {
        tspansRef.current.forEach((tspan) => {
        const currentX = parseFloat(tspan.getAttribute("x") || "0");
        const newX = currentX + speed;

        if (newX > pathWidth) {
            tspan.setAttribute("x", (-textWidth).toString());
        } else {
            tspan.setAttribute("x", newX.toString());
        }
        });

        animationFrame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrame);
    }, [speed, pathWidth]);

    return (
        <>
            <div className="wavy-marquee-container">
                <svg>
                <path
                    id="textPath"
                    fill="none"
                    stroke="transparent"
                    strokeWidth="0"
                    strokeDasharray="616 32"
                    strokeDashoffset="0"
                    d="M-400,59.58 L-400,59.58 S-133.2,119.58 0,119.58 S266.8,59.58 400,59.58 S666.8,119.58 800,119.58 S1066.8,59.58 1200,59.58 S1466.8,119.58 1600,119.58 S1866.8,59.58 2000,59.58 S2266.8,119.58 2400,119.58 S2666.8,59.58 2800,59.58 S3066.8,119.58 3200,119.58"
                />
                <text>
                    <textPath href="#textPath" className="Marquee-svg-text">
                        {tspans}
                    </textPath>
                </text>
                </svg>
            </div>
            
        </>
    );
};

export default WavyMarquee;
