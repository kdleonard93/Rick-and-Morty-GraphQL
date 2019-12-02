import React, { useEffect, useState } from "react";
import CharCard from "./CharacterCard";
import { Query } from "react-apollo";
import gql from "graphql-tag";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [characters, setCharacters] = useState([]);

  const CHAR_QUERY = gql`
    {
      characters(page: 2, filter: { name: "rick" }) {
        info {
          count
        }
        results {
          name
        }
      }
      character(id: 1) {
        id
      }
    }
  `;

  return (
    <Query query={CHAR_QUERY}>
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
    </Query>
  );
}
