import axBible from "@/data/provider/axios/axiosBible";
import { versionsAdapter } from "@/data/adapters/Version";
import { Version } from "@/domain/entity/Version/structure/version";
import createError from "@/domain/entity/ApiError/structure/createError";
import IVersionRepository from "@/domain/repository/Version/IVersionRepository";

export default class VersionRepository implements IVersionRepository {
  async getVersions(): Promise<Version[]> {
    try {
      const { data } = await axBible.get("/api/versions");
      return versionsAdapter(data);
    } catch (error) {
      throw createError(error);
    }
  }
}