import React, { PureComponent } from "react";
import PlayerDetails from "../Data/PlayerDetails";
import { connect } from "react-redux";

class PlayerProfile extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      cricketrDetails: {},
    };
  }

  componentDidMount = async () => {
    if (!this.props.state.playersName) {
      this.props.history.push("/");
    } else {
      await this.setState({ PlayerDetails });
      let playerName = this.props.state.playersName.trim()
      let cricketrDetails = this.state.PlayerDetails.players.find(
        (cric) => cric.playername.trim() === playerName
      );

      await this.setState({ cricketrDetails });
    }
  };

  handleGoback = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div className="player-profile">
        <div className="card">
          <span className="material-icons backICon" onClick={this.handleGoback}>
            keyboard_backspace
          </span>
          <span className="material-icons">person</span>
          <div className="card-body">
            <p className="playername center">
              {this.state.cricketrDetails.playername}
            </p>
            {this.state.cricketrDetails.Bat_avg ? (
              <>
                {this.state.cricketrDetails.Bowl_avg ? (
                  <p className="playerRole center">
                    {this.state.cricketrDetails.bowlingStyle}
                  </p>
                ) : null}
                <p className="playerRole center">
                  {this.state.cricketrDetails.battingStyle}
                </p>
              </>
            ) : (
              <p className="playerRole center">
                {this.state.cricketrDetails.bowlingStyle}
              </p>
            )}

            <table>
              <tbody>
                <tr>
                  <td className="firstCol">Matches</td>
                  <td className="midCol">:</td>
                  <td className="lastCol">
                    {this.state.cricketrDetails.Matches}
                  </td>
                </tr>
                {this.state.cricketrDetails.Runs ? (
                  <tr>
                    <td className="firstCol">Runs</td>
                    <td className="midCol">:</td>
                    <td className="lastCol">
                      {this.state.cricketrDetails.Runs}
                    </td>
                  </tr>
                ) : (
                  <tr>
                    <td className="firstCol">Wickets</td>
                    <td className="midCol">:</td>
                    <td className="lastCol">
                      {this.state.cricketrDetails.Wickets}
                    </td>
                  </tr>
                )}

                {this.state.cricketrDetails.Bat_avg ? (
                  <>
                    <tr>
                      <td className="firstCol">Batting Average</td>
                      <td className="midCol">:</td>
                      <td className="lastCol">
                        {this.state.cricketrDetails.Bat_avg}
                      </td>
                    </tr>
                    <tr>
                      <td className="firstCol">Fifties</td>
                      <td className="midCol">:</td>
                      <td className="lastCol">
                        {this.state.cricketrDetails.fifties}
                      </td>
                    </tr>
                    {this.state.cricketrDetails.Bowl_avg ? (
                      <>
                        <tr>
                          <td className="firstCol">Bowling Average</td>
                          <td className="midCol">:</td>
                          <td className="lastCol">
                            {this.state.cricketrDetails.Bowl_avg}
                          </td>
                        </tr>
                        <tr>
                          <td className="firstCol">4-Wickets</td>
                          <td className="midCol">:</td>
                          <td className="lastCol">
                            {this.state.cricketrDetails.four_wkt}
                          </td>
                        </tr>
                      </>
                    ) : null}
                  </>
                ) : (
                  <>
                    <tr>
                      <td className="firstCol">Bowling Average</td>
                      <td className="midCol">:</td>
                      <td className="lastCol">
                        {this.state.cricketrDetails.Bowl_avg}
                      </td>
                    </tr>
                    <tr>
                      <td className="firstCol">4-Wickets</td>
                      <td className="midCol">:</td>
                      <td className="lastCol">
                        {this.state.cricketrDetails.four_wkt}
                      </td>
                    </tr>
                  </>
                )}

                <tr>
                  <td className="firstCol">Teams Played For</td>
                  <td className="midCol">:</td>
                  <td className="lastCol">
                    {this.state.cricketrDetails.played_for}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state: state.data,
  };
};

export default connect(mapStateToProps)(PlayerProfile);
