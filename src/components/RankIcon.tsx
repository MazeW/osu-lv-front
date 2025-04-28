import React from 'react';

interface RankIconProps {
  rank: 'XH' | 'X' | 'SH' | 'S' | 'A' | 'B' | 'C' | 'D' | 'F';
  className?: string;
}

const rankIcons: Record<string, string> = {
  XH: 'https://osu.ppy.sh/assets/images/GradeSmall-SS-Silver.6681366c.svg',
  X: 'https://osu.ppy.sh/assets/images/GradeSmall-SS.a21de890.svg',
  SH: 'https://osu.ppy.sh/assets/images/GradeSmall-S-Silver.811ae28c.svg',
  S: 'https://osu.ppy.sh/assets/images/GradeSmall-S.3b4498a9.svg',
  A: 'https://osu.ppy.sh/assets/images/GradeSmall-A.d785e824.svg',
  B: 'https://osu.ppy.sh/assets/images/GradeSmall-B.e19fc91b.svg',
  C: 'https://osu.ppy.sh/assets/images/GradeSmall-C.6bb75adc.svg',
  D: 'https://osu.ppy.sh/assets/images/GradeSmall-D.6b170c4c.svg',
  F: 'https://osu.ppy.sh/assets/images/GradeSmall-F.9a26ed95.svg',
};

const RankIcon: React.FC<RankIconProps> = ({ rank, className }) => {
  const src = rankIcons[rank] || rankIcons['F'];
  return <img src={src} alt={rank} className={className || 'w-10 h-10'} />;
};

export default RankIcon;
