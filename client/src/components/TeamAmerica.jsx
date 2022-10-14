import React, { Component } from 'react';
import { teams } from './team.js';

// This is my React class that has the basic code to get my example to render
// I had to export the class like this so Jest could read it
function TeamAmerica() {
  console.log(teams);
  // return <span>Test</span>
  return (
    <div>
      <h1>Team America</h1>
      {
        Object.entries(teams).map((team, i) => {
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
        })
      }
    </div>
  );
}

export default TeamAmerica;
