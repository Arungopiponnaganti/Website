import FreeAIDataAuditPage from "@/app/Components/FreeAIDataAudit/FreeAIDataAuditPage";
import "@/app/assets/custom-dev.css";
import "@/app/assets/ai-readiness-assessment.css";
import { getPageMetadata } from "@/utils/seo";

export const metadata = getPageMetadata("/free-ai-data-audit");

export default function Page() {
  return <FreeAIDataAuditPage />;
}
