import { NextResponse } from "next/server";

export async function GET() {
  const questions = [
    {
      _id: "1",
      question: "Which algorithm design technique is used in Prim’s MST?",
      options: ["Dynamic Programming", "Greedy Algorithm", "Backtracking", "Divide and Conquer"],
      answer: "Greedy Algorithm",
    },
    {
      _id: "2",
      question: "Time complexity of binary search is:",
      options: ["O(n)", "O(n log n)", "O(log n)", "O(1)"],
      answer: "O(log n)",
    },
    {
      _id: "3",
      question: "Which data structure is used for BFS?",
      options: ["Stack", "Queue", "Linked List", "Tree"],
      answer: "Queue",
    },
    {
      _id: "4",
      question: "Which sorting algorithm is stable?",
      options: ["Quick Sort", "Merge Sort", "Heap Sort", "Selection Sort"],
      answer: "Merge Sort",
    },
    {
      _id: "5",
      question: "In a graph with V vertices and E edges, DFS runs in:",
      options: ["O(V)", "O(E)", "O(V + E)", "O(V²)"],
      answer: "O(V + E)",
    },
  ];
  return NextResponse.json({ questions });
}
