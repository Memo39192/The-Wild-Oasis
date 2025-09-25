import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { createEditCabin } from '../../services/apiCapins';

export function useUpdateCabin(reset) {
  const queryClient = useQueryClient();

  const { mutate: updateCabin, isPending: isUpdating } = useMutation({
    mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
    onSuccess() {
      toast.success('Cabin successfully edited');
      queryClient.invalidateQueries({ queryKey: ['cabins'] });
      reset({
        name: '',
        maxCapacity: '',
        regularPrice: '',
        discount: 0,
        image: '',
        description: '',
      });
    },
    onError(error) {
      toast.error(error.message);
    },
  });
  return { updateCabin, isUpdating };
}
