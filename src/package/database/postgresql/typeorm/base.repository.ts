import { Repository } from 'typeorm';


export abstract class BaseRepository<Entity>{

  protected constructor(
    private readonly repository: Repository<Entity>,
  ) {}

    async create(entity: any): Promise<Entity> {
      return await this.repository.save(entity);
    }
}