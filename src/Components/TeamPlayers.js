import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { playerProfile } from "../Actions/index";

class TeamPlayers extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      teamPlayerFlag: false,
    };
  }

  handlePlayer = (e) => {
    this.props.playerProfile(e);
    this.props.history.push("/player-profile");
  };

  handleGoback = () => {
    this.props.history.goBack();
  };

  componentDidMount = () => {
    if (JSON.stringify(this.props.states.allData).length > 2) {
      this.setState({
        teamPlayerFlag: true,
      });
    } else {
      this.props.history.push("/");
    }
  };

  render() {
    const data = this.props.states;

    return (
      <>
        {this.state.teamPlayerFlag ? (
          <div className="team-players">
            <h4>{data.allData.teamName}</h4>
            <span
              className="material-icons backICon"
              onClick={this.handleGoback}
            >
              keyboard_backspace
            </span>
            <table>
              <thead>
                <tr>
                  <td>Player</td>
                  <td>Role</td>
                  <td>Batting Style</td>
                  <td>Bowling Style</td>
                </tr>
              </thead>
              <tbody>
                {data.allData.players.map((player, index) => (
                  <tr
                    key={index}
                    onClick={(e) => this.handlePlayer(player.playername)}
                  >
                    <td>{player.playername}</td>
                    <td>{player.role}</td>
                    <td>{player.battingStyle}</td>
                    <td>{player.bowlingStyle}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : null}
      </>
    );
  }
}

const mapStateToProps = (states) => {
  return {
    states: states.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    playerProfile: (name) => {
      dispatch(playerProfile(name));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamPlayers);
