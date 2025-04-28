
export function LoadingState() {
  return (
    <div className="bg-[#1F1F1F] rounded-xl p-6 animate-pulse">
      <div className="h-8 w-48 bg-gray-800 rounded mb-6" />
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="flex items-center gap-4 mb-4">
          <div className="w-12 h-6 bg-gray-800 rounded" />
          <div className="w-12 h-12 bg-gray-800 rounded-full" />
          <div className="flex-1">
            <div className="h-5 w-32 bg-gray-800 rounded mb-2" />
            <div className="h-4 w-24 bg-gray-800 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}