import React, { PureComponent } from "react";
import { connect } from "react-redux";
import teamData from "../Data/TeamDetails";
import { playerDetails } from "../Actions/index";

class MatchSummary extends PureComponent {
  componentDidMount = e => {
      if(!this.props.state.matchData.match){
          this.props.history.push('/')
      }
  }

  handleTeam = async (e) => {
    await this.setState({
      teamData: teamData,
    });
    let teamDetails = this.state.teamData.teams.find(
      (team) => team.teamName === e
    );
    this.setState({ teamDetails });
    this.props.playerDetails(this.state.teamDetails);
    this.props.history.push("/team-players");
  };

  handleGoback = () =>{
    this.props.history.goBack()
  }

  render() {
    const matchData = this.props.state.matchData;
    return (
      <div className="team-players match-summary relative">
        <h3 className="center">Match Summary</h3>
        <span className="material-icons backICon" onClick={this.handleGoback}>keyboard_backspace</span>
        <div className="player-profile">
          <div className="card">
            <table>
              <tbody>
                <tr>
                  <td className="firstCol">Host</td>
                  <td className="midCol">:</td>
                  <td
                    className="lastCol colunderline"
                    onClick={(e) => this.handleTeam(matchData.opponnet1)}
                  >
                    {matchData.opponnet1}
                  </td>
                </tr>
                <tr>
                  <td className="firstCol">Challenger</td>
                  <td className="midCol">:</td>
                  <td
                    className="lastCol colunderline"
                    onClick={(e) => this.handleTeam(matchData.opponnet2)}
                  >
                    {matchData.opponnet2}
                  </td>
                </tr>
                <tr>
                  <td className="firstCol">Winner</td>
                  <td className="midCol">:</td>
                  <td className="lastCol">
                    {matchData[matchData.winner] + " " + matchData.result}
                  </td>
                </tr>
                <tr>
                  <td className="firstCol">Looser</td>
                  <td className="midCol">:</td>
                  <td className="lastCol">{matchData[matchData.looser]}</td>
                </tr>
                <tr>
                  <td className="firstCol">Man of the Match</td>
                  <td className="midCol">:</td>
                  <td
                    className="lastCol colunderline"
                  >
                    {matchData.mom}
                  </td>
                </tr>
                <tr>
                  <td className="firstCol">Bowler of the Match</td>
                  <td className="midCol">:</td>
                  <td
                    className="lastCol colunderline"
                  >
                    {matchData.bom}
                  </td>
                </tr>
                <tr>
                  <td className="firstCol">Best Fielder</td>
                  <td className="midCol">:</td>
                  <td
                    className="lastCol colunderline"
                  >
                    {matchData.bestfielder}
                  </td>
                </tr>
                <tr>
                  <td className="firstCol">City</td>
                  <td className="midCol">:</td>
                  <td className="lastCol">{matchData.city}</td>
                </tr>
                <tr>
                  <td className="firstCol">Venue</td>
                  <td className="midCol">:</td>
                  <td className="lastCol">{matchData.venue}</td>
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

const mapDispatchToProps = (dispatch) => {
  return {
    playerDetails: (data) => {
      dispatch(playerDetails(data));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MatchSummary);
