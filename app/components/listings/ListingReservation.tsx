'use client'
import React from 'react'
import { Range } from 'react-date-range';
import Calender from '../inputs/Calender';
import Button from '../Button';

type Props = {
    price: number;
    dateRange: Range;
    totalPrice: number;
    onChangeDate: (value: Range) => void;
    onSubmit: () => void;
    disabled?: boolean;
    disabledDates: Date[];
}

const ListingReservation = ({price, dateRange, totalPrice, onChangeDate, onSubmit, disabled, disabledDates}: Props) => {
  return (
    <div className='bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden'>
        <div className="flex items-center gap-1 p-4">
            <div className="text-2xl font-semibold">${price}</div>
            <div className="font-light text-neutral-600">night</div>
        </div>
        <hr />
        <Calender
        value={dateRange}
        disabledDates={disabledDates}
        onChange = {(value) => onChangeDate(value.selection)}
        />
        <hr />
        <div className="p-4">
            <Button
            disabled={disabled}
            label='Reserve'
            onClick={onSubmit}
            />
        </div>
        <div className="p-4 flex items-center justify-between font-semibold text-lg">
            <h1>Total</h1>
            <p>$ {totalPrice}</p>
        </div>
    </div>
  )
}

export default ListingReservation