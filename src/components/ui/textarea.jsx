export function Textarea({ className, ...props }) {
    return (
      <textarea
        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-300 min-h-[100px] ${className}`}
        {...props}
      />
    )
  }