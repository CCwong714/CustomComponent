import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ReactDOM from 'react-dom/client';
import ArrayFieldExample from './components/Foms/ReactHookForm/useFieldArray.tsx';
import './styles/global.css';

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    {/* <HookFormExampleYup /> */}
    <ArrayFieldExample />
    {/* <FormReuseHandle /> */}
    {/* <App /> */}
  </QueryClientProvider>
);
