import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import BibleApp from "./presentation/pages/BibleApp";

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BibleApp />
    </QueryClientProvider>
  )
}
