import ExplanationCard from "./explanation-card";
import GithubLink from "./links/github-link";
import LinkedInLink from "./links/linkedin-link";

function HomeExplanation() {
    
    return (
        <div className="flex flex-col justify-center w-full h-full">
            <div className="h-1/2">
            <ExplanationCard></ExplanationCard>
            </div>
            <div className="flex flex-row">
            <div className="pl-16">
            <LinkedInLink></LinkedInLink>
            </div>
            <div className="pl-16">
            <GithubLink></GithubLink>
            </div>
            </div>
        </div>
    )
}

export default HomeExplanation;