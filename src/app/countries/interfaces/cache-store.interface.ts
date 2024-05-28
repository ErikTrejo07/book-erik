import { Channel } from './channel.type';
import { Country } from './country';
import { Proyect } from './proyect.interface';
import { Region } from './region.type';


export interface CacheStore {
  // byCapital:   TermCountries;
  // byCountries: TermCountries;
  byRegion:    ChannelProyects;
}

// export interface TermCountries {
//   term: string;
//   countries: Country[];
// }

// export interface RegionCountries {
//   region:    Region;
//   countries: Country[];
// }

export interface ChannelProyects {
  channel: Channel;
  proyect: Proyect[]
}
