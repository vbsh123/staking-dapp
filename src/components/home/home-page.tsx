import HomeExplanation from "./explanation/explanation-section";
import HomeHeadline from "./headline/headline-section";
import HomeSectionsSepereator from "./layout/section-seperator";

function HomePage() {

    return (
        <div className="flex h-full">
            <div className="w-1/2 h-full">
                <HomeHeadline></HomeHeadline>
            </div>
            <div className="h-full w-1/6 flex justify-center items-center">
                <HomeSectionsSepereator></HomeSectionsSepereator>
            </div>
            <div className="w-1/2 h-full flex">
                <HomeExplanation></HomeExplanation>
            </div>
        </div>
    )
}

export default HomePage;