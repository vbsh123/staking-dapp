import HomeImage from "./home-image-section";
import HomeInfo from "./home-info-section";
import HomeSectionsSepereator from "./layout/home-section-seperator";

function HomePage() {

    return (
        <div className="flex h-full">
            <div className="w-1/2 h-full">
                <HomeInfo></HomeInfo>
            </div>
            <div className="h-full flex justify-center items-center">
                <HomeSectionsSepereator></HomeSectionsSepereator>
            </div>
            <div className="w-1/2 h-full flex">
                <HomeImage></HomeImage>
            </div>
        </div>
    )
}

export default HomePage;