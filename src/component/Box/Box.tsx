import React, { useMemo } from 'react'

export type BoxProps = React.HTMLProps<HTMLDivElement> & {
  rotate?: number
}

export default function Box({ rotate, ...props }: BoxProps) {
  const [ mainRotate, bgRotate ] = useMemo(() => {
    const rotation = `rotate-${Math.abs(rotate || 0)}`
    return rotate > 0 ? [ `-${rotation}`, rotation ] : [ rotation, `-${rotation}` ]
  }, [ rotate || 0 ])

  return <div className="relative mx-auto md:w-2/3 sm:w-full">
    <div className={`absolute w-full h-full p-4 transform translate-x-2 bg-gray-200 rounded-xl m:p-6 md:p-8 ${bgRotate}`}></div>
    <div {...props} className={`relative rounded-xl ${mainRotate} ${props.className || ''}`}>
      <div className={`transform ${bgRotate}`}>
        {props.children}
      </div>
    </div>
  </div>
}