import React, { Component } from 'react';
import './Hamburger.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

class Hamburger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false
    };
  }

  toggleMenu = () => {
    const hbody = document.querySelector('.hbody');
    if (!this.state.isMenuOpen) {
      hbody.classList.add('open');
      hbody.style.height = '50vh'; 
    } else {
      hbody.classList.remove('open');
      hbody.style.height = ''; 
    }
    this.setState(prevState => ({
      isMenuOpen: !prevState.isMenuOpen
    }));
  }

  render() {
    return (
      <header>
        <section className="hbody">
          <article className="nav">
            <div className="title"><a href="./index.html">PAGE</a></div>
            <ul id="menu" className={this.state.isMenuOpen ? "open" : ""}>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
            <div className="hamburger-menu" onClick={this.toggleMenu}>
              <FontAwesomeIcon icon={faBars} />
            </div>
          </article>
        </section>
      </header>
    );
  }
}

export default Hamburger;
