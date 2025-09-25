import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import { getBooking } from '../../services/apiBookings';

export function useBooking() {
  const { bookingId } = useParams();

  const { data: booking, isPending } = useQuery({
    queryKey: ['booking', bookingId],
    queryFn: () => getBooking(bookingId),
  });
  return { booking, isPending };
}
