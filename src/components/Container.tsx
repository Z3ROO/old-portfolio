export default function Container({children, className}:any) {
  return (
    <div className={"p-6 bg-gradient-to-br dark:from-gray-600 dark:to-gray-750 from-gray-100 to-gray-250 rounded-lg shadow-lg dark:shadow-[#0006] dark:border-gray-750 border-gray-200 border "+(className?className:'')}>
      {children}
    </div>
  )
}