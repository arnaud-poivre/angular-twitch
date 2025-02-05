const apiConfig = {
  clientId: 'lo1mbmzkzcua0xnes3gsutxvdl17r0',
  authUrl: 'https://id.twitch.tv/oauth2/authorize',
  redirectUrl: 'https://valarep-twitch-clone.netlify.app/auth/authorize',
  baseUrl: 'https://api.twitch.tv/helix',
};

const oAuthConfig = {
  authLink: `${apiConfig.authUrl}?client_id=${apiConfig.clientId}&response_type=token&redirect_uri=${apiConfig.redirectUrl}`
};

export const environment = {
  production: true,
  api: {...apiConfig, ...oAuthConfig},
  twitch: {
    streamPlayerUrl: 'https://player.twitch.tv/?parent=valarep-twitch-clone.netlify.app&channel=',
    clipPlayerUrl: 'https://clips.twitch.tv/embed?parent=valarep-twitch-clone.netlify.app&clip=',
    videoPlayerUrl: 'https://videos.twitch.tv/embed?parent=valarep-twitch-clone.netlify.app&video=',
    chatUrl: 'https://www.twitch.tv/embed/[USERNAME]/chat?parent=valarep-twitch-clone.netlify.app',
  }
};
