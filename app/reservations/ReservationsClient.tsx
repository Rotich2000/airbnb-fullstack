'use client'

import { toast } from 'react-hot-toast';
import axios from 'axios';
import { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';

import { SafeUser, safeReservation } from '../types'

import Container from '../components/Container';
import Heading from '../components/Heading';
import ListingCard from '../components/listings/ListingCard';

type Props = {
    reservations: safeReservation[];
    currentUser?: SafeUser | null;
}

const ReservationsClient = ({currentUser, reservations}: Props) => {
  const router = useRouter()
  const [deletingId, setDeletingId] = useState('');

  const onCancel = useCallback((id: string) => {
    setDeletingId(id);

    axios.delete(`/api/reservation/${id}`)
    .then(() => {
      toast.success('Reservation Cancelled.')
      router.refresh();
    }).catch((error) => {
      toast.error('Something went wrong');
    }).finally(() => {
      setDeletingId('');
    })
  },[router])
  return (
    <Container>
        <Heading
        title='Reservations'
        subtitle='Bookings on your properties.'
        center
        />
        <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
          {reservations.map((reservation) => (
            <ListingCard
            key={reservation.id}
            data={reservation.listing}
            reservation={reservation}
            actionId={reservation.id}
            onAction={onCancel}
            disabled={deletingId === reservation.id}
            actionLabel='Cancel guest reservation'
            currentUser={currentUser}
            />
          ))}
        </div>
    </Container>
  )
}

export default ReservationsClient