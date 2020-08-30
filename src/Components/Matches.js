import React, { PureComponent } from "react";
import MatchDetails from "../Data/MatchDetails";
import { connect } from "react-redux";
import { matchSummary } from "../Actions/index";

class Matches extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isDataLoaded: false,
    };
  }
  componentDidMount = async () => {
    await this.setState({ MatchDetails, isDataLoaded: true });
  };

  handleSummary = (e) => {
    this.props.matchSummary(e);
    this.props.history.push("/match-summary");
  };

  handleGoback = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <>
        {this.state.isDataLoaded ? (
          <div className="all-matches relative">
            <h3 className="center">All Matches</h3>
            <span
              className="material-icons backICon"
              onClick={this.handleGoback}
            >
              keyboard_backspace
            </span>
            <ul>
              {this.state.MatchDetails.matches.map((match, index) => (
                <li key={index} onClick={(e) => this.handleSummary(match)}>
                  <div className="match-list">
                    <span>{match.match} Match</span>
                    <div className="match-wrapper">
                      <div className="match-team">
                        <p className="matchteam-name">{match.opponnet1}</p>
                        <p className="matchteam-name matchScore">
                          {match.opponnet1Score}
                        </p>
                      </div>
                      <div className="match-team">
                        <p className="matchteam-name">{match.opponnet2}</p>
                        <p className="matchteam-name matchScore">
                          {match.opponnet2Score}
                        </p>
                      </div>
                    </div>
                    <p className="match-result">
                      {match[match.winner] + " " + match.result}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </>
    );
  }
}

const mapStateToProps = (states) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    matchSummary: (data) => {
      dispatch(matchSummary(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Matches);
