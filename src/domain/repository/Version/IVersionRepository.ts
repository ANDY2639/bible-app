import { Version } from "@/domain/entity/Version/structure/version"

export default interface IVersionRepository {
  getVersions(): Promise<Version[]>
}
