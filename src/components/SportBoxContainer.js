import React, { useEffect } from 'react';
import './index.css';
import SportBox from './SportBox';
import Sports from '../assets/sports';

export default function SportBoxContainer() {
  
  useEffect(() => {
    const sports = Sports;
    const sportsTeams = new Map();
    
    console.log(sports[1].HomeTeam);

    //Map out sportsTeams with empty array as value to contain teams won against
    for (let i = 0; i < 380; i++) {
      if(!sportsTeams.has(sports[i].HomeTeam)) {
        sportsTeams.set((sports[i].HomeTeam), [])
      } else {
        continue
      }
    }
    console.log(sportsTeams);
    console.log(sportsTeams.get(sports[0].HomeTeam));

    for (let i = 0; i < 380; i++) {
      let homeTeam = sports[i].HomeTeam;
      let awayTeam = sports[i].AwayTeam;
      if(sports[i].FTR === "H") {
        if(!(sportsTeams.get(homeTeam).includes(awayTeam))) {
          sportsTeams.get(homeTeam).push(awayTeam);
        }
      } else if (sports[i].FTR === "A") {
        if(!(sportsTeams.get(awayTeam).includes(homeTeam))) {
          sportsTeams.get(awayTeam).push(homeTeam);
        }
      }
    }

    //Convert to JSON then Stringify and store in localStorage
    const sportsJson = Object.fromEntries(sportsTeams)
    localStorage.setItem("sports", JSON.stringify(sportsJson));

}, []) 

  return (
    <SportBox cardTitle="Sports" />
  )
}