export interface DiscordMember {
    id: string;
    username: string;
    status: string;
    avatar_url: string;
    game?: {
      name: string;
    };
  }
  
  export interface DiscordWidgetData {
    id: string;
    name: string;
    instant_invite: string;
    presence_count: number;
    members: DiscordMember[];
  }

  export interface FilteredUsers {
    osuPlayers: DiscordMember[] | null;
    onlinePlayerCount: number;
    osuPlayerCount: number;
    randomMembers: DiscordMember[] | null;
  }