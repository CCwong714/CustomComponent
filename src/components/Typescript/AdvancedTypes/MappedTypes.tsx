import { useQuery } from '@tanstack/react-query';
import { getApi } from '../../../api/api';

// const apiUrl = 'http://worldtimeapi.org/api/timezone/Asia/Kuala_Lumpur';
export const apiUrl = 'https://pokeapi.co/api/v2/pokemon/ditto';

export type TApiType<T> = {
  [P in keyof T]: T[P];
};

// const [demo, setDemo] = useState<TApiType<unknown>>();

// query get api
// export const { data } = useQuery<TApiType<unknown>[]>({
//   queryKey: ['repoData'],
//   queryFn: () => fetch(apiUrl).then((res) => res.json()),
// });
const { data } = useQuery<TApiType<unknown>[]>({
  queryKey: ['getApi'],
  queryFn: () => getApi(),
  select: (data) => {
    return data?.map((item) => ({ ...item, name: undefined }));
  },
});
console.log(data);

//- axios get api

// useEffect(() => {
//   axios
//     .get(apiUrl)
//     .then(function (response) {
//       // Handle the successful response here
//       setDemo(Object.freeze(response.data));

//     })
//     .catch(function (error) {
//       // Handle any errors that occurred during the request
//       console.error('Error:', error);
//     });
// }, []);
