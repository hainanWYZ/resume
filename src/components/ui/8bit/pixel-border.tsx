const PixelBorder = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-50 p-4">
      {/* Border Lines */}
      <div className="absolute top-0 left-4 right-4 h-1 border-t-4 border-white" />
      <div className="absolute bottom-0 left-4 right-4 h-1 border-b-4 border-white" />
      <div className="absolute left-0 top-4 bottom-4 w-1 border-l-4 border-white" />
      <div className="absolute right-0 top-4 bottom-4 w-1 border-r-4 border-white" />

      {/* Rose & Vine Corners */}
      <div className="absolute top-0 left-0 w-12 h-12">
        <svg viewBox="0 0 16 16" className="w-full h-full text-white">
          <path
            d="M4 12 L4 8 L8 8 L8 4 L12 4"
            stroke="white"
            strokeWidth="1"
            fill="none"
          />
          <path d="M12 12 Q14 14 16 12 Q14 10 12 12" fill="white" />
        </svg>
      </div>
      <div className="absolute top-0 right-0 w-12 h-12 rotate-90">
        <svg viewBox="0 0 16 16" className="w-full h-full text-white">
          <path
            d="M4 12 L4 8 L8 8 L8 4 L12 4"
            stroke="white"
            strokeWidth="1"
            fill="none"
          />
          <path d="M12 12 Q14 14 16 12 Q14 10 12 12" fill="white" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-12 h-12 -rotate-90">
        <svg viewBox="0 0 16 16" className="w-full h-full text-white">
          <path
            d="M4 12 L4 8 L8 8 L8 4 L12 4"
            stroke="white"
            strokeWidth="1"
            fill="none"
          />
          <path d="M12 12 Q14 14 16 12 Q14 10 12 12" fill="white" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-12 h-12 rotate-180">
        <svg viewBox="0 0 16 16" className="w-full h-full text-white">
          <path
            d="M4 12 L4 8 L8 8 L8 4 L12 4"
            stroke="white"
            strokeWidth="1"
            fill="none"
          />
          <path d="M12 12 Q14 14 16 12 Q14 10 12 12" fill="white" />
        </svg>
      </div>
    </div>
  );
};

export default PixelBorder;
