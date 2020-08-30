import React, { PureComponent } from "react";
import teamData from "../Data/TeamDetails";
import { connect } from "react-redux";
import { playerDetails } from "../Actions/index";

class Teams extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      selectedTeam: "",
      teamPlayers: false,
    };
  }

  componentDidMount = async () => {
    await this.setState({ teamData });
  };

  handleTeam = async (e) => {
    await this.setState({
      selectedTeam: e.target.innerHTML,
      teamPlayers: true,
    });
    let teamDetails = this.state.teamData.teams.find(
      (team) => team.teamName === this.state.selectedTeam
    );
    this.setState({ teamDetails });
    this.props.playerDetails(this.state.teamDetails);
    this.props.history.push("/team-players");
  };

  handleGoback = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div>
        <div className="all-teams">
          <span className="material-icons backICon" onClick={this.handleGoback}>
            keyboard_backspace
          </span>
          <h3>All Teams</h3>
          <ul>
            <li>
              <button onClick={this.handleTeam}>
                Chennai Super Kings (CSK)
              </button>
            </li>
            <li>
              <button onClick={this.handleTeam}>Delhi Capitals (DC)</button>
            </li>
            <li>
              <button onClick={this.handleTeam}>Kings XI Punjab (KXIP)</button>
            </li>
            <li>
              <button onClick={this.handleTeam}>
                Kolkata Knight Riders (KKR)
              </button>
            </li>
            <li>
              <button onClick={this.handleTeam}>Mumbai Indians (MI)</button>
            </li>
            <li>
              <button onClick={this.handleTeam}>Rajastan Royals (RR)</button>
            </li>
            <li>
              <button onClick={this.handleTeam}>
                Royal Challengers Banglore (RCB)
              </button>
            </li>
            <li>
              <button onClick={this.handleTeam}>
                Sunrisers Hydrabad (SRH)
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (states) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    playerDetails: (data) => {
      dispatch(playerDetails(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Teams);
