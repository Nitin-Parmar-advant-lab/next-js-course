import "../globals.css";

// (content) this is called route groups, and it has not impact in website and routing
// but it is for grouing things perfectly, like for main page (here marketing route group) we have seprate layout and page file
// and for main content we have seprate layout file and both are seprate and does not effects choild routes at all

export const metadata = {
    title: "Next.js Page Routing & Rendering",
    description: "Learn how to route to different pages.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}

/*
import "./globals.css";
import MainHeader from "@/components/main-header";

export const metadata = {
    title: "Next.js Page Routing & Rendering",
    description: "Learn how to route to different pages.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <div id="page">
                    <MainHeader />
                    {children}
                </div>
            </body>
        </html>
    );
}
*/
