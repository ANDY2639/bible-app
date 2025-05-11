import { ErrorCatalog } from "@/domain/entity/ApiError/models/ErrorCatalog";

type Props = {
  error: Error | null;
}

const ErrorMessage: React.FC<Props> = ({ error }) => {
  return (
    <div>
      <p>{error?.message ?? ErrorCatalog.default}</p>
    </div>
  )
}

export default ErrorMessage
