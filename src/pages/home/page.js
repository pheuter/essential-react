import React from "react";
import styles from "./style.css";
import Particles from 'react-particles-js';


export default class HomePage extends React.Component {
  render() {
    return (
      <div className={styles.content}>
        <header className={styles.mainHeader}>
          <div className={styles.logo}></div>
          <div className={styles.navList}>
            <ul>
              <li>WORK</li>
              <li>ABOUT</li>
              <li>CONTACT</li>
            </ul>
          </div>
        </header>
        <div className={styles.mainBody}>
          <Particles params={{
            "particles": {
              "number": {
                "value": 80,
                "density": {
                  "enable": true,
                  "value_area": 2446.3576890600452
                }
              },
              "color": {
                "value": "#323232"
              },
              "shape": {
                "type": "polygon",
                "stroke": {
                  "width": 0,
                  "color": "#D3D3D3"
                },
                "polygon": {
                  "nb_sides": 3
                },
                "image": {
                  "src": "img/github.svg",
                  "width": 100,
                  "height": 100
                }
              },
              "opacity": {
                "value": 1,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 1,
                  "opacity_min": 0.1,
                  "sync": false
                }
              },
              "size": {
                "value": 1,
                "random": false,
                "anim": {
                  "enable": false,
                  "speed": 20,
                  "size_min": 0.1,
                  "sync": false
                }
              },
              "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#000000",
                "opacity": 0.4,
                "width": 1
              },
              "move": {
                "enable": true,
                "speed": 2.1565905665290903,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
                }
              }
            },
            "interactivity": {
              "detect_on": "window",
              "events": {
                "onhover": {
                  "enable": true,
                  "mode": "bubble"
                },
                "onclick": {
                  "enable": false,
                  "mode": "bubble"
                },
                "resize": true
              },
              "modes": {
                "grab": {
                  "distance": 231.44200550588337,
                  "line_linked": {
                    "opacity": 1
                  }
                },
                "bubble": {
                  "distance": 200,
                  "size": 10,
                  "duration": 2,
                  "opacity": 6,
                  "speed": 3
                },
                "repulse": {
                  "distance": 60,
                  "duration": 0.4
                },
                "push": {
                  "particles_nb": 4
                },
                "remove": {
                  "particles_nb": 2
                }
              }
            },
            "retina_detect": true
          }}/>
          <div className={styles.titleContainer}>
            <h1>FRONT-END</h1>
            <h1>DEVELOPER</h1>
          </div>
        </div>
        <div className={styles.selectedWork}>
          <div className={styles.workContainer}><h3 className={styles.workT}>Selected Work</h3></div>
          <div className={styles.workContainer}><h3 className={styles.workH}>Trello Clone</h3><h3 className={styles.workDesc}>Full Stack development</h3></div>
          <div className={styles.workContainer}><h3 className={styles.workH}>Dono</h3><h3 className={styles.workDesc}>Designer/Product development</h3></div>
          <div className={styles.workContainer}><h3 className={styles.workH}>The Partner</h3><h3 className={styles.workDesc}>Front-End Developer</h3></div>
          <div className={styles.workContainer}><h3 className={styles.workH}>Watcher</h3><h3 className={styles.workDesc}>Front-End Developer</h3></div>
          <div className={styles.workContainer}><h3 className={styles.btmHeader}>Dear Ally</h3><h3 className={styles.workDesc}>Hackathon Winner</h3></div>
        </div>
      </div>
    );
  }
}
