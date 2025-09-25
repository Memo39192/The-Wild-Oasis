import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createEditCabin } from '../../services/apiCapins';
import toast from 'react-hot-toast';

export function useCreateCabin(reset) {
  const queryClient = useQueryClient();

  const { mutate: createCabin, isPending: isCreating } = useMutation({
    mutationFn: createEditCabin,
    onSuccess() {
      toast.success('Cabin successfully created');
      queryClient.invalidateQueries({ queryKey: ['cabins'] });
      if (reset) reset();
    },
    onError(error) {
      toast.error(error.message);
    },
  });
  return { createCabin, isCreating };
}
