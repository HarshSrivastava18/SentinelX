function SeverityBadge({ severity }) {
  const styles = {
    INFO: "bg-cyan-500/20 text-cyan-400",
    WARNING: "bg-yellow-500/20 text-yellow-400",
    CRITICAL: "bg-red-500/20 text-red-400",
  };

  return (
    <span
      className={`
        px-3
        py-1
        rounded-full
        text-xs
        font-semibold
        tracking-wide
        ${styles[severity] || "bg-slate-700 text-white"}
      `}
    >
      {severity}
    </span>
  );
}

export default SeverityBadge;