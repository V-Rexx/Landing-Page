import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { answers } = await req.json();

  const correctAnswers: Record<string, string> = {
    "1": "Greedy Algorithm",
    "2": "O(log n)",
    "3": "Queue",
    "4": "Merge Sort",
    "5": "O(V + E)",
  };

  let score = 0;
  for (const [id, ans] of Object.entries(answers)) {
    if (correctAnswers[id] === ans) score += 20;
  }

  // TODO: Store score in DB for team leader
  return NextResponse.json({ score });
}
