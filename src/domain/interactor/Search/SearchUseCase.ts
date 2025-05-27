import { SearchResponse } from '@/domain/entity/Search/structure/search';
import { SearchCriteria } from '@/domain/entity/Search/models/SearchCriteria';
import ISearchRepository from '@/domain/repository/Search/ISearchRepository';

export default class SearchUseCase {
  constructor(private readonly repository: ISearchRepository) { }

  async execute(criteria: SearchCriteria): Promise<SearchResponse> {
    return this.repository.search(criteria)
  }
}
