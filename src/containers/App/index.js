import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-viewport-slider';
import Particles from 'react-particles-js';
import Footer from '../../components/footer.component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Slider>
          <Slider.Item style={{ backgroundColor: '#29225f' }}>
          <div className="Particles">
            <Particles params={{
              "particles": {
                "number": {
                  "value": 144,
                  "density": {
                    "enable": true,
                    "value_area": 1122.388442605866
                  }
                },
                "color": {
                  "value": "#ffffff"
                },
                "shape": {
                  "type": "circle",
                  "stroke": {
                    "width": 0,
                    "color": "#e3c6c9"
                  },
                },
                "opacity": {
                  "value": 0.4655971085630409,
                  "random": true,
                  "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0,
                    "sync": false
                  }
                },
                "size": {
                  "value": 2,
                  "random": true,
                  "anim": {
                    "enable": false,
                    "speed": 4,
                    "size_min": 0.3,
                    "sync": false
                  }
                },
                "line_linked": {
                  "enable": true,
                  "distance": 74,
                  "color": "#ffffff",
                  "opacity": 0.3367165327817598,
                  "width": 0
                },
                "move": {
                  "enable": true,
                  "speed": 1,
                  "direction": "bottom-left",
                  "random": true,
                  "straight": false,
                  "out_mode": "bounce",
                  "bounce": false,
                  "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 600
                  }
                }
              },
              "interactivity": {
                "detect_on": "canvas",
                "events": {
                  "onhover": {
                    "enable": false,
                    "mode": "grab"
                  },
                  "onclick": {
                    "enable": true,
                    "mode": "repulse"
                  },
                  "resize": true
                },
                "modes": {
                  "grab": {
                    "distance": 400,
                    "line_linked": {
                      "opacity": 1
                    }
                  },
                  "bubble": {
                    "distance": 250,
                    "size": 0,
                    "duration": 2,
                    "opacity": 0,
                    "speed": 3
                  },
                  "repulse": {
                    "distance": 227.38161944437664,
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
              "retina_detect": true }} />
          </div>
            <div className="page-one">
            hello.<br />
            cześć.<br />
            willkommen.<br />
            aloha.<br />
            </div>
          </Slider.Item>
          <Slider.Item style={{ backgroundColor: '#0c2759' }}>

            <div className="profile-photo">
              <img src="/images/Ricky.jpg" alt="" />
            </div>
            <div className="bio" style={{ color: 'white'}}>
              <div id="text">
              Ricky Peters is a full stack web developer and photographer.<br />
              </div>
              <div id="text">
              This site was made using React, PostgreSQL, Express, and Node.js.
              </div>
            <div className="buttons">
              <Link to='/artwork' style={{ color: 'white', textDecoration: 'none' }}>Artwork.</Link><br />
              <Link to='/design'style={{ color: 'white', textDecoration: 'none' }}>Design.</Link><br />
              <a href='https://registry.jsonresume.org/ee740269' style={{ color: 'white', textDecoration: 'none' }}>Resume.</a>
            </div>
            </div>
            <Footer />
          </Slider.Item>
        </Slider>
      </div>
    );
  }
}

export default App;

