import { Button } from '@/components/ui/button'
import { CirclePlus } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Button size='lg' className='bg-blue-500 text-white hover:bg-blue-600 rounded-full'>
        <CirclePlus /> Click me
      </Button>
    </div>
  );
}

export default page