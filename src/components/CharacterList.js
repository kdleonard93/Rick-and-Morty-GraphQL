import React, { useEffect, useState } from "react";
import CharCard from "./CharacterCard";
import { Query } from "react-apollo";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [characters, setCharacters] = useState([]);

  return (
    <div>
      <section className="character-list grid-view">
        {characters.map(char => {
          return (
            <div>
              <CharCard
                key={char.name}
                name={char.name}
                species={char.species}
                gender={char.gender}
                origin={char.origin}
                location={char.location}
                status={char.status}
              />
            </div>
          );
        })}
      </section>
    </div>
  );
}
