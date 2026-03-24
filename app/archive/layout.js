// this is called parallel routes
// in which they defind by starting the folder name with "@"

// and in the layout file, by default next js will give all the parallel routes as props

// this is used for showing both pages together in one page
export default function ArchiveLayout({ archive, latest }) {
    return (
        <div>
            <h1>News Arhive</h1>
            <section id="archive-filter">{archive}</section>
            <section id="archive-latest">{latest}</section>
        </div>
    );
}
