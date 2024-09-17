import { Button } from '@/components/ui/button'
import React from 'react'

function Dashboard() {
  return (
    <div>
      <div className='flex justify-between items-center'>
        <Button>Resume Builder</Button>
        <Button>Resume Reader</Button>
        <Button>Content Generator</Button>
      </div>
    </div>
  )
}

export default Dashboard