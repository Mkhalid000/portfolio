import { notFound } from "next/navigation";
import jsonData from "@/json/data.json";
import ProjectPage from "./ProjectPage";

export function generateStaticParams() {
	return jsonData.Projects.map((project) => ({ slug: project.slug }));
}

export default async function Page({ params }) {
	const { slug } = await params;
	const project = jsonData.Projects.find((item) => item.slug === slug);
	if (!project) {
		notFound();
	}
	return <ProjectPage data={project} />;
}
