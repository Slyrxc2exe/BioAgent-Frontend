export function Card({ className = "", children }) {
  return (
    <div className={`rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ className = "", children }) {
  return (
    <div className={`p-6 border-b border-white/10 ${className}`}>
      {children}
    </div>
  );
}

export function CardTitle({ className = "", children }) {
  return (
    <h2 className={`text-2xl font-bold text-white ${className}`}>
      {children}
    </h2>
  );
}

export function CardDescription({ className = "", children }) {
  return (
    <p className={`text-slate-400 ${className}`}>
      {children}
    </p>
  );
}

export function CardContent({ className = "", children }) {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
}
