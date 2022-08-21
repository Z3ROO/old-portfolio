export default function Container({children, className, level, noPad}:{children?:any, className?: string, level?:number, noPad?:boolean}) {

  if (level == null)
    level = 0;

  const colorByLevel = [
    'bg-gradient-to-br dark:from-gray-600 dark:to-gray-750 from-gray-100 to-gray-250 outline outline-1 dark:outline-gray-700 outline-gray-200',
    'bg-gradient-to-br dark:from-gray-650 dark:to-gray-800 from-gray-200 to-gray-300 outline outline-1 dark:outline-gray-750 outline-gray-250',
    'bg-gradient-to-br dark:from-gray-700 dark:to-gray-800 from-gray-250 to-gray-350 outline outline-1 dark:outline-gray-800 outline-gray-300'
  ];

  return (
    <div className={`${colorByLevel[level]} ${noPad ? '' : 'p-6'} rounded-lg shadow-lg dark:shadow-[#0006] ${className?className:''}`}>
      {children}
    </div>
  )
}