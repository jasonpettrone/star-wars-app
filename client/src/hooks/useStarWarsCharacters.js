import { useState } from "react";
import { useQuery } from "@apollo/client";

function useStarWarsCharacters(query, page) {
  const [star_wars_characters, setStarWarsCharacters] = useState([]);
  const [pagination_data, setPaginationData] = useState({
    count: null,
    next: null,
    previous: null
  })

  const {error, loading } = useQuery(query,{
      variables: { page: page},
      onCompleted: data => {
        setStarWarsCharacters(prevCharacters => prevCharacters.concat(data.star_wars_characters.results));
        setPaginationData({
          count: data.star_wars_characters.count,
          next: data.star_wars_characters.next,
          previous: data.star_wars_characters.previous
        })
      }
    });

    return { pagination_data, star_wars_characters, error, loading };
}

export default useStarWarsCharacters;