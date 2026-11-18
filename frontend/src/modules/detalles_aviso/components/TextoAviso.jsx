import React from 'react'
import { Card,CardContent } from '@/components/ui/card'
export const TextoAviso = ({msg}) => {
    return (
        <Card>
            <CardContent>
                <div dangerouslySetInnerHTML={{__html:msg}}/>

            </CardContent>
        </Card>
        // <div className="bg-[#F4F4F5] p-5 rounded border border-gray-200 text-gray-700 space-y-3 leading-relaxed text-[#4A4A4A]">

        // </div>
    )
}

export default TextoAviso