import { Parameters, SearchResponse } from '@/domain/entity/Search/structure/search';
import { Version } from '@/domain/entity/Version/structure/version';
import ISearchRepository from '@/domain/repository/Search/ISearchRepository';

export default class SearchUseCase {
  private readonly repository: ISearchRepository

  constructor(repository: ISearchRepository) {
    this.repository = repository
  }

  search(versionUrl: Version["uri"], params: Parameters): Promise<SearchResponse> {
    return this.repository.search(versionUrl, params)
  }
}
