

export abstract class BaseRepository<Entity> {
  protected constructor(userRepository: any) {

  }

  async findOne(id: any) {}

  async findById(id: any) {}

  async findAll(){}

  async create(entity: any){}

}