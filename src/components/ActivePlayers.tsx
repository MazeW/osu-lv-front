import React from 'react';
import { useDiscordMembers } from '../hooks/useDiscordMembers';
import { useLanguage } from '../i18n/LanguageContext';
import { CornerDownRight } from 'lucide-react';

export function ActivePlayers() {
  const { data, loading, error } = useDiscordMembers();
  const { t } = useLanguage();

  if (loading) {
    return (
      <div className="text-white/80 animate-pulse">
        Loading players...
      </div>
    );
  }
  if (error || !data?.onlinePlayerCount) {
    return null;
  }

  return (
    <div className="text-gray-300">
      {(data.osuPlayers && data.osuPlayers.length > 0) ? (
        <>
          <span><CornerDownRight style={{ display: 'inline' }} /> </span>
          {data.osuPlayers.map((player, index) => (
            <React.Fragment key={player.id}>
              <img
                src={player.avatar_url}
                alt={player.username}
                style={{
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  display: 'inline-block',
                  verticalAlign: 'middle',
                  marginRight: '4px',
                }}
              />
              <span style={{ display: 'inline' }}>{player.username}</span>
              {data.osuPlayers && index < data.osuPlayers.length - 2 && ', '}
              {data.osuPlayers && index === data.osuPlayers.length - 2 && ' & '}
            </React.Fragment>
          ))}
          <span> {t('playingNow')}</span>
        </>
      ) : (
        <>
          <span><CornerDownRight className="text-geen-400" style={{ display: 'inline' }} /> </span>
          <span style={{ display: 'inline' }}>{t('currentlyOnline')} </span>
          {data.randomMembers && data.randomMembers.map((member, index) => (
            <React.Fragment key={member.id}>
              <img
                src={member.avatar_url}
                alt={member.username}
                style={{
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  display: 'inline-block',
                  verticalAlign: 'middle',
                  marginRight: '4px',
                }}
              />
              <span style={{ display: 'inline' }}>{member.username}</span>
              {data.randomMembers && index < data.randomMembers.length - 2 && ', '}
              {data.randomMembers && index === data.randomMembers.length - 2 && ' ' + t('or') + ' '}
            </React.Fragment>
          ))}
        </>
      )}
    </div>
  );

}