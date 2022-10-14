import React from 'react';
import { teams } from './team.js';

export default function TeamAmerica() {
  return (
    <div>
      <h1>Team America</h1>
      {
        teams.map((team, i) => (
          <div key={i}>
            <h2>{team[0].team}</h2>
            {team.map((member, k) => {
              return (
                <ul key={k}>
                  <li>
                    {member.full_name}&nbsp;-&nbsp;
                    {member.role}&nbsp;
                  </li>
                </ul>
              );
            })}
          </div>
        ))
      }
    </div>
  );
}