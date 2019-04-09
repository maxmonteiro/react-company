import React from "react";

const Rodape = props => {
  return (
    <footer className="container-fluid text-center">
      <a href="#myPage" title="To Top">
        <span className="glyphicon glyphicon-chevron-up" />
      </a>
      <p>
        React project made by 
        <a href="https://www.instagram.com/maximohp/">
            @maximohp
        </a>
        <br/>
        <a href="https://github.com/maxmonteiro" title="Visit Maximo Monteiro Github">
            <i className="fab fa-github"></i>maxmonteiro
        </a>
      </p>
    </footer>
  );
};

export default Rodape;
