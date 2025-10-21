export interface EpisodeProps {
  id: string;
  name: string;
  air_date: string;
  episode: string;
}

export type EpisodeCardProps = Pick<EpisodeProps, 'id' | 'name' | 'air_date' | 'episode'>;
