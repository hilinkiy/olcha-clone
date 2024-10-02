import ContentLoader from "react-content-loader"

const MyLoader = () => (
  <ContentLoader 
    speed={2}
    width={400}
    height={160}
    viewBox="0 0 400 160"
    backgroundColor="#d9d9d9"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="12" ry="12" width="335" height="110" /> 
    <circle cx="626" cy="211" r="20" />
  </ContentLoader>
)

export default MyLoader

