'use client'
import {  useRouter, useSearchParams } from 'next/navigation';
import React, { useCallback } from 'react'
import { IconType } from 'react-icons'
import qs from 'query-string';

type Props = {
    label: string;
    icon: IconType;
    selected?: boolean;
}

const CategoryBox = ({label, icon: Icon, selected}: Props) => {
    const router = useRouter();
    const params = useSearchParams();

    const handleClick = useCallback(() => {
        // define an empty query
        let currentQuery = {};

        // look through the current params, and parse them to an object from a string.
        if (params){
            currentQuery = qs.parse(params.toString());
        }

        // update the  category from the current query with a spread operator.
        const updatedQuery: any = {
            ...currentQuery,
            category: label
        }

        // check if the category is already selected, if so remove it from the updatedQuery object.
        if(params?.get('category') === label){
            delete updatedQuery.category;
        }

        // Generate the url string using qs.stringifyUrl and pass a pathname which is a "/" and pass the new query.
        const url = qs.stringifyUrl({
            url: '/',
            query: updatedQuery
        }, {skipNull: true})

        router.push(url)
    },[label, params, router])

  return (
    <div
    onClick={handleClick}
    className={`
    flex flex-col items-center justify-center
    gap-2 p-3 border-b-2 hover:text-neutral-800
    transition cursor-pointer
    ${selected ? 'border-b-neutral-800' : 'border-transparent'}
    ${selected ? 'text-neutral-800' : 'text-neutral-500'}
    `}
    >
        <Icon size={26}/>
        <div className="font-medium text-sm">
            {label}
        </div>
    </div>
  )
}

export default CategoryBox