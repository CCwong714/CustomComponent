import ReactDOM from 'react-dom/client';
import './styles/global.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import HookFormExampleYup from './components/Foms/HookFormExampleYup.tsx';
import FormReuseHandle from './components/Foms/FormReuseHandle.tsx';
import ArrayFieldExample from './components/Foms/ReactHookForm/useFieldArray.tsx';

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    {/* <HookFormExampleYup /> */}
    <ArrayFieldExample />
    {/* <FormReuseHandle /> */}
  </QueryClientProvider>
);
