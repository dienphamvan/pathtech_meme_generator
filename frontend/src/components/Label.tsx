type CommonLabelProps = {
  children?: React.ReactNode
  className?: string
}

const CommonLabel = ({ children, className }: CommonLabelProps) => {
  return (
    <label className={`w-24 text-right mr-2 ${className}`}>{children}</label>
  )
}

export default CommonLabel
