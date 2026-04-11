import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";

export const BacktoHomeButton = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-12 mx-12">
      <button
        onClick={() => navigate("/")}
        className="inline-flex items-center gap-2 rounded-full border border-subtle bg-surface px-4 py-2 text-sm font-semibold text-fg hover:bg-purple-600/10 mb-8"
      >
        <ArrowLeft size={16} />
        Back to Home
      </button>
    </div>
  );
};
