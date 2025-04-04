export function Card({ className, children, ...props }) {
    return (
      <div className={`bg-white rounded-lg shadow-md p-6 ${className}`} {...props}>
        {children}
      </div>
    )
  }
  
  export function CardHeader({ className, children, ...props }) {
    return (
      <div className={`mb-4 ${className}`} {...props}>
        {children}
      </div>
    )
  }
  
  export function CardTitle({ className, children, ...props }) {
    return (
      <h3 className={`text-xl font-bold mb-2 ${className}`} {...props}>
        {children}
      </h3>
    )
  }
  
  export function CardDescription({ className, children, ...props }) {
    return (
      <p className={`text-gray-600 ${className}`} {...props}>
        {children}
      </p>
    )
  }
  
  export function CardContent({ className, children, ...props }) {
    return (
      <div className={`${className}`} {...props}>
        {children}
      </div>
    )
  }
  
  export function CardFooter({ className, children, ...props }) {
    return (
      <div className={`mt-4 pt-4 border-t border-gray-200 ${className}`} {...props}>
        {children}
      </div>
    )
  }