import ContentLoader, { IContentLoaderProps } from "react-content-loader"

const BookLoader = (props: IContentLoaderProps) => (
  <ContentLoader
    speed={2}
    width={200}
    height={200}
    viewBox="0 0 200 200"
    backgroundColor="#b5b5b5"
    foregroundColor="#888888"
    {...props}
  >
    <rect x="0" y="20" rx="0" ry="0" width="126" height="18" />
    <rect x="-1" y="43" rx="0" ry="0" width="127" height="17" />
    <rect x="-1" y="65" rx="0" ry="0" width="127" height="17" />
  </ContentLoader>
)

export default BookLoader

