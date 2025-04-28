import { useState, useEffect } from 'react';
import axios from 'axios';
import { DiscordWidgetData, DiscordMember, FilteredUsers } from '../types/discord';

function filterUsers(userList: DiscordMember[], presence_count: number): FilteredUsers {
  const osuPlayers = userList
    .filter(user => user.game && user.game.name === "osu!" && user.username !== "owo" && user.username !== "Bathbot")
    .sort(() => Math.random() - 0.5);

  const shuffledUsers = [...userList].sort(() => Math.random() - 0.5);
  const randomMembers = shuffledUsers
    .filter(user => user.username !== "owo" && user.username !== "Bathbot") // filtering out the bots
    .slice(0, 3);

  return {
    osuPlayers: osuPlayers.length > 0 ? osuPlayers.slice(0, 3) : null,
    osuPlayerCount: osuPlayers.length,
    onlinePlayerCount: presence_count,
    randomMembers: randomMembers.length > 0 ? randomMembers : null
  };
}

export function useDiscordMembers() {
  const [data, setData] = useState<FilteredUsers | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<DiscordWidgetData>(
          'https://discordapp.com/api/guilds/119569280869072896/widget.json'
        );
        setData(filterUsers(response.data.members, response.data.presence_count));
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An error occurred'));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    // Refresh every 60 seconds
    const interval = setInterval(fetchData, 60000);
    return () => clearInterval(interval);
  }, []);

  return { data, loading, error };
}