export default function OutlineText({text, className, fontFamily}: any) {
  return (
    <svg className={className} version="1.1" id="Camada_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="36px" width="max-content" height='min-content'>
      <text transform="matrix(1 0 0 1 28.6582 101)" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fontFamily={fontFamily}>{text}</text>
    </svg>
  )
}