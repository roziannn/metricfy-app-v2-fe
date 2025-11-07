import { notFound } from "next/navigation";
import { CourseDetail } from "./course-detail";
import { listCourses } from "@/data/courses/courses";

export default async function CourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = listCourses.find((c) => c.slug === slug);

  if (!course) return notFound();

  return <CourseDetail course={course} />;
}
