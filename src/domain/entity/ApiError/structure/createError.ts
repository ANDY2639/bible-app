/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosError } from "axios"
import { ErrorCatalog } from "../models/ErrorCatalog"

export default function createError(error: any) {
  if (error instanceof AxiosError && !error.response) {
    throw new Error(ErrorCatalog.default)
  }

  const { data } = error.response
  throw new Error(data.error)
}
