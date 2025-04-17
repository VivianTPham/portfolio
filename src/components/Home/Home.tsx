import React, { useEffect } from 'react';
import $ from 'jquery'; // jQuery import
import "./Home.css";
import WavyMarquee from '../WavyMarquee/WavyMarquee';

import blackstone from '../../assets/Blackstone.webp';
import zagg from '../../assets/ZAGG-Resized.webp';
import wingo from '../../assets/Wingo-resize.webp';

const Home = () => {
  useEffect(() => {
    const markers = $(".marker");
    const widthGain = 1;
    const heightGain = 1;
    const ns = "http://www.w3.org/2000/svg";

    markers.each(function () {
      const marker = $(this);
      const width = marker.width() || 0;
      const height = 2 * (marker.height() || 0);
      const svg = document.createElementNS(ns, "svg");

      $(svg)
        .css({
          width,
          height,
          //transform: `scale(${(2 * widthGain * width) / height},${heightGain})`,
          transform: "scale(2, 1.5)",
        })
        .attr({
          width,
          height,
          viewBox: "-1.5 -1.5 3 3",
        });

        marker.find("svg").remove(); // remove existing SVGs
        marker[0].appendChild(svg);

        const path = document.createElementNS(ns, "path");

        $(path).attr({
          pathLength: 100,
          "vector-effect": "non-scaling-stroke",
        });

        svg.appendChild(path);

        setCircle(false);

        marker.on("mouseover", () => {
          setCircle(true);
        });

        function setCircle(show_element: boolean) {
          $(path).css("visibility", show_element ? "visible" : "hidden");

          const pathLength = 1000 * path.getTotalLength();
          $(path)
            .attr({
              d: circlePath(-0.15, 0.05, 150, 190, 0.05, 0.3),
              "stroke-dasharray": pathLength,
              "stroke-dashoffset": pathLength,
            });
        }

        function circlePath(
          dr_min: number,
          dr_max: number,
          θ0_min: number,
          θ0_max: number,
          dθ_min: number,
          dθ_max: number
        ) {
          const c = 0.551915024494;
          const β = Math.atan(c);
          const d = Math.sqrt(c * c + 1);
          let r = 1.2;
          let θ = ((θ0_min + Math.random() * (θ0_max - θ0_min)) * Math.PI) / 180;
          let path = "M" + [r * Math.sin(θ), r * Math.cos(θ)];

          path += " C" + [d * r * Math.sin(θ + β), d * r * Math.cos(θ + β)];

          for (let i = 0; i < 4; i++) {
            θ += (Math.PI / 2) * (1 + dθ_min + Math.random() * (dθ_max - dθ_min));
            r *= 1 + dr_min + Math.random() * (dr_max - dr_min);
            path +=
              " " +
              (i ? "S" : "") +
              [d * r * Math.sin(θ - β), d * r * Math.cos(θ - β)];
            path += " " + [r * Math.sin(θ), r * Math.cos(θ)];
          }

          return path;
      }
    });
  }, []);

  return (
    <>
      <WavyMarquee />
      <div className="container">
        <div className='home-container'>
            <div className='corner'></div>
            <div className='intro'>
                <h2 className='intro-content'>
                    I'm Vivian!<br />
                    An Industrial Designer Based in Utah!
                </h2>
            </div>
        </div>
        <div className="works-section">
          <h3>Work</h3>
          <div className="works-container">
            <a href="#/work" className="work-item marker">
              <img className="work-img" src={blackstone} alt="Electric Pizza Oven" />
              <h2>BLACKSTONE</h2>
            </a>
            <a href="#/work" className="work-item marker">
              <img className="work-img" src={zagg} alt="Rugged Folio" />
              <h2>ZAGG</h2>
            </a>
            <a href="#/work" className="work-item marker">
              <img className="work-img" src={wingo} alt="30w Charger" />
              <h2>CONTRACTING</h2>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
