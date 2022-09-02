export default function OutlineText({text, className, fontFamily}: {text:string, className:string, fontFamily:string}) {
  return (
    <svg className={className} x="0px" y="36px" width="max-content" height='min-content'>
      <text transform="matrix(1 0 0 1 28.6582 101)" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fontFamily={fontFamily}>{text}</text>
    </svg>
  )
}