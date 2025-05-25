import { Version } from '@/domain/entity/Version/structure/version';
import type IVersionRepository from '@/domain/repository/Version/IVersionRepository';

export default class GetVersionsUseCase {
  private readonly repository: IVersionRepository

  constructor(repository: IVersionRepository) {
    this.repository = repository
  }

  getVersions(): Promise<Version[]> {
    return this.repository.getVersions()
  }
}