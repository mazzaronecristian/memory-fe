import { DifficultyDTO } from './difficultyDTO';
import { UserDTO } from './userDTO';

export class GameDTO {
  id?: number;
  relatedUser?: UserDTO;
  relatedDifficulty?: DifficultyDTO;
  misses?: number;
  moves?: number;
}
