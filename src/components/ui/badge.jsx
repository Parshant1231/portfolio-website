export function Badge({ className, children, ...props }) {
    return (
      <span
        className={`inline-block px-2 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-800 ${className}`}
        {...props}
      >
        {children}
      </span>
    )
  }