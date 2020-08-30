import React, { PureComponent } from "react";
import PointDetails from "../Data/PointDetails";
import teamData from "../Data/TeamDetails";
import { connect } from "react-redux";
import { playerDetails } from "../Actions/index";

class PointsTable extends PureComponent {
  
  componentWillMount = async () => {
    await this.setState({ PointDetails });
  };

  handleTeam = async (e) => {
    await this.setState({ teamData });
    let teamDetails = this.state.teamData.teams.find(
      (team) => team.teamName === e
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
      <div className="points-table relative">
        <h3>Points Table</h3>
        <span className="material-icons backICon" onClick={this.handleGoback}>
          keyboard_backspace
        </span>
        <div className="table-responsive">
          <table className="table table-sm sidebar-widget-table text-center mb-0">
            <thead className="thead-light">
              <tr>
                <th>Team</th>
                <th>Matches</th>
                <th>Wins</th>
                <th>Lose</th>
                <th>Draw / NR</th>
                <th>PT</th>
                <th>NRR</th>
              </tr>
            </thead>
            <tbody>
              {this.state.PointDetails.teams.map((points, index) => (
                <tr
                  key={index}
                  onClick={(e) => this.handleTeam(points.teamName)}
                >
                  <td className="text-left blue-text pl-3">
                    {points.teamName}
                  </td>
                  <td className="text-right pr-3">{points.matches}</td>
                  <td className="text-right pr-3">{points.wins}</td>
                  <td className="text-right pr-3">{points.looses}</td>
                  <td className="text-right pr-3 label">{points.draw}</td>
                  <td className="text-right pr-3">
                    {points.wins * 2 + points.draw}
                  </td>
                  <td className="text-right pr-3">{points.NRR}</td>
                </tr>
              ))}
            </tbody>
          </table>
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

export default connect(mapStateToProps, mapDispatchToProps)(PointsTable);
