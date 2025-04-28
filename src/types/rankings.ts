export interface ServerPlayer {
    id: string;
    position: number;
    discordUsername: string;
    osuUsername: string;
    globalRank: number;
    avatarUrl: string;
    level: number;
  }
  
  export interface Score {
    id: string;
    userId: string;
    mode: string;
    mods: string[];
    pp: number;
    ppWeighted: number;
    rank: 'XH' | 'X' | 'SH' | 'S' | 'A' | 'B' | 'C' | 'D' | 'F';
    accuracy: number;
    statistics: {
      count_100: number;
      count_300: number;
      count_50: number;
      count_geki: number | null;
      count_katu: number | null;
      count_miss: number;
    };
    beatmapArtist: string;
    beatmapTitle: string;
    beatmapDifficulty: string;
    beatmapUrl: string;
    covers: {
      cover: string;
      'cover@2x': string;
      card: string;
      'card@2x': string;
      list: string;
      'list@2x': string;
      slimcover: string;
      'slimcover@2x': string;
    };
    createdAt: string;
    user: {
      osuId: string;
      discordId: string;
      deleted: boolean;
      discordName: string;
      discordUsername: string;
      discordAvatar: string;
      createdAt: string;
      updatedAt: string;
    };
    stats: {
        osuId: string;
        username: string;
        globalRank: number;
        countryRank: number;
        performancePoints: number;
        country: string;
        mode: string;
        createdAt: string;
        updatedAt: string;
    }
  }
  
  export interface ScoresResponse {
    scores: Score[];
  }
  
  export interface TopPlay {
    id: string;
    position: number;
    pp: number;
    mapName: string;
    artist: string;
    difficulty: string;
    mods: string[];
    accuracy: number;
    playerName: string;
    thumbnailUrl: string;
    beatmapId: string;
  }
  
  export interface PlayerStats {
    countryRank: number;
    globalRank: number;
    performancePoints: number;
  }
  
  export interface PlayerUser {
    country: string;
    username: string;
    osuId: string;
    discordId: string;
    discordName: string | null;
    discordUsername: string;
    discordAvatar: string;
  }
  
  export interface PlayerRanking {
    stats: PlayerStats;
    user: PlayerUser;
  }
  
  export interface RankingsResponse {
    rankings: PlayerRanking[];
  }
  
  export type RankingColor = 'gold' | 'silver' | 'bronze' | 'default';