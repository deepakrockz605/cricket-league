import React from 'react'
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="dashboard">
        <ul>
          <li>
            <Link to="/teams">
              <button id="teams">
                teams
              </button>
            </Link>
          </li>
          <li>
            <Link to="/all-players">
              <button id="players">
                All Players
              </button>
            </Link>
          </li>
          <li>
            <Link to="/venues">
              <button id="venue">
                Venue
              </button>
            </Link>
          </li>
          <li>
            <Link to="/matches">
              <button id="matches">
                Matches
              </button>
            </Link>
          </li>
          <li>
            <Link to="/points-table">
              <button id="pointsTable">
                Points table
              </button>
            </Link>
          </li>
        </ul>
      </div>
  )
}

export default Dashboard