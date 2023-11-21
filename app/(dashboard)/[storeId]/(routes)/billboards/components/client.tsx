"use client";
import { Plus } from 'lucide-react'
import { useParams, useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button'
import { Heading } from '@/components/ui/heading'
import { Billboard } from '@prisma/client';

interface BillboardClientProps {
  data: Billboard[]
}
export const BillboardClient: React.FC<BillboardClientProps> = ({
  data
}) => {
    const router = useRouter();
    const params = useParams();
  return (
    <>
      <div className='flex items-center justify-between'>
        <Heading title={`Billbaords (${data.length})`} description="Manage billboards" />
        <Button onClick={() => router.push(`/${params.storeId}/billboards/new`)}>
            <Plus className="mr-2 w-4 h-4" />
            Add New
        </Button>
      </div>
    </>
    
  )
}
