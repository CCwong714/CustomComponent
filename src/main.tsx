import ReactDOM from 'react-dom/client';
import './styles/global.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import HookFormExampleYup from './components/Foms/HookFormExampleYup.tsx';

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    {/* <App /> */}
    <HookFormExampleYup />
  </QueryClientProvider>
);
