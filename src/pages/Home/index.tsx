import axios from "axios";
import React, { useEffect, useState } from "react";
import List from "../../components/List";
import Tabs from "../../components/Tabs";

import { Container } from './styles';

const Home: React.FC = () => {
  const [data, setData] = useState({ starships: [], planets: [], people: [] });
  const [currentTab, setCurrentTab] = useState('starships');
  useEffect(() => {
    (async () => {
      const starships = axios.get("https://swapi.dev/api/starships/");
      const planets = axios.get("https://swapi.dev/api/planets/");
      const people = axios.get("https://swapi.dev/api/people/");

      const fetch = await Promise.all([
        starships,
        planets,
        people,
      ]);
      let fetchData = {starships: [], planets: [], people: []};
      [fetchData.starships, fetchData.planets, fetchData.people] = fetch.map(res => res.data.results);
      setData({ ...fetchData });
    })();
  }, []);

  return (
    <Container>
      <Tabs
      size="small"
      currentTab={currentTab}
      onChange={(value) => setCurrentTab(value)}
      >
        <Tabs.TabPane label={'Naves'} value={`starships`}>
          <List data={data.starships} customKeys={{ subtitle: 'manufacturer' }}/>
        </Tabs.TabPane>
        <Tabs.TabPane label={'Planetas'} value={`planets`}>
          <List data={data.planets} customKeys={{ subtitle: 'terrain' }}/>
        </Tabs.TabPane>
        <Tabs.TabPane label={'Pessoas'} value={`people`}>
          <List data={data.people} customKeys={{ subtitle: 'birth_year' }}/>
        </Tabs.TabPane>
        
      </Tabs>
    </Container>
  );
};

export default Home;
