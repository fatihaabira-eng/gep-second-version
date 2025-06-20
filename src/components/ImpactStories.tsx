import { ExternalLink } from "lucide-react";
import StoryCard from "./StoryCard";

export const ImpactStories = () => {

    const stories = [
        { id: 1, title: "Impact Story 1", excerpt: "this will link externally to different websites and partner websites...", link: "#" },
        { id: 2, title: "Impact Story 2", excerpt: "this will link externally to different websites and partner websites...", link: "#" },
        { id: 3, title: "Impact Story 3", excerpt: "this will link externally to different websites and partner websites...", link: "#" },
     ];
    return (
        <div className="max-w-6xl mx-auto mt-12 py-8">
                <h2 className="text-3xl md:text-2xl font-bold mb-4 text-center text-[#004b45]">Impact Stories</h2>
        
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {stories.map(story => (
                        // Assumes you have a StoryCard component that takes story data as props
                        <StoryCard key={story.id} title={story.title} excerpt={story.excerpt} link={story.link} />
                    ))}
                </div>
                <div className="text-center mt-6">
                    <a
                        href="#all-stories" // Replace with the actual link to all stories page
                        className="inline-flex items-center text-sm text-[#0f7378] hover:underline"
                    >
                        View all impact stories <ExternalLink className="ml-1" size={14} />
                    </a>
                </div>
            </div>
    )
}