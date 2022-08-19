export default function Container({children, className, level}:{children?:any, className?: string, level?:number}) {

  if (level == null)
    level = 0;

  const colorByLevel = [
    'bg-gradient-to-br dark:from-gray-600 dark:to-gray-750 from-gray-100 to-gray-250 border dark:border-gray-700 border-gray-200',
    'bg-gradient-to-br dark:from-gray-650 dark:to-gray-800 from-gray-200 to-gray-300 border dark:border-gray-750 border-gray-250',
    'bg-gradient-to-br dark:from-gray-700 dark:to-gray-800 from-gray-250 to-gray-350 border dark:border-gray-800 border-gray-300'
  ]

  return (
    <div className={`${colorByLevel[level]} p-6 rounded-lg shadow-lg dark:shadow-[#0006] ${className?className:''}`}>
      {children}
    </div>
  )
}