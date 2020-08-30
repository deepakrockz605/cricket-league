import React, { PureComponent } from "react";
import PlayerDetails from "../Data/PlayerDetails";
import FilterResults from "react-filter-search";
import { connect } from "react-redux";
import { playerProfile } from "../Actions/index";

class AllPlayers extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      PlayerDetails: [],
      value: "",
    };
  }

  componentWillMount = async () => {
    await this.setState({ PlayerDetails: PlayerDetails });
  };

  handleChange = async (e) => {
    await this.setState({
      value: e.target.value,
    });
  };

  handlePlayer = (e) => {
    this.props.playerProfile(e);
    this.props.history.push("/player-profile");
  };

  onSort = (event, sortKey) => {
    const data = this.state.PlayerDetails.players;
    data.sort((a, b) => a[sortKey].localeCompare(b[sortKey]));
    this.setState({ data });
  };

  handleGoback = () => {
    this.props.history.goBack();
  };
  render() {
    const data = this.state.PlayerDetails;

    return (
      <div className="team-players">
        <h3>All Players</h3>
        <span className="material-icons backICon" onClick={this.handleGoback}>
          keyboard_backspace
        </span>
        <div className="searchPlayer">
          <div className="input-field col s6">
            <input
              type="text"
              id="search"
              name="search"
              className=""
              value={this.state.value}
              onChange={this.handleChange}
              autoComplete="off"
            />
            <label htmlFor="search" className="">
              Search Player
            </label>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <td onClick={(e) => this.onSort(e, "playername")}>Player</td>
              <td onClick={(e) => this.onSort(e, "role")}>Role</td>
              <td onClick={(e) => this.onSort(e, "battingStyle")}>
                Batting Style
              </td>
              <td onClick={(e) => this.onSort(e, "bowlingStyle")}>
                Bowling Style
              </td>
              <td onClick={(e) => this.onSort(e, "team")}>Team</td>
            </tr>
          </thead>
          <tbody>
            <FilterResults
              value={this.state.value}
              data={data.players}
              renderResults={(results) => (
                <>
                  {results.map((player, index) => (
                    <tr
                      key={index}
                      onClick={(e) => this.handlePlayer(player.playername)}
                    >
                      <td>{player.playername}</td>
                      <td>{player.role}</td>
                      <td>{player.battingStyle}</td>
                      <td>{player.bowlingStyle}</td>
                      <td>{player.team}</td>
                    </tr>
                  ))}
                </>
              )}
            />
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (states) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    playerProfile: (name) => {
      dispatch(playerProfile(name));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllPlayers);
