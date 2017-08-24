var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
    return (
      <div>
        <div>
          <div>
            <Nav/>
            <p>Main component rendered</p>
            {props.children}
          </div>
        </div>
      </div>
    );
  };

module.exports = Main;
