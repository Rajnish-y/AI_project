import { http, HttpResponse } from "msw";

const organData = {
  heart: { name: "Heart", img: "/images/heart.png", desc: "Pumps blood through the body." },
  lung: { name: "Lung", img: "/images/lung.png", desc: "Responsible for breathing." },
  brain: { name: "Brain", img: "/images/brain.png", desc: "Controls all body functions." },
  stomach: { name: "Stomach", img: "/images/stomach.png", desc: "Helps digest food." },
  knee: { name: "Knee", img: "/images/knee.png", desc: "Enables leg movement." },
};

const symptomMap = {
  chestpain: "heart",
  cough: "lung",
  headache: "brain",
  stomachache: "stomach",
  knee: "knee",
};

export const handlers = [
  // ✅ Organ info API
  http.get("/api/organ/:name", ({ params }) => {
    const organKey = params.name.toLowerCase();
    return HttpResponse.json(organData[organKey] || { name: "Unknown", desc: "No data", img: "" });
  }),

  // ✅ Symptom detection API
  http.post("/api/symptom", async ({ request }) => {
    const body = await request.json();
    const sym = body.symptom?.toLowerCase() || "";
    const organKey = symptomMap[sym] || "unknown";
    return HttpResponse.json({ organ: organData[organKey]?.name || "Unknown" });
  }),
];
