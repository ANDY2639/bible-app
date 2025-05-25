import { Version } from "@/domain/entity/Version/structure/version";
import VersionRepository from "@/data/repository/Version/VersionRepository";
import GetVersionsUseCase from "@/domain/interactor/Version/GetVersionsUseCase";

const versionRepository = new VersionRepository()

export const getVersions = async (): Promise<Version[]> => {
  const getVersionsUC = new GetVersionsUseCase(versionRepository)
  const versions = await getVersionsUC.getVersions()
  return versions
}
