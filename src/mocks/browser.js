// ✅ Use new MSW v2 import
import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";

// ✅ Create and export the worker
export const worker = setupWorker(...handlers);
