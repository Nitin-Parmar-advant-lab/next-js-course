import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

// Intercepting route:
// intercepting route is an alternative route which sometimes gets activated depending on wheather you are navigating to it
// through an internal link from within the page
// if we're in that single page application mode and navigating around on the page or coming from external link or manually enter the URL or you reloaded the page
// so that for the same path, diffrent pages are shown depending on how you got there

// in simple, it intersept an internal navigation request and instead of showing the page you would see if you would reaload the page or come to the page from outside the website a diffrent page will be shown

export default function InterceptedImagePage({ params }) {
    const newsSlug = params.slug;
    const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsSlug);

    if (!newsItem) {
        notFound();
    }
    /*
    return (
        <>
            // this below h2 text only visible when click the image, after clicking if reloaded the page then also it will disspareas 
            <h2>Intercepted!</h2>
            <div className="fullscreen-image">
                <img
                    src={`/images/news/${newsItem.image}`}
                    alt={newsItem.title}
                />
            </div>
        </>
    );
    */

    return (
        <>
            <div className="modal-backdrop"></div>
            <dialog className="modal" open>
                <div className="fullscreen-image">
                    <img
                        src={`/images/news/${newsItem.image}`}
                        alt={newsItem.title}
                    />
                </div>
            </dialog>
        </>
    );
}
