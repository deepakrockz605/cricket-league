import React, { PureComponent } from "react";

class Venue extends PureComponent {

  handleGoback = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div className="all-venues">
        <h3>All Venues</h3>
        <span className="material-icons backICon" onClick={this.handleGoback}>
          keyboard_backspace
        </span>
        <ul>
          <li>
            <div className="venueBox">
              <p className="statiumDetails">MA Chidambaram Statium</p>
              <p className="cityDetails">Chennai</p>
              <p className="cityDetails">Capacity : 40,000 People</p>
            </div>
          </li>
          <li>
            <div className="venueBox">
              <p className="statiumDetails">Eden Gargens</p>
              <p className="cityDetails">Kolkata</p>
              <p className="cityDetails">Capacity : 50,000 People</p>
            </div>
          </li>
          <li>
            <div className="venueBox">
              <p className="statiumDetails">Wankhede Statium</p>
              <p className="cityDetails">Mumbai</p>
              <p className="cityDetails">Capacity : 42,000 People</p>
            </div>
          </li>
          <li>
            <div className="venueBox">
              <p className="statiumDetails">Sawai Mansingh Statium</p>
              <p className="cityDetails">Jaipur</p>
              <p className="cityDetails">Capacity : 32,000 People</p>
            </div>
          </li>
          <li>
            <div className="venueBox">
              <p className="statiumDetails">Arun Jaitley Statium</p>
              <p className="cityDetails">Delhi</p>
              <p className="cityDetails">Capacity : 35,000 People</p>
            </div>
          </li>
          <li>
            <div className="venueBox">
              <p className="statiumDetails">M.Chinnaswamy Statium</p>
              <p className="cityDetails">Bengaluru</p>
              <p className="cityDetails">Capacity : 28,000 People</p>
            </div>
          </li>
          <li>
            <div className="venueBox">
              <p className="statiumDetails">
                Rajiv Gandhi International Statium
              </p>
              <p className="cityDetails">Hyderabad</p>
              <p className="cityDetails">Capacity : 33,000 People</p>
            </div>
          </li>
          <li>
            <div className="venueBox">
              <p className="statiumDetails">
                Punjab Cricket Association IS Bindra Statium
              </p>
              <p className="cityDetails">Mohali</p>
              <p className="cityDetails">Capacity : 42,000 People</p>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Venue;
