export const translations = {
  en: {
    welcome: "Welcome to",
    community: "Community",
    joinPlayers: "Join",
    playersOnline: "users who are currently online",
    currentlyPlaying: "...and",
    playingNow: "are playing osu! right now!", // todo: fix is/are if single person
    scrollToExplore: "Scroll to see more",
    joinDiscord: "Join our Discord",
    ending: "an",
    currentlyOnline: "Come and say hi to",
    or: "or",
    loadingError: "Error occurred while loading data",
    serverRankings: "Top players in the server (osu! standard)",
    rankingsPageTitle: "Top players and scores",
    topPlays: "All time best plays",
  },
  lv: {
    welcome: "Sveicināti",
    community: "Serverī",
    joinPlayers: "Pievienojies",
    playersOnline: "citiem servera lietotājiem kas pašlaik ir online",
    currentlyPlaying: "...un",
    playingNow: "jau spēlē osu!",
    scrollToExplore: "Skatīt vairāk",
    joinDiscord: "Pievienojies mūsu Discord!",
    ending: "jas",
    currentlyOnline: "Ienāc un pasaki čau",
    or: "vai",
    loadingError: "Kaut kas nogāja greizi, ieladējot datus",
    serverRankings: "Servera top spēlētāji (osu! standard)",
    rankingsPageTitle: "Servera top spēlētāji un rezultāti",
    topPlays: "Visu laiku labākie rezultāti",
  }
} as const;

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;