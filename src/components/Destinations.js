import React, { useEffect, useState } from "react";
import DestinationCard from "./DestinationCard";

function Destinations() {
  const [destinations, setDestinations] = useState([]);
  return useEffect(() => {
    fetch("http://localhost:3000/destinations")
      .then((response) => response.json())
      .then((data) => setDestinations(data));
  }, []);
}

export default Destinations;
