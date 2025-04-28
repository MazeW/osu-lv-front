interface ErrorStateProps {
    message: string;
  }
  
  export function ErrorState({ message }: ErrorStateProps) {
    return (
      <div className="bg-[#1F1F1F] rounded-xl p-6 text-center">
        <div className="text-red-400 mb-2">Failed to load rankings</div>
        <div className="text-gray-400 text-sm">{message}</div>
      </div>
    );
  }