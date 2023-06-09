'use client'

import { IconType } from 'react-icons';
import dynamic from 'next/dynamic';

import { SafeUser } from '@/app/types';
import useCountries from '@/app/hooks/useCountry';
import Avatar from '../Avatar';
import ListingCategory from './ListingCategory';

const Map = dynamic(() => import('../Map'), {ssr: false})

type Props = {
    user: SafeUser;
    category: {
        icon: IconType;
        label: string;
        description: string;
    } | undefined;
    description: string;
    roomCount: number;
    guestCount: number;
    bathroomCount: number;
    locationValue: string;
}

const ListingInfo = ({user, category, description, roomCount, guestCount, bathroomCount, locationValue}: Props) => {

    const {getByValue} = useCountries();
    const coordinates = getByValue(locationValue)?.latlng;
  return (
    <div className='col-span-4 flex flex-col gap-8'>
        <div className="flex flex-col gap-2">
            <div className='text-xl font-semibold flex items-center gap-2'>
                <p>Hosted by {user?.name}</p>
                <Avatar src={user?.image}/>
            </div>
            <div className='flex items-center gap-4 font-light text-neutral-500'>
                <p>{guestCount} guests</p>
                <p>{roomCount} rooms</p>
                <p>{bathroomCount} bathrooms</p>
            </div>
        </div>
        <hr />
        {category && (
            <ListingCategory
            icon={category.icon}
            label={category.label}
            description={category.description}
            />
        )}
        <hr />
        <div className="text-lg font-light text-neutral-500">
            {description}
        </div>
        <hr />
        <Map center={coordinates}/>
    </div>
  )
}

export default ListingInfo