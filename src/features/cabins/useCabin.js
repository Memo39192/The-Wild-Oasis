import { useQuery } from '@tanstack/react-query';
import { getCabins } from '../../services/apiCapins';

export function useCabin() {
  const { data: cabins, isPending } = useQuery({
    queryKey: ['cabins'],
    queryFn: getCabins,
  });
  return { cabins, isPending };
}
