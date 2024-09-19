import React from 'react'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'


function CreateNewContent() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-10 p-5'>
        {/* {FormSection} */}
        <FormSection/>

        {/* {OutputSection} */}
        <OutputSection/>
    </div>
  )
}

export default CreateNewContent