export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900"></div>
      <div
        className="absolute -top-24 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] rounded-full blur-3xl opacity-20"
        style={{
          background: 'radial-gradient(50% 50% at 50% 50%, rgba(99,102,241,0.35) 0%, rgba(15,23,42,0) 60%)'
        }}
      ></div>
    </div>
  );
}

