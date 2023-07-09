/**
 *
 */
export type StatsType = {
  count_sequence_string: number;
  count_no_sequence_string: number;
};

/**
 *
 */
export interface ChainServiceInterface {
  hasSequences(): boolean;
  saveChain(chain: string): Promise<boolean>;
  getStats(): Promise<any>;
}

/**
 *
 */
export interface ServicesInterface {
  chainService: ChainServiceInterface;
}

/**
 * Represents the methods that a Chain Repository has to implements.
 */
export interface ChainRepositoryInterface {
  getStats(): Promise<StatsRepositoryType>;
  saveChain(chain: string, number_of_sequence: number): Promise<boolean>;
}

/**
 *
 */
export type ConfigRepositoryType = {
  uri: string;
  database: string;
};

/**
 *
 */
export type StatsRepositoryType = {
  count_sequence_string: number;
  count_no_sequence_string: number;
};
